import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Factory, ArrowLeft, Check, Calendar, Cpu, Thermometer, Zap, Box, Quote, TrendingUp, Users, Building2, ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import DemoRequestModal from '@/components/technology/DemoRequestModal';

const coreCapabilities = [
    {
        icon: Thermometer,
        title: 'Precision HVAC Control',
        description: 'AI-driven climate management maintaining ±0.5°C temperature and ±2% humidity accuracy across all growing chambers.',
        specs: ['Temperature: 15-30°C range', 'Humidity: 60-95% RH', 'Air changes: 6-12/hour']
    },
    {
        icon: Cpu,
        title: 'AI Harvest Scheduling',
        description: 'Machine learning models trained on 50,000+ growth cycles predict optimal harvest windows with 97% accuracy.',
        specs: ['Prediction accuracy: 97%', 'Lead time: 48-72 hours', 'Species supported: 12+']
    },
    {
        icon: Box,
        title: 'Modular Design',
        description: 'Stackable, containerized units that can be deployed individually or combined into large-scale operations.',
        specs: ['Unit size: 20ft container', 'Stack height: up to 3 units', 'Setup time: < 48 hours']
    },
    {
        icon: Zap,
        title: 'Energy Optimization',
        description: 'Smart power management reduces energy consumption by 87% compared to traditional greenhouse operations.',
        specs: ['Solar-ready integration', 'LED spectrum tuning', 'Off-peak scheduling']
    }
];

const technicalSpecs = {
    physical: [
        { spec: 'Dimensions', value: '6.1m × 2.4m × 2.6m (20ft container)' },
        { spec: 'Weight', value: '3,200 kg (fully equipped)' },
        { spec: 'Growing Area', value: '28 m² effective cultivation space' },
        { spec: 'Shelving Tiers', value: '4-6 adjustable levels' },
        { spec: 'Power Input', value: '3-phase, 415V / 50Hz' },
        { spec: 'Water Connection', value: 'Standard 1" municipal supply' }
    ],
    environmental: [
        { spec: 'Temperature Range', value: '15°C – 30°C (±0.5°C)' },
        { spec: 'Humidity Range', value: '60% – 95% RH (±2%)' },
        { spec: 'CO₂ Control', value: '400 – 2000 ppm' },
        { spec: 'Light System', value: 'Full-spectrum LED, 0-500 µmol/m²/s' },
        { spec: 'Air Filtration', value: 'HEPA H13 + UV-C sterilization' },
        { spec: 'Water System', value: 'Closed-loop recirculation, UV treated' }
    ],
    ai: [
        { spec: 'Onboard Compute', value: 'NVIDIA Jetson Orin NX' },
        { spec: 'Sensors per Unit', value: '24 environmental + 4 cameras' },
        { spec: 'Data Throughput', value: '~500,000 data points/day' },
        { spec: 'Model Updates', value: 'OTA every 2 weeks' },
        { spec: 'Vision System', value: 'YOLOv8 growth stage detection' },
        { spec: 'Connectivity', value: '4G/5G + WiFi 6 + Ethernet' }
    ]
};

const caseStudies = [
    {
        company: 'Mumbai Urban Farms',
        location: 'Mumbai, Maharashtra',
        industry: 'Urban Agriculture',
        challenge: 'Limited space in urban Mumbai with high real estate costs. Needed to produce premium mushrooms within a 200 sqm warehouse.',
        solution: 'Deployed 6 micro-factory units in a stacked 2×3 configuration, maximizing vertical space utilization.',
        results: [
            { metric: 'Monthly Output', value: '2.4 tonnes', change: '+340%' },
            { metric: 'Water Usage', value: '850 L/day', change: '-95%' },
            { metric: 'Labor Hours', value: '4 hrs/day', change: '-78%' },
            { metric: 'ROI Period', value: '4 months', change: '' }
        ],
        testimonial: {
            quote: 'The system paid for itself in 4 months. We went from struggling with inconsistent yields to producing premium-grade Lion\'s Mane and Shiitake consistently, even during monsoon season.',
            author: 'Rajesh Patel',
            role: 'Founder, Mumbai Urban Farms'
        }
    },
    {
        company: 'GreenTech Innovations',
        location: 'Bangalore, Karnataka',
        industry: 'AgriTech',
        challenge: 'Scaling from a small pilot program to commercial production without compromising quality or increasing staff proportionally.',
        solution: 'Implemented 12 interconnected micro-factory units with centralized AI management through the Intelligent Platform.',
        results: [
            { metric: 'Species Grown', value: '8 varieties', change: '+300%' },
            { metric: 'Contamination', value: '< 0.5%', change: '-96%' },
            { metric: 'Revenue', value: '₹45L/month', change: '+520%' },
            { metric: 'Staff Required', value: '3 operators', change: '-60%' }
        ],
        testimonial: {
            quote: 'Parambhariya\'s micro-factories transformed our research lab into a commercial powerhouse. The AI learns our specific growing conditions and keeps improving — our contamination rate dropped from 12% to under 0.5%.',
            author: 'Dr. Ananya Sharma',
            role: 'CTO, GreenTech Innovations'
        }
    }
];

