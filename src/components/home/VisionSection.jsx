import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Globe } from 'lucide-react';

export default function VisionSection() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Large gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-purple-500/10 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-purple-400 font-mono text-sm tracking-widest">// OUR VISION</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 leading-tight">
              Redefining Agriculture
              <span className="block text-gray-500">Through Intelligence</span>
            </h2>
            
            <p className="text-gray-400 text-lg mt-6 leading-relaxed">
              At Parambhariya, we believe the future of food isn't in vast farmlands — 
              it's in intelligent, distributed systems that can operate anywhere, 
              at any scale, with perfect precision.
            </p>

            <div className="mt-10 space-y-6">
              {[
                {
                  icon: Target,
                  title: 'Precision Cultivation',
                  description: 'Every variable optimized. Every output maximized. Zero guesswork.'
                },
                {
                  icon: Zap,
                  title: 'Autonomous Operations',
                  description: 'AI-driven systems that learn, adapt, and evolve on their own.'
                },
                {
                  icon: Globe,
                  title: 'Global Scalability',
                  description: 'From local farms to global networks, our platform scales infinitely.'
                }
              ].map((item, i) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{item.title}</h4>
                    <p className="text-gray-500 text-sm mt-1">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-gray-800">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop"
                alt="Technology visualization"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-transparent" />
              
              {/* Floating data cards */}
              <div className="absolute top-8 right-8 p-4 rounded-xl bg-black/80 border border-emerald-500/30 backdrop-blur-sm">
                <div className="text-emerald-400 text-xs font-mono">YIELD OPTIMIZATION</div>
                <div className="text-white text-2xl font-bold mt-1">+340%</div>
              </div>
              
              <div className="absolute bottom-8 left-8 p-4 rounded-xl bg-black/80 border border-cyan-500/30 backdrop-blur-sm">
                <div className="text-cyan-400 text-xs font-mono">RESOURCE EFFICIENCY</div>
                <div className="text-white text-2xl font-bold mt-1">92.7%</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}