import { motion } from "framer-motion";
import { Calendar, MapPin, Code, Coffee } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { staggerContainer, staggerItem } from "@/lib/motionPresets";
import avatarImage from "@/assets/avatar.jpg";

const timeline = [
  {
    year: "2024",
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    description: "Leading frontend development for enterprise applications"
  },
  {
    year: "2023",
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    description: "Developed modern web applications with React and Node.js"
  },
  {
    year: "2022",
    title: "Frontend Developer",
    company: "Creative Agency",
    description: "Built responsive websites and interactive user interfaces"
  },
  {
    year: "2021",
    title: "Started Coding Journey",
    company: "Self-taught",
    description: "Began learning web development and computer science fundamentals"
  }
];

const funFacts = [
  { icon: Code, label: "Lines of Code", value: "100,000+" },
  { icon: Coffee, label: "Coffee Consumed", value: "2,847 cups" },
  { icon: Calendar, label: "Years Coding", value: "3+" },
  { icon: MapPin, label: "Location", value: "San Francisco" }
];

export default function About() {
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
            {/* Header */}
            <motion.div variants={staggerItem} className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About <span className="gradient-text">Me</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Passionate developer with a love for creating beautiful, functional, 
                and user-centered digital experiences.
              </p>
            </motion.div>

            {/* Profile Section */}
            <motion.div
              variants={staggerItem}
              className="grid md:grid-cols-2 gap-12 items-center mb-20"
            >
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Hello, I'm Alex</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I'm a passionate full-stack developer with over 3 years of experience 
                    creating digital solutions that combine beautiful design with robust functionality.
                  </p>
                  <p>
                    My journey in tech started with curiosity about how websites work, and 
                    has evolved into a deep passion for creating exceptional user experiences 
                    using modern web technologies.
                  </p>
                  <p>
                    When I'm not coding, you can find me exploring new technologies, 
                    contributing to open source projects, or enjoying a good cup of coffee 
                    while reading about the latest in web development.
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <div className="w-80 h-80 rounded-2xl overflow-hidden bg-gradient-primary p-1">
                    <img
                      src={avatarImage}
                      alt="Profile"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-secondary rounded-full animate-pulse" />
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-accent rounded-full animate-pulse" />
                </motion.div>
              </div>
            </motion.div>

            {/* Fun Facts */}
            <motion.div variants={staggerItem} className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12">Fun Facts</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {funFacts.map((fact, index) => (
                  <motion.div
                    key={fact.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="text-center p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-colors"
                  >
                    <fact.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                    <div className="text-2xl font-bold gradient-text mb-2">
                      {fact.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{fact.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div variants={staggerItem}>
              <h2 className="text-3xl font-bold text-center mb-12">My Journey</h2>
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.2 }}
                    className="relative flex items-center"
                  >
                    <div className="hidden md:block absolute left-1/2 w-0.5 h-full bg-border -translate-x-1/2" />
                    <div
                      className={`w-full md:w-5/12 ${
                        index % 2 === 0 ? "md:pr-8" : "md:pl-8 md:ml-auto"
                      }`}
                    >
                      <div className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-colors">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-2xl font-bold gradient-text">
                            {item.year}
                          </span>
                          <div className="w-4 h-4 rounded-full bg-primary hidden md:block" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-primary mb-3">{item.company}</p>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </PageTransition>
  );
}