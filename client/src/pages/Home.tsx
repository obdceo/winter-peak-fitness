import { useState, useEffect, useRef } from "react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import {
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Instagram,
  Facebook,
  Phone,
  Mail,
  CheckCircle2,
  Dumbbell,
  Clock,
  Video,
  Apple,
  BarChart3,
  Zap,
} from "lucide-react";

const HERO_BG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663297299255/Ma9xsTYV5xnMeSMGZuzyFw/hero-bg-K9PNTk2Mi7CY6TDLf3eg76.webp";

// ─── Phone formatter ───────────────────────────────────────────────────────
function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length < 4) return digits;
  if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

// ─── Navigation ────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled ? "nav-scrolled" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="flex flex-col leading-none no-underline"
        >
          <span
            className="text-white font-bold tracking-wider uppercase"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem", letterSpacing: "0.08em" }}
          >
            Winter Peak
          </span>
          <span
            className="tracking-[0.22em] uppercase"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6rem", color: "oklch(52% 0.22 25)", fontWeight: 600 }}
          >
            Fitness Coaching
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-white/80 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200 bg-transparent border-none"
              style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.04em" }}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            className="btn-primary text-xs"
          >
            Schedule a Consultation
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2 bg-transparent border-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[oklch(12%_0.01_25)] border-t border-white/10">
          <div className="container py-6 flex flex-col gap-5">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-white/80 hover:text-white text-base font-medium text-left bg-transparent border-none"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contact")}
              className="btn-primary mt-2 w-full justify-center"
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

