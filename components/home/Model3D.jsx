"use client";
import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, Center } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'

function Model3D(props) {
  const { nodes, materials } = useGLTF('/models/NeptuneLogo3d.glb')
  const meshRef = useRef()
  const mouse = useRef({ x: 0, y: 0 })
  const { size } = useThree()
  const [scale, setScale] = useState(0.7)

  // Handle responsive scaling
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768
      const isTablet = window.innerWidth < 1024
      setScale(isMobile ? 0.9 : isTablet ? 0.5 : 0.8)
    }

    handleResize() // Set initial scale
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Track mouse position globally
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current = {
        x: (e.clientX / size.width) * 2 - 1,
        y: -(e.clientY / size.height) * 2 + 1
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [size])

  // Combined animation frame
  useFrame(() => {
    if (meshRef.current) {
      // Mouse-controlled rotation (subtle)
      const targetY = mouse.current.x * Math.PI * 0.5
      const targetX = mouse.current.y * Math.PI * 0.5
      meshRef.current.rotation.y += (targetY - meshRef.current.rotation.y) * 0.01
      meshRef.current.rotation.x += (-targetX - meshRef.current.rotation.x) * 0.01
      // meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <group>
      <Center scale={scale} ref={meshRef}>
        <group {...props} dispose={null}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Curve.geometry}
            material={materials['Material.001']}
            position={[3.972, 11.064, 5.844]}
            rotation={[Math.PI / 2, 0, 0.5]}
            scale={650.305}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Curve001.geometry}
            material={materials.red}
            position={[3.972, 11.064, 5.844]}
            rotation={[Math.PI / 2, 0, 0.5]}
            scale={656.502}
          />
        </group>
      </Center>
    </group>
  )
}

useGLTF.preload('/models/NeptuneLogo3d.glb')

export default Model3D