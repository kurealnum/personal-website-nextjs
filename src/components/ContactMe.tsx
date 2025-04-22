"use client";

import { LinkIcon, Mail } from "lucide-react";
import ScrollToTopButton from "./ScrollToTopButton";

export default function ContactMe() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <div></div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl">contact me</h1>
        <p className="font-light">Feel free to reach out!</p>
        <div className="mt-2 flex flex-row gap-4">
          <a href="https://linktr.ee/kureal">
            <LinkIcon />
          </a>
          <a href="mailto:oscar.gaske.cs@gmail.com">
            <Mail />
          </a>
        </div>
        <ScrollToTopButton />
      </div>
      <p className="mb-4 text-center text-xs">
        This site was built with NextJS, Shadcn, React, and others, specifically{" "}
        <i>without</i> AI.
      </p>
    </div>
  );
}
