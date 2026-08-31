import type { ElementType, ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: 0 | 1 | 2 | 3;
}

export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
}: RevealProps) {
  const { ref, visible } = useReveal<HTMLElement>();
  const delayClass = delay ? `reveal-delay-${delay}` : "";

  return (
    <Tag
      // Tag is dynamic (polymorphic "as" prop), so the exact HTMLElement
      // subtype can't be known statically here.
      ref={ref as never}
      className={`reveal ${delayClass} ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
