import { prisma } from "@/lib/prisma";
import { EventsManager } from "@/components/admin/EventsManager";
import { Calendar } from "lucide-react";

export const dynamic = 'force-dynamic';

export default async function AdminEventsPage() {
  const events = await prisma.event.findMany({
    orderBy: { date: 'asc' }
  });

  return (
    <div className="space-y-6">
       <div>
         <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
           <Calendar className="text-amber-600" /> Manage Events
         </h1>
         <p className="text-slate-500 mt-1">Create, update, and remove upcoming events.</p>
       </div>

       <EventsManager initialEvents={events} />
    </div>
  );
}
