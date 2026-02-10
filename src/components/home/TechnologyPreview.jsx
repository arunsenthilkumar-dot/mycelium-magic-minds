import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Wifi, BarChart3, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const technologies = [
  {
    icon: Factory,
    title: 'AI-Powered Micro-Factories',
    description: 'Autonomous cultivation units powered by machine learning. Optimize yield, reduce waste, scale infinitely.',
    gradient: 'from-emerald-500 to-green-500',
    bgGlow: 'bg-emerald-500/20'
  },
  {
    icon: Wifi,
    title: 'IoT Field Sensors',
    description: 'Real-time environmental monitoring with predictive analytics. Know your crops before they know themselves.',
    gradient: 'from-cyan-500 to-blue-500',
    bgGlow: 'bg-cyan-500/20'
  },
  {
    icon: BarChart3,
    title: 'Intelligent Platform',
    description: 'End-to-end management software. From spore to store, control everything from a single dashboard.',
    gradient: 'from-purple-500 to-pink-500',
    bgGlow: 'bg-purple-500/20'
  }
];

export default function TechnologyPreview() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,136,0.05),transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-emerald-400 font-mono text-sm tracking-widest">// CORE TECHNOLOGY</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mt-4">
            Built for the
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"> Future</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative cursor-pointer"
            >
              <div className="relative p-8 rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-gray-700 transition-all duration-500 h-full">
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 ${tech.bgGlow} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${tech.gradient} mb-6`}>
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">{tech.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-6">{tech.description}</p>

                  <div className="flex items-center text-emerald-400 font-medium group-hover:gap-3 gap-2 transition-all">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link to={createPageUrl('Technology')}>
            <Button size="lg" variant="outline" className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 rounded-full px-8">
              Explore All Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}