const scalabilityTiers = [
    {
        name: 'Starter',
        units: '1-2 Units',
        capacity: '400-800 kg/month',
        ideal: 'Small farms, restaurants, research labs',
        features: ['Single-unit AI optimization', 'Basic dashboard access', 'Email support', 'Monthly reports']
    },
    {
        name: 'Growth',
        units: '3-6 Units',
        capacity: '1.2-4.8 tonnes/month',
        ideal: 'Urban farms, specialty producers',
        features: ['Multi-unit coordination', 'Advanced analytics', 'Priority support', 'Weekly optimization reports'],
        popular: true
    },
    {
        name: 'Enterprise',
        units: '7-50+ Units',
        capacity: '5.6-40+ tonnes/month',
        ideal: 'Commercial operations, distributors',
        features: ['Centralized AI management', 'Custom integrations', 'Dedicated account manager', 'Real-time optimization']
    }
];

const testimonials = [
    {
        quote: 'We evaluated 5 different vertical farming solutions. Parambhariya was the only one that actually delivered on the AI promise — the system genuinely gets smarter over time.',
        author: 'Vikram Desai',
        role: 'Operations Director, FreshHarvest Co.',
        rating: 5
    },
    {
        quote: 'Setup was incredibly smooth. The team had us running in under 48 hours, and the remote monitoring means I can check on my crops from anywhere.',
        author: 'Meera Krishnamurthy',
        role: 'Owner, Bengaluru Mushroom Farm',
        rating: 5
    },
    {
        quote: 'The water savings alone justified the investment. Going from 18,000 liters per day to under 900 liters while tripling output — that\'s revolutionary.',
        author: 'Arjun Nair',
        role: 'Sustainability Lead, EcoGrow Industries',
        rating: 5
    }
];

