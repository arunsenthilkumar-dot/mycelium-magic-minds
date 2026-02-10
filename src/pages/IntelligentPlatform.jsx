import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, ArrowLeft, Check, Calendar, Cpu, Cloud, Monitor, Radio, Code, Database, Shield, Lock, Webhook, ArrowRight, Quote, Building2, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import DemoRequestModal from '@/components/technology/DemoRequestModal';

const architectureLayers = [
    {
        layer: 1,
        icon: Radio,
        title: 'Sensor Layer',
        color: 'from-cyan-500 to-blue-500',
        textColor: 'text-cyan-400',
        borderColor: 'border-cyan-500/30',
        description: 'IoT sensors collect environmental data across all facilities.',
        components: ['ESP32 microcontrollers', 'LoRa/4G mesh networking', 'Environmental sensor arrays', 'Camera modules (OV5647)']
    },
    {
        layer: 2,
        icon: Cpu,
        title: 'Edge Computing',
        color: 'from-emerald-500 to-green-500',
        textColor: 'text-emerald-400',
        borderColor: 'border-emerald-500/30',
        description: 'On-site processing for real-time decisions and anomaly detection.',
        components: ['Raspberry Pi 5 edge nodes', 'TensorFlow Lite inference', 'Local MQTT broker', 'Edge data buffering']
    },
    {
        layer: 3,
        icon: Cloud,
        title: 'Cloud Intelligence',
        color: 'from-purple-500 to-pink-500',
        textColor: 'text-purple-400',
        borderColor: 'border-purple-500/30',
        description: 'Centralized AI/ML training, data storage, and cross-facility optimization.',
        components: ['AWS/GCP infrastructure', 'YOLOv8 vision models', 'TimescaleDB time-series', 'Apache Kafka streaming']
    },
    {
        layer: 4,
        icon: Monitor,
        title: 'Dashboard & API',
        color: 'from-amber-500 to-orange-500',
        textColor: 'text-amber-400',
        borderColor: 'border-amber-500/30',
        description: 'Unified interface for monitoring, control, and third-party integrations.',
        components: ['Next.js web dashboard', 'React Native mobile app', 'RESTful API (200+ endpoints)', 'WebSocket real-time feeds']
    }
];

const techStack = [
    { category: 'Hardware', items: ['ESP32-S3', 'Raspberry Pi 5', 'NVIDIA Jetson Orin NX', 'OV5647 cameras'] },
    { category: 'AI/ML', items: ['YOLOv8 (detection)', 'Prophet (forecasting)', 'XGBoost (optimization)', 'TensorFlow Lite (edge)'] },
    { category: 'Backend', items: ['Node.js / Fastify', 'TimescaleDB', 'Redis', 'Apache Kafka'] },
    { category: 'Frontend', items: ['Next.js 14', 'React Native', 'D3.js / Recharts', 'Framer Motion'] },
    { category: 'Infrastructure', items: ['Docker / K8s', 'AWS ECS / GCP GKE', 'CloudFlare CDN', 'Terraform IaC'] },
    { category: 'Protocols', items: ['MQTT v5', 'HTTP/2', 'WebSocket', 'gRPC'] }
];

const integrationGuide = [
    {
        title: 'Authentication',
        icon: Lock,
        description: 'OAuth 2.0 with API key authentication. JWT tokens for session management.',
        code: `// Authenticate with the Parambhariya API
const client = new ParambhariyaSDK({
  apiKey: process.env.PARAMBHARIYA_API_KEY,
  environment: 'production'
});

const token = await client.auth.login({
  email: 'admin@yourfarm.com',
  password: '********'
});

// All subsequent calls are authenticated
console.log('Authenticated:', token.user.name);`
    },
    {
        title: 'Data Queries',
        icon: Database,
        description: 'Query sensor data, harvest records, and analytics via RESTful endpoints.',
        code: `// Fetch real-time sensor readings
const readings = await client.sensors.getReadings({
  facilityId: 'FAC_001',
  zone: 'Zone-A',
  metrics: ['temperature', 'humidity', 'co2'],
  interval: '5m',
  range: 'last_24h'
});

// Get harvest predictions
const forecast = await client.ai.getHarvestForecast({
  facilityId: 'FAC_001',
  species: 'oyster_mushroom'
});
console.log('Next harvest:', forecast.optimal_date);`
    },
    {
        title: 'Webhooks',
        icon: Webhook,
        description: 'Real-time event notifications for alerts, harvests, and system events.',
        code: `// Register webhook for critical alerts
await client.webhooks.create({
  url: 'https://yourapp.com/api/alerts',
  events: [
    'sensor.anomaly',
    'harvest.ready',
    'system.maintenance',
    'inventory.low'
  ],
  secret: 'whsec_your_signing_secret'
});

// Webhook payload example:
// { event: "harvest.ready", facility: "FAC_001",
//   data: { species: "shiitake", zone: "B", kg: 45 } }`
    }
];

