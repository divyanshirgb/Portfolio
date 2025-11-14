import { motion } from "motion/react";

export function SectionDivider() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent my-16"
    />
  );
}
