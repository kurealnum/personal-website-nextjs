"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Skill({
  src,
  className = "",
}: {
  src: string;
  className?: string;
}) {
  return (
    <motion.div
      className="flex flex-row items-center justify-center"
      whileHover={{ scale: 1.18, rotate: "5deg" }}
      transition={{ duration: 0.1 }}
    >
      <Image src={src} alt="" width={57} height={57} className={className} />
    </motion.div>
  );
}
