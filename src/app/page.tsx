import Tab from "@/components/Tab";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Landing from "@/components/Landing";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import ContentThumbnail from "@/components/ContentThumbnail";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="flex-col items-center">
      <section
        className="flex h-[calc(100vh-48px)] flex-row items-start justify-center max-[1000px]:flex-wrap"
        id="home"
      >
        <div className="h-[80%] w-screen">
          <Landing />
        </div>
        <div className="mx-3 flex h-[20%] max-w-[600px] flex-col items-center justify-around">
          <div>
            <div className="flex flex-row items-center justify-center gap-4 font-light">
              <Image
                className="m-0 rounded-full p-0"
                src="/profile_picture_human.png"
                alt="Profile picture"
                width={70}
                height={70}
              />
              <p className="m-0 p-0 text-center">
                full-stack web dev specializing in backend development, content
                creator, sometimes a low level programmer
              </p>
            </div>
          </div>
          <Link href={"#about-me"} className="h-10">
            <ChevronDown />
          </Link>
        </div>
      </section>
      <section
        className="flex h-screen flex-col items-center justify-center"
        id="about-me"
      >
        <Tabs
          aria-label="Options"
          defaultValue="what-im-doing"
          className="font-light"
        >
          <TabsList className="mx-auto">
            <TabsTrigger value="what-im-doing">what I&apos;m doing</TabsTrigger>
            <TabsTrigger value="what-ive-done">what I&apos;ve done</TabsTrigger>
          </TabsList>
          <TabsContent value="what-im-doing" className="mx-auto w-[90%]">
            <Tab>
              <p>
                I&apos;ve recently been accepted to a national data science
                research program, hosted by The Coding School, and a number of
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
          </TabsContent>
          <TabsContent value="what-ive-done" className="mx-auto w-[90%]">
            <Tab>
              <p>
                Where to begin... I&apos;ve been mountain biking since I was 4
                years old, and racing since I was 6. Since then, I&apos;ve
                participated in multiple interscholastic teams, even helping to
                start one locally when I was 14.
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
                <Link href={"/brag-doc"}>brag doc.</Link>
              </p>
            </Tab>
          </TabsContent>
        </Tabs>
      </section>
      <section id="projects" className="mb-8">
        <h2 className="mx-auto mb-8 text-center text-3xl">projects</h2>
        <div className="mx-auto flex min-h-screen max-w-[80%] flex-row flex-wrap gap-8">
          <ContentThumbnail
            imgSrc="/tortillasthumbnail.png"
            href="https://github.com/artrixdotdev/tortillas"
            id="tortillas-project"
          >
            <h3>tortillas</h3>
            <p>
              A completely asynchronous (tokio-based) torrenting library/TUI
              written in Rust. Uses Serde for magnet URI/torrent file parsing,
              and a few other small libraries to help manage uTP/UDP/TCP/HTTP
              requests.
            </p>
          </ContentThumbnail>
          <ContentThumbnail
            imgSrc="/byeaithumbnail.png"
            href="https://byeai.dev"
            id="byeai-project"
          >
            <h3>byeAI</h3>
            <p>
              Because blogs shouldn&apos;t be written by robots. SPA w/ React,
              TanStack, and more. Backend handled by Django, Nginx, and Docker,
              running on a self-managed VPS. Custom notification system,
              facilities for moderation, and multiple levels of authentication.
            </p>
          </ContentThumbnail>
          <ContentThumbnail
            imgSrc="/rdithumbnail.png"
            href="https://github.com/kurealnum/react-django-implementation"
          >
            <h3>rdi (react-django-implementation)</h3>
            <p>
              A fully dockerized Django & {"React"} implementation, built from
              the ground up.
            </p>
          </ContentThumbnail>
          <ContentThumbnail
            href="https://nonprofitlink.org"
            imgSrc="/nplthumbnail.png"
          >
            <h3>non-profit-link</h3>
            <p>
              A web application built with Django and HTMX, built to enable
              non-profits to better collaborate and communicate.
            </p>
          </ContentThumbnail>
          <ContentThumbnail
            imgSrc="/todoistterminalthumbnail.png"
            href="https://github.com/kurealnum/todoist-terminal"
          >
            <h3>todoist-terminal</h3>
            <p>
              A TUI for Todoist, built entirely in C and Ncurses. Also uses
              libcurl and libuuid. Compiles with gcc.
            </p>
          </ContentThumbnail>
          <ContentThumbnail
            imgSrc="/dotfilesthumbnail.png"
            href="https://github.com/kurealnum/dotfiles/tree/main"
          >
            <h3>dotfiles</h3>
            <p>
              Non-traditional never-ending project. Runs with i3 (X11), picom,
              dunst, feh, nnn, and a dozen other tools. Also includes a small
              bash system maintenance script.
            </p>
          </ContentThumbnail>
          <ContentThumbnail
            imgSrc="/nvimthumbnail.png"
            href="https://github.com/kurealnum/nvimconfig"
          >
            <h3>nvimrc</h3>
            <p>
              Built-from-scratch Neovim config used for general purpose software
              development, notetaking, journaling, and more. Supports LaTeX and
              images.
            </p>
          </ContentThumbnail>
          <ContentThumbnail
            imgSrc="/contentthumbnail.png"
            href="https://www.youtube.com/@Oscar_C"
          >
            <h3>content creation: the forever project</h3>
            <p>
              Making tech videos, from Arch Linux to BitTorrent to C. I&apos;ve
              learned a lot about marketing, SEO, the intricacies of Davinci
              Resolve, OBS, and ironically, FFmpeg.
            </p>
          </ContentThumbnail>
        </div>
      </section>
      <section id="skills"></section>
      <section id="contact-me"></section>
    </div>
  );
}
