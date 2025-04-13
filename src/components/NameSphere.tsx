"use client";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import CurvedText from "./CurvedText";

export default function NameSphere() {
  return (
    <Canvas fallback={"Something went wrong when rendering the globe."}>
      <OrbitControls autoRotate={false} enableZoom={false} />
      <Center position={[0, 0, 2]}>
        <mesh>
          <CurvedText text={"hi,I'm oscar"} />
        </mesh>
      </Center>
      <Center>
        <mesh visible position={[0, 0, -0.5]} castShadow>
          <pointLight position={[10, 10, 10]} color={"white"} />
          <sphereGeometry args={[2.2, 48, 48]} />
          <meshBasicMaterial attach={"material"} color={"purple"} />
        </mesh>
      </Center>
    </Canvas>
  );
}
