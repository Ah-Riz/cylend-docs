import Link from "next/link";
import { ArrowRight, Shield, Zap, Lock, Code, BookOpen, Boxes, AlertTriangle, CheckCircle2, Globe, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="relative page-transition">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center text-center px-4 py-16 md:py-24 lg:py-32">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm mb-8">
          <Sparkles className="h-4 w-4" />
          <span>Privacy-First DeFi Infrastructure</span>
        </div>

        <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl lg:leading-[1.1] text-white mb-6 max-w-4xl">
          Cylend Documentation
        </h1>

        <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed mb-10">
          Privacy-preserving credit infrastructure built on Mantle and Sapphire networks.
          Learn how to build, deploy, and integrate with Cylend.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/getting-started"
            className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-8 text-sm font-semibold text-black shadow-lg shadow-primary/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/architecture"
            className="inline-flex h-12 items-center justify-center rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm px-8 text-sm font-semibold text-foreground transition-all hover:scale-105 hover:border-primary/50 hover:bg-background/80"
          >
            Architecture
          </Link>
        </div>
      </section>

      {/* The Problem & Solution Section */}
      <section className="w-full py-16 md:py-28 lg:py-36 rounded-[2rem] my-12 overflow-hidden relative">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-red-500/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvZz48L3N2Zz4=')] opacity-50"></div>

        <div className="container relative z-10 mx-auto px-6 md:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
            {/* Problem */}
            <div className="space-y-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2 text-sm font-semibold text-red-400 backdrop-blur-md shadow-lg shadow-red-500/10">
                <AlertTriangle className="h-4 w-4" />
                The Problem
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
                  The Transparency Paradox
                </h2>
                <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
                  In traditional DeFi, transparency is a double-edged sword. To participate, you must expose your entire financial strategy to the world.
                </p>
              </div>
              <div className="space-y-5">
                <div className="group flex items-start gap-5 p-5 rounded-2xl bg-gradient-to-br from-red-950/40 to-red-950/20 border border-red-900/40 hover:border-red-700/50 transition-all hover:shadow-lg hover:shadow-red-500/10">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-red-500/20 text-red-400 font-bold text-lg group-hover:bg-red-500 group-hover:text-white transition-all">
                    01
                  </div>
                  <div>
                    <strong className="block text-slate-100 text-lg font-semibold mb-2">Strategy Leakage</strong>
                    <span className="text-slate-400 leading-relaxed">Institutions cannot trade if their positions and alpha are visible to competitors instantly.</span>
                  </div>
                </div>
                <div className="group flex items-start gap-5 p-5 rounded-2xl bg-gradient-to-br from-red-950/40 to-red-950/20 border border-red-900/40 hover:border-red-700/50 transition-all hover:shadow-lg hover:shadow-red-500/10">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-red-500/20 text-red-400 font-bold text-lg group-hover:bg-red-500 group-hover:text-white transition-all">
                    02
                  </div>
                  <div>
                    <strong className="block text-slate-100 text-lg font-semibold mb-2">Predatory MEV</strong>
                    <span className="text-slate-400 leading-relaxed">Searchers monitor mempools to front-run large liquidations, causing massive slippage.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Solution */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 via-emerald-500/10 to-green-500/20 rounded-3xl blur-xl"></div>
              <div className="relative rounded-3xl border border-slate-700/50 bg-gradient-to-br from-slate-800/80 to-slate-900/90 p-8 md:p-10 shadow-2xl backdrop-blur-xl">
                <div className="absolute -top-5 -right-5 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 p-4 shadow-xl shadow-green-500/30 animate-float">
                  <CheckCircle2 className="h-8 w-8 text-white" />
                </div>
                <div className="space-y-8">
                  <div className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-5 py-2 text-sm font-semibold text-green-400 backdrop-blur-md">
                    <Shield className="mr-1 h-4 w-4" />
                    The Solution
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Confidential Compliance</h3>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      Cylend enables a <span className="font-semibold text-green-400">"Dark Pool"</span> experience on a public ledger by bifurcating the stack.
                    </p>
                  </div>

                  <div className="grid gap-5">
                    <div className="group rounded-2xl bg-gradient-to-br from-slate-800 to-slate-800/50 p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all cursor-default hover:shadow-lg hover:shadow-blue-500/10">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                          <Globe className="h-6 w-6" />
                        </div>
                        <span className="font-bold text-blue-100 text-xl">Public Assets (Mantle)</span>
                      </div>
                      <p className="text-slate-400 pl-1 leading-relaxed">Solvency is publicly verifiable, but specific ownership logic is decoupled.</p>
                    </div>
                    <div className="group rounded-2xl bg-gradient-to-br from-slate-800 to-slate-800/50 p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all cursor-default hover:shadow-lg hover:shadow-purple-500/10">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
                          <Lock className="h-6 w-6" />
                        </div>
                        <span className="font-bold text-purple-100 text-xl">Private Logic (Sapphire)</span>
                      </div>
                      <p className="text-slate-400 pl-1 leading-relaxed">Positions, LTV, and Health Factors processed inside TEE enclaves.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="mx-auto grid max-w-5xl grid-cols-1 gap-6 pb-12 md:grid-cols-2 lg:grid-cols-3 md:pb-16 lg:pb-24 px-4">
        <FeatureCard
          icon={<Shield className="h-10 w-10" />}
          title="Privacy First"
          description="All lending operations are encrypted using Sapphire's confidential computing"
          href="/architecture/security"
        />
        <FeatureCard
          icon={<Zap className="h-10 w-10" />}
          title="Cross-Chain"
          description="Seamless communication between Mantle and Sapphire via Hyperlane"
          href="/architecture/cross-chain"
        />
        <FeatureCard
          icon={<Lock className="h-10 w-10" />}
          title="Smart Contracts"
          description="Audited Solidity contracts for secure lending and borrowing"
          href="/smart-contracts"
        />
        <FeatureCard
          icon={<Code className="h-10 w-10" />}
          title="Developer Tools"
          description="Complete SDK, hooks, and APIs for easy integration"
          href="/frontend"
        />
        <FeatureCard
          icon={<BookOpen className="h-10 w-10" />}
          title="Comprehensive Guides"
          description="Step-by-step tutorials for all user flows and features"
          href="/guides"
        />
        <FeatureCard
          icon={<Boxes className="h-10 w-10" />}
          title="GraphQL API"
          description="Real-time data indexing with Ponder and GraphQL queries"
          href="/indexer"
        />
      </section>

      {/* Divider */}
      <div className="divider-glow max-w-5xl mx-auto"></div>

      {/* Quick Links */}
      <section className="mx-auto max-w-5xl py-12 md:py-16 px-4">
        <h2 className="mb-8 text-3xl font-bold gradient-text">Quick Links</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <QuickLink
            title="Installation"
            description="Get up and running in 5 minutes"
            href="/getting-started/installation"
          />
          <QuickLink
            title="Quick Start"
            description="Your first deposit and borrow"
            href="/getting-started/quick-start"
          />
          <QuickLink
            title="User Flows"
            description="Complete user flow diagrams"
            href="/guides/user-flows"
          />
          <QuickLink
            title="API Reference"
            description="Complete API documentation"
            href="/api-reference"
          />
          <QuickLink
            title="Troubleshooting"
            description="Common issues and solutions"
            href="/guides/troubleshooting"
          />
          <QuickLink
            title="GitHub"
            description="View source code"
            href="https://github.com"
          />
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group glass-card card-hover relative overflow-hidden rounded-2xl p-6 transition-all"
    >
      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity shimmer"></div>

      <div className="relative flex flex-col gap-4">
        <div className="text-primary p-3 rounded-xl bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
          {icon}
        </div>
        <div>
          <h3 className="font-bold text-lg text-foreground">{title}</h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>

      {/* Arrow indicator */}
      <ArrowRight className="absolute bottom-6 right-6 h-5 w-5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
    </Link>
  );
}

function QuickLink({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group glass-card flex flex-col gap-3 rounded-xl p-5 transition-all hover:border-primary/30"
    >
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{title}</h3>
        <ArrowRight className="h-4 w-4 text-muted-foreground transition-all group-hover:text-primary group-hover:translate-x-1" />
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </Link>
  );
}
