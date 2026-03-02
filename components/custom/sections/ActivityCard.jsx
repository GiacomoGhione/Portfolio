"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ActivityCard({ activity, index }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div
      ref={cardRef}
      className={`grid gap-8 lg:gap-12 items-center ${
        index % 2 === 1
          ? "lg:grid-cols-[1fr_1.2fr]"
          : "lg:grid-cols-[1.2fr_1fr]"
      }`}
    >
      {/* Image */}
      <div
        className={`relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted ${
          index % 2 === 1 ? "lg:order-2" : ""
        }`}
      >
        <motion.div className="absolute inset-0" style={{ y: imageY }}>
          <Image
            src={activity.image}
            alt={activity.alt}
            fill
            className="object-cover scale-110"
            priority={false}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
      </div>

      {/* Text */}
      <div className={index % 2 === 1 ? "lg:order-1" : ""}>
        <h3 className="font-sans text-2xl lg:text-4xl mb-3 text-muted-foreground">
          {activity.title}
        </h3>
        <div className="w-18 h-px bg-muted-foreground/75 mb-4" />
        <p className="text-muted-foreground leading-relaxed text-lg">
          {activity.description}
        </p>
      </div>
    </div>
  );
}
