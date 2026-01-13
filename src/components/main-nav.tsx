"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { docsConfig } from "@/config/docs";
import { cn } from "@/lib/utils";
import { Search, Github } from "lucide-react";
import Image from "next/image";

export function MainNav() {
    const pathname = usePathname();

    return (
        <div className="flex items-center justify-between gap-4 w-full">
            <div className="flex items-center gap-6 md:gap-10">
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src="/logo/primary.svg"
                        alt="Cylend Logo"
                        width={120}
                        height={40}
                        className="h-8 w-auto"
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-6">
                    {docsConfig.mainNav.filter(item => !item.external).map((item, index) => (
                        <Link
                            key={index}
                            href={item.href ?? "#"}
                            className={cn(
                                "flex items-center text-sm font-medium transition-colors hover:text-foreground",
                                pathname === item.href
                                    ? "text-foreground"
                                    : "text-muted-foreground"
                            )}
                        >
                            {item.title}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Right side actions */}
            <div className="flex items-center gap-2">
                {/* Search Button - Placeholder for future implementation */}
                <button
                    className="hidden sm:inline-flex items-center gap-2 rounded-md border border-border bg-background px-3 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                    aria-label="Search documentation"
                >
                    <Search className="h-4 w-4" />
                    <span className="hidden md:inline">Search...</span>
                    <kbd className="hidden md:inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-xs font-medium text-muted-foreground">
                        <span className="text-xs">⌘</span>K
                    </kbd>
                </button>

                {/* GitHub Link */}
                <Link
                    href="https://github.com/yourusername/cylend"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-9 w-9"
                    aria-label="GitHub repository"
                >
                    <Github className="h-5 w-5" />
                </Link>
            </div>
        </div>
    );
}


