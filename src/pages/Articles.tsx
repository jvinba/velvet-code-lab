import { motion } from "framer-motion";
import { ExternalLink, Calendar } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { staggerContainer, staggerItem } from "@/lib/motionPresets";

const articles = [
  {
    title: "Building Modern React Applications with TypeScript",
    source: "Dev.to",
    date: "2024-01-15",
    url: "https://dev.to",
    description: "A comprehensive guide to setting up and scaling React applications with TypeScript."
  },
  {
    title: "The Future of Web Development: WebGPU and Three.js",
    source: "Medium",
    date: "2023-12-20",
    url: "https://medium.com",
    description: "Exploring the potential of WebGPU for high-performance 3D graphics on the web."
  },
  {
    title: "Optimizing React Performance with Modern Techniques",
    source: "CSS-Tricks",
    date: "2023-11-10",
    url: "https://css-tricks.com",
    description: "Advanced patterns and techniques for building lightning-fast React applications."
  }
];

export default function Articles() {
  return (
    <PageTransition>
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="in"
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={staggerItem} className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Featured <span className="gradient-text">Articles</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Thoughts and insights on web development and technology.
              </p>
            </motion.div>

            <div className="space-y-8">
              {articles.map((article, index) => (
                <motion.a
                  key={article.title}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={staggerItem}
                  whileHover={{ x: 10 }}
                  className="block p-6 bg-card border border-border/50 rounded-xl hover:border-primary/50 transition-colors group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 group-hover:gradient-text transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">{article.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>{article.source}</span>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(article.date).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </PageTransition>
  );
}