import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Award, ArrowRight, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const milestones = [
  { year: '2021', title: 'Founded', description: 'Parambhariya was born from a vision to revolutionize agriculture through AI.' },
  { year: '2022', title: 'First Micro-Factory', description: 'Deployed our first AI-powered micro-factory unit in Karnataka.' },
  { year: '2023', title: 'IoT Network Launch', description: 'Launched our proprietary IoT sensor network for precision monitoring.' },
  { year: '2024', title: 'Platform Release', description: 'Released our unified management platform to the public.' },
  { year: '2025', title: '50+ Deployments', description: 'Scaled to over 50 micro-factory deployments across India.' },
];

const values = [
  { icon: Target, title: 'Precision', description: 'Every decision backed by data. Every outcome optimized for perfection.' },
  { icon: Lightbulb, title: 'Innovation', description: 'Constantly pushing boundaries of what\'s possible in agriculture.' },
  { icon: Users, title: 'Collaboration', description: 'Building the future together with farmers, partners, and visionaries.' },
  { icon: Award, title: 'Excellence', description: 'Never settling for good enough. Striving for exceptional always.' },
];

const team = [
  { name: 'Founder & CEO', role: 'Visionary Leader', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&fit=crop' },
  { name: 'CTO', role: 'Tech Architect', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&fit=crop' },
  { name: 'Head of Operations', role: 'Scale Expert', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&fit=crop' },
];

export default function About() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,0.1),transparent_60%)]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="text-purple-400 font-mono text-sm tracking-widest">// ABOUT US</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mt-4 leading-tight">
              Building the
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Agricultural OS
              </span>
            </h1>
            <p className="text-gray-400 text-xl mt-8 leading-relaxed max-w-2xl">
              We're not just growing mushrooms — we're building the operating system 
              for the future of agriculture. AI-driven, data-powered, infinitely scalable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border border-purple-500/30 bg-purple-500/5"
            >
              <h3 className="text-purple-400 font-mono text-sm tracking-widest mb-4">// MISSION</h3>
              <p className="text-2xl text-white font-light leading-relaxed">
                To democratize precision agriculture through accessible AI technology, 
                enabling anyone, anywhere to grow food efficiently and sustainably.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-2xl border border-cyan-500/30 bg-cyan-500/5"
            >
              <h3 className="text-cyan-400 font-mono text-sm tracking-widest mb-4">// VISION</h3>
              <p className="text-2xl text-white font-light leading-relaxed">
                A world where food production is intelligent, distributed, and 
                harmonious with nature — powered by technology, not constrained by it.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white">Our Values</h2>
            <p className="text-gray-400 mt-4">The principles that guide everything we do.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl border border-gray-800 bg-gray-900/30 text-center hover:border-gray-700 transition-colors"
              >
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 mb-4">
                  <value.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white">Our Journey</h2>
            <p className="text-gray-400 mt-4">From idea to industry leader.</p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-emerald-500 via-cyan-500 to-purple-500 hidden md:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-bold text-white mt-2">{milestone.title}</h3>
                    <p className="text-gray-400 mt-1">{milestone.description}</p>
                  </div>
                  
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 ring-4 ring-black" />
                  
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white">Leadership Team</h2>
            <p className="text-gray-400 mt-4">Visionaries building the future.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative w-40 h-40 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 blur-lg opacity-0 group-hover:opacity-50 transition-opacity" />
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="relative w-full h-full rounded-full object-cover border-2 border-gray-800 group-hover:border-emerald-500/50 transition-colors"
                  />
                </div>
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-gray-400 text-sm mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Want to Join Our Mission?</h2>
          <p className="text-gray-400 mb-8">
            We're always looking for passionate individuals and partners who share our vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl('Contact')}>
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full px-8">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}