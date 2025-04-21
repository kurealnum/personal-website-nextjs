"use client";

import { Button } from "./ui/button";
import YouTubeVideo from "./YouTubeVideo";
import LoadIn from "./LoadIn";

export default function Content() {
  return (
    <LoadIn>
      <h2 className="text-2xl">content creation</h2>
      <p className="max-w-[500px] p-4 font-light">
        As I mentioned in the projects section, I run and manage a YouTube
        channel. I also create similar content in the form of blogs on{" "}
        <Button variant={"link"} asChild size={"link"}>
          <a href="https://dev.to/kurealnum">Dev.to</a>
        </Button>{" "}
        (although I may consider posting a few of them on this site).
      </p>
      <YouTubeVideo id="o03_cfOnl84" />
      <h3 className="mt-4 text-lg">by the way...</h3>
      <p className="max-w-[500px] p-4 font-light">
        I&apos;ve been featured in Dev.to&apos;s &quot;Top 7 Posts of the
        week&quot; 3 times, and I&apos;m also an active community moderator.
      </p>
    </LoadIn>
  );
}
