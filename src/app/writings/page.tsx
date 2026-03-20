import Link from "next/link";
import { posts } from "../../../.velite";
import WritingsWarningModal from "@/components/WritingsWarningModal";

type Post = (typeof posts)[number];

function PostCard(post: Post) {
  return (
    <div className="mb-8 rounded-lg border border-white/15 bg-black/20 p-5">
      <h2 className="text-2xl">
        <Link href={"/writings" + "/" + post.slug} className="hover:underline">
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-white/65">
        {new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </time>
      <p className="font-normal max-w-none!">{post.summary}</p>
    </div>
  );
}

export default function WritingsPage() {
  const publishedPosts = posts.sort(
    (a, b) => +new Date(b.date) - +new Date(a.date),
  );

  return (
    <main className="mx-auto min-h-[calc(100vh-48px)] w-[92%] max-w-3xl py-10">
      <WritingsWarningModal />
      <header className="mb-10">
        <h1 className="text-4xl font-medium">Writings</h1>
        <p className="mt-3 max-w-2xl text-white/75">
          Random shit that I probably shouldn't put online
        </p>
      </header>

      <section>
        {publishedPosts.map((post) => (
          <PostCard key={post.slug} {...post} />
        ))}
      </section>
    </main>
  );
}
