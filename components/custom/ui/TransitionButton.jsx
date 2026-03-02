"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePageTransition } from "@/context/TransitionContext";

export default function TransitionButton({
  href,
  children,
  onClick,
  ...props
}) {
  const { navigateTo } = usePageTransition();

  const handleClick = (e) => {
    e.preventDefault();
    onClick?.(e);
    navigateTo(href, e.clientX, e.clientY);
  };

  return (
    <Button asChild {...props}>
      <Link href={href} onClick={handleClick}>
        {children}
      </Link>
    </Button>
  );
}
