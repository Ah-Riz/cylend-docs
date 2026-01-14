"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NavItem } from "@/config/docs";
import { ChevronRight } from "lucide-react";

export function DocsSidebarNav({ items }: { items: NavItem[] }) {
    const pathname = usePathname();

    return items.length ? (
        <div className="w-full space-y-6">
            {items.map((item, index) => (
                <div key={index} className="pb-2">
                    <h4 className="mb-3 rounded-lg px-3 py-2 text-xs font-bold uppercase tracking-wider text-muted-foreground/80 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                        {item.title}
                    </h4>
                    {item.items ? (
                        <DocsSidebarNavItems items={item.items} pathname={pathname} />
                    ) : null}
                </div>
            ))}
        </div>
    ) : null;
}

interface DocsSidebarNavItemsProps {
    items: NavItem[];
    pathname: string | null;
}

export function DocsSidebarNavItems({
    items,
    pathname,
}: DocsSidebarNavItemsProps) {
    return items?.length ? (
        <div className="grid grid-flow-row auto-rows-max text-sm gap-0.5">
            {items.map((item, index) =>
                item.href && !item.disabled ? (
                    <Link
                        key={index}
                        href={item.href}
                        className={cn(
                            "group relative flex w-full items-center gap-2 rounded-lg border border-transparent px-3 py-2 transition-all duration-200",
                            pathname === item.href
                                ? "bg-gradient-to-r from-primary/10 to-primary/5 text-primary font-medium border-primary/20"
                                : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                        )}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noreferrer" : undefined}
                    >
                        {/* Active indicator */}
                        <span className={cn(
                            "absolute left-0 top-1/2 -translate-y-1/2 w-0.5 rounded-full transition-all duration-200",
                            pathname === item.href
                                ? "h-4 bg-gradient-to-b from-primary to-primary/50"
                                : "h-0 group-hover:h-3 bg-primary/30"
                        )}></span>

                        {item.title}

                        {item.label && (
                            <span className="ml-auto rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                                {item.label}
                            </span>
                        )}

                        {/* Hover arrow */}
                        <ChevronRight className={cn(
                            "ml-auto h-3.5 w-3.5 transition-all duration-200",
                            pathname === item.href
                                ? "opacity-100 text-primary"
                                : "opacity-0 -translate-x-2 group-hover:opacity-50 group-hover:translate-x-0"
                        )} />
                    </Link>
                ) : (
                    <span
                        key={index}
                        className="flex w-full cursor-not-allowed items-center rounded-lg px-3 py-2 text-muted-foreground/50"
                    >
                        {item.title}
                        {item.label && (
                            <span className="ml-2 rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground/50">
                                {item.label}
                            </span>
                        )}
                    </span>
                )
            )}
        </div>
    ) : null;
}
