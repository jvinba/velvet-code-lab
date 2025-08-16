import { motion } from "framer-motion";
import { ExternalLink, Trophy, Target } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { staggerContainer, staggerItem } from "@/lib/motionPresets";

const profiles = [
  {
    platform: "LeetCode",
    username: "developer123",
    problems: 450,
    rank: "Knight",
    url: "https://leetcode.com",
    color: "bg-orange-500"
  },
  {
    platform: "HackerRank",
    username: "coder_pro",
    problems: 280,
    rank: "5 Star",
    url: "https://hackerrank.com",
    color: "bg-green-500"
  },
  {
    platform: "GeeksforGeeks",
    username: "geek_dev",
    problems: 320,
    rank: "Expert",
    url: "https://geeksforgeeks.org",
    color: "bg-blue-500"
  }
];

export default function Coding() {
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
                Coding <span className="gradient-text">Profiles</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                My competitive programming journey and achievements.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {profiles.map((profile, index) => (
                <motion.a
                  key={profile.platform}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={staggerItem}
                  whileHover={{ y: -10 }}
                  className="block p-6 bg-card border border-border/50 rounded-xl hover:border-primary/50 transition-colors group"
                >
                  <div className={`w-12 h-12 ${profile.color} rounded-lg mb-4 flex items-center justify-center`}>
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{profile.platform}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center justify-between">
                      <span>Problems Solved:</span>
                      <span className="font-bold text-primary">{profile.problems}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Rank:</span>
                      <span className="font-bold text-primary">{profile.rank}</span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </PageTransition>
  );
}