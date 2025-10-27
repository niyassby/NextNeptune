"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, PerspectiveCamera, Center, Environment, ContactShadows } from "@react-three/drei";
import CanvasLoader from "./CanvasLoader";
import Model3D from "./Model3D";


function Canvas3d({Model3D, enableRotate=true}) {
    
  return (
    <Canvas
    dpr={[1, 1.5]}
      className="w-full h-full "
      shadows // Enable shadows on the canvas
      camera={{ position: [0, 0, 0], fov: 50 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <PerspectiveCamera makeDefault position={[0, 0, 30]} />
        <OrbitControls enableZoom={false} enableDamping enablePan={false}  enableRotate={enableRotate} />

        {/* Ambient Light */}
        <ambientLight intensity={0.5} />
        <spotLight intensity={6} position={[0, 5, 10]} />

        {/* Directional Light with Shadows */}
        <directionalLight
          castShadow
          position={[10, 10, 10]}
          intensity={1}
          shadow-mapSize-width={512}
          shadow-mapSize-height={512}
          shadow-camera-near={1}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />

        {/* Soft environment lighting */}
        <Environment preset="warehouse" />

        {/* Center the model */}
        <Center>
          {/* <Model3D scale={1} position={[0, 0, 0]} rotation={[0, 0, 0]} /> */}
          {Model3D}
        </Center>

        {/* Ground Contact Shadows */}
        <ContactShadows
          position={[0, -8, 0]}
          opacity={0.5}
          width={20}
          height={20}
          blur={1}
          far={10}
          color="#000000"
        />
      </Suspense>
    </Canvas>
  )
}

export default Canvas3d