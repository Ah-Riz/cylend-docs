"use client";

import { ReactNode, useState } from "react";
import { docsConfig } from "@/config/docs";
import { DocsSidebarNav } from "@/components/docs-sidebar-nav";
import { Menu, X } from "lucide-react";

export default function DocsLayout({ children }: { children: ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen">
            {/* Mobile Sidebar Toggle */}
            <div className="sticky top-0 z-40 flex items-center gap-4 border-b bg-background px-4 py-3 lg:hidden">
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-9 w-9"
                    aria-label="Toggle sidebar"
                >
                    {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
                <span className="text-sm font-semibold">Documentation</span>
            </div>

            <div className="container flex-1 items-start lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
                {/* Sidebar - Desktop */}
                <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r lg:sticky lg:block lg:w-[240px]">
                    <div className="py-6 pr-6 lg:py-8">
                        <DocsSidebarNav items={docsConfig.sidebarNav} />
                    </div>
                </aside>

                {/* Sidebar - Mobile */}
                {sidebarOpen && (
                    <>
                        <div
                            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
                            onClick={() => setSidebarOpen(false)}
                        />
                        <aside className="fixed inset-y-0 left-0 z-50 w-[280px] overflow-y-auto border-r bg-background p-6 shadow-lg lg:hidden">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-sm font-semibold">Navigation</span>
                                <button
                                    onClick={() => setSidebarOpen(false)}
                                    className="rounded-md p-2 hover:bg-accent"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            </div>
                            <DocsSidebarNav items={docsConfig.sidebarNav} />
                        </aside>
                    </>
                )}

                {/* Main Content */}
                <main className="relative py-6 lg:gap-10 lg:py-8">
                    <div className="mx-auto w-full min-w-0 px-4 lg:px-0">
                        <article className="prose prose-slate dark:prose-invert max-w-none prose-headings:scroll-mt-20 prose-headings:font-semibold prose-h1:text-3xl prose-h1:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-p:leading-7 prose-pre:bg-slate-900 prose-pre:text-slate-50 prose-code:text-sm prose-code:bg-slate-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded dark:prose-code:bg-slate-800 prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg prose-img:border">
                            {children}
                        </article>
                    </div>
                </main>
            </div>
        </div>
    );
}

