"use client";

import { motion } from "framer-motion";

export default function LoadIn({
  children,
  className = "flex flex-col items-center",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, transform: "translateY(100px)" }}
      whileInView={{ opacity: 1, transform: "translateY(0px)" }}
      transition={{
        duration: 1.3,
        ease: "easeInOut",
        type: "spring",
        bounce: 0.1,
      }}
    >
      {children}
    </motion.div>
  );
}
