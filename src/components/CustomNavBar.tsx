"use client";
import { Navbar, NavbarContent, NavbarItem } from "@heroui/navbar";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";

export default function CustomNavBar() {
  return (
    <Navbar className="font-outfit mt-4 ml-6 h-8 justify-center text-xl font-extralight md:justify-start">
      <NavbarContent>
        <NavbarItem isActive>
          <p className="hover:text-accent hover:text-shadow-accent/40 cursor-default text-3xl font-light transition-all hover:text-shadow-md">
            &lt;Oscar/&gt;
          </p>
        </NavbarItem>
      </NavbarContent>
      <Dropdown
        showArrow
        classNames={{
          content:
            "py-2 px-2 bg-gradient-to-br from-primary to-default-200 dark:from-default-50 dark:to-black rounded-2xl text-lg font-light border-solid border-1 border-border",
          backdrop: "opacity-30",
        }}
      >
        <DropdownTrigger>
          <Button disableRipple className="ml-4 cursor-pointer">
            whoami
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions" variant="faded">
          <DropdownItem key="projects">projects</DropdownItem>
          <DropdownItem key="contact-me">contact me</DropdownItem>
          <DropdownItem key="resume">resume</DropdownItem>
          <DropdownItem key="brag-doc">brag doc</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </Navbar>
  );
}
