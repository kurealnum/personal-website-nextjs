import { Text3D } from "@react-three/drei";

export default function CurvedText({ text }: { text: string }) {
  const textMidpoint = text.length / 2;

  return (
    <group rotation={[-Math.PI / 2, 0, 0]}>
      {text.split("").map((char, i) => {
        const curPosition = i - textMidpoint;

        // Could be used in the future
        // const angle = ((i - textMidpoint) * anglePerChar) / 2;

        // I have a few iterations of this function. The last is currently in use:
        // f(x) = - ((x)^2/40 + 4)
        // f(x) = sqrt(16-(x / 1.5)^2)
        // Some of the constants may be replaced with variables.

        const gap = curPosition / 2.6;
        const y = -Math.sqrt(
          Math.pow(textMidpoint, 2) - Math.pow(curPosition / 1.7, 2),
        );

        return (
          <>
            <directionalLight position={[0, 0, -1]} />
            <directionalLight position={[0, 0, 1]} />
            <directionalLight position={[1, 1, 1]} />
            <ambientLight intensity={0.2} />
            <meshBasicMaterial attach={"material"} color={"hotpink"} />
            <Text3D
              key={i}
              font={"/OutfitMedium.typeface.json"}
              size={0.5}
              height={0.01}
              position={[gap, y, 0]}
              rotation={[Math.PI / 2, 0, 0]}
              bevelEnabled
            >
              {char}
            </Text3D>
          </>
        );
      })}
    </group>
  );
}
