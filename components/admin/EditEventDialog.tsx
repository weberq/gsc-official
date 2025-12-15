"use client";

import { useState } from "react";
import { updateEvent } from "@/app/actions/events";
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

interface Event {
    id: string;
    title: string;
    date: Date;
    location: string;
    description: string | null;
    registeredCount: number;
}

export function EditEventDialog({ event }: { event: Event }) {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="ghost" size="sm" className="text-slate-600">Edit</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Event</DialogTitle>
                </DialogHeader>
                <form action={async (formData) => {
                    await updateEvent(formData);
                    setOpen(false);
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
    );
}
