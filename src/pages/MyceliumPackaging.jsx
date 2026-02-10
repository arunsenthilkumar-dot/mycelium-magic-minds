import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Package, ArrowLeft, Check, Calendar, Leaf, Recycle, Layers, Droplets, ShoppingBag, Laptop, Sparkles, Quote, Building2, ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import DemoRequestModal from '@/components/technology/DemoRequestModal';

const processSteps = [
    {
        step: 1,
        title: 'Agricultural Waste Collection',
        description: 'We source crop residues — rice husks, wheat straw, and coconut coir — from local farming communities, diverting waste from landfills.',
        detail: 'Partnerships with 200+ farms across Karnataka and Tamil Nadu'
    },
    {
        step: 2,
        title: 'Mycelium Inoculation',
        description: 'Agricultural substrate is sterilized and inoculated with proprietary mycelium strains optimized for structural strength and growth speed.',
        detail: 'Growth cycle: 5-7 days in controlled environment'
    },
    {
        step: 3,
        title: 'Molding & Formation',
        description: 'The growing mycelium is placed into custom molds of any shape — from cosmetic boxes to laptop packaging inserts.',
        detail: 'Custom molds designed in-house with 3D printing'
    },
    {
        step: 4,
        title: 'Drying & Finishing',
        description: 'Heat treatment stops growth, creating a rigid, lightweight material. Surface treatments can add water resistance and branding.',
        detail: 'Home compostable in 45 days, industrial in 14 days'
    }
];

const industrySolutions = [
    {
        icon: Sparkles,
        title: 'Beauty & Cosmetics',
        color: 'from-pink-500 to-rose-500',
        textColor: 'text-pink-400',
        brands: ['L\'Oréal India', 'Forest Essentials', 'Kama Ayurveda'],
        applications: [
            'Premium cosmetic gift boxes',
            'Serum & bottle inserts',
            'Subscription box packaging',
            'Retail display units'
        ],
        savings: '62% cost reduction vs premium cardboard'
    },
    {
        icon: ShoppingBag,
        title: 'E-Commerce',
        color: 'from-orange-500 to-amber-500',
        textColor: 'text-amber-400',
        brands: ['Amazon India', 'Flipkart', 'Meesho'],
        applications: [
            'Protective shipping inserts',
            'Fragile item cushioning',
            'Temperature-sensitive packaging',
            'Return-ready packaging'
        ],
        savings: '45% waste reduction in fulfillment'
    },
    {
        icon: Laptop,
        title: 'Electronics',
        color: 'from-blue-500 to-indigo-500',
        textColor: 'text-blue-400',
        brands: ['Dell India', 'HP', 'Boat'],
        applications: [
            'Laptop packaging inserts',
            'Headphone cases',
            'Cable organizer boxes',
            'Anti-static device trays'
        ],
        savings: '100% polystyrene replacement'
    }
];

const technicalSpecs = [
    { spec: 'Compressive Strength', value: '0.3–1.2 MPa' },
    { spec: 'Density', value: '60–200 kg/m³' },
    { spec: 'Thermal Conductivity', value: '0.04 W/mK (insulating)' },
    { spec: 'Water Absorption', value: '<5% (with coating)' },
    { spec: 'Fire Rating', value: 'Class B (self-extinguishing)' },
    { spec: 'Home Composting', value: '45 days' },
    { spec: 'Industrial Composting', value: '14 days' },
    { spec: 'Certifications', value: 'BIS, EN 13432, ASTM D6400' },
    { spec: 'Max Temperature', value: '75°C continuous' },
    { spec: 'Shelf Life', value: '5+ years (sealed)' }
];

