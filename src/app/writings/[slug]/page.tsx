import * as runtime from "react/jsx-runtime";
import { notFound } from "next/navigation";
import { posts } from "../../../../.velite";
import GiscusComponent from "./giscus";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const generateStaticParams = async () =>
  posts.map((post) => ({ slug: post.slug }));

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    return { title: "Writing Not Found" };
  }

  return { title: post.title };
}

export default async function PostLayout({ params }: PageProps) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const Content = new Function(post.code)({ ...runtime }).default;

  return (
    <article className="mx-auto max-w-xl py-8">
      <div className="mb-8 text-center">
        <time dateTime={post.date} className="mb-1 text-xs text-white/65">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <h1 className="text-4xl font-medium">{post.title}</h1>
      </div>
      <div className="mb-16 space-y-4 text-white/90 [&_a]:underline [&_code]:rounded [&_code]:bg-white/10 [&_code]:px-1.5 [&_code]:py-0.5 [&_h2]:mt-6 [&_h2]:text-3xl [&_h2]:font-medium [&_h3]:mt-5 [&_h3]:text-2xl [&_h3]:font-medium [&_li]:ml-5 [&_li]:list-disc [&_li]:font-light [&_p]:max-w-none">
        <Content />
      </div>
      <GiscusComponent />
    </article>
  );
}
