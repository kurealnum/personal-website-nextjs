"use client";
import { MotionConfig } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

export default function MotionConfigWrapper({
  children,
}: {
  children: ReactNode;
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
    return <MotionConfig reducedMotion="always">{children}</MotionConfig>;
  }
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
