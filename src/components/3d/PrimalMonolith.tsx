"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function MonolithScene() {
  const groupRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Group>(null);

  const particlesCount = 60;
  const particles = useMemo(() => {
    return Array.from({ length: particlesCount }).map(() => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 8
      ),
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 0.008,
        (Math.random() - 0.5) * 0.008,
        0
      ),
    }));
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
    }
    if (particlesRef.current) {
      particlesRef.current.children.forEach((child, i) => {
        const p = particles[i];
        if (p) {
          child.position.add(p.velocity);
          if (Math.abs(child.position.x) > 18) p.velocity.x *= -1;
          if (Math.abs(child.position.y) > 18) p.velocity.y *= -1;
        }
      });
    }
  });

  return (
    <>
      {/* Soft, directional lighting for a dark sleek slab */}
      <ambientLight intensity={0.15} color={0xffffff} />
      <directionalLight position={[4, 6, 4]} intensity={1.2} color={0xffffff} />
      <directionalLight position={[-3, -2, 2]} intensity={0.3} color={0xaaaaaa} />
      <spotLight position={[0, 10, 6]} intensity={0.8} color={0xffffff} angle={0.6} penumbra={0.5} />

      {/* Monolith group – tilted like the reference */}
      <group ref={groupRef} rotation={[0.1, 0, 0.35]}>

        {/* Main dark charcoal slab */}
        <mesh>
          <boxGeometry args={[2.8, 10, 1.4]} />
          <meshStandardMaterial
            color={0x555555}
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>

        {/* Outer wireframe – the key visual element */}
        <mesh>
          <boxGeometry args={[3.0, 10.3, 1.55]} />
          <meshBasicMaterial
            color={0xffffff}
            wireframe
            transparent
            opacity={0.25}
          />
        </mesh>

        {/* Inner edge accent */}
        <mesh>
          <boxGeometry args={[2.82, 10.02, 1.42]} />
          <meshBasicMaterial
            color={0xffffff}
            wireframe
            transparent
            opacity={0.06}
          />
        </mesh>
      </group>

      {/* Star-like floating particles */}
      <group ref={particlesRef}>
        {particles.map((p, i) => (
          <mesh key={i} position={p.position}>
            <sphereGeometry args={[0.025, 4, 4]} />
            <meshBasicMaterial color={0xffffff} transparent opacity={0.7} />
          </mesh>
        ))}
      </group>
    </>
  );
}

export default function PrimalMonolith() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
      <Canvas
        camera={{ position: [0, 0, 22], fov: 55 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        <MonolithScene />
      </Canvas>
    </div>
  );
}
