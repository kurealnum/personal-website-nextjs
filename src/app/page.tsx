import { ChevronDown } from "lucide-react";
import Link from "next/link";
import AboutMe from "@/components/AboutMe";
import Pfp from "@/components/Pfp";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Content from "@/components/Content";
import Personal from "@/components/Personal";
import ContactMe from "@/components/ContactMe";
import ScrollToIdButton from "@/components/ScrollToIdButton";

export default function Page() {
  return (
    <div className="flex-col items-center">
      <section
        className="flex h-[calc(100vh-48px)] flex-col items-center justify-center max-[1000px]:flex-wrap"
        id="home"
      >
        <div className="mx-3 flex h-[20%] max-w-[530px] flex-col items-center justify-around">
          <h1 className="mx-auto text-3xl">hi, I&apos;m Oscar</h1>
          <div>
            <div className="flex flex-row items-center justify-center gap-4 font-light">
              <div className="max-h-[70px] min-w-[70px]">
                <Pfp />
              </div>
              <p className="m-0 p-0 text-center">
                full-stack web developer specializing in backend development,
                content creator, low level programmer. nvim {"& arch user"}
              </p>
            </div>
          </div>
          <ScrollToIdButton id="#about-me">
            <ChevronDown />
          </ScrollToIdButton>
        </div>
      </section>
      <section
        id="about-me"
        className="mx-auto min-h-[70vh] max-w-[500px] pt-8 [&_p]:font-light"
      >
        <AboutMe />
      </section>
      <section id="projects" className="mb-4 pb-8">
        <Projects />
      </section>
      <section id="skills" className="mx-auto mt-32 min-h-screen w-[80%]">
        <Skills />
      </section>
      <section id="content" className="mx-auto min-h-[80vh] w-[90%]">
        <Content />
      </section>
      <section id="me" className="mx-auto w-[90%]">
        <Personal />
      </section>
      <section id="contact-me" className="min-h-screen">
        <ContactMe />
      </section>
    </div>
  );
}
