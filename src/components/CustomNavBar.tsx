import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Separator } from "./ui/separator";

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
            <ul className="w-[180px]">
              <NavigationMenuLink href="#about-me">about me</NavigationMenuLink>
              <NavigationMenuLink href="#projects">projects</NavigationMenuLink>
              <NavigationMenuLink href="#contact-me">
                contact me
              </NavigationMenuLink>
              <Separator />
              <NavigationMenuLink href="#resume">resume</NavigationMenuLink>
              <NavigationMenuLink href="#brag-doc">brag doc</NavigationMenuLink>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
