"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import useScrollLock from "@/hooks/useScrollLock";

/**
 * Icon badge used inside feature cards.
 * @param {"sm"|"md"} size
 */
function IconBadge({ icon: Icon, size = "md", interactive = false }) {
  const sizes = {
    sm: "h-9 w-9 [&_svg]:h-5 [&_svg]:w-5",
    md: "h-12 w-12 [&_svg]:h-6 [&_svg]:w-6",
  };

  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-xl bg-muted text-muted-foreground ${sizes[size]} ${
        interactive
          ? "transition-colors group-hover:bg-foreground group-hover:text-background"
          : ""
      }`}
    >
      <Icon strokeWidth={1.5} />
    </div>
  );
}

export function ExpandableCard({
  title,
  icon,
  src,
  tag,
  description,
  children,
  className,
  classNameExpanded,
  ...props
}) {
  const [active, setActive] = React.useState(false);
  const cardRef = React.useRef(null);
  const id = React.useId();
  useScrollLock(active);

  React.useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setActive(false);
      }
    };

    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setActive(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-card/25 backdrop-blur-md h-full w-full z-50"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && (
          <div
            className={cn(
              "fixed inset-0 grid place-items-center z-50 before:pointer-events-none",
            )}
          >
            <motion.div
              layoutId={`card-${title}-${id}`}
              ref={cardRef}
              className={cn(
                "w-full max-w-212 h-full flex flex-col overflow-auto [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] rounded-t-3xl bg-card shadow-sm relative",
                classNameExpanded,
              )}
              {...props}
            >
              {src && (
                <motion.div layoutId={`image-${title}-${id}`}>
                  <div className="relative before:absolute before:inset-x-0 before:-bottom-px before:h-18 before:z-50 ">
                    <Image
                      src={src}
                      alt={title}
                      className="w-full h-80 object-cover object-center"
                    />
                  </div>
                </motion.div>
              )}
              <motion.div layoutId={`image-${title}-${id}`}>
                {src && (
                  <Image
                    src={src}
                    alt={title}
                    className="w-64 h-56 rounded-lg object-cover object-center"
                  />
                )}
              </motion.div>
              <div className="flex justify-between items-start gap-4 p-8">
                <div className="flex flex-col gap-4">
                  <motion.h3
                    layoutId={`title-${title}-${id}`}
                    className="font-semibold text-muted-foreground text-4xl sm:text-4xl"
                  >
                    {title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${description}-${id}`}
                    className="text-muted-foreground/90 text-lg"
                  >
                    {description}
                  </motion.p>
                </div>
                <motion.button
                  aria-label="Close card"
                  layoutId={`button-${title}-${id}`}
                  className="h-8 w-8 mt-1.75 shrink-0 flex items-center justify-center rounded-full text-muted-foreground border border-border hover:bg-muted-foreground hover:text-card transition-colors duration-300 focus:outline-none"
                  onClick={() => setActive(false)}
                >
                  <motion.div
                    animate={{ rotate: active ? 45 : 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                  </motion.div>
                </motion.button>
              </div>
              <div className="relative px-8">
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-muted-foreground text-base pb-10 flex flex-col items-start gap-4 overflow-auto "
                >
                  {children}
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.div
        role="dialog"
        aria-labelledby={`card-title-${id}`}
        aria-modal="true"
        layoutId={`card-${title}-${id}`}
        onClick={() => {
          setActive(true);
        }}
        className={cn(
          "group flex justify-between gap-4 p-4 bg-card border border-border rounded-2xl cursor-pointer overflow-hidden",
          className,
        )}
      >
        <div className="flex gap-2 flex-col">
          <motion.div layoutId={`image-${title}-${id}`}>
            {src && (
              <Image
                src={src}
                alt={title}
                className="w-64 h-56 rounded-lg object-cover object-center"
              />
            )}
            {icon && (
              <div className="flex items-center gap-2">
                <IconBadge icon={icon} size="md" interactive={true} />
                {tag && (
                  <span className="ml-2 text-sm font-medium text-muted-foreground">
                    {tag}
                  </span>
                )}
              </div>
            )}
          </motion.div>
          <div className="flex flex-col gap-0.5 min-w-0">
            <motion.h3
              layoutId={`title-${title}-${id}`}
              className="text-lg font-medium text-muted-foreground truncate"
            >
              {title}
            </motion.h3>
            <motion.p
              layoutId={`description-${description}-${id}`}
              className="text-sm text-muted-foreground/90 line-clamp-1 lg:line-clamp-2"
            >
              {description}
            </motion.p>
          </div>
        </div>
        <motion.button
          aria-label="Open card"
          layoutId={`button-${title}-${id}`}
          className={cn(
            "h-8 w-8 shrink-0 flex items-center justify-center mt-auto rounded-full text-muted-foreground border border-border hover:bg-muted-foreground hover:text-card transition-colors duration-300 focus:outline-none",
            className,
          )}
        >
          <motion.div
            animate={{ rotate: active ? 45 : 0 }}
            transition={{ duration: 0.4 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
          </motion.div>
        </motion.button>
      </motion.div>
    </>
  );
}
