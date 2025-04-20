import Landing from "@/components/Landing";
import Image from "next/image";
import { ChevronDown, LinkIcon, Mail } from "lucide-react";
import Link from "next/link";
import ContentThumbnail from "@/components/ContentThumbnail";
import AboutMe from "@/components/AboutMe";
import Skill from "@/components/Skill";
import YouTubeVideo from "@/components/YouTubeVideo";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="flex-col items-center">
      <section
        className="flex h-[calc(100vh-48px)] flex-col items-center justify-center max-[1000px]:flex-wrap"
        id="home"
      >
        <div className="h-[80%] w-screen">
          <Landing />
        </div>
        <div className="mx-3 flex h-[20%] max-w-[500px] flex-col items-center justify-around">
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
      <AboutMe />
      <section id="projects" className="mb-8">
        <h2 className="mx-auto mb-8 text-center text-3xl">projects</h2>
        <div className="mx-auto flex max-w-[80%] flex-row flex-wrap items-start justify-center gap-8 gap-y-8">
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
              Because blogs shouldn&apos;t be written by robots. Uses RDI (see
              next), running on a self-managed VPS. Custom notification system,
              facilities for moderation, and multiple levels of auth.
            </p>
          </ContentThumbnail>
          <ContentThumbnail
            imgSrc="/rdithumbnail.png"
            href="https://github.com/kurealnum/react-django-implementation"
          >
            <h3>rdi (react-django-implementation)</h3>
            <p>
              A fully dockerized Django & {"React"} implementation, built from
              the ground up. SPA w/ TanStack, React Router and more. Backend
              handled by Django, Nginx, and Docker.{" "}
            </p>
          </ContentThumbnail>
          <ContentThumbnail
            href="https://nonprofitlink.org"
            imgSrc="/nplthumbnail.png"
          >
            <h3>non-profit-link</h3>
            <p>
              A web application built with Django and HTMX, built to enable
              non-profits to better collaborate and communicate. My first{" "}
              <i>truly</i> collaborative OSS project.
            </p>
          </ContentThumbnail>
          <ContentThumbnail
            imgSrc="/todoistterminalthumbnail.png"
            href="https://github.com/kurealnum/todoist-terminal"
          >
            <h3>todoist-terminal</h3>
            <p>
              A TUI for Todoist, built entirely in C and Ncurses. Uses libcurl
              to manage requests to REST APIs. Also uses libuuid, cJSON, and a
              few other libraries. Compiles with gcc.
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
      <section
        id="skills"
        className="mx-auto mt-16 flex min-h-screen w-[80%] flex-col items-center"
      >
        <h1 className="mt-4 text-3xl">skillz</h1>
        <p className="text-center font-light">
          or all the noteworthy things that I know how to use
        </p>
        <h2 className="mt-8 text-xl">web dev stack</h2>
        <div className="flex max-w-[440px] flex-row flex-wrap justify-center gap-2">
          <Skill src="javascript-original.svg" />
          <Skill src="typescript.svg" />
          <Skill src="python-original.svg" />
          <Skill src="css3-original.svg" />
          <Skill src="html5-original.svg" />
          <Skill src="react-original.svg" />
          <Skill
            src="reactrouter.svg"
            className="rounded-md bg-neutral-300 p-1"
          />
          <Skill src="tailwindcss-original.svg" />
          <Skill src="django-plain.svg" />
          <Skill src="nginx.svg" />
          <Skill
            src="djangorest-original.svg"
            className="rounded-md bg-neutral-300"
          />
          <Skill src="docker-plain.svg" />
        </div>
        <h2 className="mt-8 text-xl">general tools</h2>
        <div className="flex max-w-[300px] flex-row flex-wrap justify-center gap-2">
          <Skill src="c-original.svg" />
          <Skill src="java-original.svg" />
          <Skill src="rust.svg" />
          <Skill src="git-original.svg" />
          <Skill src="sqlite-original.svg" />
          <Skill src="postgresql-plain.svg" />
          <Skill src="linux.svg" />
          <Skill src="latex.svg" />
        </div>
        <h2 className="mt-8 text-xl">misc. tech</h2>
        <div className="flex flex-row flex-wrap justify-center gap-2">
          <Skill src="neovim-original.svg" />
          <Skill src="archlinux-original.svg" />
          <Skill src="arduino.svg" />
          <Skill src="davinci.svg" />
          <Skill src="figma.svg" />
        </div>
      </section>
      <section
        id="content"
        className="mx-auto flex w-[90%] flex-col items-center"
      >
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
      </section>
      <section
        id="contact-me"
        className="flex min-h-screen flex-col items-center justify-between"
      >
        <div></div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl">contact me</h1>
          <p className="font-light">Feel free to reach out!</p>
          <div className="mt-2 flex flex-row gap-4">
            <a href="https://linktr.ee/kureal">
              <LinkIcon />
            </a>
            <a href="mailto:oscar.gaske.cs@gmail.com">
              <Mail />
            </a>
          </div>
        </div>
        <p className="mb-4 text-xs">
          This site was built with NextJS, Shadcn, React, and love
        </p>
      </section>
    </div>
  );
}
