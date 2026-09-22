import type { Metadata } from "next";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  FlaskConical,
  Flag,
  BookOpen,
  HeartHandshake,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { achievements, spotlightAchievements } from "@/data/achievements";
import { siteRoutes } from "@/lib/routes";
import { HallOfFame } from "./hall";
import "./hall.css";

export const metadata: Metadata = {
  title: "Hall of Fame",
  description:
    "Explore a fictional showcase of SAIT student milestones in building, research, competitions, peer learning, and community contribution.",
};

const layout = "max-w-7xl sm:px-8 lg:px-10";
const archive = achievements
  .filter((achievement) => !achievement.spotlight)
  .sort((a, b) => b.date.localeCompare(a.date));
const archiveYears = Array.from(new Set(archive.map((achievement) => achievement.year)));
const dateFormat = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});
const culture = [
  {
    title: "Build",
    icon: Code2,
    description: "Make an idea useful. Share the experiment and what it taught you.",
  },
  {
    title: "Research",
    icon: FlaskConical,
    description: "Ask a better question. Test it carefully and make your findings useful to others.",
  },
  {
    title: "Compete",
    icon: Flag,
    description: "Take on a challenge. Grow through practice, pressure, and teamwork.",
  },
  {
    title: "Learn",
    icon: BookOpen,
    description: "Go beyond what you know. Help someone else take their next step.",
  },
  {
    title: "Contribute",
    icon: HeartHandshake,
    description: "Leave something better. Good documentation and a helping hand count too.",
  },
];

function AwardMark({ caption }: { caption?: string }) {
  return (
    <div className="fame-trophy">
      <span className="fame-trophy-cap" />
      <span className="fame-trophy-body" />
      <span className="fame-trophy-stem" />
      <span className="fame-trophy-base" />
      {caption ? <span className="fame-trophy-copy">{caption}</span> : null}
    </div>
  );
}

function Laurels() {
  return (
    <svg className="fame-laurels" viewBox="0 0 420 420" aria-hidden="true">
      <path d="M210 78 C148 112 118 176 128 248 C138 198 168 154 210 138" />
      <path d="M210 78 C272 112 302 176 292 248 C282 198 252 154 210 138" />
      <path d="M132 168 C118 188 114 214 122 238" />
      <path d="M288 168 C302 188 306 214 298 238" />
      <path d="M148 132 C132 148 124 172 128 196" />
      <path d="M272 132 C288 148 296 172 292 196" />
      <path d="M168 104 C150 122 140 148 142 174" />
      <path d="M252 104 C270 122 280 148 278 174" />
    </svg>
  );
}

