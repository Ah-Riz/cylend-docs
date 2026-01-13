import Link from "next/link";
import { ArrowRight, Shield, Zap, Lock, Code, BookOpen, Boxes } from "lucide-react";

export default function Home() {
  return (
    <div className="container relative">
      {/* Hero Section */}
      <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
        <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
          Cylend Documentation
        </h1>
        <p className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
          Privacy-preserving credit infrastructure built on Mantle and Sapphire networks.
          Learn how to build, deploy, and integrate with Cylend.
        </p>
        <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
          <Link
            href="/getting-started"
            className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/architecture"
            className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Architecture
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="mx-auto grid max-w-5xl grid-cols-1 gap-6 pb-8 md:grid-cols-2 lg:grid-cols-3 md:pb-12 lg:pb-20">
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

      {/* Quick Links */}
      <section className="mx-auto max-w-5xl border-t py-8 md:py-12">
        <h2 className="mb-4 text-2xl font-bold">Quick Links</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
      className="group relative overflow-hidden rounded-lg border bg-background p-6 transition-all hover:shadow-md"
    >
      <div className="flex flex-col gap-4">
        <div className="text-primary">{icon}</div>
        <div>
          <h3 className="font-bold">{title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
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
      className="group flex flex-col gap-2 rounded-lg border p-4 transition-colors hover:bg-muted"
    >
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">{title}</h3>
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
    </Link>
  );
}
