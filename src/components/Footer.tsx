import { motion } from "framer-motion";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="border-t border-border/20 bg-background/50 backdrop-blur-sm"
    >
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex flex-col items-center md:items-start space-y-2">
            <h3 className="text-lg font-semibold gradient-text">Portfolio</h3>
            <p className="text-sm text-muted-foreground">
              Crafting digital experiences with code and creativity
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <SocialLinks size="md" />
            <p className="text-sm text-muted-foreground">
              © {currentYear} All rights reserved. Built with ❤️ and React
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}