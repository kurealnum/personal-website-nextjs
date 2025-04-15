"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Center,
  Environment,
  Lightformer,
  OrbitControls,
  Text3D,
} from "@react-three/drei";
import { Vector3 } from "three";
import { useEffect, useState } from "react";

export default function NameSphere() {
  const [size, setSize] = useState(2);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 800) {
        setSize(1.2);
      }
      if (window.innerWidth < 550) {
        setSize(0.8);
      }
    }
  }, [size]);

  return (
    <Canvas fallback={"Something went wrong when rendering the globe."}>
      <OrbitControls autoRotate={false} enableZoom={false} />
      <Environment resolution={32}>
        <group rotation={[-Math.PI / 4, -0.3, 0]}>
          <Lightformer
            intensity={20}
            rotation-x={Math.PI / 2}
            position={[0, 5, 1]}
            scale={[10, 10, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, 1, -1]}
            scale={[10, 2, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, -1, -1]}
            scale={[10, 2, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-y={-Math.PI / 2}
            position={[10, 1, 0]}
            scale={[20, 2, 1]}
          />
          <Lightformer
            type="ring"
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-0.1, -1, -5]}
            scale={10}
          />
        </group>
      </Environment>
      <Center position={[0, 0, 2.2]}>
        <mesh castShadow>
          <Text3D
            font={"/OutfitMedium.typeface.json"}
            size={size}
            height={0.01}
            bevelEnabled
            curveSegments={128}
            position={[0, 0, 0]}
          >
            {"hi, I'm oscar"}
            <meshPhysicalMaterial attach={"material"} color={"white"} />
          </Text3D>
        </mesh>
      </Center>
      <CameraRig />
    </Canvas>
  );
}

// https://codesandbox.io/p/sandbox/lwo219?file=%2Fsrc%2FApp.js%3A46%2C1-52%2C2
function CameraRig({ v = new Vector3() }) {
  return useFrame((state) => {
    const t = state.clock.elapsedTime;
    state.camera.position.lerp(
      v.set(Math.sin(t / 5), 0, 12 + Math.cos(t / 5) / 2),
      0.02,
    );
    state.camera.lookAt(0, 0, 0);
  });
}
