"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ScrollToIdButton({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.4 }}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
        type: "spring",
        bounce: 0,
      }}
    >
      <Link href={id} className="h-10">
        {children}
      </Link>
    </motion.div>
  );
}
