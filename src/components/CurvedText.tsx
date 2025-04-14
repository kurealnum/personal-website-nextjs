import { Text3D } from "@react-three/drei";

// UNUSED CODE!
// I would like to use this in the future, but there's not a great way to evenly space curved text at the moment. Maybe a monofont?

// The "gaps" field allows you to manually choose how far apart each character should be (because you can't manually get the width of each character)
// Each number is an inverse (smaller number = larger gap)
export default function CurvedText({ text }: { text: string }) {
  const textMidpoint = text.length / 2;

  return (
    <group rotation={[-Math.PI / 2, 0, 0]} castShadow>
      <mesh visible castShadow>
        {text.split("").map((char, i) => {
          const curPosition = i - textMidpoint;

          // Could be used in the future
          const angle = ((i - textMidpoint) * (Math.PI / text.length)) / 2;

          // I have a few iterations of this function. The last is currently in use:
          // f(x) = - ((x)^2/40 + 4)
          // f(x) = sqrt(16-(x / 1.5)^2)
          // Some of the constants may be replaced with variables.

          const gap = curPosition / 3.1;
          const y = -Math.sqrt(
            Math.pow(textMidpoint, 2) - Math.pow(curPosition / 1.7, 2),
          );

          return (
            <Text3D
              key={i}
              font={"/OutfitMedium.typeface.json"}
              size={0.5}
              height={0.01}
              position={[gap, y, 0]}
              rotation={[Math.PI / 2, angle, 0]}
              bevelEnabled
            >
              {char}
              <meshNormalMaterial attach={"material"} />
            </Text3D>
          );
        })}
      </mesh>
    </group>
  );
}
