"use client";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls, Text3D } from "@react-three/drei";

export default function NameSphere() {
  return (
    <Canvas fallback={"Something went wrong when rendering the globe."}>
      <OrbitControls autoRotate={false} enableZoom={false} />
      <directionalLight position={[0, 0, -1]} />
      <directionalLight position={[0, 0, 1]} />
      <directionalLight position={[1, 1, 1]} />
      <ambientLight intensity={0.2} />
      <Center position={[0, 0, 2]}>
        <mesh castShadow>
          <Text3D
            font={"/OutfitMedium.typeface.json"}
            size={0.5}
            height={0.01}
            position={[3, 3, 0.32]}
            bevelEnabled
          >
            {"hi, I'm oscar"}
            <meshNormalMaterial attach={"material"} />
          </Text3D>
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
