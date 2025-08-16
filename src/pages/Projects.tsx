import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PageTransition } from "@/components/PageTransition";
import { TiltCard } from "@/components/TiltCard";
import { staggerContainer, staggerItem } from "@/lib/motionPresets";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution with React, Node.js, and Stripe integration",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "Web",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    tags: ["Vue.js", "Socket.io", "PostgreSQL"],
    category: "Web",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  },
  {
    id: 3,
    title: "Mobile Weather App",
    description: "Beautiful weather app with location-based forecasts",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
    tags: ["React Native", "TypeScript", "API"],
    category: "Mobile",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  },
  {
    id: 4,
    title: "3D Portfolio Site",
    description: "Interactive portfolio with Three.js animations",
    image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=600&h=400&fit=crop",
    tags: ["Three.js", "React", "GSAP"],
    category: "Experiments",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  },
  {
    id: 5,
    title: "AI Chat Interface",
    description: "Modern chat interface with AI integration",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    tags: ["Next.js", "OpenAI", "Tailwind"],
    category: "AI",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  },
  {
    id: 6,
    title: "Design System",
    description: "Comprehensive component library and design system",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&h=400&fit=crop",
    tags: ["React", "Storybook", "TypeScript"],
    category: "UI",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  }
];

const categories = ["All", "Web", "Mobile", "UI", "AI", "Experiments"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <PageTransition>
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="in"
            className="max-w-6xl mx-auto"
          >
            {/* Header */}
            <motion.div variants={staggerItem} className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                My <span className="gradient-text">Projects</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A collection of projects showcasing my skills in web development, 
                mobile apps, and creative experiments.
              </p>
            </motion.div>

            {/* Filter */}
            <motion.div variants={staggerItem} className="flex justify-center mb-12">
              <div className="flex items-center space-x-2 bg-card rounded-full p-2 border border-border/50">
                <Filter className="w-4 h-4 text-muted-foreground ml-2" />
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "bg-primary" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </motion.div>

            {/* Projects Grid */}
            <motion.div variants={staggerItem}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {filteredProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <TiltCard className="h-full">
                        <div className="bg-card border border-border/50 rounded-xl overflow-hidden hover:border-primary/50 transition-colors h-full flex flex-col">
                          {/* Project Image */}
                          <div className="relative overflow-hidden">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            <div className="absolute top-4 right-4">
                              <Badge variant="secondary" className="bg-background/80">
                                {project.category}
                              </Badge>
                            </div>
                          </div>

                          {/* Project Content */}
                          <div className="p-6 flex-1 flex flex-col">
                            <h3 className="text-xl font-semibold mb-3">
                              {project.title}
                            </h3>
                            <p className="text-muted-foreground mb-4 flex-1">
                              {project.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.tags.map((tag) => (
                                <Badge
                                  key={tag}
                                  variant="outline"
                                  className="text-xs"
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>

                            {/* Actions */}
                            <div className="flex space-x-3">
                              <Button
                                asChild
                                variant="outline"
                                size="sm"
                                className="flex-1"
                              >
                                <a
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <ExternalLink className="w-4 h-4 mr-2" />
                                  Live Demo
                                </a>
                              </Button>
                              <Button
                                asChild
                                variant="ghost"
                                size="sm"
                                className="flex-1"
                              >
                                <a
                                  href={project.githubUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <Github className="w-4 h-4 mr-2" />
                                  Code
                                </a>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </TiltCard>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-center mt-16"
            >
              <p className="text-muted-foreground mb-6">
                Have a project in mind? Let's work together!
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-primary hover:opacity-90"
              >
                <a href="/contact">Get In Touch</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </PageTransition>
  );
}