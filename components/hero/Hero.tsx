import { Globe3D } from "./Globe3D";
import { LeadForm } from "./LeadForm";
import { PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden flex items-center pt-20">
      {/* Decorative Background Elements - Subtle and Professional */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 translate-x-32 -z-10" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      
      <div className="container px-4 md:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div className="flex flex-col space-y-8 text-center lg:text-left order-2 lg:order-1">
          <div className="space-y-4">
             <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-900 font-semibold text-sm tracking-wide border border-blue-100">
               TRUSTED BY 10,000+ STUDENTS
             </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Shape Your <br />
              <span className="text-blue-900">Global Future.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-[600px] mx-auto lg:mx-0 leading-relaxed">
              Acceptance to top universities in the <span className="font-semibold text-blue-800">USA, UK, Australia, & Canada</span>. 
              Expert counseling that turns ambitions into admit letters.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-8 h-12 text-lg shadow-lg shadow-amber-500/25">
              Get Started Free
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-lg border-slate-300 text-slate-700 hover:bg-slate-50 gap-2">
              <PlayCircle className="w-5 h-5" />
              Watch Success Stories
            </Button>
          </div>
          
          <div className="w-full h-[300px] md:h-[400px] lg:hidden">
             <Globe3D />
          </div>
        </div>

        <div className="relative order-1 lg:order-2 flex justify-center items-center">
          {/* Desktop Globe Background */}
          <div className="absolute inset-0 hidden lg:block translate-x-20 scale-125 opacity-100 pointer-events-none -z-10">
             <Globe3D />
          </div>

          {/* Form floating above */}
          <div className="relative z-20 w-full max-w-md">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