export default function AchievementsPage() {
  const [primary, ...secondary] = spotlightAchievements;

  return (
    <HallOfFame>
      <section className="fame-hero" aria-labelledby="achievements-heading">
        <div className="fame-hero-visual" aria-hidden="true">
          <div className="fame-glow" />
          <div className="fame-orbit fame-orbit-1" />
          <div className="fame-orbit fame-orbit-2" />
          <div className="fame-orbit fame-orbit-3" />
          <Laurels />
          <AwardMark caption={"IDEAS\nPEOPLE\nLEARNING\nIMPACT"} />
          <i className="fame-node" />
          <i className="fame-node" />
          <i className="fame-node" />
          <b className="fame-side-copy">
            STUDENTS BUILD
            <br />
            BRIGHTER TOMORROWS
          </b>
          <em className="fame-aside">
            SAME
            <br />
            CURIOSITY.
            <br />
            BIGGER
            <br />
            POSSIBILITIES.
          </em>
        </div>
        <Container className={layout}>
          <div className="fame-hero-copy" data-fame-reveal>
            <p className="fame-label">Hall of Fame / Achievements</p>
            <h1 id="achievements-heading">
              The effort behind
              <br />
              <span>every milestone.</span>
            </h1>
            <p className="fame-hero-description">
              Some moments end on a stage. Others start with a question, a first
              build, or a helping hand. Here&apos;s to the effort that moves our
              community forward.
            </p>
            <nav className="fame-hero-actions" aria-label="On this page">
              <a className="fame-primary-link" href="#spotlight">
                In the spotlight
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a href="#archive">
                Explore the archive
                <ArrowDown size={14} aria-hidden="true" />
              </a>
              <a href="#culture">
                More ways to make a mark
                <ArrowDown size={14} aria-hidden="true" />
              </a>
            </nav>
            <p className="fame-prototype">
              Hall of Fame entries shown are illustrative prototype content.
            </p>
          </div>
        </Container>
      </section>

      <section id="spotlight" className="fame-section" aria-labelledby="spotlight-heading">
        <Container className={layout}>
          <div className="fame-section-heading" data-fame-reveal>
            <div>
              <p className="fame-label">01 / Achievement spotlight</p>
              <h2 id="spotlight-heading">Work worth celebrating.</h2>
            </div>
            <p className="fame-kicker fame-disclosure">Selected mock milestones</p>
          </div>
          <div className="fame-spot-grid">
            {primary ? (
              <article
                key={primary.id}
                className="fame-spot fame-spot-primary"
                data-pointer="fame"
                tabIndex={0}
                aria-labelledby={`spotlight-${primary.id}`}
              >
                <div className="fame-spot-graphic" aria-hidden="true">
                  <div className="fame-glow" />
                  <div className="fame-orbit fame-orbit-2" />
                  <AwardMark caption={primary.result} />
                </div>
                <div className="fame-spot-meta">
                  <span>01 / {primary.categoryLabel}</span>
                  <time dateTime={primary.date}>{dateFormat.format(new Date(primary.date))}</time>
                </div>
                <h3 id={`spotlight-${primary.id}`}>{primary.title}</h3>
                <p>{primary.description}</p>
                <dl className="fame-spot-facts">
                  <div>
                    <dt>The outcome</dt>
                    <dd className="fame-result">{primary.result}</dd>
                  </div>
                  <div>
                    <dt>The people behind it</dt>
                    <dd>{primary.contributor}</dd>
                  </div>
                </dl>
              </article>
            ) : null}
            {secondary.map((achievement, index) => (
              <article
                key={achievement.id}
                className="fame-spot"
                data-pointer="fame"
                tabIndex={0}
                aria-labelledby={`spotlight-${achievement.id}`}
              >
                <div className="fame-spot-meta">
                  <span>
                    0{index + 2} / {achievement.categoryLabel}
                  </span>
                  <time dateTime={achievement.date}>
                    {dateFormat.format(new Date(achievement.date))}
                  </time>
                </div>
                <h3 id={`spotlight-${achievement.id}`}>{achievement.title}</h3>
                <p>{achievement.description}</p>
                <dl className="fame-spot-facts">
                  <div>
                    <dt>The outcome</dt>
                    <dd className="fame-result">{achievement.result}</dd>
                  </div>
                  <div>
                    <dt>The people behind it</dt>
                    <dd>{achievement.contributor}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="archive" className="fame-section" aria-labelledby="archive-heading">
        <Container className={layout}>
          <div className="fame-section-heading" data-fame-reveal>
            <div>
              <p className="fame-label">02 / Achievement archive</p>
              <h2 id="archive-heading">Every step adds to the story.</h2>
            </div>
            <p>
              Beyond the spotlight: research shared, skills passed on, and
              contributions that make things better for the next person.
            </p>
          </div>
          <div className="fame-timeline">
            {archiveYears.map((year) => {
              const records = archive.filter((achievement) => achievement.year === year);
              return (
                <section
                  key={year}
                  className="fame-year-block"
                  aria-labelledby={`archive-${year}`}
                >
                  <div>
                    <h3 id={`archive-${year}`} className="fame-year">
                      {year}
                    </h3>
                    <p className="fame-year-meta">
                      {records.length} {records.length === 1 ? "record" : "records"}
                    </p>
                  </div>
                  <ul className="fame-records">
                    {records.map((achievement) => (
                      <li key={achievement.id}>
                        <article className="fame-record" data-pointer="fame">
                          <div>
                            <h4>{achievement.title}</h4>
                            <p className="fame-record-meta">
                              <span>{achievement.categoryLabel}</span>
                              <time dateTime={achievement.date}>
                                {dateFormat.format(new Date(achievement.date))}
                              </time>
                            </p>
                          </div>
                          <p>{achievement.description}</p>
                          <div className="fame-record-aside">
                            <p className="fame-chip">{achievement.result}</p>
                            <p className="fame-by">
                              By <strong>{achievement.contributor}</strong>
                            </p>
                          </div>
                        </article>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>
        </Container>
      </section>

      <section id="culture" className="fame-section fame-culture" aria-labelledby="culture-heading">
        <Container className={layout}>
          <div className="fame-section-heading" data-fame-reveal>
            <div>
              <p className="fame-label">03 / What we celebrate</p>
              <h2 id="culture-heading">
                Progress has more
                <br />
                than one shape.
              </h2>
            </div>
            <p>
              A podium is one kind of milestone. Sharing a discovery, teaching a
              friend, or making a tool more accessible deserves a place in the
              story too.
            </p>
          </div>
          <ul className="fame-tiles">
            {culture.map((area, index) => {
              const Icon = area.icon;
              return (
                <li key={area.title}>
                  <article className="fame-tile" data-pointer="fame" tabIndex={0}>
                    <p className="fame-index">0{index + 1}</p>
                    <h3>
                      <Icon size={18} aria-hidden="true" />
                      {area.title}
                    </h3>
                    <p>{area.description}</p>
                  </article>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <section className="fame-section" aria-labelledby="next-heading">
        <Container className={layout}>
          <div className="fame-cta" data-pointer="fame" data-fame-reveal>
            <div className="fame-cta-orbit" aria-hidden="true">
              <div className="fame-glow" />
              <div className="fame-orbit fame-orbit-1" />
              <div className="fame-orbit fame-orbit-2" />
              <i className="fame-node" />
            </div>
            <div>
              <p className="fame-label">Your next chapter</p>
              <h2 id="next-heading">
                Make something
                <br />
                <span>worth sharing.</span>
              </h2>
            </div>
            <div>
              <p className="fame-cta-lead">Find a place to begin.</p>
              <p>
                Take on a challenge, explore a research question, or help a team
                move forward. Your next step doesn&apos;t have to be big to
                matter.
              </p>
              <p>
                Discover what students are building, or find an event where you
                can learn, collaborate, and put your skills to the test.
              </p>
              <div className="fame-cta-actions">
                <ButtonLink href={siteRoutes.projects} variant="accent">
                  Explore student projects
                  <ArrowUpRight size={16} aria-hidden="true" />
                </ButtonLink>
                <ButtonLink href={siteRoutes.events} variant="ghost">
                  Find your next event
                  <ArrowUpRight size={16} aria-hidden="true" />
                </ButtonLink>
              </div>
            </div>
            <span className="fame-cta-note" aria-hidden="true">
              IDEAS
              <br />
              PEOPLE
              <br />
              COMMUNITY
              <br />
              IMPACT
            </span>
          </div>
        </Container>
      </section>
    </HallOfFame>
  );
}
