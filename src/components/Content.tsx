"use client";

import YouTubeVideo from "./YouTubeVideo";
import LoadIn from "./LoadIn";
import { Suspense } from "react";
import { Loader } from "lucide-react";
import ButtonLink from "./ButtonLink";

export default function Content() {
  return (
    <LoadIn>
      <h2 className="text-2xl">content creation</h2>
      <p className="max-w-[500px] p-4 font-light">
        As I mentioned in the projects section, I run and manage a YouTube
        channel. I also create similar content in the form of blogs on{" "}
        <ButtonLink href="https://dev.to/kurealnum">Dev.to</ButtonLink>{" "}
        (although I may consider posting a few of them on this site).
      </p>
      <Suspense fallback={<Loader />}>
        <YouTubeVideo id="o03_cfOnl84" />
      </Suspense>
      <h3 className="mt-4 text-lg">by the way...</h3>
      <p className="max-w-[500px] p-4 font-light">
        I&apos;ve been featured in Dev.to&apos;s &quot;Top 7 Posts of the
        week&quot; 5 times, and I&apos;m also an active community moderator.
      </p>
    </LoadIn>
  );
}