// ─── Hero Section ──────────────────────────────────────────────────────────
function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-end pb-20 md:pb-28 overflow-hidden"
      style={{
        backgroundImage: `url(${HERO_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,4,4,0.55) 0%, rgba(10,4,4,0.35) 40%, rgba(10,4,4,0.82) 100%)",
        }}
      />

      {/* Red accent line */}
      <div
        className="absolute top-0 left-0 w-1 h-full"
        style={{ backgroundColor: "oklch(52% 0.22 25)" }}
      />

      <div className="container relative z-10">
        {/* AI-visibility statement */}
        <div className="mb-6">
          <span
            className="inline-block text-xs font-semibold tracking-[0.2em] uppercase px-3 py-1.5 border border-white/20 text-white/70"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Personalized Fitness Coaching for Busy Dads
          </span>
        </div>

        {/* Eyebrow */}
        <div className="section-label mb-5" style={{ color: "oklch(52% 0.22 25)" }}>
          Strength Training &amp; Nutrition Coaching
        </div>

        {/* H1 */}
        <h1 className="hero-h1 text-white mb-6">
          <span className="block whitespace-nowrap">Get Strong.</span>
          <span className="block whitespace-nowrap" style={{ color: "oklch(52% 0.22 25)" }}>
            Stay Strong.
          </span>
          <span className="block whitespace-nowrap">No Gym Required.</span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-white/80 text-lg md:text-xl leading-relaxed mb-4"
          style={{ maxWidth: "52ch", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
        >
          Hybrid coaching programs built for dads with real schedules — customized workouts,
          virtual check-ins, and simple nutrition guidance that actually fits your life.
        </p>

        {/* Motto */}
        <p
          className="text-white/50 text-sm tracking-[0.18em] uppercase mb-10"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "1rem" }}
        >
          "Stronger Every Day. No Shortcuts."
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-14">
          <button onClick={() => scrollTo("#contact")} className="btn-primary">
            Schedule Appointment
            <ArrowRight size={16} />
          </button>
          <button onClick={() => scrollTo("#services")} className="btn-ghost">
            Learn More
          </button>
        </div>

        {/* Social proof stats */}
        <div className="flex flex-wrap gap-10 pt-8 border-t border-white/15">
          {[
            { value: "200+", label: "Dads Coached" },
            { value: "500+", label: "Programs Delivered" },
            { value: "3–5 hrs", label: "Per Week Required" },
            { value: "100%", label: "Online & Flexible" },
          ].map((s) => (
            <div key={s.label}>
              <div
                className="text-white font-bold"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem" }}
              >
                {s.value}
              </div>
              <div
                className="text-white/50 text-xs tracking-widest uppercase mt-0.5"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Who We Serve ──────────────────────────────────────────────────────────
function WhoWeServe() {
  return (
    <section
      className="py-16 md:py-20"
      style={{ backgroundColor: "oklch(12% 0.01 25)" }}
      aria-label="Who Winter Peak Fitness Coaching serves"
    >
      <div className="container">
        <p
          className="text-center text-white/70 text-base md:text-lg leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif", maxWidth: "72ch", margin: "0 auto" }}
        >
          <strong className="text-white" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.25em" }}>
            Winter Peak Fitness Coaching
          </strong>{" "}
          is a personalized online fitness coaching service that helps{" "}
          <strong className="text-white">busy dads</strong> build sustainable strength, increase
          energy, and improve overall health — without spending hours in the gym or following
          extreme diets. We serve working fathers, new dads, and parents who want real results
          through simple, structured programs designed for real-world schedules.
        </p>
      </div>
    </section>
  );
}

// ─── Problems Section ──────────────────────────────────────────────────────
function Problems() {
  const problems = [
    {
      icon: <Clock size={28} />,
      title: "No Time to Train",
      body: "Between work, kids, and life, finding 2 hours for the gym feels impossible. Our programs are designed for 45-minute sessions, 3–4 days a week.",
    },
    {
      icon: <Zap size={28} />,
      title: "Running on Empty",
      body: "You're exhausted before you even start. Lack of sleep, poor nutrition, and stress drain your energy. We fix the root cause, not just the symptom.",
    },
    {
      icon: <Apple size={28} />,
      title: "Diets That Don't Last",
      body: "Keto, intermittent fasting, calorie counting — you've tried it all and it never sticks. We teach simple, flexible nutrition habits that work long-term.",
    },
    {
      icon: <BarChart3 size={28} />,
      title: "Overly Complicated Programs",
      body: "Most fitness programs are built for gym rats, not dads. We cut the noise and give you exactly what you need — nothing more, nothing less.",
    },
    {
      icon: <Dumbbell size={28} />,
      title: "Starting Over Every Few Months",
      body: "You get going, then life happens and you lose all progress. Our coaching builds consistency into your routine so you never start from zero again.",
    },
    {
      icon: <Video size={28} />,
      title: "No Accountability",
      body: "Working out alone is hard. Without someone in your corner, motivation fades fast. Virtual check-ins and a dedicated coach keep you on track every week.",
    },
  ];

  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: "oklch(98% 0.005 60)" }}>
      <div className="container">
        <div className="mb-14">
          <div className="section-label">The Real Problem</div>
          <h2
            className="text-4xl md:text-5xl font-semibold"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: "oklch(14% 0.01 25)", maxWidth: "22ch" }}
          >
            Why Most Dads Struggle to Stay Fit
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((p) => (
            <div
              key={p.title}
              className="p-8 border border-[oklch(88%_0.01_60)] hover:border-[oklch(52%_0.22_25)] transition-colors duration-300 group"
            >
              <div
                className="mb-4 transition-colors duration-300 group-hover:text-[oklch(52%_0.22_25)]"
                style={{ color: "oklch(52% 0.22 25)" }}
              >
                {p.icon}
              </div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "oklch(14% 0.01 25)" }}
              >
                {p.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif", color: "oklch(40% 0.01 60)" }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Services Section ──────────────────────────────────────────────────────
function Services() {
  const services = [
    {
      number: "01",
      title: "Customized Workout Plans",
      description:
        "Every program is built around your schedule, fitness level, and goals. Whether you train at home, a gym, or both — your plan fits your life, not the other way around. Workouts are 45–60 minutes, 3–4 days per week.",
      features: ["Home or gym-based", "Progressive overload built in", "Updated monthly based on progress"],
    },
    {
      number: "02",
      title: "Virtual Check-Ins",
      description:
        "Weekly video or message check-ins with your coach keep you accountable and on track. We review your progress, adjust your plan, and answer every question — no matter how small.",
      features: ["Weekly accountability calls", "Form review via video", "Real-time plan adjustments"],
    },
    {
      number: "03",
      title: "Simple Nutrition Guidance",
      description:
        "No meal plans. No calorie counting apps. Just clear, practical nutrition habits that fit a dad's real life — including family dinners, travel, and the occasional pizza night.",
      features: ["Flexible eating framework", "No extreme restrictions", "Habit-based approach"],
    },
    {
      number: "04",
      title: "Hybrid Coaching Programs",
      description:
        "Our hybrid model combines the structure of in-person coaching with the flexibility of online training. You get a dedicated coach, a personalized plan, and a support system — all from your phone.",
      features: ["Dedicated personal coach", "Mobile-first experience", "Ongoing support & messaging"],
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28" style={{ backgroundColor: "oklch(95% 0.008 60)" }}>
      <div className="container">
        <div className="mb-14">
          <div className="section-label">What We Offer</div>
          <h2
            className="text-4xl md:text-5xl font-semibold"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: "oklch(14% 0.01 25)", maxWidth: "22ch" }}
          >
            Programs Built for Dads, Not Gym Rats
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s) => (
            <div
              key={s.number}
              className="bg-white p-8 md:p-10 border border-[oklch(88%_0.01_60)] hover:border-[oklch(52%_0.22_25)] transition-colors duration-300"
            >
              <div
                className="text-6xl font-bold mb-6 leading-none"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "oklch(52% 0.22 25 / 0.18)" }}
              >
                {s.number}
              </div>
              <h3
                className="text-2xl font-semibold mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "oklch(14% 0.01 25)" }}
              >
                {s.title}
              </h3>
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ fontFamily: "'Inter', sans-serif", color: "oklch(40% 0.01 60)" }}
              >
                {s.description}
              </p>
              <ul className="space-y-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5">
                    <CheckCircle2 size={15} style={{ color: "oklch(52% 0.22 25)", flexShrink: 0 }} />
                    <span
                      className="text-sm"
                      style={{ fontFamily: "'Inter', sans-serif", color: "oklch(35% 0.01 60)" }}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ──────────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Schedule a Free Consultation",
      description:
        "Book a 20-minute call with a coach. We'll talk about your goals, your schedule, and whether our program is the right fit. No pressure, no sales pitch.",
    },
    {
      step: "02",
      title: "Complete Your Fitness Assessment",
      description:
        "You'll fill out a detailed intake form covering your training history, lifestyle, nutrition habits, and goals. This is how we build a program that's truly yours.",
    },
    {
      step: "03",
      title: "Receive Your Custom Program",
      description:
        "Within 48 hours, your personalized workout plan and nutrition framework are ready in your coaching app. Clear, simple, and built for your schedule.",
    },
    {
      step: "04",
      title: "Train, Check In, Adjust",
      description:
        "Follow your program, log your workouts, and check in with your coach weekly. We track your progress and adjust the plan every month to keep results coming.",
    },
    {
      step: "05",
      title: "Build Lasting Results",
      description:
        "After 90 days, most clients report increased strength, more energy, and better sleep. More importantly — they've built habits that last for life.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 md:py-28"
      style={{ backgroundColor: "oklch(12% 0.01 25)" }}
    >
      <div className="container">
        <div className="mb-14">
          <div className="section-label" style={{ color: "oklch(52% 0.22 25)" }}>
            The Process
          </div>
          <h2
            className="text-4xl md:text-5xl font-semibold text-white"
            style={{ fontFamily: "'Cormorant Garamond', serif", maxWidth: "22ch" }}
          >
            How Winter Peak Coaching Works
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[1.35rem] top-0 bottom-0 w-px hidden md:block"
            style={{ backgroundColor: "oklch(52% 0.22 25 / 0.25)" }}
          />

          <div className="space-y-10">
            {steps.map((s, i) => (
              <div key={s.step} className="flex gap-8 md:gap-12 items-start">
                {/* Step number circle */}
                <div
                  className="relative flex-shrink-0 w-11 h-11 flex items-center justify-center border"
                  style={{
                    borderColor: "oklch(52% 0.22 25)",
                    backgroundColor: i === 0 ? "oklch(52% 0.22 25)" : "oklch(12% 0.01 25)",
                  }}
                >
                  <span
                    className="text-xs font-bold"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: i === 0 ? "white" : "oklch(52% 0.22 25)",
                    }}
                  >
                    {s.step}
                  </span>
                </div>

                <div className="pt-1.5 pb-2">
                  <h3
                    className="text-xl md:text-2xl font-semibold text-white mb-3"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.55)", maxWidth: "58ch" }}
                  >
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <button
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary"
          >
            Start Your Journey
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ Section ───────────────────────────────────────────────────────────
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "How much time do I need per week to see results?",
      a: "Most clients train 3 to 4 days per week, with sessions lasting 45 to 60 minutes. That's roughly 3 to 5 hours per week total, including warm-up and cool-down. You do not need to spend hours in the gym to get strong and fit — consistent, focused training is far more effective than long, unfocused workouts.",
    },
    {
      q: "Do I need a gym membership to join Winter Peak Fitness Coaching?",
      a: "No. Our programs are designed to work at home, in a commercial gym, or both. During your intake assessment, we'll ask about the equipment you have access to and build your program around it. Many of our clients train entirely at home with minimal equipment.",
    },
    {
      q: "What makes Winter Peak Fitness Coaching different from other programs?",
      a: "Most fitness programs are built for people with unlimited time and no family responsibilities. We build programs specifically for busy dads — accounting for your schedule, your energy levels, and the reality of life with kids. Every plan is custom-built, not templated. And you have a real coach in your corner every week, not just an app.",
    },
    {
      q: "How quickly will I see results?",
      a: "Most clients notice increased energy and improved sleep within the first 2 to 3 weeks. Visible strength gains and body composition changes typically begin around weeks 4 to 6. Significant, sustainable results are built over 90 days. We focus on long-term progress, not quick fixes that disappear.",
    },
    {
      q: "Is this program only for dads who are completely out of shape?",
      a: "Not at all. We work with dads at every fitness level — from those who haven't exercised in years to experienced lifters who want a structured, coach-guided program. Your plan is built around where you are right now, not where someone else is.",
    },
    {
      q: "What does the nutrition coaching include?",
      a: "We use a habit-based nutrition approach — no strict meal plans, no calorie counting apps, and no extreme restrictions. You'll learn simple, flexible eating habits that fit your lifestyle, including family dinners, travel, and social events. The goal is sustainable nutrition, not perfection.",
    },
    {
      q: "How does the virtual check-in work?",
      a: "Each week, you'll check in with your coach via video call or messaging, depending on your preference. We review your workout logs, discuss how you're feeling, address any challenges, and adjust your plan as needed. These check-ins are the accountability engine that keeps you consistent.",
    },
    {
      q: "What equipment do I need to get started?",
      a: "It depends on your program. A home-based program can be built around a set of dumbbells, resistance bands, and a pull-up bar. A gym-based program uses standard commercial gym equipment. We'll assess your available equipment during onboarding and design your program accordingly.",
    },
    {
      q: "How much does the coaching program cost?",
      a: "Pricing depends on the program tier and coaching frequency you select. We offer monthly coaching packages with flexible options to fit different budgets. Schedule a free consultation to discuss which program is right for you and get full pricing details.",
    },
    {
      q: "Can I cancel my coaching program at any time?",
      a: "Yes. Our programs are month-to-month with no long-term contracts required. We believe results should keep you — not a contract. That said, we strongly recommend committing to at least 90 days to experience the full benefit of the program.",
    },
    {
      q: "What happens after I schedule a consultation?",
      a: "After you book, you'll receive a confirmation email with your appointment details. Before the call, we'll send a short intake questionnaire so we can make the most of your time together. The consultation is a no-pressure conversation about your goals and how we can help.",
    },
    {
      q: "Is Winter Peak Fitness Coaching right for me if I travel frequently for work?",
      a: "Absolutely. Our hybrid coaching model is built for flexibility. Travel workouts, hotel gym programs, and bodyweight-only sessions are all part of the toolkit. Your coach will adjust your plan around your travel schedule so you never lose momentum.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-28" style={{ backgroundColor: "oklch(98% 0.005 60)" }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left column */}
          <div className="lg:col-span-4">
            <div className="section-label">Common Questions</div>
            <h2
              className="text-4xl md:text-5xl font-semibold mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "oklch(14% 0.01 25)" }}
            >
              Everything You Need to Know
            </h2>
            <p
              className="text-sm leading-relaxed mb-8"
              style={{ fontFamily: "'Inter', sans-serif", color: "oklch(40% 0.01 60)" }}
            >
              Have a question not listed here? Reach out directly at{" "}
              <a
                href="mailto:support@olivebranchdigital.com"
                className="underline"
                style={{ color: "oklch(52% 0.22 25)" }}
              >
                support@olivebranchdigital.com
              </a>
            </p>
            <button
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-ghost-dark"
            >
              Book a Free Call
              <ArrowRight size={15} />
            </button>
          </div>

          {/* Right column — accordion */}
          <div className="lg:col-span-8">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border-b border-[oklch(88%_0.01_60)] first:border-t"
                itemScope
                itemType="https://schema.org/Question"
              >
                <button
                  className="w-full flex items-start justify-between gap-4 py-5 text-left bg-transparent border-none"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                >
                  <span
                    className="text-base font-semibold"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem", color: "oklch(14% 0.01 25)" }}
                    itemProp="name"
                  >
                    {faq.q}
                  </span>
                  <span className="flex-shrink-0 mt-0.5" style={{ color: "oklch(52% 0.22 25)" }}>
                    {openIndex === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </span>
                </button>
                {openIndex === i && (
                  <div
                    className="pb-5"
                    itemScope
                    itemType="https://schema.org/Answer"
                    itemProp="acceptedAnswer"
                  >
                    <p
                      className="text-sm leading-relaxed"
                      style={{ fontFamily: "'Inter', sans-serif", color: "oklch(40% 0.01 60)" }}
                      itemProp="text"
                    >
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Contact Section ───────────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const submit = trpc.contact.submit.useMutation({
    onSuccess: () => {
      setStatus("sent");
      setForm({ name: "", email: "", phone: "", message: "" });
      toast.success("Message sent! We'll be in touch shortly.");
    },
    onError: () => {
      setStatus("error");
      toast.error("Something went wrong. Please try again or email us directly.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    submit.mutate({
      name: form.name,
      email: form.email,
      phone: form.phone || undefined,
      message: form.message,
    });
  };

  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((f) => ({ ...f, phone: formatPhone(e.target.value) }));
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28"
      style={{ backgroundColor: "oklch(14% 0.01 25)" }}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left — info */}
          <div className="lg:col-span-5">
            <div className="section-label" style={{ color: "oklch(52% 0.22 25)" }}>
              Get Started
            </div>
            <h2
              className="text-4xl md:text-5xl font-semibold text-white mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Schedule Your Free Consultation
            </h2>
            <p
              className="text-sm leading-relaxed mb-10"
              style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.55)" }}
            >
              Ready to stop making excuses and start building the body and energy you deserve?
              Book a free 20-minute consultation with a Winter Peak coach. No pressure. Just a
              real conversation about your goals.
            </p>

            <div className="space-y-5 mb-10">
              <a
                href="mailto:support@olivebranchdigital.com"
                className="flex items-center gap-3 no-underline group"
              >
                <Mail size={16} style={{ color: "oklch(52% 0.22 25)", flexShrink: 0 }} />
                <span
                  className="text-sm group-hover:text-white transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.6)" }}
                >
                  support@olivebranchdigital.com
                </span>
              </a>
              <a
                href="tel:8005551212"
                className="flex items-center gap-3 no-underline group"
              >
                <Phone size={16} style={{ color: "oklch(52% 0.22 25)", flexShrink: 0 }} />
                <span
                  className="text-sm group-hover:text-white transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.6)" }}
                >
                  800-555-1212
                </span>
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              <span
                className="text-xs tracking-widest uppercase"
                style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.35)" }}
              >
                Follow Us
              </span>
              <a
                href="https://instagram.com/summitpeakfitness"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 border border-white/20 hover:border-[oklch(52%_0.22_25)] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} className="text-white/70" />
              </a>
              <a
                href="https://facebook.com/summitpeakfitness"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 border border-white/20 hover:border-[oklch(52%_0.22_25)] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} className="text-white/70" />
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-7">
            {status === "sent" ? (
              <div className="flex flex-col items-start justify-center h-full py-12">
                <CheckCircle2 size={40} style={{ color: "oklch(52% 0.22 25)" }} className="mb-5" />
                <h3
                  className="text-2xl font-semibold text-white mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Message Received!
                </h3>
                <p
                  className="text-sm"
                  style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.55)" }}
                >
                  We'll be in touch within 24 hours to schedule your free consultation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium tracking-widest uppercase mb-2"
                      style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.45)" }}
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="John Smith"
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      className="form-input-dark"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium tracking-widest uppercase mb-2"
                      style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.45)" }}
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      className="form-input-dark"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-medium tracking-widest uppercase mb-2"
                    style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.45)" }}
                  >
                    Phone Number (Optional)
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="(555) 000-0000"
                    value={form.phone}
                    onChange={handlePhone}
                    className="form-input-dark"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium tracking-widest uppercase mb-2"
                    style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.45)" }}
                  >
                    Tell Us About Your Goals *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="What are your fitness goals? What's your biggest challenge right now?"
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="form-input-dark resize-none"
                  />
                </div>

                {status === "error" && (
                  <p
                    className="text-sm"
                    style={{ fontFamily: "'Inter', sans-serif", color: "oklch(52% 0.22 25)" }}
                  >
                    Something went wrong. Please email us directly at{" "}
                    <a
                      href="mailto:support@olivebranchdigital.com"
                      className="underline text-white"
                    >
                      support@olivebranchdigital.com
                    </a>
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submit.isPending}
                  className="btn-primary w-full justify-center"
                  style={{ opacity: submit.isPending ? 0.7 : 1 }}
                >
                  {submit.isPending ? "Sending…" : "Send Message & Schedule Consultation"}
                  {!submit.isPending && <ArrowRight size={16} />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────────
function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="py-14 border-t"
      style={{ backgroundColor: "oklch(10% 0.01 25)", borderColor: "rgba(255,255,255,0.08)" }}
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="mb-4">
              <div
                className="text-white font-bold tracking-wider uppercase mb-1"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem" }}
              >
                Winter Peak
              </div>
              <div
                className="tracking-[0.22em] uppercase"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6rem", color: "oklch(52% 0.22 25)", fontWeight: 600 }}
              >
                Fitness Coaching
              </div>
            </div>
            <p
              className="text-xs leading-relaxed mb-5"
              style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.4)", maxWidth: "30ch" }}
            >
              Personalized strength training and nutrition coaching for busy dads who want
              sustainable results without spending hours in the gym.
            </p>
            <p
              className="text-xs italic"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "oklch(52% 0.22 25)", fontSize: "0.95rem" }}
            >
              "Stronger Every Day. No Shortcuts."
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 md:col-start-6">
            <h4
              className="text-xs font-semibold tracking-[0.18em] uppercase mb-5"
              style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.35)" }}
            >
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Services", href: "#services" },
                { label: "How It Works", href: "#how-it-works" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="text-sm bg-transparent border-none text-left"
                    style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.5)" }}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 md:col-start-9">
            <h4
              className="text-xs font-semibold tracking-[0.18em] uppercase mb-5"
              style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.35)" }}
            >
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:support@olivebranchdigital.com"
                className="flex items-center gap-2.5 no-underline group"
              >
                <Mail size={13} style={{ color: "oklch(52% 0.22 25)", flexShrink: 0 }} />
                <span
                  className="text-xs group-hover:text-white transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.5)" }}
                >
                  support@olivebranchdigital.com
                </span>
              </a>
              <a
                href="tel:8005551212"
                className="flex items-center gap-2.5 no-underline group"
              >
                <Phone size={13} style={{ color: "oklch(52% 0.22 25)", flexShrink: 0 }} />
                <span
                  className="text-xs group-hover:text-white transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.5)" }}
                >
                  800-555-1212
                </span>
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://instagram.com/summitpeakfitness"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 border border-white/15 hover:border-[oklch(52%_0.22_25)] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={14} className="text-white/50" />
              </a>
              <a
                href="https://facebook.com/summitpeakfitness"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 border border-white/15 hover:border-[oklch(52%_0.22_25)] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={14} className="text-white/50" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <p
            className="text-xs"
            style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.25)" }}
          >
            &copy; {new Date().getFullYear()} Winter Peak Fitness Coaching. All rights reserved.
          </p>
          <p
            className="text-xs"
            style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.2)" }}
          >
            Built for busy dads who refuse to settle.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "oklch(98% 0.005 60)" }}>
      {/* Structured data for AI extraction */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Winter Peak Fitness Coaching",
            description:
              "Personalized strength training and nutrition coaching for busy dads. Hybrid coaching programs with customized workout plans, virtual check-ins, and simple nutrition guidance.",
            telephone: "800-555-1212",
            email: "support@olivebranchdigital.com",
            url: "https://instagram.com/summitpeakfitness",
            sameAs: [
              "https://instagram.com/summitpeakfitness",
              "https://facebook.com/summitpeakfitness",
            ],
            serviceType: "Fitness Coaching",
            audience: {
              "@type": "Audience",
              audienceType: "Busy dads seeking sustainable fitness results",
            },
            slogan: "Stronger Every Day. No Shortcuts.",
          }),
        }}
      />
      <Nav />
      <Hero />
      <WhoWeServe />
      <Problems />
      <Services />
      <HowItWorks />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