const caseStudies = [
    {
        company: 'Deccan AgriTech',
        location: 'Hyderabad, Telangana',
        industry: 'Multi-Facility Operations',
        challenge: 'Managing 8 cultivation facilities across 3 cities with different teams, software tools, and reporting standards — leading to data silos and delayed decisions.',
        solution: 'Centralized all facilities on the Intelligent Platform with role-based access, unified dashboards, and automated cross-facility optimization.',
        results: [
            { metric: 'Facilities Unified', value: '8', change: 'Single dashboard' },
            { metric: 'Decision Time', value: '-85%', change: '4 hours → 35 min' },
            { metric: 'Overall Yield', value: '+28%', change: 'Cross-facility AI' },
            { metric: 'Reporting Time', value: '-92%', change: 'Auto-generated' }
        ],
        testimonial: {
            quote: 'Before Parambhariya, our operations team spent half their day just compiling data from different facilities. Now everything is real-time, and the AI catches things we\'d never see manually.',
            author: 'Sanjay Reddy',
            role: 'COO, Deccan AgriTech'
        }
    },
    {
        company: 'NatureFresh Foods',
        location: 'Pune, Maharashtra',
        industry: 'Food Processing',
        challenge: 'Needed to integrate cultivation monitoring with existing SAP ERP and cold-chain logistics system for end-to-end traceability.',
        solution: 'Used the platform\'s REST API and webhook system to create a bidirectional integration with SAP, with real-time inventory sync and automated quality reporting.',
        results: [
            { metric: 'Integration Time', value: '3 weeks', change: 'API-first' },
            { metric: 'Traceability', value: '100%', change: 'Farm to shelf' },
            { metric: 'Quality Incidents', value: '-73%', change: 'Predictive QA' },
            { metric: 'API Uptime', value: '99.99%', change: '' }
        ],
        testimonial: {
            quote: 'The API documentation is exceptional — our engineering team had the SAP integration running in under three weeks. The webhook system means our cold chain responds to harvests in real-time.',
            author: 'Deepa Kulkarni',
            role: 'CIO, NatureFresh Foods'
        }
    }
];

const scalabilityTiers = [
    {
        name: 'Starter',
        description: 'Single facility operations',
        features: [
            'Up to 3 user accounts',
            '1 facility / 50 sensors',
            '90-day data retention',
            'Standard dashboard',
            'Email alerts',
            'Community forum'
        ]
    },
    {
        name: 'Professional',
        description: 'Growing operations',
        features: [
            'Up to 25 user accounts',
            '5 facilities / 500 sensors',
            '1-year data retention',
            'Custom dashboards',
            'SMS + Webhook alerts',
            'Priority support (8hr SLA)'
        ],
        popular: true
    },
    {
        name: 'Enterprise',
        description: 'Large-scale operations',
        features: [
            'Unlimited users',
            'Unlimited facilities',
            'Unlimited data retention',
            'White-label dashboards',
            'Custom AI models',
            'Dedicated engineer (2hr SLA)'
        ]
    }
];

