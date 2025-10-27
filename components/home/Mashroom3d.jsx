"use client";
import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, Center } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Mashroom3d(props) {
  const { nodes, materials } = useGLTF('/models//stylized_mushrooms.glb')
  const meshRef = useRef()

  const [scale, setScale] = useState(0.7)

  // Handle responsive scaling
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768
      const isTablet = window.innerWidth < 1024
      setScale(isMobile ? 0.4 : isTablet ? 0.5 : 0.7)
    }

    handleResize() // Set initial scale
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  
  // Combined animation frame
  useFrame(() => {
    // if (meshRef.current) {
    //   meshRef.current.rotation.y += 0.01/2
      
    // }
  })

  

  return (
    <group>
      <Center scale={scale} ref={meshRef}>
      <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.6}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.1}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle_mushroms_0.geometry}
            material={materials.mushroms}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle001_mushroms_0.geometry}
            material={materials.mushroms}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane_ground_0.geometry}
            material={materials.ground}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle002_mushroms_0.geometry}
            material={materials.mushroms}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle005_mushroms_0.geometry}
            material={materials.mushroms}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere004_mushroms_0.geometry}
            material={materials.mushroms}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001_mushroms_0.geometry}
            material={materials.mushroms}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002_mushroms_0.geometry}
            material={materials.mushroms}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle006_mushroms_0.geometry}
            material={materials.mushroms}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle004_mushroms_0.geometry}
            material={materials.mushroms}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_mushroms_0.geometry}
            material={materials.mushroms}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_mushroms_0.geometry}
            material={materials.mushroms}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere006_mushroms_0.geometry}
            material={materials.mushroms}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere007_mushroms_0.geometry}
            material={materials.mushroms}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere008_mushroms_0.geometry}
            material={materials.mushroms}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere009_mushroms_0.geometry}
            material={materials.mushroms}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere010_mushroms_0.geometry}
            material={materials.mushroms}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere001_mushroms_0.geometry}
            material={materials.mushroms}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere002_mushroms_0.geometry}
            material={materials.mushroms}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere003_mushroms_0.geometry}
            material={materials.mushroms}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere005_mushroms_0.geometry}
            material={materials.mushroms}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere011_mushroms_0.geometry}
            material={materials.mushroms}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere012_mushroms_0.geometry}
            material={materials.mushroms}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane003_mushroms_0.geometry}
            material={materials.mushroms}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane004_ground_0.geometry}
            material={materials.ground}
          />
        </group>
      </group>
    </group>
      </Center>
    </group>
  )
}

useGLTF.preload('/models//stylized_mushrooms.glb')

export default Mashroom3d