export default function MicroFactories() {
    const [demoModal, setDemoModal] = useState(false);
    const [activeSpecTab, setActiveSpecTab] = useState('physical');

    const specTabs = [
        { key: 'physical', label: 'Physical' },
        { key: 'environmental', label: 'Environmental' },
        { key: 'ai', label: 'AI & Compute' }
    ];

    return (
        <div className="bg-black min-h-screen">
            <DemoRequestModal isOpen={demoModal} onClose={() => setDemoModal(false)} solution="micro-factories" />

            {/* Hero */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15),transparent_60%)]" />
                <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <Link to="/Technology" className="inline-flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors mb-8">
                        <ArrowLeft className="w-4 h-4" />
                        <span className="text-sm">Back to Technology</span>
                    </Link>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
                        <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-500 mb-6">
                            <Factory className="w-10 h-10 text-white" />
                        </div>
                        <p className="text-emerald-400 font-mono text-sm tracking-widest mb-2">AUTONOMOUS CULTIVATION UNITS</p>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                            AI-Powered
                            <span className="block bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                                Micro-Factories
                            </span>
                        </h1>
                        <p className="text-gray-400 text-xl leading-relaxed max-w-3xl">
                            Compact, self-contained growing systems powered by machine learning algorithms
                            that continuously optimize growing conditions for maximum yield and quality.
                        </p>
                    </motion.div>

                    {/* Hero Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
                    >
                        {[
                            { value: '340%', label: 'Yield Increase' },
                            { value: '95%', label: 'Water Savings' },
                            { value: '87%', label: 'Energy Efficiency' },
                            { value: '<48h', label: 'Setup Time' }
                        ].map((stat, i) => (
                            <div key={i} className="p-6 rounded-2xl border border-gray-800 bg-gray-900/50 text-center">
                                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                                    {stat.value}
                                </div>
                                <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Core Capabilities */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
                        <span className="text-emerald-400 font-mono text-sm tracking-widest">// CAPABILITIES</span>
                        <h2 className="text-4xl font-bold text-white mt-4">Core Capabilities</h2>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                            Every micro-factory unit is a self-contained ecosystem, powered by cutting-edge AI and precision engineering.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {coreCapabilities.map((cap, index) => (
                            <motion.div
                                key={cap.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -4 }}
                                className="p-8 rounded-2xl border border-gray-800 bg-gray-900/30 hover:border-emerald-500/30 transition-colors"
                            >
                                <div className="inline-flex p-3 rounded-xl bg-emerald-500/10 mb-4">
                                    <cap.icon className="w-6 h-6 text-emerald-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{cap.title}</h3>
                                <p className="text-gray-400 mb-4">{cap.description}</p>
                                <div className="space-y-2">
                                    {cap.specs.map((spec) => (
                                        <div key={spec} className="flex items-center gap-2 text-sm text-gray-500">
                                            <Check className="w-4 h-4 text-emerald-500" />
                                            <span>{spec}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technical Specifications */}
            <section className="py-24 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
                        <span className="text-emerald-400 font-mono text-sm tracking-widest">// SPECIFICATIONS</span>
                        <h2 className="text-4xl font-bold text-white mt-4">Technical Specifications</h2>
                    </motion.div>

                    {/* Spec Tabs */}
                    <div className="flex justify-center mb-12">
                        <div className="inline-flex p-1 rounded-full border border-gray-800 bg-gray-900/50">
                            {specTabs.map((tab) => (
                                <button
                                    key={tab.key}
                                    onClick={() => setActiveSpecTab(tab.key)}
                                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeSpecTab === tab.key
                                            ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white'
                                            : 'text-gray-400 hover:text-white'
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        key={activeSpecTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl mx-auto"
                    >
                        <div className="rounded-2xl border border-gray-800 bg-gray-900/30 overflow-hidden">
                            {technicalSpecs[activeSpecTab].map((item, i) => (
                                <div key={item.spec} className={`flex items-center justify-between p-5 ${i !== 0 ? 'border-t border-gray-800' : ''}`}>
                                    <span className="text-gray-400 text-sm">{item.spec}</span>
                                    <span className="text-white font-medium text-sm text-right">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
                        <span className="text-emerald-400 font-mono text-sm tracking-widest">// SUCCESS STORIES</span>
                        <h2 className="text-4xl font-bold text-white mt-4">Case Studies</h2>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                            Real results from real deployments across India.
                        </p>
                    </motion.div>

                    <div className="space-y-16">
                        {caseStudies.map((study, index) => (
                            <motion.div
                                key={study.company}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="rounded-3xl border border-gray-800 bg-gray-900/30 overflow-hidden"
                            >
                                {/* Case Study Header */}
                                <div className="p-8 border-b border-gray-800">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                        <div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <Building2 className="w-5 h-5 text-emerald-400" />
                                                <span className="text-emerald-400 text-sm font-medium">{study.industry}</span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-white">{study.company}</h3>
                                            <p className="text-gray-500 text-sm mt-1">{study.location}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Challenge & Solution */}
                                <div className="grid md:grid-cols-2 gap-0">
                                    <div className="p-8 border-b md:border-b-0 md:border-r border-gray-800">
                                        <h4 className="text-sm font-mono text-gray-500 tracking-widest mb-3">CHALLENGE</h4>
                                        <p className="text-gray-300 leading-relaxed">{study.challenge}</p>
                                    </div>
                                    <div className="p-8">
                                        <h4 className="text-sm font-mono text-gray-500 tracking-widest mb-3">SOLUTION</h4>
                                        <p className="text-gray-300 leading-relaxed">{study.solution}</p>
                                    </div>
                                </div>

                                {/* Results Grid */}
                                <div className="grid grid-cols-2 md:grid-cols-4 border-t border-gray-800">
                                    {study.results.map((result) => (
                                        <div key={result.metric} className="p-6 text-center border-r last:border-r-0 border-gray-800">
                                            <div className="text-2xl font-bold text-white">{result.value}</div>
                                            {result.change && (
                                                <div className="text-emerald-400 text-xs font-medium mt-1">{result.change}</div>
                                            )}
                                            <div className="text-gray-500 text-xs mt-2">{result.metric}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Testimonial */}
                                <div className="p-8 border-t border-gray-800 bg-emerald-500/5">
                                    <div className="flex gap-4">
                                        <Quote className="w-8 h-8 text-emerald-500/30 shrink-0 mt-1" />
                                        <div>
                                            <p className="text-gray-300 italic leading-relaxed">"{study.testimonial.quote}"</p>
                                            <div className="mt-4">
                                                <p className="text-white font-medium text-sm">{study.testimonial.author}</p>
                                                <p className="text-gray-500 text-sm">{study.testimonial.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Scalability */}
            <section className="py-24 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
                        <span className="text-emerald-400 font-mono text-sm tracking-widest">// SCALABILITY</span>
                        <h2 className="text-4xl font-bold text-white mt-4">Scale at Your Pace</h2>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                            Start with a single unit and expand as demand grows. Our modular design means zero downtime during scaling.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {scalabilityTiers.map((tier, index) => (
                            <motion.div
                                key={tier.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative p-8 rounded-2xl border ${tier.popular ? 'border-emerald-500 bg-emerald-500/5' : 'border-gray-800 bg-gray-900/30'
                                    }`}
                            >
                                {tier.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 text-white text-xs font-medium">
                                        Most Popular
                                    </div>
                                )}
                                <h3 className="text-xl font-bold text-white mb-1">{tier.name}</h3>
                                <p className="text-emerald-400 font-mono text-sm mb-2">{tier.units}</p>
                                <p className="text-2xl font-bold text-white mb-1">{tier.capacity}</p>
                                <p className="text-gray-500 text-sm mb-6">{tier.ideal}</p>
                                <div className="space-y-3">
                                    {tier.features.map((feature) => (
                                        <div key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                                            <Check className="w-4 h-4 text-emerald-500" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <Button
                                    onClick={() => setDemoModal(true)}
                                    className={`w-full mt-8 rounded-full ${tier.popular
                                            ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white'
                                            : 'bg-white/10 text-white hover:bg-white/20'
                                        }`}
                                >
                                    Get Started
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
                        <span className="text-emerald-400 font-mono text-sm tracking-widest">// TESTIMONIALS</span>
                        <h2 className="text-4xl font-bold text-white mt-4">What Our Clients Say</h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.author}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 rounded-2xl border border-gray-800 bg-gray-900/30"
                            >
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <span key={i} className="text-emerald-400">★</span>
                                    ))}
                                </div>
                                <p className="text-gray-300 italic leading-relaxed mb-6">"{testimonial.quote}"</p>
                                <div>
                                    <p className="text-white font-medium text-sm">{testimonial.author}</p>
                                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="p-12 rounded-3xl border border-gray-800 bg-gradient-to-b from-emerald-500/10 to-transparent">
                        <h2 className="text-4xl font-bold text-white mb-4">Ready to Deploy?</h2>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                            Schedule a personalized demo and see how our AI-powered micro-factories can transform your cultivation operations.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                onClick={() => setDemoModal(true)}
                                size="lg"
                                className="bg-gradient-to-r from-emerald-500 to-green-500 text-white font-semibold rounded-full px-10"
                            >
                                <Calendar className="mr-2 h-5 w-5" />
                                Schedule Demo
                            </Button>
                            <Link to="/Technology">
                                <Button size="lg" variant="outline" className="border-gray-700 text-white hover:bg-white/10 rounded-full px-10">
                                    View All Solutions
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
