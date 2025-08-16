import { Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/PageTransition";
import { HeroIcon3D } from "@/components/three/HeroIcon3D";
import { heroTitle, heroSubtitle, heroCTA } from "@/lib/motionPresets";
import { Link } from "react-router-dom";

export default function Home() {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Resume.pdf';
    link.click();
  };

  return (
    <PageTransition>
      <main className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Hero Content */}
            <div className="space-y-8 text-center lg:text-left">
              <motion.div
                variants={heroTitle}
                initial="initial"
                animate="in"
                className="space-y-4"
              >
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="block">Creative</span>
                  <span className="block gradient-text">Developer</span>
                </h1>
                <div className="w-24 h-1 bg-gradient-primary mx-auto lg:mx-0" />
              </motion.div>

              <motion.p
                variants={heroSubtitle}
                initial="initial"
                animate="in"
                className="text-xl md:text-2xl text-muted-foreground max-w-lg mx-auto lg:mx-0"
              >
                Crafting digital experiences with modern web technologies, 
                creative design, and clean code architecture.
              </motion.p>

              <motion.div
                variants={heroCTA}
                initial="initial"
                animate="in"
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-primary hover:opacity-90 transition-opacity"
                >
                  <Link to="/projects">
                    <Eye className="w-5 h-5 mr-2" />
                    View Projects
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleDownloadResume}
                  className="border-primary/30 hover:bg-primary/10"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="grid grid-cols-3 gap-8 pt-8 border-t border-border/20"
              >
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold gradient-text">50+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold gradient-text">3+</div>
                  <div className="text-sm text-muted-foreground">Years Exp</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold gradient-text">100%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction</div>
                </div>
              </motion.div>
            </div>

            {/* 3D Hero Icon */}
            <div className="flex justify-center lg:justify-end">
              <Suspense
                fallback={
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-primary opacity-20 animate-pulse" />
                }
              >
                <HeroIcon3D />
              </Suspense>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center space-y-2">
              <span className="text-sm text-muted-foreground">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1 h-3 bg-primary rounded-full mt-2"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </PageTransition>
  );
}