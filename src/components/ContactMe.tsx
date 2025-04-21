"use client";

import { motion } from "framer-motion";
import { LinkIcon, Mail } from "lucide-react";
import ScrollToTopButton from "./ScrollToTopButton";

export default function ContactMe() {
  return (
    <motion.div
      className="flex min-h-screen flex-col items-center justify-between"
      initial={{ opacity: 0, transform: "translateY(100px)" }}
      whileInView={{ opacity: 1, transform: "translateY(0px)" }}
      transition={{
        duration: 1.3,
        ease: "easeInOut",
        type: "spring",
        bounce: 0.1,
      }}
    >
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
      <p className="mb-4 text-xs">
        This site was built with NextJS, Shadcn, React, and love
      </p>
    </motion.div>
  );
}
