import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";
import { LayoutDashboard, Users, Calendar, Settings, LogOut } from "lucide-react";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-slate-50 flex">
       {/* Sidebar */}
       <aside className="w-64 bg-[#0F172A] text-slate-300 flex flex-col fixed h-full shadow-2xl z-50">
          <div className="p-6 border-b border-slate-800 flex items-center gap-2">
             <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">G</div>
             <h2 className="text-xl font-black text-white tracking-wide">ADMIN</h2>
          </div>
          
          <nav className="flex-grow p-4 space-y-2">
             <NavLink href="/admin" icon={<LayoutDashboard size={20} />} label="Dashboard" />
             <NavLink href="/admin/leads" icon={<Users size={20} />} label="Leads" />
             <NavLink href="/admin/events" icon={<Calendar size={20} />} label="Events" />
             {/* <NavLink href="/admin/settings" icon={<Settings size={20} />} label="Settings" /> */}
          </nav>

          <div className="p-4 border-t border-slate-800 bg-slate-900/50">
             <div className="flex items-center gap-3 px-4 py-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold shadow-lg">
                   {session.user?.name?.[0] || "A"}
                </div>
                <div className="text-sm">
                   <p className="text-white font-medium">{session.user?.name || "Admin"}</p>
                   <p className="text-emerald-400 text-xs flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Online
                   </p>
                </div>
             </div>
          </div>
       </aside>

       {/* Main Content */}
       <main className="flex-1 ml-64 p-8">
          {children}
       </main>
    </div>
  );
}

function NavLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link href={href} className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
       {icon}
       <span className="font-medium">{label}</span>
    </Link>
  );
}
