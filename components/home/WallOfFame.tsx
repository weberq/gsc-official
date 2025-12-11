"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin } from "lucide-react";
import Image from "next/image";

// Placeholder data - In real app, fetch from Prisma SuccessStory model
const SUCCESS_STORIES = [
  { id: 1, name: "Rahul S.", uni: "Arizona State Univ.", country: "USA", img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&h=200&fit=crop" },
  { id: 2, name: "Priya M.", uni: "University of Leeds", country: "UK", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" },
  { id: 3, name: "Amit K.", uni: "Univ. of Melbourne", country: "Australia", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" },
  { id: 4, name: "Sneha R.", uni: "University of Toronto", country: "Canada", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop" },
  { id: 5, name: "Vikram J.", uni: "TU Munich", country: "Germany", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop" },
];

export function WallOfFame() {
  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="container px-4 md:px-6 mb-10 text-center">
         <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
           Our Wall of <span className="text-amber-500">Fame</span> 🏆
         </h2>
         <p className="text-slate-600 max-w-2xl mx-auto">
           Join hundreds of students who have realized their dream of studying abroad with our expert guidance.
         </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />
        
        <Marquee gradient={false} speed={40} pauseOnHover>
          {SUCCESS_STORIES.map((story) => (
            <div key={story.id} className="mx-4 py-4">
              <Card className="w-[300px] border-none shadow-md hover:shadow-xl transition-shadow duration-300 bg-white group">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-amber-100 group-hover:border-amber-400 transition-colors">
                    <Image 
                      src={story.img} 
                      alt={story.name} 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-bold text-slate-900">{story.name}</h3>
                    <div className="flex items-center gap-1 text-xs text-slate-500 mb-1">
                      <GraduationCap className="w-3 h-3" />
                      <span className="truncate max-w-[150px]">{story.uni}</span>
                    </div>
                    <Badge variant="secondary" className="w-fit text-[10px] bg-blue-50 text-blue-800 hover:bg-blue-100 flex items-center gap-1">
                      <MapPin className="w-2 h-2" /> {story.country}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
