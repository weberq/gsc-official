"use client";

import { useState } from "react";
import { createEvent, deleteEvent, updateEvent } from "@/app/actions/events";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Calendar, MapPin, Trash2, Plus } from "lucide-react";

interface Event {
  id: string;
  title: string;
  date: Date;
  location: string;
  description: string | null;
  registeredCount: number;
}

export function EventsManager({ initialEvents }: { initialEvents: Event[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-6">
      {/* Action Bar */}
      <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
         <div>
            <h2 className="text-lg font-bold text-slate-900">All Events</h2>
            <p className="text-xs text-slate-500">{initialEvents.length} active events</p>
         </div>
         
         <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="bg-blue-600 hover:bg-blue-700">
                    <Plus size={16} className="mr-2" /> Add Event
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create New Event</DialogTitle>
                </DialogHeader>
                <form action={async (formData) => {
                    await createEvent(formData);
                    setOpen(false);
                }} className="space-y-4 py-4">
                    <div className="space-y-2">
                        <Label>Event Title</Label>
                        <Input name="title" required placeholder="e.g. USA Admission Fair" />
                    </div>
                    <div className="space-y-2">
                        <Label>Date</Label>
                        <Input name="date" type="datetime-local" required />
                    </div>
                    <div className="space-y-2">
                        <Label>Location</Label>
                        <Input name="location" required placeholder="e.g. Hyderabad Branch / Online" />
                    </div>
                    <div className="space-y-2">
                        <Label>Description</Label>
                        <Textarea name="description" placeholder="Event details..." />
                    </div>
                    <Button type="submit" className="w-full">Create Event</Button>
                </form>
            </DialogContent>
         </Dialog>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
         {initialEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 hover:shadow-md transition-shadow relative group">
                {/* Delete Action */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <form action={async () => {
                        if(confirm("Delete this event?")) {
                            await deleteEvent(event.id);
                        }
                    }}>
                        <Button size="icon" variant="destructive" className="h-8 w-8">
                            <Trash2 size={14} />
                        </Button>
                    </form>
                </div>

                <div className="flex flex-col h-full">
                    <div className="mb-4">
                        <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-md mb-2 inline-block">
                            {new Date(event.date).toLocaleDateString()}
                        </span>
                        <h3 className="font-bold text-slate-900 text-lg leading-tight">{event.title}</h3>
                    </div>
                    
                    <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                        <MapPin size={14} /> {event.location}
                    </div>
                    
                    <p className="text-slate-500 text-sm line-clamp-2 flex-grow">
                        {event.description}
                    </p>

                      <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between items-center">
                        <div className="text-xs font-semibold text-slate-400">
                             {event.registeredCount} Registrations
                        </div>
                        
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="ghost" size="sm" className="text-slate-600">Edit</Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Edit Event</DialogTitle>
                                </DialogHeader>
                                <form action={async (formData) => {
                                    await updateEvent(formData);
                                }} className="space-y-4 py-4">
                                    <input type="hidden" name="id" value={event.id} />
                                    <div className="space-y-2">
                                        <Label>Event Title</Label>
                                        <Input name="title" required defaultValue={event.title} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Date</Label>
                                        <Input name="date" type="datetime-local" required defaultValue={new Date(event.date).toISOString().slice(0, 16)} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Location</Label>
                                        <Input name="location" required defaultValue={event.location} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Description</Label>
                                        <Textarea name="description" defaultValue={event.description || ''} />
                                    </div>
                                    <Button type="submit" className="w-full">Update Event</Button>
                                </form>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            </div>
         ))}
      </div>
    </div>
  );
}
