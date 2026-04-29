import Link from "next/link";
import { Space_Grotesk, Sora } from "next/font/google";
import { MessageCircle, Mic, Brain, Sparkles, Shield, Clock, Heart, Users, ArrowRight, ChevronDown } from "lucide-react";
import featuresData from "@/app/featdata/cardsData.json";
import AuthButtons from "@/components/AuthButtons";

const headingFont = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-heading",
});

const bodyFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

type FeatureItem = {
  id: number;
  title: string;
  description: string;
  isFeatured: boolean;
};

const featuredItems = (featuresData.courses as FeatureItem[])
  .filter((item) => item.isFeatured)
  .slice(0, 6);

const quickStats = [
  { icon: Shield, label: "Private & Encrypted", desc: "Your data stays yours" },
  { icon: Clock, label: "Available 24/7", desc: "Support whenever you need it" },
  { icon: Heart, label: "Judgment-Free", desc: "A safe space to vent" },
  { icon: Users, label: "Built for Youth", desc: "Understands student life" },
];

const processSteps = [
  {
    icon: MessageCircle,
    title: "1. Share your thoughts",
    text: "Type or speak what's on your mind. Vent about exams, relationships, or just daily stress.",
  },
  {
    icon: Sparkles,
    title: "2. Get personalized guidance",
    text: "Our AI provides calm, context-aware support and practical coping strategies.",
  },
  {
    icon: Brain,
    title: "3. Build mental resilience",
    text: "Track your mood, reflect in your journal, and develop healthier habits over time.",
  },
];

const faqs = [
  {
    question: "Is this a replacement for professional therapy?",
    answer: "No. MindEase is a supportive self-help companion. For severe distress or emergencies, professional or crisis care is essential.",
  },
  {
    question: "Are my conversations actually private?",
    answer: "Yes! We use end-to-end encryption at rest for all conversations. Your sensitive data is locked securely and cannot be read by anyone else.",
  },
  {
    question: "Can I use this if I am not ready to talk openly?",
    answer: "Absolutely. You can begin anonymously, use the structured journaling tools, or try shorter prompts until you feel comfortable.",
  },
];

export default function HomePage() {
  return (
    <main className={`${headingFont.variable} ${bodyFont.variable} font-[var(--font-body)]`}>
      {/* Navigation */}
      <nav className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 md:px-10">
        <div className="flex items-center gap-2">
          <Brain className="h-8 w-8 text-teal-400" />
          <span className="font-[var(--font-heading)] text-2xl font-bold text-white tracking-tight">MindEase</span>
        </div>
        <div className="flex gap-4 items-center">
          <AuthButtons />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-6 pb-20 pt-12 text-center md:px-10 md:pt-16 lg:pt-20">
        <div className="reveal-up inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-teal-300 backdrop-blur-md">
          <Sparkles className="h-3.5 w-3.5" />
          Your Personal Safe Space
        </div>

        <h1 className="reveal-up reveal-delay-1 mt-8 max-w-4xl font-[var(--font-heading)] text-5xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl">
          Find your calm in the <br className="hidden md:block" />
          <span className="text-gradient">digital chaos.</span>
        </h1>

        <p className="reveal-up reveal-delay-2 mt-6 max-w-2xl text-lg text-neutral-300 md:text-xl leading-relaxed">
          MindEase is an AI-powered companion helping students navigate stress, burnout, and emotional overload through confidential conversations and reflective journaling.
        </p>

        <div className="reveal-up reveal-delay-3 mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link href="/chat" className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-2xl bg-white px-8 py-4 font-bold text-neutral-950 transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
            <span className="relative z-10 flex items-center gap-2">Start a Safe Chat <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
          </Link>
          <Link href="/voice" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/30">
            <Mic className="h-4 w-4" /> Try Voice Talk
          </Link>
        </div>
      </section>

      {/* Quick Stats / Trust Section */}
      <section className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-24 md:px-10">
        <div className="reveal-up reveal-delay-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickStats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="glass-panel glass-panel-hover flex flex-col items-center justify-center rounded-2xl p-6 text-center">
                <div className="mb-4 rounded-full bg-white/10 p-3 text-teal-400">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-[var(--font-heading)] text-lg font-bold text-white">{stat.label}</h3>
                <p className="mt-1 text-sm text-neutral-400">{stat.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* How it Works */}
      <section className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-32 md:px-10">
        <div className="text-center mb-16">
          <h2 className="font-[var(--font-heading)] text-3xl font-extrabold text-white md:text-5xl">How MindEase Works</h2>
          <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">A simple, intuitive flow designed to provide support exactly when you need it.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-teal-500/0 via-teal-500/20 to-purple-500/0 -z-10" />
          
          {processSteps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="reveal-up glass-panel glass-panel-hover rounded-3xl p-8 relative" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="absolute -top-6 left-8 rounded-2xl bg-gradient-to-br from-teal-500 to-blue-600 p-4 shadow-lg">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-6 font-[var(--font-heading)] text-xl font-bold text-white">{step.title}</h3>
                <p className="mt-3 text-neutral-300 leading-relaxed">{step.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-32 md:px-10">
        <div className="mb-12 text-center md:text-left">
          <h2 className="font-[var(--font-heading)] text-3xl font-extrabold text-white md:text-5xl">Core Capabilities</h2>
          <p className="mt-4 text-neutral-400 max-w-2xl">Everything you need to build mental resilience, in one secure platform.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredItems.map((item, i) => (
            <div key={item.id} className="reveal-up glass-panel glass-panel-hover group rounded-3xl p-8" style={{ animationDelay: `${i * 0.1}s` }}>
              <h3 className="font-[var(--font-heading)] text-xl font-bold text-white group-hover:text-teal-300 transition-colors">{item.title}</h3>
              <p className="mt-4 text-sm text-neutral-400 leading-relaxed">{item.description}</p>
              <div className="mt-6 flex items-center text-xs font-semibold uppercase tracking-wider text-teal-500 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                Explore feature <ArrowRight className="ml-2 h-3 w-3" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 mx-auto w-full max-w-3xl px-6 pb-32 md:px-10 text-center">
        <h2 className="font-[var(--font-heading)] text-3xl font-extrabold text-white md:text-4xl mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4 text-left">
          {faqs.map((faq, i) => (
            <details key={i} className="reveal-up group glass-panel rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden" style={{ animationDelay: `${i * 0.1}s` }}>
              <summary className="flex cursor-pointer items-center justify-between p-6 font-[var(--font-heading)] text-lg font-bold text-white transition-colors hover:bg-white/5">
                {faq.question}
                <ChevronDown className="h-5 w-5 text-neutral-400 transition-transform duration-300 group-open:-rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-neutral-300 border-t border-white/5 pt-4 leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8 md:px-10">
          <div className="flex-1" />
          <p className="flex-1 text-center text-sm text-neutral-500">© {new Date().getFullYear()} MindEase. Designed for student wellness.</p>
          <div className="flex flex-1 justify-end">
            <a
              href="https://github.com/student-ankitpandit/MindEase"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
