"use client";
import { Navbar, NavbarBrand, NavbarContent } from "@heroui/navbar";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";

export default function CustomNavBar() {
  return (
    <Navbar className="font-outfit h-8 justify-start pt-6 pl-6 text-xl font-extralight">
      <NavbarContent>
        <NavbarBrand>
          <p className="text-3xl font-light">&lt;Oscar/&gt;</p>
        </NavbarBrand>
      </NavbarContent>
      <Dropdown>
        <DropdownTrigger>
          <Button>who am i</Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem key="about-me">about me</DropdownItem>
          <DropdownItem key="projects">projects</DropdownItem>
          <DropdownItem key="contact-me">contact me</DropdownItem>
          <DropdownItem key="resume">resume</DropdownItem>
          <DropdownItem key="brag-doc">brag doc</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </Navbar>
  );
}
