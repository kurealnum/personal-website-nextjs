import Image from "next/image";

export default function Skill({
  src,
  className = "",
}: {
  src: string;
  className?: string;
}) {
  return (
    <Image src={src} alt="" width={57} height={57} className={className} />
  );
}
