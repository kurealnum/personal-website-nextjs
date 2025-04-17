import Tab from "@/components/Tab";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Landing from "@/components/Landing";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex-col items-center">
      <section className="flex h-[calc(100vh-48px)] flex-row items-start justify-center max-[1000px]:flex-wrap">
        <div className="h-[78%] w-screen">
          <Landing />
        </div>
        <div className="mx-4 flex h-[22%] max-w-[600px] flex-row items-center justify-center">
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
      </section>
      <div className="flex h-screen flex-col items-center justify-center">
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
              <p className="mb-4">
                I'm working on Tortillas at the moment -- it's a library/TUI for
                torrenting, made entirely in Rust.{" "}
              </p>
              <p>
                My second most recent project is byeAI, a developer content
                creation site that completely disallows AI generated or assisted
                content. It's built from scratch(-ish!) with React, Django,
                Nginx, and Docker. Check it out.
              </p>
            </Tab>
          </TabsContent>
          <TabsContent value="what-ive-done" className="mx-auto w-[90%]">
            <Tab>
              <p>
                I'm working on Tortillas at the moment -- it's a library/TUI for
                torrenting, made entirely in Rust.{" "}
              </p>
              <p>
                My second most recent project is byeAI, a developer content
                creation site that completely disallows AI generated or assisted
                content. It's built from scratch(-ish!) with React, Django,
                Nginx, and Docker.
              </p>
            </Tab>
          </TabsContent>
        </Tabs>
      </div>
      {/* <section */}
      {/*   className="mt-16 flex h-screen flex-col items-center" */}
      {/*   id="about-me" */}
      {/* > */}
      {/*   <h1 className="from-secondary to-accent bg-linear-to-b from-10% bg-clip-text text-6xl text-transparent"> */}
      {/*     about me */}
      {/*   </h1> */}
      {/*   <div className=""> */}
      {/*     <p className="general-text"> */}
      {/*       If you'd like to see some of my other work in deployment, check */}
      {/*       <a href="https://nonprofitlink.org/" className="general-text-links"> */}
      {/*         this out */}
      {/*       </a> */}
      {/*       ! Also, feel free to take a look at */}
      {/*       <a href="#my-stack" className="general-text-links"> */}
      {/*         my stack */}
      {/*       </a>{" "} */}
      {/*       for more information about my skills and experiences! */}
      {/*     </p> */}
      {/*     <p className="general-text"> */}
      {/*       And finally, feel free to */}
      {/*       <a href="#contact-me" className="general-text-links"> */}
      {/*         get in touch with me */}
      {/*       </a>{" "} */}
      {/*       — I'd love to discuss potential projects, collaborations, or even */}
      {/*       employment opportunities! */}
      {/*     </p> */}
      {/*   </div> */}
      {/* </section> */}
    </div>
  );
}
