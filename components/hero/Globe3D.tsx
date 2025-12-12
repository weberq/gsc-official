// @ts-nocheck
"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, Html, Float } from "@react-three/drei";
import { GraduationCap, Plane, FileCheck } from "lucide-react";

function AnimatedGlobe() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const meshRef = useRef<any>(null);

  useFrame((state: any, delta: any) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group>
      <Sphere ref={meshRef} visible args={[1, 100, 200]} scale={2.5}>
        <MeshDistortMaterial
          color="#1e3a8a"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.4}
          metalness={0.6}
        />
      </Sphere>
      
      {/* Floating Elements - Positioned wider to avoid overlap with central card */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Html position={[2.2, 1.2, 0]} transform distanceFactor={4} style={{ pointerEvents: 'none' }}>
          <div className="bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-xl flex items-center gap-3 border border-blue-100 w-[140px] select-none">
            <div className="bg-blue-100 p-2 rounded-full text-blue-700 shadow-sm">
               <GraduationCap size={18} />
            </div>
            <div className="text-xs font-bold text-slate-800 leading-tight">
              100%<br/><span className="text-slate-500 font-normal">Admissions</span>
            </div>
          </div>
        </Html>
      </Float>

      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1} floatingRange={[-0.2, 0.2]}>
        <Html position={[-2.2, 0.5, 1]} transform distanceFactor={4} style={{ pointerEvents: 'none' }}>
          <div className="bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-xl flex items-center gap-3 border border-green-100 w-[140px] select-none">
            <div className="bg-green-100 p-2 rounded-full text-green-700 shadow-sm">
               <FileCheck size={18} />
            </div>
            <div className="text-xs font-bold text-slate-800 leading-tight">
              Fast<br/><span className="text-slate-500 font-normal">Visa Process</span>
            </div>
          </div>
        </Html>
      </Float>

       <Float speed={3} rotationIntensity={1} floatIntensity={2}>
        <Html position={[1.8, -1.8, 0]} transform distanceFactor={4} style={{ pointerEvents: 'none' }}>
          <div className="bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-xl flex items-center gap-3 border border-amber-100 w-[140px] select-none">
             <div className="bg-amber-100 p-2 rounded-full text-amber-600 shadow-sm">
               <Plane size={18} />
            </div>
            <div className="text-xs font-bold text-slate-800 leading-tight">
              Global<br/><span className="text-slate-500 font-normal">Reach</span>
            </div>
          </div>
        </Html>
      </Float>
    </group>
  );
}

export function Globe3D() {
  return (
    <div className="h-[500px] w-full flex items-center justify-center">
      <Canvas className="bg-transparent" camera={{ position: [0, 0, 7], fov: 45 }}>
        <ambientLight intensity={2} />
        <directionalLight position={[5, 10, 7]} intensity={2} color="#fbbf24" />
        <directionalLight position={[-10, 0, -5]} intensity={1} color="#3b82f6" />
        <AnimatedGlobe />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
