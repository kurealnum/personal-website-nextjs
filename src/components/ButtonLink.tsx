import Link from "next/link";
import { Button } from "./ui/button";

export default function ButtonLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Button variant={"link"} asChild size={"link"}>
      <Link href={href}>{children}</Link>
    </Button>
  );
}
