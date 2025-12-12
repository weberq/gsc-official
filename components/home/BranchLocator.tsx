"use client";

import { MapPin, Phone, Mail, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LOCATIONS = [
  {
    city: "Kompally",
    address: "Buchamma's Plaza, HT Rd, above Tony&Guy, beside Narayana college, Pedda Bashirabad, Meenakshi Estate, Alwal, Hyderabad, Secunderabad, Telangana 500067",
    phone: "+91 98765 43210",
    email: "info@gscedu.com",
    mapLink: "https://maps.app.goo.gl/Ghr3LSjyaPommdaQA",
  },
  {
    city: "Begumpet",
    address: "Office : #103,1st Floor, Mayank Mekins Maheshwari Plaza, Ameerpet Rd, above Airtel Store, Begumpet, Hyderabad, Telangana 500016",
    phone: "+91 98765 43210",
    email: "info@gscedu.com",
    mapLink: "https://maps.app.goo.gl/yphdEQLu4YixoiDm6",
  },
];

export function BranchLocator() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-5xl font-bold">
              Visit Our <span className="text-amber-500">Branches</span>
            </h2>
            <p className="text-slate-400">
              Walk in for a free face-to-face consultation at a center near you.
            </p>
          </div>
          <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white">
            View All Locations
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LOCATIONS.map((loc, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700 text-slate-100 hover:border-amber-500/50 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-amber-500">
                  <MapPin className="w-5 h-5" />
                  {loc.city}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-sm text-slate-300 leading-relaxed min-h-[40px]">
                  {loc.address}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="w-4 h-4 text-slate-500" />
                    {loc.phone}
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-4 h-4 text-slate-500" />
                    {loc.email}
                  </div>
                </div>
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white gap-2 mt-2"
                  onClick={() => window.open(loc.mapLink, '_blank')}
                >
                  <Navigation className="w-4 h-4" />
                  Navigate
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
