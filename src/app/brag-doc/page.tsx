import ButtonLink from "@/components/ButtonLink";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="mt-6 flex flex-col items-center [&_ul]:text-[15px]">
      <h1>everything ever</h1>
      <p className="max-w-[400px]">
        (almost) everything notable I&apos;ve ever done.
      </p>
      <p> last updated Apr 23rd, 2025</p>
      <div className="mb-8 [&_h3]:mt-6 [&_h3]:ml-2 [&_li]:font-light [&_ul]:mx-2">
        <h2 className="mt-8 text-center">Table of Contents</h2>
        <h3>Current</h3>
        <ul>
          <li>
            <Link href="#mountain-biking">
              Mountain Biking (2014 - Present)
            </Link>
          </li>
          <li>
            <Link href="#team-riding">Team Riding (2019 - Present)</Link>
          </li>
          <li>
            <Link href="#leetcode">LeetCode (2023 - Present)</Link>
          </li>
          <li>
            <Link href="#leetcode-contests">
              LeetCode Contests (2023 - Present)
            </Link>
          </li>
          <li>
            <Link href="#devto-moderator">
              Dev.to Moderator (2023 - Present)
            </Link>
          </li>
          <li>
            <Link href="#blogging-devto">
              Blogging on Dev.to (2023 - Present)
            </Link>
          </li>
          <li>
            <Link href="#neovim">Neovim (2023 - Present)</Link>
          </li>
          <li>
            <Link href="#dotfiles">
              Dotfiles for Arch Linux (2024 - Present)
            </Link>
          </li>
          <li>
            <Link href="#byeai">byeAI (August 18th 2024 - Present)</Link>
          </li>
          <li>
            <Link href="#late-night-coding">
              Coding Youtube Series (September 18th 2024 - Present)
            </Link>
          </li>
          <li>
            <Link href="#private-tutoring">
              Private tutoring (Oct 4th 2024 - Present)
            </Link>
          </li>
          <li>
            <Link href="#highschool-tutoring">
              Highschool tutoring (October 24th 2024 - Present)
            </Link>
          </li>
          <li>
            <Link href="#youtube-content">
              Youtube Content Creation (December 2024 - Present)
            </Link>
          </li>
        </ul>
        <h3>Past (chronological order)</h3>
        <ul>
          <li>
            <Link href="#dog-training">4H Dog Training (2017-2018)</Link>
          </li>
          <li>
            <Link href="#cs50">CS50 (Spring of 2023)</Link>
          </li>
          <li>
            <Link href="#algorithms">
              Algorithms: Design and Analysis (May 2023 - July 2023)
            </Link>
          </li>
          <li>
            <Link href="#food-pantry">
              Food Pantry Volunteer (Summer of 2023)
            </Link>
          </li>
          <li>
            <Link href="#personal-website">
              Personal Website (July 2023 - August 2023)
            </Link>
          </li>
          <li>
            <Link href="#nonprofit-link">
              Non-Profit Link (April 2023 - March 2024)
            </Link>
          </li>
          <li>
            <Link href="#react-django">
              React/Django implementation (June 2024 - July 2024)
            </Link>
          </li>
          <li>
            <Link href="#hackathon">
              Hackathon (July 14, 2024 - July 19, 2024)
            </Link>
          </li>
          <li>
            <Link href="#website-revamp">
              Personal website revamp (April 8th, 2025 - April 24th, 2025)
            </Link>
          </li>
        </ul>

        <h3>Miscellaneous achievements {"& certs"}</h3>
        <ul>
          <li>
            <Link href={"#top-7"}>Featured in Dev.to’s “Top 7 Posts”</Link>
          </li>
          <li>
            <Link href={"#grades"}>Academics</Link>
          </li>
          <li>
            <Link href={"#cs50-cert"}>CS50</Link>
          </li>
          <li>
            <Link href={"#stanford-cert"}>
              Stanford Algorithms: Design and Analysis, Part 1
            </Link>
          </li>
        </ul>
      </div>
      <h2>Current</h2>
      <ul className="mx-2 flex flex-col items-center gap-8 [&_h3]:font-normal">
        <div className="mt-2">
          <h3 id="mountain-biking">Mountain Biking (2014 - Present)</h3>
          <p>
            I started mountain biking before most kids rode a school bus. I had
            my first race at 6 years old, going on to join a regional mountain
            bike team in 6th grade and continued racing with this team until 9th
            grade when I turned my attention to assisting in developing a new
            team in my local area. I still ride on a weekly basis, working on
            skills and fitness, and I continue to race in unique events when my
            schedule is free. My last race was the PocaGo enduro in Pocahontas
            State Park where I placed 11th in the most challenging category. My
            second to last race was the Paranormal 6 hour, starting at 16:00 and
            ending at 22:30) where my team tied for second.
          </p>
        </div>

        <div>
          <h3 id="team-riding">Team Riding (2019 - Present)</h3>
          <p>
            As mentioned in the section above, I started riding and racing on a
            NICA team when I was in 6th grade, and my father and I started our
            own team when I was in 9th grade in our area. This team initially
            split due to disagreements between coaches and bullying between some
            of the student athletes, but we’re now bigger than we ever were
            before, with almost 40 attendees at the majority of our practices.
            At said practices, I lead rides 95% of the time, develop my skills
            and fitness, and practice social skills on the trail. I also
            occasionally work with our younger riders in order to help our
            coaches to develop our next generation of riders.
          </p>
        </div>

        <div>
          <h3 id="leetcode">LeetCode (2023 - Present)</h3>
          <p>
            After I finished my Stanford course on algorithms (see{" "}
            <ButtonLink href="#misc">miscellaneous achievements</ButtonLink>), I
            had enough confidence to start working away at LeetCode problems –
            which, if you’re unfamiliar, are algorithm based problems in an
            interview format). LeetCode problems tend to be extremely difficult
            because it’s extremely hard to find help, and when you don’t
            understand a problem, it’s generally up to you to figure out what
            you don’t understand and how to solve it. Additionally, there are
            occasionally multiple correct solutions. In total, I’ve solved about
            160 problems.
          </p>
        </div>

        <div>
          <h3 id="leetcode-contests">LeetCode Contests (2023 - Present)</h3>
          <p>
            Once I got my confidence up (see{" "}
            <ButtonLink href="#leetcode">LeetCode</ButtonLink>), I tried out a
            few live LeetCode contests (4 in total). I’d love to participate in
            some more in the future, but as I’ve previously mentioned, LeetCode
            takes up a lot of time, and preparing for these contests is even
            more time consuming. Each contest took place on Saturday night, and
            every contest had 4 problems – 1 easy problem, 2 medium problems,
            and 1 hard problem.
          </p>
        </div>

        <div>
          <h3 id="devto-moderator">Dev.to Moderator (2023 - Present)</h3>
          <p>
            As a moderator on{" "}
            <ButtonLink href="https://dev.to/kurealnum">Dev.to</ButtonLink>, I
            log on to Dev.to every day, scroll through my feed, find a post to
            leave a positive & encouraging comment on, and look for any hateful,
            spammy, or AI generated posts. After that, I log on to the Dev.to
            moderator discord, check in on any discussions, and reply to
            anything that needs to be replied to. I semi-regularly discuss the
            best way to deal with spammers, and do my best to apply what I hear
            and learn from the Dev.to moderator discord to the Dev.to community.
          </p>
        </div>

        <div>
          <h3 id="blogging-devto">Blogging on Dev.to (2023 - Present)</h3>
          <p>
            I write monthly (ish) blogs on{" "}
            <ButtonLink href="https://dev.to/kurealnum">Dev.to</ButtonLink>,
            from anything to “state of the community” style posts to technical
            writing such as writing a post about how I implemented React and
            Django with Docker (two frameworks that are notoriously tricky to
            implement, check out the project{" "}
            <ButtonLink href="https://github.com/kurealnum/react-django-implementation">
              here
            </ButtonLink>
            ). As of April 2025, I have 14 thousand followers, and 40 thousand
            post views.
          </p>
        </div>

        <div>
          <h3 id="neovim">Neovim (2023 - Present)</h3>
          <p>
            I picked up an extremely extensible and extremely barebones editor
            called Neovim in late 2023. I spent a good deal of time learning its
            paradigms and motions (literally, they’re called Vim motions). Then
            I wrote my own configuration for the editor in the Lua programming
            language and installed and configured ~49 plugins. I love it to
            death and still use it to this day (and I never plan to switch to
            anything else). Additionally, I recently (December 2024) began to
            use Neovim for note taking, and I produced a video and blog post
            about said setup that gathered lots of attention. You can read more
            about that in <ButtonLink href="#misc">this</ButtonLink> section.
            P.S: The reason this is in the “Current” section is because I spend
            a decent bit of time maintaining the configuration files when
            updates to plugins inevitably break something.
          </p>
        </div>

        <div>
          <h3 id="dotfiles">Dotfiles for Arch Linux (2024 - Present)</h3>
          <p>
            When I started programming many moons ago, I daily drove Windows.
            This quickly became a hamper on my productivity however, so I
            started to dual boot to Ubuntu. However, Ubuntu is a pain to modify
            (ppa’s, apt, gdm, gnome), so I chose to boot to Arch Linux. I
            configured my own desktop environment from scratch using i3 as a
            window manager and picom as my compositor (also stuff like dunst,
            rofi, and kitty). As with Neovim, this is listed in “Current”
            because I’m almost constantly messing with my configuration.
          </p>
        </div>

        <div>
          <h3 id="byeai">byeAI (August 18th 2024 - Present)</h3>
          <p>
            I created a blogging site for developers that solves the biggest
            problem modern blogging sites have: an influx of AI generated
            content. I developed a single page application (SPA) with React,
            TanStack Query, Redux, and React Router Dom, and integrated frontend
            testing with Vitest. I also deployed the application on a virtual
            private server (VPS), implemented Nginx as well as tools for
            developer operations, and configured Linux to manage continuous
            integration on the server side. On the less technical side of
            things, I also marketed the website on multiple social platforms. I
            created both short-form and full length videos involving the
            promotion of the website, as well as writing articles with the
            intention of advertising byeAI. I also utilized Google Analytics to
            track and monitor the site’s performance.
          </p>
        </div>

        <div>
          <h3 id="late-night-coding">
            Coding Youtube Series (September 18th 2024 - Present)
          </h3>
          <p>
            I created and uploaded 35+ YouTube “coding vlog” style videos over
            the course of multiple months (and hence the title, I still upload
            occasionally today). I accumulated about 3000 views and 80
            subscribers from this endeavor. I also turned this into a{" "}
            <ButtonLink href="https://dev.to/kurealnum/i-recorded-myself-coding-for-45-days-1p6l">
              blog post
            </ButtonLink>{" "}
            on Dev.to titled “I recorded myself coding for 45 days”. When I was
            recording, I was primarily working on{" "}
            <ButtonLink href="https://byeai.dev">byeAI</ButtonLink>.
          </p>
        </div>

        <div>
          <h3 id="private-tutoring">
            Private tutoring (Oct 4th 2024 - Present)
          </h3>
          <p>
            Before I started tutoring for my local highschool (see{" "}
            <ButtonLink href="#highschool-tutoring">this section</ButtonLink>),
            I started tutoring online on the small platform Tutorpeers. So far,
            I’ve had about 10 sessions with students, both paid and free. I have
            confidently and successfully tutored a 3rd year college level
            Computer Science student in the SDLC (software development
            lifecycle) & received multiple 5 star ratings. I’ve also spent a
            great deal of time working with a local student in preparation for
            the two upcoming SAT tests (Spring/Summer of 2025). I worked with
            them once per week, and I curated & collected problems for them
            nearly daily to ensure an optimal and efficient learning experience
            for the student.
          </p>
        </div>

        <div>
          <h3 id="highschool-tutoring">
            Highschool tutoring (October 24th 2024 - Present)
          </h3>
          <p>
            When I was taking AP tests, I spent the extra time I had before and
            after the tests tutoring students in pre-Algebra/Algebra. I sorely
            enjoyed the experience, and I learned a lot about both how to teach
            someone and what it meant to teach someone. Then, when I visited my
            local highschool for an informational meeting about financial aid in
            September, I ended up discussing the possibility of volunteering as
            a student tutor weekly for Algebra I, Geometry, Algebra II,
            Trigonometry, and Precalculus. This possibility turned into a
            reality, and I spent the next 6 months visiting my high school
            weekly to work 1-on-1 with students that are struggling with the
            previously mentioned subjects. I usually worked with two other adult
            volunteers that attend, as well as the Algebra I/Algebra II teacher
            that holds the sessions. Additionally, I practiced highschool level
            mathematics (specifically in the mentioned subjects) every day to
            ensure that I can give students the best help possible.
          </p>
        </div>

        <div>
          <h3 id="youtube-content">
            Youtube Content Creation (December 2024 - Present)
          </h3>
          <p>
            As I graduated from making “Late Night Coding” style-videos (see
            <ButtonLink href="#late-night-coding">this section</ButtonLink>), I
            began to make much more professional and edited videos. The first
            video in this style (which took about 3 weeks to produce) amassed me
            about 25 thousand views in a month, as well as 1 thousand hours of
            watch time and 250 subscribers. The second video (which again took
            about 3 weeks to produce) amassed me almost 60 thousand views in 3
            days, as well as 3 thousand hours of watch time and 1 thousand
            subscribers. Since then, I have monetized my channel and I upload on
            a semi-consistent basis (about once every month).
          </p>
        </div>
      </ul>
      <h2 className="mt-8">Past (chronological order)</h2>
      <ul className="mx-2 flex flex-col items-center gap-8">
        <div className="mt-2">
          <h3 id="dog-training">4H Dog Training (2017-2018)</h3>
          <p>
            I trained my dog, Scarlett, to perform agility at the Virginia State
            Fair. I spent about a year preparing her for this, however when we
            arrived, she decided that she didn’t want to perform that day.
            Nevertheless, I kept my composure and kept trying, and I was
            eventually able to get her to perform on about a third of the
            obstacles that she was intended to. This was a very valuable
            learning experience for me, as it was certainly a test of patience.
            Additionally, I won first place for my Junior Record Book – a graded
            scrapbook full of information about Scarlett.
          </p>
        </div>

        <div>
          <h3 id="cs50">CS50 (Spring of 2023)</h3>
          <p>
            When I became deeply interested in Computer Science (CS), I wanted
            to find a starting point that I could work off of. I found CS50, a
            free online course hosted by Harvard. CS50 is a free self paced
            college level course about thinking algorithmically and efficiently
            solving problems. It’s where I got my first experience with the C
            programming language.
          </p>
        </div>

        <div>
          <h3 id="algorithms">
            Algorithms: Design and Analysis (May 2023 - July 2023)
          </h3>
          <p>
            After CS50, I became deeply invested in algorithms. I found a
            college level course hosted by Stanford that went into the more
            technical side of algorithms (i.e. Big O notation, a deep look into
            time complexity, etc). It cost $75, and it was absolutely worth it.
            This course helped me build the confidence to take on some more
            challenging LeetCode problems. You can check out the certificate I
            got <ButtonLink href="#stanford">here</ButtonLink>.
          </p>
        </div>

        <div>
          <h3 id="food-pantry">Food Pantry Volunteer (Summer of 2023)</h3>
          <p>
            I volunteered at my local food pantry for 4-5 hours almost every
            week over the summer of 2023. I improved my social skills and got to
            meet a lot of awesome people. I normally worked in the canned aisle,
            and my responsibility was to make sure that people didn’t take too
            many cans (although I always gave people extra, as we always had
            plenty and there was almost no one that ever tried to take an absurd
            amount of canned goods).
          </p>
        </div>

        <div>
          <h3 id="personal-website">
            Personal Website (July 2023 - August 2023)
          </h3>
          <p>
            I created my own personal website with Django and hosted it on
            PythonAnywhere. I spent a lot of time learning about and designing
            the UI/UX, as well as learning a new technology: Figma.
          </p>
        </div>

        <div>
          <h3 id="nonprofit-link">Non-Profit Link (April 2023 - March 2024)</h3>
          <p>
            I created a web app to help nonprofits share their resources (you
            can read more about it here). I made it open source and worked to
            advertise the project on multiple platforms, and I was able to get 6
            people to contribute to the project (this is where I met the partner
            that I mentioned in the hackathon; see: Hackathon). I learned a lot
            about Git, Django, Figma, teamwork and collaboration, and developer
            operations such as managing a virtual private server and multiple
            domains. This software is currently being used by dog shelters in
            South Africa.{" "}
          </p>
        </div>

        <div>
          <h3 id="react-django">
            React/Django implementation (June 2024 - July 2024)
          </h3>
          <p>
            I wanted to make a web app that could integrate React and Django
            together, because I wanted more customization in my development
            experience, and Django alone wasn’t cutting it. I dockerized both
            applications and used a reverse proxy/web server called Nginx to
            connect the two services, and I implemented authentication and page
            routing. I then wrote a blog post on Dev.to detailing the project
            and how it could be used as a template.
          </p>
        </div>

        <div>
          <h3 id="hackathon">Hackathon (July 14, 2024 - July 19, 2024)</h3>
          <p>
            I took part in a virtual hackathon with a partner that I met while
            creating open source software (see: Non-Profit Link). Having a
            partner was great for brainstorming, and it gave me an opportunity
            to practice communication and collaboration skills. Additionally, I
            learned a bit of German in order to better communicate with my
            partner, whose native language was German. The hackathon consisted
            of 3 separate projects, all of which I was tasked to use an API to
            create some sort of application. The three APIs that I used were
            OpenMeteo, OpenFoodFacts, and OMDb API.
          </p>
        </div>
        <div>
          <h3 id="website-revamp">
            Personal website revamp (April 8th, 2025 - April 24th, 2025)
          </h3>
          <p>
            I’d link a demo for this project, but you’re looking at it right
            now! Amidst studying for two AP exams and finals, I revamped my
            pre-existing website with NextJS, Tailwind, and a few other tools.
          </p>
        </div>

        <h2>Miscellaneous achievements & certs</h2>
        <ul className="mx-2 flex flex-col items-center gap-8 [&_h3]:font-normal">
          <div>
            <h3 id="top-7">Featured in Dev.to’s “Top 7 Posts”</h3>
            <p className="mb-2">
              I wrote a blog post about how I take notes with Neovim, which was
              featured in Dev.to’s “Top 7 Featured DEV posts of the week”. For
              context, Dev.to is a platform with 2 million software developers
              creating developer-focused content in the form of articles. I
              additionally produced a video on this topic (that took about 3
              weeks to make), and that video garnered over 10 thousand views on
              YouTube in a week, and also garnered over 100 thousand impressions
              (in other words, my video was shown to 100 thousand people, and 10
              thousand of those people decided to click on it). I also gained
              about 200 subscribers on YouTube from this video.
            </p>
            <p className="mb-2">
              I also had yet another post featured on March 11th, 2025. This
              post was about Arch Linux and productivity. I also produced a
              video on this topic (that took about a month to make, and that
              video garnered almost 100 thousand views on Youtube in a week, and
              over 1 million impressions. I gained about 2 thousand subscribers
              from this video.
            </p>
            <p>
              Finally, I had a third post featured on April 1st, 2025. This post
              was about my experiences with C, ncurses, and a few other low
              level libraries. I of course produced a video on this, garnering
              about 18 thousand views and 200 thousand impressions. I also
              earned the C badge on Dev.to for the most popular C-related post
              from the past seven days.
            </p>
          </div>
          <div>
            <h3 id="grades">Academics</h3>
            <p className="mb-2">
              I had a top 3 grade in Pre-Calculus class (97.44%), and while the
              first two years of highschool were rocky, I maintained a 4.0 GPA
              throughout the last two years.
            </p>
            <p>
              A few other notable academic achievements: I scored a 5 on the AP
              CSP exam, and a 1330 on the SAT (junior year, 1410 on practice
              test)
            </p>
          </div>
          <div>
            <h3 id="cs50-cert">CS50</h3>
            <p>
              Completed Harvard&apos;s CS50 (introductory college level computer
              science course) in my sophmore year of highschool.
            </p>
            <Image
              className="mx-auto my-4"
              src={"/CS50x.png"}
              width={400}
              height={400}
              alt=""
            />
          </div>
          <div>
            <h3 id="stanford-cert">
              Stanford Algorithms: Design and Analysis, Part 1
            </h3>
            <p>
              Completed Standford&apos;s course on Algorithms during the summer
              of my sophmore/junior year of highschool.
            </p>
            <Image
              className="mx-auto my-4 mb-8"
              src={"/stanford.png"}
              width={400}
              height={400}
              alt=""
            />
          </div>
        </ul>
        <ScrollToTopButton />
      </ul>
    </div>
  );
}
