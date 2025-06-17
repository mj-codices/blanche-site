"use client";
import "./FormButtonTest.css";
import React, { useRef } from "react";

export const FormButtonTest = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const btn = buttonRef.current;
    if (!btn) return;

    // Reset animation by forcing reflow
    btn.classList.remove("animate");

    // Trigger reflow (forces animation restart)
    void btn.offsetWidth;

    btn.classList.add("animate");

    setTimeout(() => {
      btn.classList.remove("animate");
    }, 700); // same timeout as your CodePen
  };
  return (
    <div>
      <button
        ref={buttonRef}
        onClick={handleClick}
        type="button"
        className="bubbly-button"
      >
        Press Me!
      </button>
    </div>
  );
};
