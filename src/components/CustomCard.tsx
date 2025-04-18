import Image from "next/image";
import { Card } from "./ui/card";

export default function ContentThumbnail({
  children,
  imgSrc,
}: {
  children: React.ReactNode;
  imgSrc?: string;
}) {
  return (
    <Card className="[&>h3]:text-md flex w-[100%] max-w-80 flex-col items-center justify-center p-2 [&>p]:text-sm">
      {children}
      {imgSrc != null ? (
        <Image
          src={imgSrc}
          alt=""
          quality={100}
          width={500}
          height={500}
          style={{ width: "300px" }}
        />
      ) : null}
    </Card>
  );
}