const testimonials = [
    {
        quote: 'The real-time dashboard changed how we operate. We can see every facility, every zone, every sensor — all in one place. It\'s like having x-ray vision for our farms.',
        author: 'Lakshmi Iyer',
        role: 'Farm Director, TamilNadu AgriCorp',
        rating: 5
    },
    {
        quote: 'The API-first approach was the deciding factor for us. Most agritech platforms are black boxes — Parambhariya gives us full control and integration capabilities.',
        author: 'Rahul Mehta',
        role: 'VP Engineering, FarmStack',
        rating: 5
    },
    {
        quote: 'Automated reporting alone saved us 20 hours per week. The AI-generated insights actually teach us things about our own operations that we never noticed.',
        author: 'Kavitha Nair',
        role: 'Operations Manager, Kerala Mushroom Co.',
        rating: 5
    }
];

export default function IntelligentPlatform() {
    const [demoModal, setDemoModal] = useState(false);

    return (
        <div className="bg-black min-h-screen">
            <DemoRequestModal isOpen={demoModal} onClose={() => setDemoModal(false)} solution="platform" />

            {/* Hero */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.15),transparent_60%)]" />
                <div className="absolute top-20 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <Link to="/Technology" className="inline-flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors mb-8">
                        <ArrowLeft className="w-4 h-4" />
                        <span className="text-sm">Back to Technology</span>
                    </Link>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
                        <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mb-6">
                            <BarChart3 className="w-10 h-10 text-white" />
                        </div>
                        <p className="text-purple-400 font-mono text-sm tracking-widest mb-2">END-TO-END MANAGEMENT SOFTWARE</p>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                            Intelligent
                            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Platform
                            </span>
                        </h1>
                        <p className="text-gray-400 text-xl leading-relaxed max-w-3xl">
                            A unified dashboard to control all your cultivation operations.
                            From spore to store, manage everything with unprecedented visibility.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
                    >
                        {[
                            { value: '99.9%', label: 'Platform Uptime' },
                            { value: '200+', label: 'API Endpoints' },
                            { value: '5K+', label: 'Active Users' },
                            { value: '<100ms', label: 'Avg Response' }
                        ].map((stat, i) => (
                            <div key={i} className="p-6 rounded-2xl border border-gray-800 bg-gray-900/50 text-center">
                                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    {stat.value}
                                </div>
                                <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* System Architecture */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
                        <span className="text-purple-400 font-mono text-sm tracking-widest">// ARCHITECTURE</span>
                        <h2 className="text-4xl font-bold text-white mt-4">System Architecture</h2>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                            A four-layer architecture designed for reliability, scalability, and real-time performance.
                        </p>
                    </motion.div>

                    <div className="space-y-6">
                        {architectureLayers.map((layer, index) => (
                            <motion.div
                                key={layer.title}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`p-8 rounded-2xl border ${layer.borderColor} bg-gray-900/30`}
                            >
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="flex items-start gap-4 md:w-1/3">
                                        <div className={`p-3 rounded-xl bg-gradient-to-br ${layer.color} shrink-0`}>
                                            <layer.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <p className={`text-xs font-mono tracking-widest ${layer.textColor} mb-1`}>LAYER {layer.layer}</p>
                                            <h3 className="text-xl font-bold text-white">{layer.title}</h3>
                                            <p className="text-gray-400 text-sm mt-2">{layer.description}</p>
                                        </div>
                                    </div>
                                    <div className="md:w-2/3 grid grid-cols-2 gap-3">
                                        {layer.components.map((component) => (
                                            <div key={component} className="flex items-center gap-2 text-sm text-gray-300">
                                                <Check className={`w-4 h-4 ${layer.textColor}`} />
                                                <span>{component}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="py-24 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
                        <span className="text-purple-400 font-mono text-sm tracking-widest">// TECH STACK</span>
                        <h2 className="text-4xl font-bold text-white mt-4">Built With Best-in-Class Tools</h2>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {techStack.map((category, index) => (
                            <motion.div
                                key={category.category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                className="p-6 rounded-2xl border border-gray-800 bg-gray-900/30"
                            >
                                <p className="text-purple-400 font-mono text-xs tracking-widest mb-4">{category.category.toUpperCase()}</p>
                                <div className="space-y-2">
                                    {category.items.map((item) => (
                                        <div key={item} className="flex items-center gap-2 text-sm text-gray-300">
                                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Integration Guide */}
            <section className="py-24">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
                        <span className="text-purple-400 font-mono text-sm tracking-widest">// API INTEGRATION</span>
                        <h2 className="text-4xl font-bold text-white mt-4">Integration Guide</h2>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                            Connect your existing systems with our comprehensive REST API and webhook infrastructure.
                        </p>
                    </motion.div>

                    <div className="space-y-8">
                        {integrationGuide.map((section, index) => (
                            <motion.div
                                key={section.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="rounded-2xl border border-gray-800 bg-gray-900/30 overflow-hidden"
                            >
                                <div className="p-6 border-b border-gray-800">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-purple-500/10">
                                            <section.icon className="w-5 h-5 text-purple-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white">{section.title}</h3>
                                            <p className="text-gray-400 text-sm">{section.description}</p>
                                        </div>
                                    </div>
                                </div>
                                <pre className="p-6 overflow-x-auto text-sm">
                                    <code className="text-gray-300">{section.code}</code>
                                </pre>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="py-24 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
                        <span className="text-purple-400 font-mono text-sm tracking-widest">// SUCCESS STORIES</span>
                        <h2 className="text-4xl font-bold text-white mt-4">Case Studies</h2>
                    </motion.div>

                    <div className="space-y-16">
                        {caseStudies.map((study) => (
                            <motion.div
                                key={study.company}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="rounded-3xl border border-gray-800 bg-gray-900/30 overflow-hidden"
                            >
                                <div className="p-8 border-b border-gray-800">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Building2 className="w-5 h-5 text-purple-400" />
                                        <span className="text-purple-400 text-sm font-medium">{study.industry}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">{study.company}</h3>
                                    <p className="text-gray-500 text-sm mt-1">{study.location}</p>
                                </div>

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

                                <div className="grid grid-cols-2 md:grid-cols-4 border-t border-gray-800">
                                    {study.results.map((result) => (
                                        <div key={result.metric} className="p-6 text-center border-r last:border-r-0 border-gray-800">
                                            <div className="text-2xl font-bold text-white">{result.value}</div>
                                            {result.change && <div className="text-purple-400 text-xs font-medium mt-1">{result.change}</div>}
                                            <div className="text-gray-500 text-xs mt-2">{result.metric}</div>
                                        </div>
                                    ))}
                                </div>

                                <div className="p-8 border-t border-gray-800 bg-purple-500/5">
                                    <div className="flex gap-4">
                                        <Quote className="w-8 h-8 text-purple-500/30 shrink-0 mt-1" />
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
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
                        <span className="text-purple-400 font-mono text-sm tracking-widest">// PLANS</span>
                        <h2 className="text-4xl font-bold text-white mt-4">Platform Tiers</h2>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                            Flexible plans that grow with your operations.
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
                                className={`relative p-8 rounded-2xl border ${tier.popular ? 'border-purple-500 bg-purple-500/5' : 'border-gray-800 bg-gray-900/30'
                                    }`}
                            >
                                {tier.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-medium">
                                        Most Popular
                                    </div>
                                )}
                                <h3 className="text-xl font-bold text-white mb-1">{tier.name}</h3>
                                <p className="text-gray-500 text-sm mb-6">{tier.description}</p>
                                <div className="space-y-3">
                                    {tier.features.map((feature) => (
                                        <div key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                                            <Check className="w-4 h-4 text-purple-500" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <Button
                                    onClick={() => setDemoModal(true)}
                                    className={`w-full mt-8 rounded-full ${tier.popular
                                            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
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
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
                        <span className="text-purple-400 font-mono text-sm tracking-widest">// TESTIMONIALS</span>
                        <h2 className="text-4xl font-bold text-white mt-4">What Our Users Say</h2>
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
                                        <span key={i} className="text-purple-400">★</span>
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
                    <div className="p-12 rounded-3xl border border-gray-800 bg-gradient-to-b from-purple-500/10 to-transparent">
                        <h2 className="text-4xl font-bold text-white mb-4">Ready for Total Visibility?</h2>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                            Schedule a live demo and see the Intelligent Platform in action with real facility data.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button onClick={() => setDemoModal(true)} size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full px-10">
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
