import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Mail, Building2 } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { MotionReveal } from "@/components/effects/motion-reveal";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { site } from "@/data/site";
import { siteRoutes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Contact & Get Involved",
  description: "Start a conversation with SAIT, explore ways to get involved, and find the existing contact and location information for the IT community at SOE, CUSAT.",
};

const layout = "max-w-7xl sm:px-8 lg:px-10";
const label = "font-mono text-xs font-medium uppercase tracking-[0.16em] text-accent";
const ways = [
  { title: "Join a SAIT team", text: "Find where your interests fit, from technology and content to events and outreach.", href: siteRoutes.people },
  { title: "Attend an event", text: "Learn something, meet someone, and discover a new reason to take part.", href: siteRoutes.events },
  { title: "Contribute to a project", text: "Bring a skill, a useful question, or a fresh perspective to a student build.", href: siteRoutes.projects },
  { title: "Reconnect as alumni", text: "Explore the journeys beyond campus and ways to stay connected with students.", href: siteRoutes.alumni },
  { title: "Suggest an activity", text: "Have a workshop or community idea? Choose “Propose an event” in the demo form, or email SAIT.", href: `${siteRoutes.contact}#contact-form` },
];
const socials = [
  { name: "Instagram", href: site.instagram },
  { name: "LinkedIn", href: site.linkedin },
  { name: "GitHub", href: site.github },
];

export default function ContactPage() {
  return (
    <>
      <section aria-labelledby="contact-heading" className="border-b border-line bg-background">
        <Container className={`${layout} py-12 sm:py-16`}>
          <MotionReveal>
            <p className={label}>Contact / Get Involved</p>
            <div className="mt-5 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
              <h1 id="contact-heading" className="font-display text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl">Start with hello.<br /><span className="text-accent">See where it leads.</span></h1>
              <p className="max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">An idea to explore, a skill to share, or a question to ask. Students, alumni, collaborators, and visitors — there&apos;s a place to start a conversation with SAIT.</p>
            </div>
          </MotionReveal>
        </Container>
      </section>

      <section id="contact-form" aria-labelledby="reach-heading" className="scroll-mt-20 border-b border-line bg-background">
        <Container className={`${layout} grid gap-10 py-12 sm:py-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16`}>
          <div>
            <MotionReveal>
              <p className={label}>01 / Reach SAIT</p>
              <h2 id="reach-heading" className="text-section mt-4 text-foreground">A question. An idea.<br />A new connection.</h2>
              <p className="mt-4 text-sm leading-7 text-muted">Tell us what you&apos;re interested in and a little about yourself. The form is a frontend demo; the email link opens your own mail app.</p>
              <div className="mt-7 border-y border-line py-5">
                <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-muted"><Mail size={15} aria-hidden="true" />Email</p>
                <a href={`mailto:${site.email}`} className="mt-2 inline-flex min-h-11 max-w-full items-center gap-2 break-all text-base font-semibold text-accent-hover hover:text-foreground">{site.email}<ArrowUpRight size={16} aria-hidden="true" className="shrink-0" /></a>
                <p className="mt-1 text-xs leading-6 text-muted">Contact address from the existing SAIT site configuration.</p>
              </div>
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-foreground">Around the web</h3>
                <ul className="mt-3 space-y-2">
                  {socials.map((social) => <li key={social.name}>{new URL(social.href).pathname !== "/" ? <a href={social.href} className="inline-flex min-h-11 items-center gap-2 text-sm text-accent-hover hover:text-foreground">SAIT on {social.name}<ArrowUpRight size={15} aria-hidden="true" /></a> : <p className="text-sm leading-7 text-muted">{social.name}<span className="ml-2 text-xs">Profile link pending</span></p>}</li>)}
                </ul>
                <p className="mt-3 text-xs leading-6 text-muted">Social account links will appear here once confirmed.</p>
              </div>
            </MotionReveal>
          </div>
          <ContactForm />
        </Container>
      </section>

      <section aria-labelledby="involved-heading" className="border-b border-line bg-surface">
        <Container className={`${layout} py-12 sm:py-16`}>
          <MotionReveal><p className={label}>02 / Ways to get involved</p><h2 id="involved-heading" className="text-section mt-4 text-foreground">Follow what you&apos;re curious about.</h2></MotionReveal>
          <ul className="mt-7 divide-y divide-line border-y border-line">
            {ways.map((way) => <li key={way.title}><Link href={way.href} className="group grid min-h-11 grid-cols-[1fr_auto] items-center gap-3 py-5 sm:grid-cols-[0.65fr_1.35fr_auto] sm:gap-8"><h3 className="text-base font-semibold text-foreground group-hover:text-accent-hover">{way.title}</h3><p className="col-start-1 row-start-2 text-sm leading-7 text-muted sm:col-start-auto sm:row-start-auto">{way.text}</p><ArrowUpRight size={18} aria-hidden="true" className="col-start-2 row-start-1 text-accent sm:col-start-auto sm:row-start-auto" /></Link></li>)}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="visit-heading" className="border-b border-line bg-background">
        <Container className={`${layout} py-12 sm:py-16`}>
          <div className="grid gap-8 rounded-[var(--radius-xl)] border border-line bg-surface-ink p-6 text-nav-fg sm:p-9 lg:grid-cols-2 lg:gap-14">
            <div><p className={label}>03 / Location</p><h2 id="visit-heading" className="text-section mt-4">Part of the IT community at CUSAT.</h2><p className="mt-4 max-w-xl text-sm leading-7 text-nav-muted">Planning a visit or joining an event? Check the event&apos;s venue details and use the contact email for any location questions.</p></div>
            <div className="border-t border-line pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <Building2 size={24} aria-hidden="true" className="text-accent" />
              <address className="mt-4 space-y-2 text-sm not-italic leading-7"><p className="font-semibold">{site.division}</p><p>{site.school}</p><p className="text-nav-muted">{site.university}</p><p className="text-nav-muted">{site.location}</p></address>
              <p className="mt-4 text-xs leading-6 text-nav-muted">Campus location from site configuration. No map or specific meeting point is provided.</p>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="community-heading" className="bg-surface">
        <Container className={`${layout} flex flex-col gap-6 py-10 sm:py-12 lg:flex-row lg:items-center lg:justify-between`}>
          <div><h2 id="community-heading" className="text-section text-foreground">You don&apos;t need a finished idea to begin.</h2><p className="mt-3 max-w-xl text-sm leading-7 text-muted">Meet the community, discover what&apos;s happening, and find a place to take part.</p></div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap"><ButtonLink href={siteRoutes.people} variant="accent" className="h-auto min-h-11 py-3 text-center">Meet the community</ButtonLink><ButtonLink href={siteRoutes.explore} variant="secondary" className="h-auto min-h-11 py-3 text-center">Explore SAIT</ButtonLink></div>
        </Container>
      </section>
    </>
  );
}
