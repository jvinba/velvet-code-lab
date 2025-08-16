import { motion } from "framer-motion";
import { pageVariants } from "@/lib/motionPresets";

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

export function PageTransition({ children, className = "" }: PageTransitionProps) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className={`min-h-screen ${className}`}
    >
      {children}
    </motion.div>
  );
}