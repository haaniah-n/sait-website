"use client";

import { useRef, useState, type ReactNode } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Dialog } from "@/components/ui/dialog";
import { type DemoEvent, formatEventDate, formatEventTime } from "@/data/events";

export function EventDetails({ event, children, className = "" }: { event: DemoEvent; children: ReactNode; className?: string }) {
  const [open, setOpen] = useState(false);
  return <>
    <button type="button" className={className} onClick={() => setOpen(true)} aria-label={`View event: ${event.title}`}>{children}</button>
    <Dialog open={open} onClose={() => setOpen(false)} title={event.title}>
      <p className="text-sm leading-7 text-muted">{event.summary}</p>
      <p className="mt-4 text-sm">{formatEventDate(event.date)} · {formatEventTime(event.startTime)} – {formatEventTime(event.endTime)} IST</p>
      <p className="mt-2 text-sm">{event.location}</p>
      <p className="mt-5 border-t border-line pt-4 text-sm leading-7 text-muted">{event.registrationNote}</p>
      <p className="mt-3 text-xs leading-6 text-muted">Illustrative event schedule. Registration is not available in this prototype.</p>
    </Dialog>
  </>;
}

const pulse = ["Workshops", "Hackathons", "Tech talks", "Meetups", "Build sessions", "Community"];
export function EventPulse() {
  const [paused, setPaused] = useState(false);
  return <div className="event-pulse" data-paused={paused}>
    <div className="event-pulse-window">
      <div className="event-pulse-track">
        {[0, 1].map(copy => <div className="event-pulse-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
          <span className="pulse-current"><i /> Upcoming</span>
          {pulse.map(text => <span key={text}>{text}<ArrowUpRight size={13} aria-hidden="true" /></span>)}
        </div>)}
      </div>
    </div>
    <button type="button" className="pulse-pause" aria-label={paused ? "Play event ticker" : "Pause event ticker"} onClick={() => setPaused(!paused)}>{paused ? <Play size={14} /> : <Pause size={14} />}</button>
  </div>;
}

export function ArchiveGallery({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; scroll: number } | null>(null);
  const [paused, setPaused] = useState(false);
  const [manual, setManual] = useState(false);
  function takeControl() {
    const el = ref.current;
    if (!el || manual) return;
    const track = el.firstElementChild;
    const transform = track ? getComputedStyle(track).transform : "none";
    const offset = transform === "none" ? 0 : -new DOMMatrixReadOnly(transform).m41;
    if (track instanceof HTMLElement) track.style.animation = "none";
    el.scrollLeft = offset;
    setManual(true);
  }
  function move(direction: number) {
    takeControl();
    ref.current?.scrollBy({ left: direction * 286, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }
  return <>
    <div className="events-section-heading archive-heading">
      <h2 id="archive-heading">Past Events</h2>
      <p>Moments that already happened.</p>
      <div className="archive-controls">
        <button type="button" onClick={() => move(-1)} aria-label="Previous past events"><ChevronLeft size={18} /></button>
        <button type="button" onClick={() => move(1)} aria-label="Next past events"><ChevronRight size={18} /></button>
        <button type="button" aria-label={paused || manual ? "Play archive gallery" : "Pause archive gallery"} onClick={() => {
          if (manual) { const track=ref.current?.firstElementChild; if(track instanceof HTMLElement) track.style.animation=""; if(ref.current) ref.current.scrollLeft=0; setManual(false); setPaused(false); }
          else setPaused(!paused);
        }}>{paused || manual ? <Play size={14} /> : <Pause size={14} />}</button>
        <span>Drag / explore</span>
      </div>
    </div>
    <div ref={ref} className="event-gallery" role="region" aria-label="Past event archive; use arrow keys to explore" tabIndex={0} data-paused={paused} data-manual={manual}
      onKeyDown={e => { if(e.key === "ArrowRight" || e.key === "ArrowLeft") { e.preventDefault(); move(e.key === "ArrowRight" ? 1 : -1); } }}
      onPointerDown={e => { takeControl(); if(e.pointerType !== "mouse") return; drag.current={x:e.clientX,scroll:e.currentTarget.scrollLeft}; e.currentTarget.setPointerCapture(e.pointerId); }}
      onPointerMove={e => { if(drag.current) e.currentTarget.scrollLeft=drag.current.scroll-e.clientX+drag.current.x; }}
      onPointerUp={() => {drag.current=null;}} onPointerCancel={() => {drag.current=null;}}>
      {children}
    </div>
  </>;
}
