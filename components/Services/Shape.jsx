"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

const RotatingShape = ({size=1.5, detail = 0, animation, className=""}) => {
  const mountRef = useRef(null);
  let isMobil

  useEffect(() => {
    if (!mountRef.current) return;
  
    // Clear previous children (fix double render in StrictMode)
    mountRef.current.innerHTML = "";
  
    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = size*2;
  
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);
  
    // Wireframe Geometry (Dodecahedron)
    const geometry = new THREE.IcosahedronGeometry(size, detail); 
    const material = new THREE.MeshBasicMaterial({
      color: 0x737373,
      wireframe: true,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
  
    // GSAP infinite rotation
    gsap.to(mesh.rotation, {
      x: Math.PI * 1,
      y: Math.PI * 2,
      duration: 25,
      ease: "none",
      repeat: -1,
    });
  
    // Animate
    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();
    isMobil = window.innerWidth <= 768;
  
    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
  
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [size]);

  
  const compSize = isMobil? 300 : size*300 || 400;
  // const compSize = 400;
  return (
    <div className={cn("absolute",className)}>
    <div
      ref={mountRef}
      className={cn(animation &&"md:animate-position")}
      style={{ width: `${compSize}px`, height: `${compSize}px`, margin: "0 auto" }}
    />
    </div>
  );
};

export default RotatingShape;
