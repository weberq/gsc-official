import { prisma } from "@/lib/prisma";
import { Users, Calendar, Trophy, TrendingUp } from "lucide-react";

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
  let leadCount = 0;
  let eventCount = 0;
  let successStoryCount = 0;
  let recentLeads: any[] = [];

  try {
    [leadCount, eventCount, successStoryCount] = await Promise.all([
        prisma.lead.count(),
        prisma.event.count(),
        prisma.successStory.count()
    ]);

    recentLeads = await prisma.lead.findMany({
        take: 5,
        orderBy: { createdAt: 'desc' }
    });
  } catch (error) {
    console.error("DB Error (Demo Mode Active):", error);
    // Mock Data for Demo
    leadCount = 128;
    eventCount = 8;
    successStoryCount = 12;
    recentLeads = [
        { id: '1', name: 'John Doe (Demo)', phone: '+91 98765 43210', city: 'Hyderabad', createdAt: new Date() },
        { id: '2', name: 'Jane Smith (Demo)', phone: '+91 91234 56789', city: 'Vijayawada', createdAt: new Date(Date.now() - 86400000) },
    ];
  }

  return (
    <div className="space-y-8">
       <div>
         <h1 className="text-3xl font-bold text-slate-900">Dashboard Overview</h1>
         <p className="text-slate-500">Welcome back, here's what's happening today.</p>
       </div>

       {/* Stats Grid */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="Total Leads" value={leadCount} icon={<Users className="text-blue-600" />} trend="+12% from last week" />
          <StatCard title="Active Events" value={eventCount} icon={<Calendar className="text-amber-600" />} trend="3 Upcoming" />
          <StatCard title="Success Stories" value={successStoryCount} icon={<Trophy className="text-green-600" />} trend="Updated yesterday" />
          <StatCard title="Conversion Rate" value="18%" icon={<TrendingUp className="text-purple-600" />} trend="+2.4% increase" />
       </div>

       {/* Recent Leads Table Preview */}
       <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
             <h3 className="font-bold text-slate-900">Recent Leads</h3>
             <button className="text-sm text-blue-600 font-medium hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
             <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                   <tr>
                      <th className="px-6 py-3">Name</th>
                      <th className="px-6 py-3">Phone</th>
                      <th className="px-6 py-3">City</th>
                      <th className="px-6 py-3">Date</th>
                      <th className="px-6 py-3">Status</th>
                   </tr>
                </thead>
                <tbody>
                   {recentLeads.length > 0 ? recentLeads.map((lead) => (
                      <tr key={lead.id} className="border-b border-slate-50 hover:bg-slate-50/50">
                         <td className="px-6 py-4 font-medium text-slate-900">{lead.name}</td>
                         <td className="px-6 py-4">{lead.phone}</td>
                         <td className="px-6 py-4">{lead.city}</td>
                         <td className="px-6 py-4">{new Date(lead.createdAt).toLocaleDateString()}</td>
                         <td className="px-6 py-4">
                            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-bold">New</span>
                         </td>
                      </tr>
                   )) : (
                      <tr>
                        <td colSpan={5} className="px-6 py-8 text-center text-slate-400">No leads yet.</td>
                      </tr>
                   )}
                </tbody>
             </table>
          </div>
       </div>
    </div>
  );
}

function StatCard({ title, value, icon, trend }: { title: string; value: string | number; icon: React.ReactNode; trend: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
       <div className="flex items-center justify-between mb-4">
          <h3 className="text-slate-500 font-medium text-sm">{title}</h3>
          <div className="p-2 bg-slate-50 rounded-lg">{icon}</div>
       </div>
       <div className="text-3xl font-black text-slate-900 mb-1">{value}</div>
       <div className="text-xs text-slate-400 font-medium">{trend}</div>
    </div>
  );
}
