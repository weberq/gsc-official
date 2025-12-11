"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

function AnimatedGlobe() {
  const meshRef = useRef<any>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <Sphere ref={meshRef} visible args={[1, 100, 200]} scale={2.4}>
      <MeshDistortMaterial
        color="#153e75" // Deep Navy Blue
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0.5}
        metalness={0.8}
        bumpScale={0.01}
      />
    </Sphere>
  );
}

export function Globe3D() {
  return (
    <div className="h-[400px] w-full md:h-[600px] flex items-center justify-center">
      <Canvas className="bg-transparent" camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={2} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#fbbf24" /> {/* Gold tint light */}
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#3b82f6" /> {/* Blue fill */}
        
        {/* Removed Stars for clean white theme */}
        <AnimatedGlobe />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
