import type { JSX } from "react";

interface TelemetryBadgeProps {
  icon: string;
  title: string;
  subtitle: string;
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  isPrimary?: boolean;
}

const positionClasses = {
  "top-left": "top-4 left-4 hidden sm:flex",
  "top-right": "top-4 right-4 hidden md:flex",
  "bottom-left": "bottom-4 left-4 hidden md:flex",
  "bottom-right": "bottom-4 right-4 flex",
};

export default function TelemetryBadge({ icon, title, subtitle, position, isPrimary }: TelemetryBadgeProps): JSX.Element {
  return (
    <div
      className={`absolute ${positionClasses[position]} items-center gap-3 p-3 rounded-lg shadow-lg max-w-xs ${
        isPrimary ? "bg-surface-container-lowest/95" : "bg-surface-container-lowest/90 backdrop-blur-md"
      }`}
    >
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center ${
          isPrimary ? "bg-primary text-on-primary" : "bg-primary/10 text-primary"
        }`}
      >
        <span className="material-symbols-outlined text-[18px]">{icon}</span>
      </div>
      <div>
        <p className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">{title}</p>
        <p className="font-label-lg text-label-lg text-on-surface font-bold">{subtitle}</p>
      </div>
    </div>
  );
}
