"use client";

import { Button } from "./ui/button";

export default function ScrollToTopButton() {
  return (
    <Button
      className="mt-4"
      variant={"link"}
      onClick={() => window.scrollTo(0, 0)}
      asChild
    >
      <p className="cursor-pointer text-white">{"<C-Home> / gg"}</p>
    </Button>
  );
}