const caseStudy = {
    company: 'Dell Technologies India',
    location: 'Chennai, Tamil Nadu',
    industry: 'Consumer Electronics',
    challenge: 'Dell needed to eliminate polystyrene packaging from its India laptop lineup to meet 2025 sustainability commitments while maintaining drop-test protection standards.',
    solution: 'Parambhariya designed custom mycelium inserts for 8 laptop models, replacing 100% of EPS foam. The inserts are grown to exact specifications using 3D-scanned laptop molds.',
    results: [
        { metric: 'EPS Eliminated', value: '100%', change: '' },
        { metric: 'Units Packaged', value: '250K+', change: 'Since launch' },
        { metric: 'Drop Test', value: 'Passed', change: '1.5m ISTA 3A' },
        { metric: 'Cost Impact', value: '+3%', change: 'vs EPS (declining)' }
    ],
    testimonial: {
        quote: 'Parambhariya didn\'t just replace our packaging — they improved it. The mycelium inserts actually perform better in humidity tests, and our customers love the sustainability story. It\'s been a win-win.',
        author: 'Ramesh Krishnan',
        role: 'Head of Packaging, Dell India'
    }
};

const scalabilityTiers = [
    {
        name: 'Pilot',
        volume: '1,000–10,000 units/mo',
        lead: '4–6 weeks setup',
        ideal: 'Testing & validation',
        features: ['Up to 3 mold designs', 'Sample prototyping', 'Drop-test certification', 'Dedicated design engineer']
    },
    {
        name: 'Production',
        volume: '10,000–100,000 units/mo',
        lead: '2–3 weeks setup',
        ideal: 'Regional launches',
        features: ['Unlimited mold designs', 'Branded surface finishes', 'JIT delivery', 'Quality SLA 99.5%'],
        popular: true
    },
    {
        name: 'Enterprise',
        volume: '100,000+ units/mo',
        lead: 'Dedicated line',
        ideal: 'National rollouts',
        features: ['On-site production option', 'Co-branded sustainability', 'Carbon offset credits', 'Dedicated account team']
    }
];

const testimonials = [
    {
        quote: 'Our customers send us photos of the packaging decomposing in their gardens. It\'s become a marketing tool in itself — they\'re genuinely excited about compostable packaging.',
        author: 'Priya Menon',
        role: 'Brand Director, Forest Essentials',
        rating: 5
    },
    {
        quote: 'The structural integrity surprised us. We ran the same drop tests we use for EPS and the mycelium actually outperformed in high-humidity conditions.',
        author: 'Karthik Rajan',
        role: 'Logistics VP, Flipkart',
        rating: 5
    },
    {
        quote: 'From prototype to production in 6 weeks — the Parambhariya team moves fast. The custom molds fit our products perfectly, no design compromises.',
        author: 'Anita Deshmukh',
        role: 'Packaging Lead, Boat',
        rating: 5
    }
];

