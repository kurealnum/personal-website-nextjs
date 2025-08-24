"use client";

import { ChevronDown, Loader } from "lucide-react";
import YouTubeVideo from "./YouTubeVideo";
import LoadIn from "./LoadIn";
import ScrollToIdButton from "./ScrollToIdButton";
import { Suspense } from "react";
import ButtonLink from "./ButtonLink";

export default function Personal() {
  return (
    <LoadIn>
      <h2>me</h2>
      <h3 className="mt-4">mountainbiking</h3>
      <p>
        I&apos;ve been mountain biking since I was 4 years old, and racing since
        I was 6. Since then, I&apos;ve participated in multiple interscholastic
        teams, even helping to start one locally when I was 14. My final high
        school races occured in the spring of 2025, but I&apos;ll continue my
        mountainbiking career well past highschool.
      </p>
      <h3 className="mt-4">teaching</h3>
      <p>
        Teaching is a strong passion of mine. I spend 3 nights a week acting as
        a coach for the next generation of youth riders on the team that I
        helped create. I usually work with our high school race-focused group,
        but I&apos;m always happy to help wherever I&apos;m needed.
        Additionally, I&apos;ve spent a great deal of time tutoring and learning
        how to optimally teach. I spent nearly every day during my senior high
        school year either working with students in Algebra I, Algebra II, and
        Trigonometry, or refining my teaching skills. I&apos;ve also privately
        tutored students online, creating lesson plans and curating practice
        problems.
      </p>
      <h3 className="mt-4">sim racing</h3>
      <p className="mb-4">
        I <i>really</i> like cars. Consequently, I spend a lot of my free time
        racing/driving virtually. I own a{" "}
        <ButtonLink href="https://www.logitechg.com/en-us/products/driving/g923-trueforce-sim-racing-wheel.html">
          G923
        </ButtonLink>{" "}
        racing wheel (nothing fancy, but I&apos;m not complaining!) and play
        Assetto Corsa, BeamNG Drive, Dirt Rally 2.0, and more! Here&apos;s a
        short clip of me &quot;rallying&quot; a Porsche 911 Weissach on an
        Assetto Corsa touge map (look at that beautiful slide @ 0:20).
      </p>
      <Suspense fallback={<Loader />}>
        <YouTubeVideo id="ZqvR1H9QSNg" />
      </Suspense>
      <p className="mt-16">thanks for reading!</p>
      <ScrollToIdButton id="#contact-me">
        <ChevronDown />
      </ScrollToIdButton>
    </LoadIn>
  );
}
