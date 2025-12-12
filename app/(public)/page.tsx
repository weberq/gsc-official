import { Hero } from "@/components/hero/Hero";
import { WallOfFame } from "@/components/home/WallOfFame";
import { ProcessRoadmap } from "@/components/home/ProcessRoadmap";
import { BranchLocator } from "@/components/home/BranchLocator";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Hero />
      <ProcessRoadmap />
      <WallOfFame />
      <BranchLocator />
    </main>
  );
}
