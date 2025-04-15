"use client";

import { Card, CardBody, Tab, Tabs } from "@heroui/react";

export default function AboutMeTabs() {
  return (
    <div className="flex flex-col">
      <Tabs aria-label="Options">
        <Tab key="what-im-doing" aria-label="what I'm doing">
          <Card>
            <CardBody>
              I primarily use Django as my backend framework, although I'm open
              to learning other frameworks. I'm working on{" "}
              <a
                className="general-text-links"
                href="https://github.com/artrixdotdev/tortillas"
              >
                Tortilla
              </a>{" "}
              at the moment -- it's a library/TUI for torrenting, made entirely
              in Rust. My second most recent project is byeAI, a developer
              content creation site that completely disallows AI generated or
              assisted content. It's built with React, Django, Nginx, and
              Docker. Check it out{" "}
              <a href="https://byeai.dev" className="general-text-links">
                here
              </a>
              .
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
