"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock } from "lucide-react";
import Image from "next/image";

export default function AdminLogin() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      setError("Invalid credentials");
      setLoading(false);
    } else {
      router.push("/admin");
    }
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-slate-50">
       {/* Left: Branding */}
       <div className="hidden lg:flex flex-col justify-center items-center bg-blue-900 text-white p-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" 
               style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
          />
          <div className="relative z-10 text-center">
             <h1 className="text-6xl font-black mb-6">GSC Admin</h1>
             <p className="text-blue-200 text-xl max-w-md">
                Manage leads, events, and content for Global Studies Consultancy.
             </p>
          </div>
       </div>

       {/* Right: Login Form */}
       <div className="flex items-center justify-center p-6 sm:p-12">
          <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
             <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-900 mb-4">
                   <Lock size={20} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Sign in to dashboard</h2>
                <p className="text-slate-500 mt-2">Enter your admin credentials</p>
             </div>

             <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                   <Label htmlFor="email">Email</Label>
                   <Input id="email" name="email" type="email" placeholder="admin@gsc.com" required className="h-11" />
                </div>

                <div className="space-y-2">
                   <Label htmlFor="password">Password</Label>
                   <Input id="password" name="password" type="password" required className="h-11" />
                </div>

                {error && (
                   <div className="p-3 rounded-lg bg-red-50 text-red-600 text-sm font-medium border border-red-100">
                      {error}
                   </div>
                )}

                <Button type="submit" disabled={loading} className="w-full h-11 bg-blue-900 hover:bg-blue-800 text-white font-bold">
                   {loading ? "Signing in..." : "Sign In"}
                </Button>
             </form>
             
             <div className="text-center text-xs text-slate-400">
                Authorized personnel only.
             </div>
          </div>
       </div>
    </div>
  );
}
