import AboutMeTabs from "@/components/AboutMeTabs";
import NameSphere from "@/components/NameSphere";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex-col items-center">
      <section className="flex h-[91vh] flex-col items-center justify-center">
        <NameSphere />
        <Link
          className={buttonVariants({ variant: "outline" })}
          href="#about-me"
        >
          about me
        </Link>
      </section>
      <section
        className="mt-16 flex h-screen flex-col items-center"
        id="about-me"
      >
        <h1 className="from-secondary to-accent bg-linear-to-b from-10% bg-clip-text text-6xl text-transparent">
          about me
        </h1>
        <div className="mt-12 flex flex-row flex-wrap items-center justify-center gap-8 font-light">
          <Image
            className="m-0 rounded-full p-0"
            src="/profile_picture_human.png"
            alt="Profile picture"
            width={100}
            height={100}
          />
          <p className="m-0 max-w-[379px] p-0">
            Hello there! I’m Oscar, an aspiring full-stack web developer
            specializing in backend development. I&apos;m also known as kureal
            or kurealnum in the online world!
          </p>
        </div>
        <AboutMeTabs />
        <div className="">
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
        </div>
      </section>
    </div>
  );
}
