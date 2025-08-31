'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function SpinningKnot() {
  const ref = useRef<THREE.Mesh>(null!)
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.x = t * 0.25
    ref.current.rotation.y = t * 0.35
    ref.current.scale.setScalar(1 + Math.sin(t * 1.2) * 0.05)
  })
  return (
    <mesh ref={ref}>
      <torusKnotGeometry args={[1.2, 0.45, 220, 40]} />
      <meshStandardMaterial
        metalness={0.6}
        roughness={0.2}
        color={'#6366f1'}
        emissive={'#4338ca'}
        emissiveIntensity={0.2}
      />
    </mesh>
  )
}

export default function BlobScene() {
  return (
    <div className="h-[260px] md:h-[360px] w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[4, 4, 2]} intensity={1.2} />
        <SpinningKnot />
        <Environment preset="city" />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  )
}
