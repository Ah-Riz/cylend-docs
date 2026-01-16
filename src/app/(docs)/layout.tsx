"use client";

import { ReactNode, useState } from "react";
import { docsConfig } from "@/config/docs";
import { DocsSidebarNav } from "@/components/docs-sidebar-nav";
import { Menu, X, BookOpen } from "lucide-react";

export default function DocsLayout({ children }: { children: ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen page-transition">
            {/* Mobile Sidebar Toggle */}
            <div className="sticky top-16 z-40 flex items-center gap-4 border-b border-border/50 bg-background/80 backdrop-blur-xl px-4 py-3 lg:hidden">
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground h-10 w-10 border border-border/50"
                    aria-label="Toggle sidebar"
                >
                    {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
                <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <span className="text-sm font-semibold">Documentation</span>
                </div>
            </div>

            <div className="container flex-1 items-start lg:grid lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12">
                {/* Sidebar - Desktop */}
                <aside className="fixed top-16 z-30 hidden h-[calc(100vh-4rem)] w-full shrink-0 lg:sticky lg:block lg:w-[260px]">
                    <div className="h-full overflow-hidden">
                        <div className="h-full overflow-y-auto py-8 pr-6 scrollbar-thin">
                            <DocsSidebarNav items={docsConfig.sidebarNav} />
                        </div>
                    </div>
                </aside>

                {/* Sidebar - Mobile */}
                {sidebarOpen && (
                    <>
                        <div
                            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-md lg:hidden"
                            onClick={() => setSidebarOpen(false)}
                        />
                        <aside className="fixed inset-y-0 left-0 z-50 w-[300px] overflow-y-auto glass-card border-r border-border/50 p-6 shadow-2xl lg:hidden">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-2">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <BookOpen className="h-4 w-4 text-primary" />
                                    </div>
                                    <span className="text-sm font-bold">Navigation</span>
                                </div>
                                <button
                                    onClick={() => setSidebarOpen(false)}
                                    className="rounded-lg p-2 hover:bg-accent transition-colors"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            </div>
                            <div className="divider-glow mb-6"></div>
                            <DocsSidebarNav items={docsConfig.sidebarNav} />
                        </aside>
                    </>
                )}

                {/* Main Content */}
                <main className="relative py-8 lg:py-10">
                    <div className="mx-auto w-full min-w-0 px-4 lg:px-0">
                        <article className="prose prose-slate dark:prose-invert max-w-none prose-headings:scroll-mt-24 prose-headings:font-bold prose-headings:tracking-tight prose-h1:text-4xl prose-h1:font-extrabold prose-h1:mb-4 prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-2 prose-h2:border-b prose-h2:border-border/50 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:leading-7 prose-p:text-muted-foreground prose-pre:bg-slate-900 prose-pre:text-slate-50 prose-pre:border prose-pre:border-border/50 prose-pre:shadow-lg prose-code:text-sm prose-code:font-medium prose-a:text-primary prose-a:no-underline prose-a:font-medium hover:prose-a:underline prose-img:rounded-xl prose-img:border prose-img:border-border/50 prose-img:shadow-lg prose-strong:text-foreground prose-strong:font-semibold prose-li:text-muted-foreground prose-ul:my-4 prose-ol:my-4 prose-li:my-1 prose-hr:border-border/50 prose-blockquote:border-primary/50 prose-blockquote:bg-primary/5 prose-blockquote:rounded-r-lg prose-blockquote:py-1 prose-blockquote:not-italic prose-blockquote:text-muted-foreground">
                            {children}
                        </article>
                    </div>
                </main>
            </div>
        </div>
    );
}
