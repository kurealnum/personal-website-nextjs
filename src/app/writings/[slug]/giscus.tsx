"use client";

import Giscus from "@giscus/react";

export default function GiscusComponent() {
  return (
    <Giscus
      category="Announcements"
      mapping="pathname"
      repoId="R_kgDOOWKOtg"
      categoryId="DIC_kwDOOWKOts4C44Sq"
      repo="kurealnum/personal-website-nextjs"
      theme={"dark"}
      loading="lazy"
      lang={"en"}
    />
  );
}
