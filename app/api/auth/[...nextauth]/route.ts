import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "admin@gsc.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // For Demo purposes, we can hardcode or check DB
        // Let's check DB, but if empty, allow a default
        if (!credentials?.email || !credentials?.password) return null;

        try {
            const user = await prisma.adminUser.findUnique({
              where: { email: credentials.email }
            });

            if (user && user.password === credentials.password) {
                return { id: user.id, email: user.email, name: user.name };
            }
        } catch (error) {
            console.error("Database connection failed, falling back to static admin for demo", error);
        }

        // FALLBACK FOR NETLIFY DEMO (If DB is empty/missing/read-only)
        if (credentials.email === "admin@gsc.com" && credentials.password === "admin123") {
             return { id: "demo-admin", email: "admin@gsc.com", name: "Super Admin (Demo)" };
        }

        return null;
      }
    })
  ],
  session: {
      strategy: "jwt",
  },
  pages: {
      signIn: "/admin/login",
  },
  callbacks: {
    async session({ session, token }) {
      return session;
    },
    async jwt({ token, user }) {
      return token;
    }
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
