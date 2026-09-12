import { ArrowDown, ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { ITEcosystem } from "./ITEcosystem";

export function Hero() {
  return (
    <section className="home-hero" aria-labelledby="hero-heading">
      {/* Abstract architectural study; intentionally not a depiction of campus. */}
      <svg
        className="hero-architecture"
        viewBox="0 0 1400 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <g fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M800 900V90H1340V900 M830 900V120H1310V900 M860 900V150H1280V900 M800 220H1340 M800 650H1340 M1070 90V900" />
          <path d="M0 830H1400 M0 850H1400 M990 900V710H1170V900" />
        </g>
      </svg>

      <div className="hero-composition mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="hero-copy">
          <p className="hero-metadata">CUSAT / SCHOOL OF ENGINEERING / IT</p>

          <p className="mt-4 text-sm text-muted">Students Association of IT</p>

          <h1 id="hero-heading" className="hero-title">
            LEARN.
            <br />
            BUILD.
            <br />
            <span>GROW.</span>
          </h1>

          <p className="mt-7 max-w-lg text-lg leading-8 text-muted">
            A community of IT students building projects, creating experiences,
            and shaping what&apos;s next.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink
              data-pointer="magnetic"
              href="/explore"
              variant="accent"
              size="lg"
            >
              Explore SAIT
              <ArrowRight size={17} aria-hidden="true" />
            </ButtonLink>

            <ButtonLink href="/events" variant="secondary" size="lg">
              See what&apos;s happening
            </ButtonLink>
          </div>

          <p className="hero-annotation">same students, different tomorrows.</p>

          <p className="mt-4 max-w-md text-xs leading-6 text-muted">
            People. Projects. Events. Achievements. Careers. Alumni.
          </p>
        </div>

        <div className="hero-orbit-panel">
          <div className="hero-orbit-caption">
            <span>SAIT / THE ECOSYSTEM</span>
            <span aria-hidden="true">06 CONNECTIONS</span>
          </div>

          <ITEcosystem />

          <p className="hero-orbit-footer">
            People / Ideas / Technology / Impact
          </p>
        </div>
      </div>

      <a className="hero-scroll" href="#community">
        <ArrowDown size={15} aria-hidden="true" />
        Scroll to connect
        <span aria-hidden="true" />
      </a>
    </section>
  );
}
