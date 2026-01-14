import { ReactNode } from "react";

interface CalloutProps {
    children: ReactNode;
    type?: "note" | "warning" | "important" | "tip" | "caution";
}

const calloutStyles = {
    note: "border-blue-500 bg-blue-50 text-blue-900 dark:bg-blue-950/40 dark:text-blue-100",
    warning: "border-yellow-500 bg-yellow-50 text-yellow-900 dark:bg-yellow-950/40 dark:text-yellow-100",
    important: "border-purple-500 bg-purple-50 text-purple-900 dark:bg-purple-950/40 dark:text-purple-100",
    tip: "border-green-500 bg-green-50 text-green-900 dark:bg-green-950/40 dark:text-green-100",
    caution: "border-red-500 bg-red-50 text-red-900 dark:bg-red-950/40 dark:text-red-100",
};

const calloutTitles = {
    note: "Note",
    warning: "Warning",
    important: "Important",
    tip: "Tip",
    caution: "Caution",
};

export function Callout({ children, type = "note" }: CalloutProps) {
    return (
        <div
            className={`my-6 flex flex-col gap-2 rounded-lg border-l-4 p-4 ${calloutStyles[type]}`}
        >
            <div className="font-semibold">{calloutTitles[type]}</div>
            <div>{children}</div>
        </div>
    );
}
