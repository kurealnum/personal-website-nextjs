"use client";
import ContentThumbnail from "./ContentThumbnail";
import LoadIn from "./LoadIn";

export default function Projects() {
  return (
    <LoadIn>
      <h2 className="mx-auto mb-8 text-center">cool things I've made</h2>
      <div className="mx-auto flex max-w-[80%] flex-row flex-wrap items-start justify-center gap-8 gap-y-8">
        <ContentThumbnail imgSrc="/husker-thumbnail.png" id="husker-project">
          <h3>husker</h3>
          <p>
            Prediction engine for Kalshi, capable of processing 30 million
            events/day. Built with Rust, Go, Python, Aspire, gRPC, NATS
            Jetstream, and many others.
          </p>
        </ContentThumbnail>
        <ContentThumbnail
          imgSrc="/dearly-thumbnail.png"
          href="https://dearly.to"
          id="dearly-project"
        >
          <h3>dearly.to</h3>
          <p>
            Started as a B2C app for e-cards, now pivoting to B2B SaaS for
            enterprise teams struggling to keep track of their employees'
            milestones and life events
          </p>
        </ContentThumbnail>
        <ContentThumbnail
          imgSrc="/marceline-thumbnail.png"
          href="https://github.com/kurealnum/marceline"
          id="marceline-project"
        >
          <h3>marceline</h3>
          <p>
            Local first humanistic agent. Headless local daemon, providing a
            hands free interface to an agent with full STT to TTS loop with
            thinking, tool calls, iteration via Rust + Python + gRPC.
          </p>
        </ContentThumbnail>
        <ContentThumbnail
          imgSrc="/tokenmaxer-thumbnail.png"
          href="https://github.com/kurealnum/tokenmaxer"
          id="tokenmaxer-project"
        >
          <h3>tokenmaxer</h3>
          <p>
            Side project to optimize token usage for everyone by offloading
            deterministic work via scripts, cheap/local LLMs, utilizing and
            optimizing harnesses, etc.
          </p>
        </ContentThumbnail>
        <ContentThumbnail
          imgSrc="/choreographd-thumbnail.png"
          href="https://choreographd.com"
          id="choreographd-project"
        >
          <h3>choreographd</h3>
          <p>
            Originally a B2B SaaS for project management with Next.js and
            dnd-kit, pivoted to B2C SaaS for improved iteration and
            experimentation for members of the Build In Public community
          </p>
        </ContentThumbnail>
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
            <i>truly</i> collaborative OSS project (no longer running).
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
      </div>
    </LoadIn>
  );
}
