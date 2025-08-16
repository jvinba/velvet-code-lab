import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { staggerContainer, staggerItem, skillBarVariants } from "@/lib/motionPresets";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Vue.js", level: 80 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 85 }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "Express.js", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "GraphQL", level: 70 }
    ]
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "Figma", level: 85 },
      { name: "Three.js", level: 80 },
      { name: "WebGL", level: 65 }
    ]
  }
];

const technologies = [
  { name: "React", icon: "⚛️", color: "text-blue-400" },
  { name: "TypeScript", icon: "📘", color: "text-blue-600" },
  { name: "Node.js", icon: "🟢", color: "text-green-500" },
  { name: "Python", icon: "🐍", color: "text-yellow-500" },
  { name: "Three.js", icon: "🎯", color: "text-purple-500" },
  { name: "Docker", icon: "🐳", color: "text-blue-500" },
  { name: "AWS", icon: "☁️", color: "text-orange-500" },
  { name: "Figma", icon: "🎨", color: "text-pink-500" },
  { name: "Git", icon: "📚", color: "text-red-500" },
  { name: "MongoDB", icon: "🍃", color: "text-green-600" }
];

export default function Skills() {
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
                My <span className="gradient-text">Skills</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A comprehensive overview of my technical skills and expertise 
                in modern web development technologies.
              </p>
            </motion.div>

            {/* Technology Icons */}
            <motion.div variants={staggerItem} className="mb-20">
              <div className="grid grid-cols-5 md:grid-cols-10 gap-6 max-w-4xl mx-auto">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.2, y: -5 }}
                    className="flex flex-col items-center group cursor-pointer"
                  >
                    <div className="text-4xl mb-2 transition-transform group-hover:animate-bounce">
                      {tech.icon}
                    </div>
                    <span className={`text-xs font-medium ${tech.color} opacity-70 group-hover:opacity-100 transition-opacity`}>
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills Categories */}
            <motion.div variants={staggerItem} className="space-y-16">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + categoryIndex * 0.2 }}
                  className="bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-colors"
                >
                  <h2 className="text-2xl font-bold mb-8 text-center gradient-text">
                    {category.title}
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            variants={skillBarVariants}
                            initial="initial"
                            whileInView="in"
                            custom={skill.level}
                            className="h-full bg-gradient-primary rounded-full"
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Radar Chart Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="mt-20"
            >
              <h2 className="text-3xl font-bold text-center mb-12">
                Skill <span className="gradient-text">Overview</span>
              </h2>
              <div className="max-w-md mx-auto">
                <div className="bg-card border border-border/50 rounded-2xl p-8 text-center">
                  <div className="w-48 h-48 mx-auto mb-6 bg-gradient-primary opacity-10 rounded-full flex items-center justify-center">
                    <div className="text-6xl">📊</div>
                  </div>
                  <p className="text-muted-foreground">
                    Interactive radar chart visualization coming soon
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </PageTransition>
  );
}