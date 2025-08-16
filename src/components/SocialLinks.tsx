import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com",
    icon: Github,
    hoverColor: "hover:text-foreground"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: Linkedin,
    hoverColor: "hover:text-blue-400"
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    icon: Instagram,
    hoverColor: "hover:text-fuchsia"
  }
];

interface SocialLinksProps {
  size?: "sm" | "md" | "lg";
  showLabels?: boolean;
}

export function SocialLinks({ size = "sm", showLabels = false }: SocialLinksProps) {
  const iconSize = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  };

  return (
    <div className="flex items-center space-x-3">
      {socialLinks.map((social) => (
        <motion.div
          key={social.name}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button
            asChild
            variant="ghost"
            size="sm"
            className={`text-muted-foreground transition-colors ${social.hoverColor}`}
          >
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="flex items-center space-x-2"
            >
              <social.icon className={iconSize[size]} />
              {showLabels && <span className="text-sm">{social.name}</span>}
            </a>
          </Button>
        </motion.div>
      ))}
    </div>
  );
}