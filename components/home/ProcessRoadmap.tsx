"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, GraduationCap, Plane, UserCheck, FileCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    icon: UserCheck,
    title: "1. Profile Evaluation",
    description: "Expert assessment of your academic background and career goals.",
  },
  {
    icon: BookOpen,
    title: "2. University Shortlisting",
    description: "Selecting the best-fit universities based on your profile and budget.",
  },
  {
    icon: FileCheck,
    title: "3. Application & SOP",
    description: "Guidance on drafting a winning Statement of Purpose and application support.",
  },
  {
    icon: GraduationCap,
    title: "4. Admission & Funding",
    description: "Securing your offer letter and assistance with scholarship applications.",
  },
  {
    icon: Plane,
    title: "5. Visa & Departure",
    description: "Comprehensive visa mock interviews and pre-departure briefing.",
  },
];

export function ProcessRoadmap() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-slate-50 -skew-y-3 z-0" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
            Your Roadmap to <span className="text-blue-900">Success</span> 🚀
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We simplify the complex study abroad journey into 5 clear, manageable steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Connector Line (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-slate-200 -z-10 group-hover:bg-amber-400 transition-colors duration-500" />
                )}

                <Card className="h-full border-slate-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 bg-white">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4 pt-8">
                    <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-900 flex items-center justify-center mb-2 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-lg text-slate-900">{step.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
