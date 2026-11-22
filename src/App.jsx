import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { profile, links, stats, experience, projects, services, skillGroups } from './content.js'

gsap.registerPlugin(ScrollTrigger)

const shards = [
  { label: 'REACT', g: 'linear-gradient(135deg,#21d4fd,#7b2ff7)' , img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=500&auto=format&fit=crop'},
  { label: 'AI', g: 'linear-gradient(135deg,#ff2e88,#ff5e3a)' , img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=500&auto=format&fit=crop'},
  { label: 'NODE', g: 'linear-gradient(135deg,#11998e,#21d4fd)' , img: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=500&auto=format&fit=crop'},
  { label: 'MERN', g: 'linear-gradient(135deg,#7b2ff7,#ff2e88)' , img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=500&auto=format&fit=crop'},
  { label: 'DSA', g: 'linear-gradient(135deg,#ffd23f,#ff5e3a)' , img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=500&auto=format&fit=crop'},
  { label: 'RAG', g: 'linear-gradient(135deg,#0f2027,#2c5364)' , img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=500&auto=format&fit=crop'},
  { label: 'UI', g: 'linear-gradient(135deg,#fc4a1a,#f7b733)' , img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=500&auto=format&fit=crop'},
  { label: 'APIs', g: 'linear-gradient(135deg,#8e2de2,#4a00e0)' , img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=500&auto=format&fit=crop'},
  { label: 'SHIP', g: 'linear-gradient(135deg,#ee0979,#ff6a00)' , img: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=500&auto=format&fit=crop'},
]

function Loader({ done }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const start = Date.now()
    const id = setInterval(() => {
      const p = Math.min(100, Math.round(((Date.now() - start) / 1400) * 100))
      setCount(p)
      if (p >= 100) {
        clearInterval(id)
        setTimeout(done, 250)
      }
    }, 40)
    return () => clearInterval(id)
  }, [done])
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-vice-night">
      <div className="loader-logo font-display text-[26vw] leading-none md:text-[11rem]">{profile.monogram}</div>
      <div className="mt-4 font-mono text-sm tracking-[0.35em] text-vice-sand/70">LOADING {count}%</div>
      <div className="mt-6 h-1 w-56 overflow-hidden rounded bg-white/10">
        <div className="h-full bg-gradient-to-r from-vice-gold via-vice-hot to-vice-pink" style={{ width: count + '%' }} />
      </div>
    </div>
  )
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.75)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-vice-night/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#top" className="font-display text-2xl tracking-wide text-vice-sand">
          {profile.monogram}<span className="text-vice-pink">.</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-vice-sand/80 md:flex">
          <a className="hover:text-vice-gold" href="#about">About</a>
          <a className="hover:text-vice-gold" href="#experience">Experience</a>
          <a className="hover:text-vice-gold" href="#projects">Projects</a>
          <a className="hover:text-vice-gold" href="#skills">Skills</a>
          <a className="hover:text-vice-gold" href={profile.resumeUrl} target="_blank" rel="noreferrer">Resume</a>
        </nav>
        <a
          href={'mailto:' + profile.email}
          className={
            'rounded-full bg-gradient-to-r from-vice-hot to-vice-pink px-5 py-2 text-sm font-bold text-white transition-all duration-500 ' +
            (scrolled ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-3 opacity-0 md:pointer-events-auto md:translate-y-0 md:opacity-100')
          }
        >
          Hire Me
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16">
      <div className="hero-bg absolute inset-0" aria-hidden="true">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4"
          poster="https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1800&auto=format&fit=crop"
          autoPlay
          muted
          loop
          playsInline
        />
        <img className="hero-slide" src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1800&auto=format&fit=crop" alt="" />
        <img className="hero-slide" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1800&auto=format&fit=crop" alt="" />
        <img className="hero-slide" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1800&auto=format&fit=crop" alt="" />
      </div>
      <div className="sunset-bg horizon-lines absolute inset-0 opacity-80" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-24 left-1/2 h-72 w-[130%] -translate-x-1/2 rounded-[100%] bg-vice-hot/25 blur-3xl" />
      <div className="hero-inner relative mx-auto w-full max-w-6xl px-5">
        <p className="hero-line mb-4 flex flex-wrap items-center gap-3 font-mono text-xs tracking-[0.3em] text-vice-gold md:text-sm">
          <span>{profile.city.toUpperCase()}, {profile.country.toUpperCase()}</span>
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-vice-pink" />
          <span>{profile.availability.toUpperCase()}</span>
        </p>
        <h1 className="font-display uppercase leading-[0.95]">
          <span className="hero-line block text-[15vw] text-vice-sand md:text-[7.5rem]">Satya</span>
          <span className="hero-line sunset-text block text-[15vw] md:text-[7.5rem]">Sampath</span>
          <span className="hero-line display-outline block text-[15vw] md:text-[7.5rem]">Kumar</span>
        </h1>
        <p className="hero-line mt-6 max-w-2xl text-lg text-vice-sand/85 md:text-xl">
          {profile.role}. {profile.tagline}
        </p>
        <div className="hero-line mt-8 flex flex-wrap gap-4">
          <a href="#projects" className="rounded-full bg-gradient-to-r from-vice-hot to-vice-pink px-7 py-3 font-bold text-white shadow-lg shadow-vice-pink/30">
            See My Work
          </a>
          <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="rounded-full border border-vice-sand/40 px-7 py-3 font-bold text-vice-sand hover:border-vice-gold hover:text-vice-gold">
            Download Resume
          </a>
          <a href={links.github} target="_blank" rel="noreferrer" className="rounded-full border border-vice-sand/40 px-7 py-3 font-bold text-vice-sand hover:border-vice-gold hover:text-vice-gold">
            GitHub
          </a>
        </div>
        <div className="mt-12 grid max-w-3xl grid-cols-3 gap-2 md:grid-cols-9 md:gap-3" aria-label="Skill shards">
          {shards.map((s) => (
            <div
              key={s.label}
              className="shard relative flex aspect-[3/4] items-end overflow-hidden rounded-lg p-2 shadow-lg"
              style={{ background: s.g }}
            >
              <img src={s.img} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(13,2,23,0.05) 40%, rgba(13,2,23,0.72) 100%)' }} />
              <span className="relative font-display text-sm tracking-wider text-white drop-shadow md:text-base">{s.label}</span>
            </div>
          ))}
        </div>
        <p className="mt-10 font-mono text-xs tracking-[0.3em] text-vice-sand/50">SCROLL FOR THE FULL STORY</p>
      </div>
    </section>
  )
}

function Marquee() {
  const words = ['REACT', 'NODE.JS', 'MONGODB', 'GEMINI AI', 'RAG', 'TAILWIND CSS', 'GSAP', 'TYPESCRIPT READY', 'REST APIS', 'FIGMA']
  const row = words.concat(words)
  return (
    <div className="overflow-hidden border-y border-white/10 bg-vice-deep py-4" aria-hidden="true">
      <div className="marquee-track gap-10 pr-10">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-2xl tracking-wide text-vice-sand/70">
            {w} <span className="text-vice-pink">*</span>
          </span>
        ))}
      </div>
    </div>
  )
}

function SectionTitle({ kicker, title }) {
  return (
    <div className="reveal mb-10">
      <p className="font-mono text-xs tracking-[0.35em] text-vice-gold">{kicker}</p>
      <h2 className="mt-2 font-display text-4xl uppercase text-vice-sand md:text-6xl">{title}</h2>
    </div>
  )
}

function About() {
  return (
    <section id="about" className="relative bg-vice-night py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle kicker="MEET THE DEVELOPER" title="Built in Vizag, shipped to the world" />
        <div className="reveal grid gap-10 md:grid-cols-5">
          <div className="space-y-4 text-vice-sand/85 md:col-span-3 md:text-lg">
            <p>
              Final year Computer Science student at GITAM, Visakhapatnam, and a full stack developer who
              learns by shipping. I took a structural engineering firm from Figma wireframes to a live
              MERN product with an admin dashboard and email automation, and I built an AI interview
              platform that is live and always on.
            </p>
            <p>
              At Infosys Springboard I built PolicyNav, a RAG system that makes dense public policy
              documents searchable in plain language. Every day I solve the LeetCode Problem of the Day
              and publish the write up, a streak that has crossed 175 days.
            </p>
            <p>
              My rule is simple: layout first, motion second, measure everything, and never ship a link
              that sleeps.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:col-span-2">
            {stats.map((s) => (
              <div key={s.label} className="card-glow rounded-2xl border border-white/10 bg-vice-deep p-5">
                <div className="sunset-text font-display text-4xl md:text-5xl">{s.value}</div>
                <div className="mt-2 text-sm text-vice-sand/70">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="bg-vice-deep py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle kicker="THE JOURNEY SO FAR" title="Experience" />
        <div className="grid gap-6 md:grid-cols-2">
          {experience.map((job) => (
            <article key={job.role} className="reveal card-glow rounded-2xl border border-white/10 bg-vice-night p-7">
              <p className="font-mono text-xs tracking-[0.25em] text-vice-gold">{job.period.toUpperCase()}</p>
              <h3 className="mt-3 font-display text-2xl uppercase text-vice-sand">{job.role}</h3>
              <p className="mt-1 font-semibold text-vice-pink">{job.org}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-vice-sand/80">
                {job.points.map((pt) => (
                  <li key={pt.slice(0, 24)}>{pt}</li>
                ))}
              </ul>
              <a href={job.link} target="_blank" rel="noreferrer" className="mt-5 inline-block font-bold text-vice-teal hover:text-vice-gold">
                View work
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="bg-vice-night py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle kicker="SELECTED WORK" title="Projects that are live" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="reveal card-glow flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-vice-deep">
              <div className="relative flex h-36 items-end overflow-hidden p-5" style={{ background: p.gradient }}>
                {p.img && <img src={p.img} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />}
                {p.img && <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(13,2,23,0.08) 30%, rgba(13,2,23,0.66) 100%)' }} />}
                <span className="relative rounded-full bg-black/35 px-3 py-1 font-mono text-[11px] tracking-[0.2em] text-white">{p.tag.toUpperCase()}</span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-2xl uppercase text-vice-sand">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-vice-sand/80">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-full border border-white/15 px-3 py-1 text-xs text-vice-sand/75">{t}</span>
                  ))}
                </div>
                <div className="mt-5 flex gap-5 font-bold">
                  {p.live ? (
                    <a href={p.live} target="_blank" rel="noreferrer" className="text-vice-pink hover:text-vice-gold">Live Demo</a>
                  ) : (
                    <span className="text-vice-sand/40">In development</span>
                  )}
                  {p.code && (
                    <a href={p.code} target="_blank" rel="noreferrer" className="text-vice-teal hover:text-vice-gold">Code</a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="bg-vice-deep py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle kicker="WHAT I CAN DO FOR YOU" title="Services and skills" />
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="reveal card-glow rounded-2xl border border-white/10 bg-vice-night p-7">
              <h3 className="font-display text-2xl uppercase sunset-text">{s.title}</h3>
              <p className="mt-3 text-vice-sand/80">{s.desc}</p>
            </article>
          ))}
        </div>
        <div className="reveal mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g) => (
            <div key={g.label}>
              <h4 className="font-mono text-xs tracking-[0.3em] text-vice-gold">{g.label.toUpperCase()}</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span key={item} className="rounded-full bg-white/5 px-3 py-1 text-sm text-vice-sand/85 ring-1 ring-white/10">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function City() {
  return (
    <section className="sunset-bg relative overflow-hidden py-28">
      <div className="mx-auto max-w-6xl px-5 text-center">
        <p className="reveal font-mono text-xs tracking-[0.35em] text-vice-gold">HOME BASE</p>
        <h2 className="city-line mt-3 font-display uppercase leading-[0.95]">
          <span className="block text-[11vw] text-vice-sand md:text-8xl">Visakhapatnam</span>
          <span className="sunset-text block text-[11vw] md:text-8xl">India</span>
        </h2>
        <p className="reveal mx-auto mt-6 max-w-xl text-vice-sand/85">
          B.Tech CSE, GITAM, Class of 2027, CGPA 8.23. Building from the coast, deploying everywhere.
        </p>
      </div>
    </section>
  )
}

function DsaStrip() {
  return (
    <section className="border-y border-white/10 bg-vice-night py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 md:flex-row md:items-center">
        <div className="reveal">
          <h3 className="font-display text-3xl uppercase text-vice-sand md:text-4xl">Daily DSA, no days off</h3>
          <p className="mt-2 max-w-xl text-vice-sand/75">
            LeetCode Problem of the Day solved daily for 175 plus days, with tested solutions in the POTD
            repo and a daily explainer series on LinkedIn and X covering DSA and system design.
          </p>
        </div>
        <div className="reveal flex gap-4">
          <a href="https://github.com/SATYA-916/POTD" target="_blank" rel="noreferrer" className="rounded-full bg-gradient-to-r from-vice-hot to-vice-pink px-6 py-3 font-bold text-white">POTD Repo</a>
          <a href={links.leetcode} target="_blank" rel="noreferrer" className="rounded-full border border-vice-sand/40 px-6 py-3 font-bold text-vice-sand hover:border-vice-gold hover:text-vice-gold">LeetCode</a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-vice-deep py-20">
      <div className="mx-auto max-w-6xl px-5 text-center">
        <h2 className="reveal font-display text-4xl uppercase text-vice-sand md:text-6xl">
          Let us build something <span className="sunset-text">cinematic</span>
        </h2>
        <p className="reveal mx-auto mt-4 max-w-lg text-vice-sand/75">
          {profile.availability}. The fastest way to reach me is email, I reply within a day.
        </p>
        <div className="reveal mt-8 flex flex-wrap justify-center gap-4">
          <a href={'mailto:' + profile.email} className="rounded-full bg-gradient-to-r from-vice-hot to-vice-pink px-7 py-3 font-bold text-white">Email Me</a>
          <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="rounded-full border border-vice-sand/40 px-7 py-3 font-bold text-vice-sand hover:border-vice-gold hover:text-vice-gold">Resume</a>
          <a href={links.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-vice-sand/40 px-7 py-3 font-bold text-vice-sand hover:border-vice-gold hover:text-vice-gold">LinkedIn</a>
          <a href={links.github} target="_blank" rel="noreferrer" className="rounded-full border border-vice-sand/40 px-7 py-3 font-bold text-vice-sand hover:border-vice-gold hover:text-vice-gold">GitHub</a>
        </div>
        <p className="mt-12 font-mono text-xs tracking-[0.25em] text-vice-sand/40">
          {profile.name.toUpperCase()} | {profile.city.toUpperCase()}, {profile.country.toUpperCase()} | {profile.phone}
        </p>
      </div>
    </footer>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)
  const glowRef = useRef(null)

  useEffect(() => {
    if (loading) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      if (!reduced) {
        gsap.from('.hero-line', { y: 60, opacity: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out' })
        gsap.from('.shard', {
          y: 120,
          opacity: 0,
          rotation: () => gsap.utils.random(-14, 14),
          duration: 0.9,
          stagger: 0.07,
          ease: 'back.out(1.6)',
          delay: 0.35,
        })
        gsap.to('.hero-bg', {
          opacity: 0,
          scale: 1.12,
          ease: 'none',
          scrollTrigger: { trigger: '#top', start: 'top top', end: 'bottom top', scrub: true },
        })
        gsap.to('.hero-inner', {
          scale: 0.92,
          opacity: 0.25,
          ease: 'none',
          scrollTrigger: { trigger: '#top', start: 'top top', end: 'bottom top', scrub: true },
        })
        gsap.utils.toArray('.reveal').forEach((el) => {
          gsap.from(el, {
            y: 44,
            opacity: 0,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%' },
          })
        })
        gsap.from('.city-line', {
          y: 90,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.city-line', start: 'top 85%' },
        })
      }
    })
    return () => ctx.revert()
  }, [loading])

  useEffect(() => {
    const glow = glowRef.current
    if (!glow) return
    const move = (e) => {
      glow.style.transform = 'translate(' + (e.clientX - 180) + 'px,' + (e.clientY - 180) + 'px)'
    }
    window.addEventListener('pointermove', move, { passive: true })
    return () => window.removeEventListener('pointermove', move)
  }, [])

  return (
    <div className="min-h-screen bg-vice-night font-sans text-vice-sand">
      {loading && <Loader done={() => setLoading(false)} />}
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-40 h-[360px] w-[360px] rounded-full opacity-25 blur-3xl"
        style={{ background: 'radial-gradient(circle, #ff2e88 0%, transparent 65%)' }}
      />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <City />
        <DsaStrip />
      </main>
      <Footer />
    </div>
  )
}
