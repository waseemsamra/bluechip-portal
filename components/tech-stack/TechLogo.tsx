import type { JSX } from "react";

export interface TechLogoProps {
  name?: string;
  alt?: string;
  className?: string;
}

export default function TechLogo({
  name,
  alt,
  className = "w-7 h-7",
}: TechLogoProps): JSX.Element {
  if (!name) {
    return (
      <span className="material-symbols-outlined text-primary text-[24px]">
        apps
      </span>
    );
  }
  return (
    <img
      src={`/images/tech-stack/${name}.svg`}
      alt={alt ?? name}
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
}
