import React from 'react';
import { motion } from 'framer-motion';
import { Award, TrendingUp, Handshake, ArrowRight, CheckCircle, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const grantsAndAwards = [
  {
    title: 'RKVY RAFTAAR Cohort 5',
    type: 'Grant',
    description: 'Recognized under the Rashtriya Krishi Vikas Yojana - Remunerative Approaches for Agriculture and Allied sector Rejuvenation program for agritech innovation.',
    status: 'Active',
    highlight: true
  },
  {
    title: 'NIDHI PRAYAS',
    type: 'Grant',
    description: 'Supported by the Department of Science & Technology under the National Initiative for Developing and Harnessing Innovations - Promoting and Accelerating Young and Aspiring Innovators & Startups.',
    status: 'Active',
    highlight: true
  },
  {
    title: 'Innovation Voucher Grant',
    type: 'Grant',
    description: 'Awarded innovation voucher funding to accelerate R&D and product development initiatives.',
    status: 'Active',
    highlight: false
  },
  {
    title: 'IVP Grant — MaDeIT Innovation Foundation',
    type: 'Grant',
    description: 'Selected for the Innovation Voucher Program by MaDeIT Innovation Foundation, supporting deep-tech startups in India.',
    status: 'Active',
    highlight: true
  },
  {
    title: 'Kovai Vizha 2024',
    type: 'Award',
    description: 'Secured 2nd place at Kovai Vizha 2024, a prestigious innovation and entrepreneurship competition.',
    status: '2nd Place',
    highlight: true
  }
];

const investorBenefits = [
  'First-mover advantage in AI-powered fungi cultivation',
  'Proven technology with operational micro-factories',
  'Strong government backing through multiple grants',
  'Scalable B2B and B2C revenue streams',
  'IP-protected proprietary technology stack',
  'Experienced founding team with domain expertise'
];

export default function Investors() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.1),transparent_50%)]" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[150px]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 mb-8">
              <Award className="w-4 h-4 text-amber-400" />
              <span className="text-amber-400 text-sm font-medium tracking-wide">BACKED BY LEADING INSTITUTIONS</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Investor &
              <span className="block bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                Partnership Hub
              </span>
            </h1>
            <p className="text-gray-400 text-xl mt-8 leading-relaxed max-w-2xl">
              Join us in revolutionizing agriculture. Parambhariya is backed by prestigious 
              government grants and recognized by leading innovation programs across India.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link to={createPageUrl('Contact') + '?type=investment'}>
                <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black font-semibold px-8 rounded-full">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  Invest Now
                </Button>
              </Link>
              <Link to={createPageUrl('Contact') + '?type=partnership'}>
                <Button size="lg" variant="outline" className="border-gray-700 text-white hover:bg-white/10 px-8 rounded-full">
                  <Handshake className="mr-2 h-5 w-5" />
                  Partner With Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Grants & Awards Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-amber-400 font-mono text-sm tracking-widest">// RECOGNITION</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
              Grants & <span className="text-gray-500">Awards</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Trusted by government bodies and innovation foundations for our groundbreaking approach to agricultural technology.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {grantsAndAwards.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-6 rounded-2xl border transition-all duration-300 hover:border-amber-500/50 ${
                  item.highlight 
                    ? 'border-amber-500/30 bg-gradient-to-br from-amber-500/10 to-transparent' 
                    : 'border-gray-800 bg-gray-900/30'
                }`}
              >
                {item.highlight && (
                  <div className="absolute -top-px left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
                )}
                
                <div className="flex items-start justify-between mb-4">
                  <Badge className={`${
                    item.type === 'Award' 
                      ? 'bg-purple-500/20 text-purple-400 border-purple-500/30' 
                      : 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                  }`}>
                    {item.type}
                  </Badge>
                  <Badge variant="outline" className="border-amber-500/50 text-amber-400">
                    {item.status}
                  </Badge>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-amber-400 font-mono text-sm tracking-widest">// OPPORTUNITY</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
                Why Invest in
                <span className="block text-gray-500">Parambhariya?</span>
              </h2>
              
              <p className="text-gray-400 text-lg mt-6 leading-relaxed">
                We're at the intersection of AI, IoT, and sustainable agriculture — 
                a market projected to reach $22.5 billion by 2028. Our technology is proven, 
                our team is experienced, and our growth trajectory is steep.
              </p>

              <div className="mt-8 space-y-4">
                {investorBenefits.map((benefit, i) => (
                  <motion.div 
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <Link to={createPageUrl('Contact') + '?type=investment'} className="inline-block mt-10">
                <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 text-black font-semibold rounded-full px-8">
                  Request Pitch Deck
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="p-6 rounded-2xl border border-gray-800 bg-gray-900/50">
                    <div className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">5+</div>
                    <div className="text-gray-400 text-sm mt-1">Government Grants</div>
                  </div>
                  <div className="p-6 rounded-2xl border border-gray-800 bg-gray-900/50">
                    <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">50+</div>
                    <div className="text-gray-400 text-sm mt-1">Micro-Factories</div>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="p-6 rounded-2xl border border-gray-800 bg-gray-900/50">
                    <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">340%</div>
                    <div className="text-gray-400 text-sm mt-1">Yield Increase</div>
                  </div>
                  <div className="p-6 rounded-2xl border border-gray-800 bg-gray-900/50">
                    <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">₹2Cr+</div>
                    <div className="text-gray-400 text-sm mt-1">Revenue</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-12 rounded-3xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 to-transparent relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 rounded-full blur-[100px]" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Shape the Future of Agriculture?
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Connect with our team to discuss investment opportunities, strategic partnerships, 
                or learn more about our technology roadmap.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to={createPageUrl('Contact') + '?type=investment'}>
                  <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 text-black font-semibold rounded-full px-8 w-full sm:w-auto">
                    Schedule a Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to={createPageUrl('Technology')}>
                  <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-white/10 rounded-full px-8 w-full sm:w-auto">
                    Explore Technology
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}