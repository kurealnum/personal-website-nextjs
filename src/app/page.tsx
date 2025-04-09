import { Button } from "@heroui/button";

export default function Home() {
  return (
    <div className="flex-col items-center">
      <section className="flex h-screen flex-col items-center justify-center">
        <h1 className="from-secondary to-accent bg-linear-to-b from-10% bg-clip-text text-6xl text-transparent">
          hi, i&apos;m Oscar
        </h1>
        <Button className="border-accent mt-8 rounded-4xl border border-solid px-8 py-2">
          about me
        </Button>
      </section>
      <section className="section-wrapper" id="about-me">
        <h1>about me</h1>
        <p className="general-text">
          Hello there! I’m Oscar, an aspiring full-stack web developer
          specializing in backend development. I'm also known as kureal or
          kurealnum in the online world!
        </p>
        <p className="general-text">
          I primarily use Django as my backend framework, although I'm open to
          learning other frameworks. I'm working on{" "}
          <a
            className="general-text-links"
            href="https://github.com/artrixdotdev/tortillas"
          >
            Tortilla
          </a>{" "}
          at the moment -- it's a library/TUI for torrenting, made entirely in
          Rust. My second most recent project is byeAI, a developer content
          creation site that completely disallows AI generated or assisted
          content. It's built with React, Django, Nginx, and Docker. Check it
          out{" "}
          <a href="https://byeai.dev" className="general-text-links">
            here
          </a>
          .
        </p>
        <p className="general-text">
          If you'd like to see some of my other work in deployment, check
          <a href="https://nonprofitlink.org/" className="general-text-links">
            this out
          </a>
          ! Also, feel free to take a look at
          <a href="#my-stack" className="general-text-links">
            my stack
          </a>{" "}
          for more information about my skills and experiences!
        </p>
        <p className="general-text">
          And finally, feel free to
          <a href="#contact-me" className="general-text-links">
            get in touch with me
          </a>{" "}
          — I'd love to discuss potential projects, collaborations, or even
          employment opportunities!
        </p>
        <section className="flex-cont" aria-label="resume-button">
          <button>
            <a
              href="https://docs.google.com/document/d/104CdIhV0xpPLE5--gmSbonsOXHvxtyxsc5pmr79R42k/edit?usp=sharing"
              className="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              my resume
            </a>
          </button>
        </section>
      </section>
      <section className="section-wrapper">
        <h1 className="my-tech-header" id="my-stack">
          my stack
        </h1>
        <figure></figure>
      </section>
    </div>
  );
}
