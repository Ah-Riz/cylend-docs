import { ReactNode } from "react";

interface CalloutProps {
    children: ReactNode;
    type?: "note" | "warning" | "important" | "tip" | "caution";
}

const calloutStyles = {
    note: "border-blue-500 bg-blue-50 dark:bg-blue-950/30",
    warning: "border-yellow-500 bg-yellow-50 dark:bg-yellow-950/30",
    important: "border-purple-500 bg-purple-50 dark:bg-purple-950/30",
    tip: "border-green-500 bg-green-50 dark:bg-green-950/30",
    caution: "border-red-500 bg-red-50 dark:bg-red-950/30",
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
