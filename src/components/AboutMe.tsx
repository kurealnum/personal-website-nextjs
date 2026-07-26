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
import Fade from "embla-carousel-fade";

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
        opts={{ duration: 35, watchDrag: false }}
        plugins={[Fade()]}
        className="mb-8"
      >
        <CarouselContent>
          <CarouselItem>
            <Tab>
              <p>
                Building{" "}
                <ButtonLink href="https://choreographd.com/">
                  Choreographd
                </ButtonLink>
                , prediction engine (private), and more
                {" while working as an SWE @ "}
                <ButtonLink href="https://zenithflow.com/">
                  Zenith Flow
                </ButtonLink>
                . MK5 Supra by May 2027.
              </p>
              <p>
                Past SWE work, I&apos;m working as the Chief Scoring Officer for
                the{" "}
                <ButtonLink href="https://virginiamtb.org/">VA NICA</ButtonLink>{" "}
                league on the weekends. I&apos;m also coaching on my local youth
                mountain biking{" "}
                <ButtonLink href="https://www.fredericksburgmtb.org/">
                  team
                </ButtonLink>{" "}
                when I can. I&apos;m also attending the University of Mary
                Washington full time (Dean's List).
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
                Started with CS50 when I was 15. Did a open source projects/SaaS
                startup attempts, then made a BitTorrent library in Rust that
                (unofficially) outperforms the leading torrent library. I also
                completed a research program while I was doing this.
              </p>
              <p>
                I then interned at two companies as a software engineer in the
                first semester of college. Started running the software side of
                one of those companies as their founding engineer before my
                first semester ended.
              </p>
              <p>
                Then a VC-backed startup flew me to San Francisco over spring
                break. I turned down their offer to work with them since I
                wanted to work at a local startup while building my own tools on
                the side.
              </p>
            </Tab>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </LoadIn>
  );
}
