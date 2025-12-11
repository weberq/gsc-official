"use client";

import { Globe3D } from "./Globe3D";
import { LeadForm } from "./LeadForm";
import { UniversityLogos } from "./UniversityLogos";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Users, Trophy, Globe } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col justify-center pt-24 pb-20">
      
      {/* 1. Background Grid & Texture (Fills the 'Empty' feel) */}
      <div className="absolute inset-0 z-0 opacity-[0.4]" 
           style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      
      <div className="absolute top-0 right-0 w-[50vw] h-[100vh] bg-blue-50/50 skew-x-[-20deg] translate-x-[20%] z-0" />

      {/* 2. Giant Watermark Text (Fills negative space) */}
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
          
          {/* Stats Grid to fill vertical space */}
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
             {/* Action buttons could go here if needed, but form is the main CTA */}
          </div>
        </div>

        {/* Right Content - Split Globe & Form */}
        <div className="lg:col-span-5 relative h-[500px] md:h-[600px] flex items-center justify-center">
            
            {/* Globe shifted slightly to create depth, not just hidden */}
            <div className="absolute inset-0 md:translate-x-20 z-0 opacity-50 md:opacity-100 scale-75 md:scale-100">
               <Globe3D />
            </div>

            {/* Form floating with high contrast */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="relative z-20 w-full max-w-sm"
            >
               <div className="bg-white/90 backdrop-blur-xl p-1 rounded-3xl shadow-2xl border border-white/50 ring-1 ring-slate-200/50">
                 <div className="rounded-[20px] overflow-hidden bg-white">
                    <div className="h-2 w-full bg-gradient-to-r from-blue-600 to-amber-500" />
                    <LeadForm isCompact />
                 </div>
               </div>
               
               {/* Floating trust badge on form */}
               <div className="absolute -right-8 -top-8 hidden md:flex bg-white p-3 rounded-2xl shadow-xl border border-slate-100 items-center gap-3 animate-bounce duration-[3000ms]">
                  <div className="bg-green-100 p-2 rounded-full">
                    <CheckCircle2 className="text-green-600 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase">Verified</p>
                    <p className="font-bold text-slate-900 text-sm">Ex-Visa Officers</p>
                  </div>
               </div>
            </motion.div>

        </div>
      </div>

      <UniversityLogos />
    </section>
  );
}
