import { prisma } from "@/lib/prisma";
import { EventCard } from "@/components/events/EventCard";
import { Navbar } from "@/components/layout/Navbar";

export const dynamic = 'force-dynamic';

export default async function EventsPage() {
  // Simple seed mechanism for demo
  const count = await prisma.event.count();
  if (count === 0) {
    await prisma.event.createMany({
        data: [
            {
                title: "USA Education Fair 2025",
                date: new Date('2025-05-15'),
                location: "Hyderabad, Taj Deccan",
                description: "Meet delegates from over 50+ Top US Universities. On-spot profile evaluation and scholarship assessment.",
                registeredCount: 124
            },
            {
                title: "UK & Europe Admission Day",
                date: new Date('2025-06-02'),
                location: "Vijayawada Branch",
                description: "Complete guidance on UK September intake. Learn about post-study work rights and visa changes.",
                registeredCount: 85
            },
            {
                title: "IELTS & GRE Masterclass",
                date: new Date('2025-05-20'),
                location: "Online (Zoom)",
                description: "Free webianr by ex-examiners on how to score Band 8+ in IELTS and 320+ in GRE.",
                registeredCount: 450
            }
        ]
    });
  }

  const events = await prisma.event.findMany({
    orderBy: { date: 'asc' },
  });

  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      
      {/* Header */}
      <div className="bg-slate-900 text-white pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-4">Upcoming Events</h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Join our education fairs, webinars, and workshops to kickstart your global career journey.
            </p>
        </div>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-4 py-16">
        {events.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
                <EventCard key={event.id} event={event} />
            ))}
            </div>
        ) : (
            <div className="text-center text-slate-500 py-20">
                <p>No upcoming events at the moment.</p>
            </div>
        )}
      </div>
    </main>
  );
}
