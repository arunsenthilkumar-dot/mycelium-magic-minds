import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function CTASection() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-purple-500/20 opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_50%,black)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,transparent_50%,black)]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Ready to Build the
            <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Future Together?
            </span>
          </h2>
          
          <p className="text-gray-400 text-xl mt-6 max-w-2xl mx-auto">
            Whether you're an investor looking for the next breakthrough, 
            or a business ready to transform operations — we're ready to talk.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Link to={createPageUrl('Contact') + '?type=investment'}>
              <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-black font-semibold px-8 py-6 text-lg rounded-full w-full sm:w-auto">
                <Building2 className="mr-2 h-5 w-5" />
                Investor Inquiry
              </Button>
            </Link>
            <Link to={createPageUrl('Contact') + '?type=partnership'}>
              <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full w-full sm:w-auto">
                <Mail className="mr-2 h-5 w-5" />
                Partnership Inquiry
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-16 border-t border-gray-800">
            <p className="text-gray-500 text-sm mb-6">BACKED BY LEADING INSTITUTIONS</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              {['RKVY RAFTAAR', 'NIDHI PRAYAS', 'MaDeIT Foundation', 'Kovai Vizha 2024'].map((name) => (
                <div key={name} className="text-gray-400 font-semibold text-sm md:text-lg">
                  {name}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}