"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function CustomNavBar() {
  return (
    <NavigationMenu className="font-outfit mt-4 ml-6 h-8 justify-center text-xl font-extralight md:justify-start">
      <NavigationMenuList>
        <NavigationMenuItem>
          <p className="hover:text-accent hover:text-shadow-accent/40 cursor-default text-3xl font-light transition-all hover:text-shadow-md">
            &lt;Oscar/&gt;
          </p>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>whoami</NavigationMenuTrigger>
          <NavigationMenuContent aria-label="Static Actions">
            <ul>
              {/* <DropdownItem key="projects">projects</DropdownItem> */}
              {/* <DropdownItem key="contact-me">contact me</DropdownItem> */}
              {/* <DropdownItem key="resume">resume</DropdownItem> */}
              {/* <DropdownItem key="brag-doc">brag doc</DropdownItem> */}
              <p>hi</p>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
