/**
 * WorkCard — project card matching Figma: white card, rounded image, title + subtitle below.
 * Used in: Work page grid, Home selected-work grid.
 */
import { Link } from "react-router-dom";

interface WorkCardProps {
  title: string;
  description: string;
  tag?: string;
  href?: string;
  className?: string;
}

export default function WorkCard({ title, description, href, className = "" }: WorkCardProps) {
  const inner = (
    <div
      className="flex flex-col overflow-hidden"
      style={{
        background: "#FFFFFF",
        borderRadius: 18,
      }}
    >
      {/* Thumbnail */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9", background: "#000" }}>
        <img
          src="/placeholder.svg"
          alt={title}
          className="h-full w-full object-cover opacity-40"
        />
      </div>

      {/* Text area */}
      <div
        className="px-8 py-5"
        style={{ background: "#F7F9F8" }}
      >
        <h3
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: "17.63px",
            lineHeight: "27px",
            letterSpacing: "-0.72px",
            color: "hsl(var(--foreground))",
          }}
        >
          {title}
        </h3>
        <p
          className="mt-1"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: "13px",
            lineHeight: "27px",
            letterSpacing: "-0.72px",
            color: "#777777",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link
        to={href}
        className={`group block no-underline text-foreground transition-transform hover:scale-[1.01] ${className}`}
        onClick={() => window.scrollTo({ top: 0 })}
      >
        {inner}
      </Link>
    );
  }

  return <div className={`group block ${className}`}>{inner}</div>;
}
