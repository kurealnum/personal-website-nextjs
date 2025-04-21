"use client";

import LoadIn from "./LoadIn";
import Skill from "./Skill";

export default function Skills() {
  return (
    <LoadIn>
      <h2 className="mt-4 text-3xl">skillz</h2>
      <p className="text-center font-light">
        or all the noteworthy things that I know how to use
      </p>
      <h3 className="mt-8">web dev stack</h3>
      <div className="flex max-w-[440px] flex-row flex-wrap justify-center gap-2">
        <Skill src="javascript-original.svg" />
        <Skill src="typescript.svg" />
        <Skill src="python-original.svg" />
        <Skill src="css3-original.svg" />
        <Skill src="html5-original.svg" />
        <Skill src="react-original.svg" />
        <Skill
          src="reactrouter.svg"
          className="rounded-md bg-neutral-300 p-1"
        />
        <Skill src="tailwindcss-original.svg" />
        <Skill src="django-plain.svg" />
        <Skill src="nginx.svg" />
        <Skill
          src="djangorest-original.svg"
          className="rounded-md bg-neutral-300"
        />
        <Skill src="docker-plain.svg" />
      </div>
      <h3 className="mt-8">general tools</h3>
      <div className="flex max-w-[300px] flex-row flex-wrap justify-center gap-2">
        <Skill src="c-original.svg" />
        <Skill src="java-original.svg" />
        <Skill src="rust.svg" />
        <Skill src="git-original.svg" />
        <Skill src="sqlite-original.svg" />
        <Skill src="postgresql-plain.svg" />
        <Skill src="linux.svg" />
        <Skill src="latex.svg" />
      </div>
      <h3 className="mt-8">misc. tech</h3>
      <div className="flex flex-row flex-wrap justify-center gap-2">
        <Skill src="neovim-original.svg" />
        <Skill src="archlinux-original.svg" />
        <Skill src="arduino.svg" />
        <Skill src="davinci.svg" />
        <Skill src="figma.svg" />
      </div>
    </LoadIn>
  );
}
