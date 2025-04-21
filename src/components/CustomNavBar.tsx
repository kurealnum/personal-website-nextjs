import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

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
