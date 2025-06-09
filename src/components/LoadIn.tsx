"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadIn({
  children,
  className = "flex flex-col items-center",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (!window) {
      return;
    }

    if (window.innerWidth < 768) {
      // Width of surrounding paragraphs minus padding.
      setIsMobile(true);
    }
  }, []);

  if (isMobile) {
    return <div className={className}>{children}</div>;
  }
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
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
