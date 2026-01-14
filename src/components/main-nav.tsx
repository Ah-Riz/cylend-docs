"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { docsConfig } from "@/config/docs";
import { cn } from "@/lib/utils";
import { Search, Github, Sparkles } from "lucide-react";
import Image from "next/image";

export function MainNav() {
    const pathname = usePathname();

    return (
        <div className="flex items-center justify-between gap-4 w-full">
            <div className="flex items-center gap-8 md:gap-12">
                <Link href="/" className="flex items-center space-x-2 group">
                    <Image
                        src="/logo/primary.svg"
                        alt="Cylend Logo"
                        width={120}
                        height={40}
                        className="h-8 w-auto transition-all group-hover:drop-shadow-[0_0_10px_rgba(6,208,239,0.5)]"
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-1">
                    {docsConfig.mainNav.filter(item => !item.external).map((item, index) => (
                        <Link
                            key={index}
                            href={item.href ?? "#"}
                            className={cn(
                                "flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all",
                                pathname === item.href
                                    ? "text-primary bg-primary/10"
                                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                            )}
                        >
                            {item.title}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Right side actions */}
            <div className="flex items-center gap-3">
                {/* Search Button - Placeholder for future implementation */}
                <button
                    className="hidden sm:inline-flex items-center gap-2 glass-card rounded-xl px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all group"
                    aria-label="Search documentation"
                >
                    <Search className="h-4 w-4 group-hover:text-primary transition-colors" />
                    <span className="hidden md:inline">Search...</span>
                    <kbd className="hidden md:inline-flex h-5 select-none items-center gap-1 rounded-md border border-border/50 bg-muted/50 px-2 font-mono text-xs font-medium text-muted-foreground">
                        <span className="text-xs">⌘</span>K
                    </kbd>
                </button>

                {/* GitHub Link */}
                <Link
                    href="https://github.com/yourusername/cylend"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground h-10 w-10 border border-transparent hover:border-border/50"
                    aria-label="GitHub repository"
                >
                    <Github className="h-5 w-5" />
                </Link>
            </div>
        </div>
    );
}
