"use client";

import { Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LeadForm } from "@/components/hero/LeadForm";

interface EventCardProps {
  event: {
    id: string;
    title: string;
    date: Date;
    location: string;
    description: string | null;
    registeredCount: number;
  };
}

export function EventCard({ event }: EventCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full group">
      {/* Date Badge */}
      <div className="flex items-start justify-between mb-4">
        <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-sm font-bold flex items-center gap-2">
            <Calendar size={16} />
            {new Date(event.date).toLocaleDateString(undefined, {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            })}
        </div>
        <div className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
            <Users size={12} /> {event.registeredCount} Registered
        </div>
      </div>

      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
        {event.title}
      </h3>
      
      <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
        <MapPin size={16} className="text-slate-400" />
        {event.location}
      </div>

      <p className="text-slate-600 text-sm mb-6 flex-grow line-clamp-3">
        {event.description || "Join us for this exclusive event regarding study abroad opportunities."}
      </p>

      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full bg-slate-900 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition-colors">
            Register Now
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Register for {event.title}</DialogTitle>
            <DialogDescription>
              Enter your details to reserve your spot.
            </DialogDescription>
          </DialogHeader>
          <LeadForm />
        </DialogContent>
      </Dialog>
    </div>
  );
}
