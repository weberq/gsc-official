"use client";

import Marquee from "react-fast-marquee";

const UNIVERSITIES = [
  "Harvard University", "Stanford University", "MIT", "University of Oxford", 
  "University of Cambridge", "Imperial College London", "ETH Zurich", 
  "National University of Singapore", "University of Toronto", "McGill University"
];

export function UniversityLogos() {
  return (
    <div className="w-full border-t border-slate-100 bg-white/50 backdrop-blur-sm py-4 absolute bottom-0 left-0 z-20">
      <div className="container px-4 flex items-center gap-4">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap hidden md:block">
          Trusted by Admissions at:
        </span>
        <Marquee gradient={true} gradientColor="white" speed={30}>
          {UNIVERSITIES.map((uni, i) => (
             <div key={i} className="mx-8">
               <span className="text-lg font-bold text-slate-300 hover:text-blue-900 transition-colors cursor-default">
                 {uni}
               </span>
             </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
