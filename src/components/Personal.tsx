"use client";

import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import YouTubeVideo from "./YouTubeVideo";
import Link from "next/link";
import LoadIn from "./LoadIn";
import ScrollToIdButton from "./ScrollToIdButton";

export default function Personal() {
  return (
    <LoadIn>
      <h2>me</h2>
      <h3 className="mt-4">mountainbiking</h3>
      <p>
        I&apos;ve been mountain biking since I was 4 years old, and racing since
        I was 6. Since then, I&apos;ve participated in multiple interscholastic
        teams, even helping to start one locally when I was 14. My final
        highschool level race(s) will be occuring this May {"& April"}, although
        I intend to continue to race well after highschool is over.
      </p>
      <h3 className="mt-4">teaching</h3>
      <p>
        Teaching is a strong passion of mine. As I age out of the mountain
        biking team I helped start, I plan to act as a coach for the next
        generation of youth riders. Additionally, I&apos;ve spent a great deal
        of time tutoring and learning how to optimally teach. I spent a few
        hours a week every day of my senior high school year working with
        students in Algebra I, Algebra II, Trigonometry, and more. I&apos;ve
        also privately tutored students online, creating lesson plans and
        curating practice problems.
      </p>
      <h3 className="mt-4">sim racing</h3>
      <p className="mb-4">
        I <i>really</i> like cars. Consequently, I spend a lot of my free time
        racing/driving virtually. I own a{" "}
        <Button variant={"link"} asChild size={"link"}>
          <Link href="https://www.logitechg.com/en-us/products/driving/g923-trueforce-sim-racing-wheel.html">
            G923
          </Link>
        </Button>{" "}
        racing wheel (nothing fancy, but I&apos;m not complaining!) and play
        Assetto Corsa, BeamNG Drive, Dirt Rally 2.0, and more! Here&apos;s a
        short clip of me &quot;rallying&quot; a Porsche 911 Weissach on an
        Assetto Corsa touge map (look at that beautiful slide @ 0:20).
      </p>
      <YouTubeVideo id="ZqvR1H9QSNg" />
      <p className="mt-16">thanks for reading!</p>
      <ScrollToIdButton id="#contact-me">
        <ChevronDown />
      </ScrollToIdButton>
    </LoadIn>
  );
}
