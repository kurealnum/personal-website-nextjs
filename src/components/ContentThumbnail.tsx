import Image from "next/image";
import { Card } from "./ui/card";

export default function ContentThumbnail({
  children,
  imgSrc,
  href,
  id,
}: {
  children: React.ReactNode;
  imgSrc?: string;
  href: string;
  id?: string;
}) {
  return (
    <Card
      id={id == null ? "" : id}
      className="[&_h3]:text-md flex w-[100%] max-w-80 flex-col items-center justify-center p-2 [&_h3]:mb-2 [&_h3]:text-center [&_p]:mb-2 [&_p]:text-sm [&_p]:font-light"
    >
      <a href={href}>
        {children}
        {imgSrc != null ? (
          <Image
            src={imgSrc}
            alt=""
            quality={100}
            width={600}
            height={600}
            className="w-[320px] rounded-md"
          />
        ) : null}
      </a>
    </Card>
  );
}
