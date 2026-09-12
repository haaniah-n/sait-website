import { faculty, committee } from "@/data/people";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { MotionReveal } from "@/components/effects/motion-reveal";

export default function AboutPage() {
  return (
    <main>
      <section className="border-b border-line bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <MotionReveal>
              <div>
                <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
                  SAIT / About
                </p>

                <div className="mt-5 h-px w-16 bg-accent" />
              </div>
            </MotionReveal>

            <MotionReveal style={{ animationDelay: "100ms" }}>
              <div>
                <h1 className="text-page max-w-4xl text-foreground sm:text-5xl lg:text-6xl">
                  The community behind{" "}
                  <span className="text-accent">IT @ CUSAT.</span>
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
                  Learn about the Information Technology Division, the student
                  community around it, and the people and opportunities that
                  make SAIT part of life at the School of Engineering.
                </p>
              </div>
            </MotionReveal>
          </div>

          <MotionReveal style={{ animationDelay: "180ms" }}>
            <div className="mt-14 flex items-center gap-3 border-t border-line pt-5 text-xs uppercase tracking-[0.12em] text-muted">
              <ArrowDown size={15} className="text-accent" aria-hidden="true" />
              <span>Explore the story</span>
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <MotionReveal>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
                01 / Information Technology
              </p>
            </MotionReveal>

            <MotionReveal style={{ animationDelay: "100ms" }}>
              <div>
                <h2 className="text-section text-foreground">
                  Building strong foundations for a changing technological
                  world.
                </h2>

                <p className="mt-6 max-w-3xl text-base leading-8 text-muted">
                  The Division of Information Technology at the School of
                  Engineering, CUSAT was established with the objective of
                  providing quality education in Information Technology. The
                  division focuses on developing strong theoretical and
                  practical foundations while encouraging innovation, research,
                  and entrepreneurship.
                </p>

                <div className="mt-8">
                  <Link
                    href="/people"
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
                  >
                    Meet the people behind it
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <MotionReveal>
              <div>
                <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
                  02 / Vision & Mission
                </p>

                <div className="mt-5 h-px w-16 bg-accent" />
              </div>
            </MotionReveal>

            <div className="grid gap-12 md:grid-cols-2">
              <MotionReveal style={{ animationDelay: "100ms" }}>
                <article>
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
                    Vision
                  </p>

                  <h2 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-foreground sm:text-3xl">
                    A world leader in IT education and research.
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-muted">
                    To become a world leader in higher education and research in
                    the field of Information Technology.
                  </p>
                </article>
              </MotionReveal>

              <MotionReveal style={{ animationDelay: "180ms" }}>
                <article>
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
                    Mission
                  </p>

                  <p className="mt-5 text-base leading-8 text-foreground">
                    To impart state-of-the-art knowledge in Information
                    Technology with a focus on developing the competencies and
                    virtues required to meet the needs of society and become a
                    centre of excellence.
                  </p>

                  <p className="mt-5 text-sm leading-7 text-muted">
                    The division also aims to train graduate, postgraduate, and
                    research students in innovative areas, preparing them for
                    opportunities in industry and academia while encouraging
                    entrepreneurship in Information Technology.
                  </p>
                </article>
              </MotionReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <MotionReveal>
              <div>
                <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
                  03 / SAIT
                </p>

                <div className="mt-5 h-px w-16 bg-accent" />
              </div>
            </MotionReveal>

            <div>
              <MotionReveal style={{ animationDelay: "100ms" }}>
                <h2 className="text-section max-w-3xl text-foreground">
                  A student community that{" "}
                  <span className="text-accent">learns by doing.</span>
                </h2>
              </MotionReveal>

              <MotionReveal style={{ animationDelay: "180ms" }}>
                <p className="mt-6 max-w-3xl text-base leading-8 text-muted">
                  The Students Association of Information Technology is a
                  student-led organisation supported by the teachers and staff
                  of the Division of Information Technology. It creates
                  opportunities for students to learn, collaborate, experiment,
                  and connect beyond the classroom.
                </p>
              </MotionReveal>

              <MotionReveal style={{ animationDelay: "260ms" }}>
                <div className="mt-10 grid gap-px overflow-hidden rounded-[var(--radius-xl)] border border-line bg-line sm:grid-cols-2">
                  {[
                    {
                      number: "01",
                      title: "Learn",
                      text: "Workshops, seminars, and sessions around technology and emerging trends.",
                    },
                    {
                      number: "02",
                      title: "Create",
                      text: "Student projects and initiatives developed through collaboration.",
                    },
                    {
                      number: "03",
                      title: "Connect",
                      text: "Alumni interactions that connect students with experiences beyond campus.",
                    },
                    {
                      number: "04",
                      title: "Contribute",
                      text: "Magazines, feedback, ideas, and activities shaped by the student community.",
                    },
                  ].map((item) => (
                    <article
                      key={item.number}
                      className="bg-background p-6 sm:p-7"
                    >
                      <span className="font-mono text-xs text-muted">
                        {item.number}
                      </span>

                      <h3 className="mt-8 text-base font-semibold text-foreground">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-muted">
                        {item.text}
                      </p>
                    </article>
                  ))}
                </div>
              </MotionReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-background">
  <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
    <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
      <MotionReveal>
        <div>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
            04 / Academics
          </p>
          <div className="mt-5 h-px w-16 bg-accent" />
        </div>
      </MotionReveal>

      <div>
        <MotionReveal style={{ animationDelay: "100ms" }}>
          <h2 className="text-section max-w-3xl text-foreground">
            Learn the foundations. <span className="text-accent">Explore what&apos;s next.</span>
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-muted">
            The IT Division combines undergraduate education with postgraduate
            study, practical computing facilities, and opportunities to explore
            emerging areas of technology.
          </p>
        </MotionReveal>

        <MotionReveal style={{ animationDelay: "180ms" }}>
          <div className="mt-10 grid gap-px overflow-hidden rounded-[var(--radius-xl)] border border-line bg-line md:grid-cols-2">
            <article className="bg-surface p-7">
              <span className="font-mono text-xs text-muted">01</span>
              <h3 className="mt-8 text-lg font-semibold text-foreground">
                B.Tech Information Technology
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                A broad-based undergraduate programme covering the foundations
                and applications of Information Technology.
              </p>
            </article>

            <article className="bg-surface p-7">
              <span className="font-mono text-xs text-muted">02</span>
              <h3 className="mt-8 text-lg font-semibold text-foreground">
                M.Tech Business Analytics &amp; Intelligence
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                Postgraduate study focused on analytics, intelligence, and
                technology-driven decision making.
              </p>
            </article>

            <article className="bg-surface p-7 md:col-span-2">
              <span className="font-mono text-xs text-muted">03</span>
              <h3 className="mt-8 text-lg font-semibold text-foreground">
                Computing &amp; Project Facilities
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
                IT facilities include multimedia, internet, advanced project,
                DBMS, OOP/language, and hardware design labs, with systems,
                servers, development hardware, sensors, FPGA boards, and other
                project-oriented resources.
              </p>

              <Link
                href="/people"
                className="mt-6 inline-flex min-h-10 items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
              >
                Explore the IT community
                <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            </article>
          </div>
        </MotionReveal>
      </div>
    </div>
  </div>
</section>
<section className="border-b border-line bg-surface">
  <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
    <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
      <MotionReveal>
        <div>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
            05 / People
          </p>

          <div className="mt-5 h-px w-16 bg-accent" />
        </div>
      </MotionReveal>

      <div>
        <MotionReveal style={{ animationDelay: "100ms" }}>
          <h2 className="text-section max-w-3xl text-foreground">
            The people who{" "}
            <span className="text-accent">move IT forward.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-muted">
            Meet the faculty and student leaders who help shape the
            Information Technology community at CUSAT.
          </p>
        </MotionReveal>

        {/* Faculty preview */}
        <MotionReveal style={{ animationDelay: "180ms" }}>
          <div className="mt-10">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
                  Faculty &amp; Administration
                </p>

                <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-foreground">
                  Guidance, experience, perspective.
                </h3>
              </div>

              <span className="hidden font-mono text-xs text-muted sm:block">
                04 MEMBERS
              </span>
            </div>

            <div className="mt-6 grid gap-px overflow-hidden rounded-[var(--radius-xl)] border border-line bg-line sm:grid-cols-2">
              {faculty.map((person) => (
                <article
                  key={person.name}
                  className="group bg-background p-6 transition-colors hover:bg-surface-2 sm:p-7"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-accent-soft font-display text-sm font-semibold text-accent">
                    {person.initials}
                  </div>

                  <h4 className="mt-6 text-base font-semibold text-foreground">
                    {person.name}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-muted">
                    {person.role}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </MotionReveal>

        {/* SAIT leadership preview */}
        <MotionReveal style={{ animationDelay: "260ms" }}>
          <div className="mt-12">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
                  SAIT Executive Committee
                </p>

                <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-foreground">
                  Students who lead.
                </h3>
              </div>

              <span className="hidden font-mono text-xs text-muted sm:block">
                04 LEADERS
              </span>
            </div>

            <div className="mt-6 divide-y divide-line border-y border-line">
              {committee.map((person, index) => (
                <div
                  key={person.name}
                  className="flex items-center gap-4 py-4"
                >
                  <span className="font-mono text-xs text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-foreground">
                      {person.name}
                    </p>

                    <p className="mt-1 text-sm text-muted">
                      {person.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </MotionReveal>

        <MotionReveal style={{ animationDelay: "340ms" }}>
          <div className="mt-8">
            <Link
              href="/people"
              className="inline-flex min-h-11 items-center gap-2 rounded-[var(--radius-md)] border border-line px-4 text-sm font-medium text-foreground transition-colors hover:border-line-strong hover:bg-background hover:text-accent"
            >
              Meet the full community
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </MotionReveal>
      </div>
    </div>
  </div>
</section>



    </main>
  );
}
