import { prisma } from "@/lib/prisma";
import { Users, Search, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const dynamic = 'force-dynamic';

export default async function LeadsPage() {
  const leads = await prisma.lead.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="space-y-6">
       {/* Header */}
       <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
              <Users className="text-blue-600" /> Manage Leads
            </h1>
            <p className="text-slate-500 mt-1">View and contact students who requested a session.</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
                <Download size={16} /> Export CSV
            </Button>
          </div>
       </div>

       {/* Filters & Search */}
       <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex gap-4">
          <div className="relative flex-grow max-w-md">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
             <Input placeholder="Search students..." className="pl-10" />
          </div>
          {/* Add more filters here later */}
       </div>

       {/* Table */}
       <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
             <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-200">
                   <tr>
                      <th className="px-6 py-4">Student Name</th>
                      <th className="px-6 py-4">Phone Number</th>
                      <th className="px-6 py-4">City</th>
                      <th className="px-6 py-4">Submitted At</th>
                      <th className="px-6 py-4 text-right">Actions</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                   {leads.length > 0 ? leads.map((lead) => (
                      <tr key={lead.id} className="hover:bg-slate-50/80 transition-colors">
                         <td className="px-6 py-4 font-bold text-slate-900">
                            {lead.name}
                         </td>
                         <td className="px-6 py-4 font-mono text-slate-600">
                            {lead.phone}
                         </td>
                         <td className="px-6 py-4">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                               {lead.city}
                            </span>
                         </td>
                         <td className="px-6 py-4 text-slate-500">
                            {new Date(lead.createdAt).toLocaleString()}
                         </td>
                         <td className="px-6 py-4 text-right">
                            <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800 hover:bg-blue-50">
                               Details
                            </Button>
                         </td>
                      </tr>
                   )) : (
                      <tr>
                        <td colSpan={5} className="px-6 py-12 text-center text-slate-400">
                            <div className="flex flex-col items-center gap-2">
                                <Users size={32} className="opacity-20" />
                                <p>No leads found yet.</p>
                            </div>
                        </td>
                      </tr>
                   )}
                </tbody>
             </table>
          </div>
          
          {/* Pagination Footer (Static for now) */}
          <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 text-xs text-slate-500 flex justify-between items-center">
             <span>Showing {leads.length} results</span>
             <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled>Previous</Button>
                <Button variant="outline" size="sm" disabled>Next</Button>
             </div>
          </div>
       </div>
    </div>
  );
}
