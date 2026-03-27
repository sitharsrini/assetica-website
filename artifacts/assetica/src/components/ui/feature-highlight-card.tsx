import * as React from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface FeatureHighlightCardProps {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
  className?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
  },
};

const imageContainerVariants: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const FeatureHighlightCard = React.forwardRef<
  HTMLDivElement,
  FeatureHighlightCardProps
>(({ imageSrc, imageAlt = "Feature image", title, description, buttonText, onButtonClick, className }, ref) => {
  return (
    <motion.div
      ref={ref}
      className={cn(
        "relative w-full overflow-hidden rounded-3xl border border-white/20 bg-[#012241] p-8 md:p-12 text-center shadow-2xl",
        className
      )}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Background glow */}
      <div className="absolute left-1/2 top-0 -z-10 h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4BD1A0]/10 blur-3xl" />

      {/* Image */}
      <motion.div variants={imageContainerVariants} className="mb-8 flex justify-center">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-auto w-full max-w-md rounded-2xl object-cover shadow-xl"
        />
      </motion.div>

      {/* Title */}
      <motion.h2
        variants={itemVariants}
        className="text-3xl md:text-4xl font-bold tracking-tight text-white"
      >
        {title}
      </motion.h2>

      {/* Description */}
      <motion.p
        variants={itemVariants}
        className="mt-4 text-base md:text-lg text-white/70 max-w-xl mx-auto leading-relaxed"
      >
        {description}
      </motion.p>

      {/* Button */}
      <motion.div variants={itemVariants} className="mt-8">
        <button
          onClick={onButtonClick}
          className="inline-block px-8 py-3 rounded-full font-bold text-sm text-[#012241] bg-[#4BD1A0] hover:bg-white transition-colors duration-200"
        >
          {buttonText}
        </button>
      </motion.div>
    </motion.div>
  );
});

FeatureHighlightCard.displayName = "FeatureHighlightCard";
