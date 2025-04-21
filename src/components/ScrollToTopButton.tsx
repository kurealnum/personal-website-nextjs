"use client";

import { Button } from "./ui/button";

export default function ScrollToTopButton() {
  return (
    <Button
      className="mt-4"
      variant={"outline"}
      onClick={() => window.scrollTo(0, 0)}
    >
      {"<C-Home> / gg"}
    </Button>
  );
}
