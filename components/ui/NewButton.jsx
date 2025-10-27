import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import React, { useState } from "react";

function NewButton({ className, children, ...props }) {
  const [isHover, setHover] = useState(false);

  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={cn(
        "inline-flex custom mil-choose items-center justify-center gap-3 rounded-full text-sm font-medium transition-all duration-700 disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none bg-theme-600 hover:bg-theme-700 group text-white py-3 px-6 cursor-pointer",
        isHover && "px-8", // smoothly expand on hover
        className
      )}
      {...props}
    >
      {children}

      {/* Arrow Container */}
      <span
        className={cn(
          "relative flex items-center justify-end rounded-full size-8 p-1.5 bg-white text-theme-600 overflow-hidden transition-all duration-700",
          isHover && "translate-x-1"
        )}
      >
        {/* Arrows stacked for animation */}
        <ArrowRight
          strokeWidth={1.5}
          size={20}
          className={cn(
            "absolute transition-transform duration-700",
            isHover ? "translate-x-7" : "translate-x-0"
          )}
        />
        <ArrowRight
          strokeWidth={1.5}
          size={20}
          className={cn(
            "absolute transition-transform duration-700",
            isHover ? "translate-x-0" : "-translate-x-7"
          )}
        />
      </span>
    </button>
  );
}

export default NewButton;
