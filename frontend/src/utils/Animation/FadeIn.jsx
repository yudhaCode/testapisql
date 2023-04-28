import React from "react";

export default function FadeIn({ children, active }) {
  return (
    <div className={`fade-in ${active ? "fade-in-visible height100" : ""}`}>
      {children}
    </div>
  );
}
