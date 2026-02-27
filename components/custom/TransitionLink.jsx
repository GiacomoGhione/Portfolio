"use client";

import Link from "next/link";
import { usePageTransition } from "@/context/TransitionContext";

export default function TransitionLink({ href, children, onClick, ...props }) {
  const { navigateTo } = usePageTransition();

  const handleClick = (e) => {
    e.preventDefault();
    onClick?.(e);
    navigateTo(href, e.clientX, e.clientY);
  };

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
