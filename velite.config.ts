import { defineCollection, defineConfig, s } from "velite";

const posts = defineCollection({
  name: "Post",
  pattern: "**/*.mdx",
  schema: s.object({
    title: s.string(),
    date: s.isodate(),
    summary: s.string(),
    slug: s.path(),
    code: s.mdx(),
  }),
});

export default defineConfig({
  root: "content",
  collections: { posts },
});
