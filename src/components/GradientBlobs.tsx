import { motion } from "framer-motion";
import { floatingVariants } from "@/lib/motionPresets";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function GradientBlobs() {
  const prefersReducedMotion = useReducedMotion();

  const blobs = [
    {
      id: 1,
      className: "top-20 left-20 w-72 h-72 bg-violet/20",
      delay: 0
    },
    {
      id: 2,
      className: "top-40 right-20 w-96 h-96 bg-fuchsia/15",
      delay: 2
    },
    {
      id: 3,
      className: "bottom-20 left-40 w-80 h-80 bg-cyan/10",
      delay: 4
    }
  ];

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      {blobs.map((blob) => (
        <motion.div
          key={blob.id}
          className={`absolute rounded-full ${blob.className} blur-3xl opacity-50`}
          variants={prefersReducedMotion ? {} : floatingVariants}
          animate={prefersReducedMotion ? {} : "float"}
          transition={{
            delay: blob.delay,
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}