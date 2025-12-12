"use client";

import { Globe3D } from "./Globe3D";
import { LeadForm } from "./LeadForm";
import { UniversityLogos } from "./UniversityLogos";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Users, Trophy, ArrowRight, Sparkles } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col justify-center pt-24 pb-20">
      
      {/* 1. Background Grid & Texture */}
      <div className="absolute inset-0 z-0 opacity-[0.4]" 
           style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      
      <div className="absolute top-0 right-0 w-[50vw] h-[100vh] bg-indigo-50/50 skew-x-[-20deg] translate-x-[20%] z-0" />

      {/* 2. Giant Watermark Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03] z-0 select-none">
        <span className="text-[15vw] font-black text-slate-900 leading-none">DREAM BIG</span>
      </div>

      <div className="container px-4 md:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center flex-grow">
        
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col space-y-8 text-center lg:text-left pt-10 lg:pt-0">
           
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             className="flex flex-wrap justify-center lg:justify-start gap-3"
           >
              <span className="px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs tracking-wide uppercase border border-blue-200 flex items-center gap-2">
                <Trophy size={14} className="text-amber-500" /> #1 Consultancy in Hyderabad
              </span>
              <span className="px-4 py-1.5 rounded-full bg-amber-50 text-amber-800 font-bold text-xs tracking-wide uppercase border border-amber-200 flex items-center gap-2">
                <Users size={14} /> 5000+ Success Stories
              </span>
           </motion.div>

          <div className="relative">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 leading-[0.9]"
            >
              STUDY <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-amber-500">
                ABROAD
              </span>
            </motion.h1>
            
            {/* Thread/Line Decor */}
            <div className="hidden lg:block absolute -left-8 top-4 w-1 h-32 bg-amber-400" />
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-slate-600 max-w-[600px] mx-auto lg:mx-0 font-medium leading-relaxed"
          >
            Your gateway to the world's best universities. We provide end-to-end guidance from profile evaluation to visa approval.
            <span className="block mt-4 font-bold text-slate-900">
              🇺🇸 USA &nbsp;•&nbsp; 🇬🇧 UK &nbsp;•&nbsp; 🇨🇦 Canada &nbsp;•&nbsp; 🇦🇺 Australia
            </span>
          </motion.p>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200">
            <div>
              <h4 className="text-3xl font-black text-blue-900">98%</h4>
              <p className="text-sm text-slate-500 font-medium">Visa Success</p>
            </div>
            <div>
              <h4 className="text-3xl font-black text-blue-900">12+</h4>
              <p className="text-sm text-slate-500 font-medium">Years Exp.</p>
            </div>
            <div>
              <h4 className="text-3xl font-black text-blue-900">250+</h4>
              <p className="text-sm text-slate-500 font-medium">Partners</p>
            </div>
          </div>
          
          {/* Mobile Only CTA Button */}
          <div className="lg:hidden w-full pt-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full bg-blue-900 text-white h-14 text-lg font-bold shadow-xl">
                  Start Your Journey Now
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <LeadForm />
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Right Content - Split Globe & New Creative CTA Card */}
        <div className="lg:col-span-5 relative h-[500px] md:h-[600px] flex items-center justify-center hidden lg:flex">
            
            {/* Globe shifted for depth */}
            <div className="absolute inset-0 md:translate-x-20 z-0 opacity-100 scale-100 pointer-events-none">
               <Globe3D />
            </div>

            {/* NEW: Floating Glass CTA Card (Replaces Form) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="relative z-20 w-[380px]"
            >
               <div className="group relative bg-white/40 backdrop-blur-md p-2 rounded-[2rem] border border-white/60 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500">
                 
                 {/* Inner Content Container */}
                 <div className="relative bg-gradient-to-br from-white to-blue-50 rounded-[1.5rem] p-6 overflow-hidden">
                    
                    {/* Decorative Background Image inside card */}
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-10 rotate-12">
                       <Image src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=200" alt="decor" width={100} height={100} />
                    </div>

                    <div className="space-y-4 relative z-10">
                       <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white shadow-lg">
                          <Sparkles size={24} fill="currentColor" />
                       </div>
                       
                       <div>
                         <h3 className="text-2xl font-black text-slate-900 leading-tight">
                           Get Admitted to <br/> <span className="text-blue-700">Top Universities</span>
                         </h3>
                         <p className="text-sm text-slate-600 mt-2 font-medium">
                           Expert counseling from alumni of Harvard & Cambridge.
                         </p>
                       </div>

                       {/* The Modal Trigger */}
                       <Dialog>
                        <DialogTrigger asChild>
                           <Button className="w-full h-14 bg-blue-950 hover:bg-blue-900 text-white text-lg font-bold rounded-xl shadow-lg shadow-blue-900/20 group-hover:scale-[1.02] transition-transform duration-200 flex items-center justify-between px-6">
                              Book Free Session
                              <div className="bg-white/20 p-1.5 rounded-full">
                                <ArrowRight size={20} />
                              </div>
                           </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden bg-transparent border-none shadow-none">
                           <div className="bg-white p-6 rounded-2xl shadow-2xl">
                             <DialogHeader className="mb-4">
                               <DialogTitle className="text-2xl font-bold text-center">Start Your Application</DialogTitle>
                               <DialogDescription className="text-center">
                                 Fill details to get a callback from our experts.
                               </DialogDescription>
                             </DialogHeader>
                             <LeadForm />
                           </div>
                        </DialogContent>
                      </Dialog>

                       <div className="flex items-center gap-3 pt-2">
                          <div className="flex -space-x-3">
                             {[1,2,3].map(i => (
                               <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden relative">
                                  <Image src={`https://images.unsplash.com/photo-${i === 1 ? '1535713875002-d1d0cf377fde' : i === 2 ? '1580489944761-15a19d654956' : '1534528741775-53994a69daeb'}?w=100&h=100&fit=crop`} alt="avatar" fill className="object-cover" />
                               </div>
                             ))}
                          </div>
                          <p className="text-xs font-bold text-slate-500">
                            1k+ students joined this week
                          </p>
                       </div>
                    </div>
                 </div>
               </div>
            </motion.div>
        </div>
      </div>

      <UniversityLogos />
    </section>
  );
}
