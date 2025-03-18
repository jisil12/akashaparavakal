'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';
import { OrbitControls, Sphere } from '@react-three/drei';

function AnimatedSpheres() {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <>
      {[...Array(8)].map((_, i) => (
        <Sphere
          key={i}
          ref={meshRef}
          args={[0.3, 16, 16]}
          position={[
            Math.cos(i * (Math.PI / 4)) * 3,
            Math.sin(i * (Math.PI / 4)) * 3,
            0
          ]}
        >
          <meshStandardMaterial
            color={`hsl(${i * 45}, 70%, 50%)`}
            transparent
            opacity={0.6}
          />
        </Sphere>
      ))}
    </>
  );
}

export function Background3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedSpheres />
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
    </div>
  );
}
