"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import { Button } from "./ui/button";
import { useState } from "react";
import Tab from "./Tab";
import Link from "next/link";
import LoadIn from "./LoadIn";

export default function AboutMe() {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);

  const scrollToHelper = (index: number) => {
    if (!api) {
      console.warn("CarouselApi is null");
      return;
    }
    api.scrollTo(index);
    setSelected(index);
  };

  const shadow = "shadow-[0px_2px_3px_3px_var(--primary)]";

  return (
    <LoadIn>
      <div className="mb-4 flex flex-row justify-center gap-4">
        <Button
          className={selected == 0 ? shadow : ""}
          variant={"outline"}
          onClick={() => scrollToHelper(0)}
        >
          what I&apos;m doing
        </Button>
        <Button
          className={selected == 1 ? shadow : ""}
          variant={"outline"}
          onClick={() => scrollToHelper(1)}
        >
          what I&apos;ve done
        </Button>
      </div>
      <Carousel setApi={setApi} opts={{ duration: 22 }}>
        <CarouselContent>
          <CarouselItem>
            <Tab>
              <p>
                I&apos;ve recently been accepted to a national data science
                research program, hosted by The Coding School and a number of
                notable organizations such as Columbia University, MIT,
                Stanford, Berkeley, and more!
              </p>
              <p>
                Outside of that, I&apos;m working on Tortillas , a library/TUI
                for asynchronous torrenting, made entirely in Rust. If
                you&apos;re curious, you can take a look at it{" "}
                <Button variant={"link"} asChild size={"link"}>
                  <a href="#tortillas-project">here</a>
                </Button>
                .
              </p>
              <p>
                My second most recent (major) project is byeAI, a developer
                content creation site that completely disallows AI generated or
                assisted content. It&apos;s built from scratch(-ish!) with
                React, Django, Nginx, and Docker.{" "}
                <Button variant={"link"} asChild size={"link"}>
                  <a href="#byeai-project">Check it out!</a>
                </Button>
              </p>
            </Tab>
          </CarouselItem>
          <CarouselItem>
            <Tab>
              <p className="text-center text-sm">
                Hey! If you want to know more about me <i>personally</i>, check{" "}
                <Button variant={"link"} asChild size={"link"}>
                  <a href="#me">this</a>
                </Button>{" "}
                out!
              </p>
              <p>
                When I was 15, I decided to start focusing more on my education
                and extracurriculars. I successfully completed Harvard&apos;s
                CS50 admist my sophmore year of highschool, as well as a college
                level course in the design and analysis of algorithms, hosted by
                Stanford.
              </p>
              <p>
                This formal education gave me a proper starting point for
                software development. I began with Non-Profit Link, a web
                application for the non-profits in my area, now used by dog
                shelters in South Africa. I then created RDI
                (React-Django-Implementation), which I used to help create
                byeAI, a blogging site for developers that strictly disallows AI
                generated content.
              </p>
              <p>
                During all of this, I spent a great deal of time volunteering at
                my local food pantry, as well as tutoring at my local highschool
                once a week in Algebra I, Algebra II, Trigonometry, and more.
                I&apos;ve also privately tutored students online, creating
                lesson plans and curating practice problems.
              </p>
              <p>
                There&apos;s a lot that I didn&apos;t mention! If you&apos;d
                like to know more, check out my{" "}
                <Button variant={"link"} asChild size={"link"}>
                  <Link href="/brag-doc">brag doc.</Link>
                </Button>
              </p>
            </Tab>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </LoadIn>
  );
}
