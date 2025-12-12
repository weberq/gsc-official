"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createEvent(formData: FormData) {
  const title = formData.get("title") as string;
  const dateStr = formData.get("date") as string;
  const location = formData.get("location") as string;
  const description = formData.get("description") as string;

  if (!title || !dateStr || !location) {
      return { error: "Missing required fields" };
  }

  await prisma.event.create({
    data: {
      title,
      date: new Date(dateStr),
      location,
      description,
      registeredCount: 0 // Default
    }
  });

  revalidatePath("/admin/events");
  revalidatePath("/events"); // Public page
  redirect("/admin/events");
}

export async function updateEvent(formData: FormData) {
  const id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const dateStr = formData.get("date") as string;
  const location = formData.get("location") as string;
  const description = formData.get("description") as string;

  if (!id || !title || !dateStr || !location) {
      return { error: "Missing required fields" };
  }

  await prisma.event.update({
    where: { id },
    data: {
      title,
      date: new Date(dateStr),
      location,
      description,
    }
  });

  revalidatePath("/admin/events");
  revalidatePath("/events");
  redirect("/admin/events");
}

export async function deleteEvent(id: string) {
    if (!id) return;

    await prisma.event.delete({
        where: { id }
    });

    revalidatePath("/admin/events");
    revalidatePath("/events");
}
