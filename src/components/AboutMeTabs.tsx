import {
  Tabs,
  Tab,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@radix-ui/react-tabs";

// <Tab key="what-im-doing" aria-label="what I'm doing">
//   <Card>
//     <CardBody>
//       I primarily use Django as my backend framework, although I'm
//       open to learning other frameworks. I'm working on{" "}
//       <a
//         className="general-text-links"
//         href="https://github.com/artrixdotdev/tortillas"
//       >
//         Tortilla
//       </a>{" "}
//       at the moment -- it's a library/TUI for torrenting, made
//       entirely in Rust. My second most recent project is byeAI, a
//       developer content creation site that completely disallows AI
//       generated or assisted content. It's built with React, Django,
//       Nginx, and Docker. Check it out{" "}
//       <a href="https://byeai.dev" className="general-text-links">
//         here
//       </a>
//       .
//     </CardBody>
//   </Card>
// </Tab>

export default function AboutMeTabs() {
  return (
    <div className="flex flex-col">
      <Tabs aria-label="Options">
        <TabsList>
          <TabsTrigger value="what-im-doing">what I&apos;m doing</TabsTrigger>
          <TabsTrigger value="what-ive-done">what I&apos;ve done</TabsTrigger>
        </TabsList>
        <TabsContent value="what-im-doing">
          <p>Some cool stuff</p>
        </TabsContent>
        <TabsContent value="what-ive-done">
          <p>Some cool stuff</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}
