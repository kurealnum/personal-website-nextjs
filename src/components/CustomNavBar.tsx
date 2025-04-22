import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Separator } from "./ui/separator";
import Image from "next/image";
import { Mail } from "lucide-react";

export default function CustomNavBar() {
  return (
    <NavigationMenu
      className="font-outfit mt-4 ml-4 h-8 justify-center text-2xl font-light md:justify-start"
      delayDuration={0}
    >
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-xl">
            whoami
          </NavigationMenuTrigger>
          <NavigationMenuContent aria-label="Static Actions">
            <ul className="w-[150px]">
              <NavigationMenuLink href="#about-me">
                what I do
              </NavigationMenuLink>
              <NavigationMenuLink href="#projects">projects</NavigationMenuLink>
              <NavigationMenuLink href="#skills">skillz</NavigationMenuLink>
              <NavigationMenuLink href="#me">me</NavigationMenuLink>
              <Separator className="my-2" />
              <ul className="flex flex-row items-center justify-between">
                <NavigationMenuLink href="https://www.youtube.com/@Oscar_CS">
                  <Icon src="/youtube.svg" />
                </NavigationMenuLink>
                <NavigationMenuLink href="https://github.com/kurealnum">
                  <Icon src="/github.svg" />
                </NavigationMenuLink>
                <NavigationMenuLink href="https://dev.to/kurealnum">
                  <Icon src="/dev.svg" />
                </NavigationMenuLink>
                <NavigationMenuLink href="mailto:oscar.gaske.cs@gmail.com">
                  <Icon src="/mail.svg" />
                </NavigationMenuLink>
                <NavigationMenuLink href="https://bsky.app/profile/kureal.bsky.social">
                  <Icon src="/bluesky.svg" />
                </NavigationMenuLink>
              </ul>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#contact-me">contact me</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#resume">resume</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#brag-doc">brag doc</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function Icon({ src }: { src: string }) {
  return <Image width={24} height={24} src={src} alt="" />;
}
