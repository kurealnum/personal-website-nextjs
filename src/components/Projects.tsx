"use client";
import ContentThumbnail from "./ContentThumbnail";
import LoadIn from "./LoadIn";

export default function Projects() {
  return (
    <LoadIn>
      <h2 className="mx-auto mb-8 text-center">projects</h2>
      <div className="mx-auto flex max-w-[80%] flex-row flex-wrap items-start justify-center gap-8 gap-y-8">
        <ContentThumbnail
          imgSrc="/tortillasthumbnail.png"
          href="https://github.com/artrixdotdev/tortillas"
          id="tortillas-project"
        >
          <h3>tortillas</h3>
          <p>
            An asynchronous and concurrent (tokio-based) torrenting library/TUI
            written in Rust. Capable of magnet URI/torrent file parsing and
            torrenting/tracking through uTP/UDP/TCP/HTTP.
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
            A fully dockerized Django & {"React"} implementation, built from the
            ground up. SPA w/ TanStack, React Router and more. Backend handled
            by Django, Nginx, and Docker.{" "}
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
            A TUI for Todoist, built entirely in C and Ncurses. Uses libcurl to
            manage requests to REST APIs. Also uses libuuid, cJSON, and a few
            other libraries. Compiles with gcc.
          </p>
        </ContentThumbnail>
        <ContentThumbnail
          imgSrc="/dotfilesthumbnail.png"
          href="https://github.com/kurealnum/dotfiles/tree/main"
        >
          <h3>dotfiles</h3>
          <p>
            Non-traditional never-ending project. Runs with i3 (X11), picom,
            dunst, feh, nnn, and a dozen other tools. Also includes a small bash
            system maintenance script.
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
          imgSrc="/davinci.png"
          href="https://www.youtube.com/@Oscar_C"
        >
          <h3>content creation: the forever project</h3>
          <p>
            Making tech videos, from Arch Linux to BitTorrent to C. I&apos;ve
            learned a lot about marketing, SEO, the intricacies of Davinci
            Resolve, OBS, and ironically, FFmpeg.
          </p>
        </ContentThumbnail>
        <ContentThumbnail
          imgSrc="/fredcomphomepage.png"
          href="https://www.fredericksburgmtb.org"
        >
          <h3>fred comp homepage</h3>
          <p>
            A simple but effective website for the Fredericksburg Composite
            Mountain Biking team. Designed with Figma, developed with NextJS,
            Tailwind, and Framer Motion.
          </p>
        </ContentThumbnail>
      </div>
    </LoadIn>
  );
}
