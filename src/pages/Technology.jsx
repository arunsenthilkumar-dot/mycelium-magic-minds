import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Factory, Wifi, BarChart3, Package, Cpu, Database, Shield, ArrowRight, Check, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import DemoRequestModal from '@/components/technology/DemoRequestModal';

const solutions = [
  {
    id: 'micro-factories',
    icon: Factory,
    title: 'AI-Powered Micro-Factories',
    subtitle: 'Autonomous Cultivation Units',
    description: 'Compact, self-contained growing systems powered by machine learning algorithms that continuously optimize growing conditions for maximum yield.',
    features: [
      'Climate-controlled environments',
      'Predictive harvest scheduling',
      'Automated nutrient delivery',
      'Real-time anomaly detection',
      'Remote operation capability',
      'Modular scalable design'
    ],
    stats: [
      { label: 'Yield Increase', value: '340%' },
      { label: 'Water Savings', value: '95%' },
      { label: 'Energy Efficiency', value: '87%' }
    ],
    gradient: 'from-emerald-500 to-green-500',
    bgColor: 'bg-emerald-500'
  },
  {
    id: 'iot-sensors',
    icon: Wifi,
    title: 'IoT Field Sensors',
    subtitle: 'Intelligent Monitoring Network',
    description: 'Deploy a network of smart sensors that monitor every environmental variable, feeding data to our AI for continuous optimization.',
    features: [
      'Temperature & humidity tracking',
      'Soil composition analysis',
      'CO2 level monitoring',
      'Light spectrum optimization',
      'Pest detection alerts',
      'Weather integration'
    ],
    stats: [
      { label: 'Data Points/Day', value: '1M+' },
      { label: 'Accuracy Rate', value: '99.7%' },
      { label: 'Response Time', value: '<1s' }
    ],
    gradient: 'from-cyan-500 to-blue-500',
    bgColor: 'bg-cyan-500'
  },
  {
    id: 'mycelium-packaging',
    icon: Package,
    title: 'Mycelium Packaging',
    subtitle: 'Grown, Not Manufactured',
    description: 'Revolutionary biodegradable packaging created from fungal mycelium and agricultural waste. The sustainable alternative to plastic and polystyrene for beauty, e-commerce, and electronics sectors.',
    features: [
      'Home compostable in 45 days',
      'Cost-competitive with EPS',
      'Customizable via modular molds',
      '100% biodegradable material',
      'Carbon-neutral production',
      'Zero plastic waste'
    ],
    stats: [
      { label: 'Composting Time', value: '45 days' },
      { label: 'Plastic Replaced', value: '100%' },
      { label: 'Carbon Neutral', value: 'Yes' }
    ],
    gradient: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-500'
  },
  {
    id: 'platform',
    icon: BarChart3,
    title: 'Intelligent Platform',
    subtitle: 'End-to-End Management Software',
    description: 'A unified dashboard to control all your cultivation operations. From spore to store, manage everything with unprecedented visibility.',
    features: [
      'Real-time analytics dashboard',
      'Inventory management',
      'Supply chain tracking',
      'Quality assurance tools',
      'Financial reporting',
      'Multi-site management'
    ],
    stats: [
      { label: 'Platform Uptime', value: '99.9%' },
      { label: 'API Endpoints', value: '200+' },
      { label: 'Active Users', value: '5K+' }
    ],
    gradient: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-500'
  }
];

const solutionRoutes = {
  'micro-factories': '/MicroFactories',
  'iot-sensors': '/IoTSensors',
  'mycelium-packaging': '/MyceliumPackaging',
  'platform': '/IntelligentPlatform'
};

export default function Technology() {
  const [demoModal, setDemoModal] = useState({ isOpen: false, solution: null });

  const openDemoModal = (solutionId) => {
    setDemoModal({ isOpen: true, solution: solutionId });
  };

  return (
    <div className="bg-black min-h-screen">
      <DemoRequestModal
        isOpen={demoModal.isOpen}
        onClose={() => setDemoModal({ isOpen: false, solution: null })}
        solution={demoModal.solution}
      />
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-emerald-400 font-mono text-sm tracking-widest">// TECHNOLOGY STACK</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mt-4">
              Infrastructure for
              <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Intelligent Agriculture
              </span>
            </h1>
            <p className="text-gray-400 text-xl mt-6">
              Four integrated solutions working in perfect harmony.
              Hardware, software, AI, and sustainable materials — unified under one ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions */}
      {solutions.map((solution, index) => (
        <section key={solution.id} className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={index % 2 === 1 ? 'lg:order-2' : ''}
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${solution.gradient} mb-6`}>
                  <solution.icon className="w-10 h-10 text-white" />
                </div>

                <p className="text-gray-500 font-mono text-sm tracking-widest mb-2">{solution.subtitle}</p>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{solution.title}</h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">{solution.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {solution.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-gray-300">
                      <Check className={`w-5 h-5 ${solution.bgColor.replace('bg-', 'text-')}`} />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link to={solutionRoutes[solution.id]}>
                    <Button
                      className="bg-white/10 text-white hover:bg-white/20 rounded-full px-8"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Button
                    onClick={() => openDemoModal(solution.id)}
                    className={`bg-gradient-to-r ${solution.gradient} text-white hover:opacity-90 rounded-full px-8`}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Demo
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={index % 2 === 1 ? 'lg:order-1' : ''}
              >
                <div className="relative p-8 rounded-3xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm">
                  {/* Stats display */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {solution.stats.map((stat) => (
                      <div key={stat.label} className="text-center p-4 rounded-xl bg-black/50 border border-gray-800">
                        <div className={`text-3xl font-bold bg-gradient-to-r ${solution.gradient} bg-clip-text text-transparent`}>
                          {stat.value}
                        </div>
                        <div className="text-gray-500 text-xs mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Visual placeholder */}
                  <div className="aspect-video rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center">
                    <solution.icon className={`w-24 h-24 ${solution.bgColor.replace('bg-', 'text-')} opacity-20`} />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Integration Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white">
              One Ecosystem. <span className="text-gray-500">Infinite Possibilities.</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              All three systems communicate seamlessly, creating a closed-loop
              intelligence network that gets smarter with every harvest cycle.
            </p>
          </motion.div>

          <div className="flex justify-center">
            <div className="inline-flex items-center gap-4 p-2 rounded-full border border-gray-800 bg-gray-900/50">
              {[
                { icon: Factory, color: 'text-emerald-400', label: 'Factories' },
                { icon: Wifi, color: 'text-cyan-400', label: 'Sensors' },
                { icon: Package, color: 'text-amber-400', label: 'Packaging' },
                { icon: BarChart3, color: 'text-purple-400', label: 'Platform' }
              ].map((item, i) => (
                <React.Fragment key={item.label}>
                  <div className="flex items-center gap-3 px-6 py-3">
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                    <span className="text-white font-medium">{item.label}</span>
                  </div>
                  {i < 3 && <div className="w-8 h-px bg-gradient-to-r from-emerald-500 via-cyan-500 via-amber-500 to-purple-500" />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Operations?</h2>
          <p className="text-gray-400 mb-8">
            Schedule a demo and see how Parambhariya's technology can revolutionize your cultivation process.
          </p>
          <Link to={createPageUrl('Contact')}>
            <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-semibold rounded-full px-10">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}