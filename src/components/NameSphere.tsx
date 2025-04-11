"use client";

import { animate, createScope } from "animejs";
import { useEffect, useRef } from "react";

export default function NameSphere() {
  const root = useRef(null);
  const scope = useRef(null);

  useEffect(() => {
    scope.current = createScope({ root }).add((scope) => {
      animate("#name-sphere", { x: "100px" });
    });

    return () => scope.current.revert();
  }, []);

  return (
    <div ref={root}>
      <div id="name-sphere" className="bg-accent h-32 w-32 rounded-[50%]"></div>
    </div>
  );
}