export default function MyceliumPackaging() {
    const [demoModal, setDemoModal] = useState(false);

    return (
        <div className="bg-black min-h-screen">
            <DemoRequestModal isOpen={demoModal} onClose={() => setDemoModal(false)} solution="mycelium-packaging" />

            {/* Hero */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.15),transparent_60%)]" />
                <div className="absolute top-20 right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px]" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <Link to="/Technology" className="inline-flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors mb-8">
                        <ArrowLeft className="w-4 h-4" />
                        <span className="text-sm">Back to Technology</span>
                    </Link>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
                        <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 mb-6">
                            <Package className="w-10 h-10 text-white" />
                        </div>
                        <p className="text-amber-400 font-mono text-sm tracking-widest mb-2">GROWN, NOT MANUFACTURED</p>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                            Mycelium
                            <span className="block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                                Packaging
                            </span>
                        </h1>
                        <p className="text-gray-400 text-xl leading-relaxed max-w-3xl">
                            Revolutionary biodegradable packaging grown from fungal mycelium and agricultural waste.
                            The sustainable alternative to plastic and polystyrene.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
                    >
                        {[
                            { value: '45 days', label: 'Home Composting' },
                            { value: '100%', label: 'Plastic-Free' },
                            { value: '0', label: 'Carbon Footprint' },
                            { value: '250K+', label: 'Units Produced' }
                        ].map((stat, i) => (
                            <div key={i} className="p-6 rounded-2xl border border-gray-800 bg-gray-900/50 text-center">
                                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                                    {stat.value}
                                </div>
                                <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
                        <span className="text-amber-400 font-mono text-sm tracking-widest">// PROCESS</span>
                        <h2 className="text-4xl font-bold text-white mt-4">How It Works</h2>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                            From agricultural waste to premium packaging in 7-10 days.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={step.step}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="relative"
                            >
                                {index < 3 && (
                                    <div className="hidden lg:block absolute top-12 -right-4 w-8">
                                        <ChevronRight className="w-6 h-6 text-amber-500/30" />
                                    </div>
                                )}
                                <div className="p-6 rounded-2xl border border-gray-800 bg-gray-900/30 h-full">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center text-white font-bold text-sm mb-4">
                                        {step.step}
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-3">{step.description}</p>
                                    <p className="text-amber-400/70 text-xs font-mono">{step.detail}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industry Solutions */}
            <section className="py-24 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
                        <span className="text-amber-400 font-mono text-sm tracking-widest">// INDUSTRY SOLUTIONS</span>
                        <h2 className="text-4xl font-bold text-white mt-4">Packaging for Every Industry</h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {industrySolutions.map((industry, index) => (
                            <motion.div
                                key={industry.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -4 }}
                                className="p-8 rounded-2xl border border-gray-800 bg-gray-900/30 hover:border-amber-500/30 transition-colors"
                            >
                                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${industry.color} mb-4`}>
                                    <industry.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{industry.title}</h3>

                                <div className="mb-4">
                                    <p className="text-gray-500 text-xs font-mono tracking-widest mb-2">CLIENTS</p>
                                    <div className="flex flex-wrap gap-2">
                                        {industry.brands.map((brand) => (
                                            <span key={brand} className="px-3 py-1 rounded-full text-xs bg-white/5 text-gray-300 border border-gray-800">
                                                {brand}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <p className="text-gray-500 text-xs font-mono tracking-widest mb-2">APPLICATIONS</p>
                                    <div className="space-y-2">
                                        {industry.applications.map((app) => (
                                            <div key={app} className="flex items-center gap-2 text-sm text-gray-300">
                                                <Check className="w-3 h-3 text-amber-500" />
                                                <span>{app}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className={`mt-4 p-3 rounded-lg bg-gradient-to-r ${industry.color} bg-opacity-10`} style={{ background: 'rgba(245,158,11,0.08)' }}>
                                    <p className={`text-sm font-medium ${industry.textColor}`}>{industry.savings}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technical Specifications */}
            <section className="py-24">
                <div className="max-w-3xl mx-auto px-6">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
                        <span className="text-amber-400 font-mono text-sm tracking-widest">// SPECIFICATIONS</span>
                        <h2 className="text-4xl font-bold text-white mt-4">Material Properties</h2>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <div className="rounded-2xl border border-gray-800 bg-gray-900/30 overflow-hidden">
                            {technicalSpecs.map((item, i) => (
                                <div key={item.spec} className={`flex items-center justify-between p-5 ${i !== 0 ? 'border-t border-gray-800' : ''}`}>
                                    <span className="text-gray-400 text-sm">{item.spec}</span>
                                    <span className="text-white font-medium text-sm text-right">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Case Study */}
            <section className="py-24 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
                        <span className="text-amber-400 font-mono text-sm tracking-widest">// FEATURED CASE STUDY</span>
                        <h2 className="text-4xl font-bold text-white mt-4">Dell Technologies Partnership</h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-3xl border border-gray-800 bg-gray-900/30 overflow-hidden"
                    >
                        <div className="p-8 border-b border-gray-800">
                            <div className="flex items-center gap-3 mb-2">
                                <Building2 className="w-5 h-5 text-amber-400" />
                                <span className="text-amber-400 text-sm font-medium">{caseStudy.industry}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white">{caseStudy.company}</h3>
                            <p className="text-gray-500 text-sm mt-1">{caseStudy.location}</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-0">
                            <div className="p-8 border-b md:border-b-0 md:border-r border-gray-800">
                                <h4 className="text-sm font-mono text-gray-500 tracking-widest mb-3">CHALLENGE</h4>
                                <p className="text-gray-300 leading-relaxed">{caseStudy.challenge}</p>
                            </div>
                            <div className="p-8">
                                <h4 className="text-sm font-mono text-gray-500 tracking-widest mb-3">SOLUTION</h4>
                                <p className="text-gray-300 leading-relaxed">{caseStudy.solution}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-gray-800">
                            {caseStudy.results.map((result) => (
                                <div key={result.metric} className="p-6 text-center border-r last:border-r-0 border-gray-800">
                                    <div className="text-2xl font-bold text-white">{result.value}</div>
                                    {result.change && <div className="text-amber-400 text-xs font-medium mt-1">{result.change}</div>}
                                    <div className="text-gray-500 text-xs mt-2">{result.metric}</div>
                                </div>
                            ))}
                        </div>

                        <div className="p-8 border-t border-gray-800 bg-amber-500/5">
                            <div className="flex gap-4">
                                <Quote className="w-8 h-8 text-amber-500/30 shrink-0 mt-1" />
                                <div>
                                    <p className="text-gray-300 italic leading-relaxed">"{caseStudy.testimonial.quote}"</p>
                                    <div className="mt-4">
                                        <p className="text-white font-medium text-sm">{caseStudy.testimonial.author}</p>
                                        <p className="text-gray-500 text-sm">{caseStudy.testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Scalability */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
                        <span className="text-amber-400 font-mono text-sm tracking-widest">// SCALABILITY</span>
                        <h2 className="text-4xl font-bold text-white mt-4">Production Capacity</h2>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                            From pilot testing to national rollout. Scale your sustainable packaging at any pace.
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
                                className={`relative p-8 rounded-2xl border ${tier.popular ? 'border-amber-500 bg-amber-500/5' : 'border-gray-800 bg-gray-900/30'
                                    }`}
                            >
                                {tier.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-medium">
                                        Most Popular
                                    </div>
                                )}
                                <h3 className="text-xl font-bold text-white mb-1">{tier.name}</h3>
                                <p className="text-amber-400 font-mono text-sm mb-2">{tier.volume}</p>
                                <p className="text-lg font-bold text-white mb-1">{tier.lead}</p>
                                <p className="text-gray-500 text-sm mb-6">{tier.ideal}</p>
                                <div className="space-y-3">
                                    {tier.features.map((feature) => (
                                        <div key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                                            <Check className="w-4 h-4 text-amber-500" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <Button
                                    onClick={() => setDemoModal(true)}
                                    className={`w-full mt-8 rounded-full ${tier.popular
                                            ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
                                            : 'bg-white/10 text-white hover:bg-white/20'
                                        }`}
                                >
                                    Get Started <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
                        <span className="text-amber-400 font-mono text-sm tracking-widest">// TESTIMONIALS</span>
                        <h2 className="text-4xl font-bold text-white mt-4">What Our Partners Say</h2>
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
                                        <span key={i} className="text-amber-400">★</span>
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
                    <div className="p-12 rounded-3xl border border-gray-800 bg-gradient-to-b from-amber-500/10 to-transparent">
                        <h2 className="text-4xl font-bold text-white mb-4">Ready to Go Plastic-Free?</h2>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                            Schedule a consultation and receive a free packaging prototype tailored to your products.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button onClick={() => setDemoModal(true)} size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full px-10">
                                <Calendar className="mr-2 h-5 w-5" />
                                Request Prototype
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
