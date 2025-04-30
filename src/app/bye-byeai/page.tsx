import ButtonLink from "@/components/ButtonLink";

export default function Page() {
  return (
    <div className="mx-2 mt-8 flex flex-col items-center gap-4">
      <h1 className="text-xl">Well, it was a good run.</h1>
      <p>
        If you&apos;re seeing this, I&apos;ve finally gotten around to shutting
        down byeAI. byeAI was my first <i>major</i> project that I spent a lot
        of time on, whether that was marketing (well, trying to), analyzing, and
        of course, developing. I enjoyed all of it, even after 500 commits. If
        you made an account, thank you, and if you were just curious and decided
        to click on the link, thank you. Each of the 23 people that made
        accounts gave me so much encouragement, and each of the 450-some people
        that visited the site each month did as well.
      </p>
      <p>
        So why did I choose to shut it down? There are two main reasons.
        Firstly, I really thought there would be a lot more people that would be
        interested in a site that strictly disallows AI generated content.
        However, I think software developers (and the world, I guess) have
        really given into the AI craze. I made this site to solve a lot of the
        problems that I saw every day on sites like Dev.to and Daily.dev, and I
        truly thought there would be a lot of immediate interest in it. (A word
        of advice to myself and the reader: perhaps I should&apos;ve been more
        direct with my &quot;marketing&quot; - I never directly reached out to
        anyone or any organizations)
      </p>
      <p>
        Secondly, hosting this site is not exactly cheap. It&apos;s about $25 a
        month, $15 of which is spent on a totally unecessary managed database. I
        do understand that keeping this site up for the sake of having a bit of
        a portfolio might be wise, but frankly, I don&apos;t see this as my best
        work anymore. I&apos;m not proud of the UI, and I could be a lot prouder
        of some of the software design. Anyways, I could still host a minimal
        version of it if needbe, but $25 a month is atrocious for the use byeAI
        saw. (And no, I can&apos;t use serverless. I&apos;m using my own{" "}
        <ButtonLink href="https://github.com/kurealnum/react-django-implementation">
          custom setup
        </ButtonLink>
        )
      </p>
      <p>
        But again, I enjoyed making byeAI. I learned quite a bit, and got to
        build something from scratch, from the ground up (as much as developing
        software with React & Django is building &quot;from the ground
        up&quot;), mostly on my own, without any help.
      </p>
      <p>
        If for any reason you&apos;d like your account information, posts, or
        anything else database-related, please contact me at{" "}
        <ButtonLink href="mailto:oscar.gaske.cs@gmail.com">
          oscar.gaske.cs@gmail.com
        </ButtonLink>
        .
      </p>
    </div>
  );
}
