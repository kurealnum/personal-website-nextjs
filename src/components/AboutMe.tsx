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
import LoadIn from "./LoadIn";
import ButtonLink from "./ButtonLink";

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
      <Carousel
        setApi={setApi}
        opts={{ duration: 22, watchDrag: false }}
        className="mb-8"
      >
        <CarouselContent>
          <CarouselItem>
            <Tab>
              <p>
                Founding SWE @{" "}
                <ButtonLink href="https://www.toddagriscience.com/">
                  Todd Agriscience
                </ButtonLink>
                , SWE intern @{" "}
                <ButtonLink href="https://www.linkedin.com/company/hoaflo/">
                  HoaFlo
                </ButtonLink>
                .
              </p>
              <p>
                Past SWE work, I&apos; working as the Chief Scoring Officer for
                the{" "}
                <ButtonLink href="https://virginiamtb.org/">VA NICA</ButtonLink>{" "}
                league on the weekends. I&apos;m also coaching on my local youth
                mountain biking{" "}
                <ButtonLink href="https://www.fredericksburgmtb.org/">
                  team
                </ButtonLink>{" "}
                about 3 times a week (during the season). And I&apos;m attending
                the University of Mary Washington full time, of course.
              </p>
              <p>
                When I have the time, I&apos;m working on Tortillas, a
                library/TUI for asynchronous torrenting, made entirely in Rust.
                If you&apos;re curious, you can take a look at it{" "}
                <ButtonLink href="#tortillas-project">here</ButtonLink>.
              </p>
            </Tab>
          </CarouselItem>
          <CarouselItem>
            <Tab>
              <p className="text-center text-sm">
                Hey! If you want to know more about me <i>personally</i>, check{" "}
                <ButtonLink href="#me">this</ButtonLink> out!
              </p>
              <p>
                I started my formal education with Harvard&apos;s CS50 when I
                was 15, which gave me a proper starting point for software
                development. I began with Non-Profit Link, a web application for
                the non-profits in my area, now used by dog shelters in South
                Africa. I then created RDI (React-Django-Implementation), which
                I used to help create byeAI, a blogging site for developers that
                strictly disallows AI generated content.
              </p>
              <p>
                I&apos;ve spent the last 6 months working on{" "}
                <ButtonLink href="#tortillas-project">Tortillas</ButtonLink>, an
                asynchronous and concurrent torrenting library/TUI, and over the
                summer of 2025,{" "}
                <ButtonLink href="https://www.linkedin.com/feed/update/urn:li:activity:7359247634479390720/">
                  I completed
                </ButtonLink>{" "}
                an intensive data science research program hosted by The Coding
                School.
              </p>
              <p>
                In terms of academics, I&apos;ve taken 4 dual enrollment IT
                classes (all CompTIA based) as well as 4 AP classes, only in the
                last two years of highschool. I scored a 5 on AP Calc AB, AP
                Computer Science A, and AP Computer Science Principles. I&apos;m
                also currently maintaining a 4.0 @ UMW.
              </p>
              <p>
                There&apos;s a lot that I didn&apos;t mention! If you&apos;d
                like to know more, check out my{" "}
                <ButtonLink href="/brag-doc">brag doc.</ButtonLink>
              </p>
            </Tab>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </LoadIn>
  );
}
