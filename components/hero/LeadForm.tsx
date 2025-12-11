"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface LeadFormProps {
  isCompact?: boolean;
}

export function LeadForm({ isCompact = false }: LeadFormProps) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      toast({
        title: "Success! ✈️",
        description: "Your journey starts now! We'll call you shortly.",
      });
      setFormData({ name: "", phone: "", city: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={cn("w-full", isCompact ? "" : "bg-white p-6 rounded-xl shadow-lg")}>
      <div className="mb-6">
        <h3 className="text-xl font-bold text-slate-900 leading-tight">
          Get Your Free <span className="text-amber-600">Counseling</span>
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          Speak to experts from Harvard, Stanford & Oxford Alumni networks.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <Input
            id="name"
            name="name"
            className="bg-white/50 border-slate-200 focus:bg-white transition-all rounded-lg h-10"
            placeholder="Student Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
           <Input
            id="phone"
            name="phone"
            className="bg-white/50 border-slate-200 focus:bg-white transition-all rounded-lg h-10"
            placeholder="Mobile Number"
            required
            type="tel"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
            <Input
            id="city"
            name="city"
            className="bg-white/50 border-slate-200 focus:bg-white transition-all rounded-lg h-10"
            placeholder="Current City"
            required
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <Button 
          type="submit" 
          className="w-full bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white font-bold h-11 rounded-lg shadow-lg shadow-blue-900/20 transition-all active:scale-95" 
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            <span className="flex items-center gap-2">
               Book Free Slot <ArrowRight size={16} />
            </span>
          )}
        </Button>
      </form>
    </div>
  );
}
