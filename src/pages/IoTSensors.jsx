import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wifi, ArrowLeft, Check, Calendar, Thermometer, Droplets, Wind, Sun, FlaskConical, Eye, Code, Terminal, Database, ArrowRight, Quote, Building2, Copy, CheckCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import DemoRequestModal from '@/components/technology/DemoRequestModal';

const sensorSpecs = [
    {
        icon: Thermometer,
        name: 'Temperature',
        range: '-40°C to 125°C',
        accuracy: '±0.1°C',
        resolution: '0.01°C',
        response: '<200ms',
        protocol: 'MQTT / Modbus RTU'
    },
    {
        icon: Droplets,
        name: 'Humidity',
        range: '0–100% RH',
        accuracy: '±1.5% RH',
        resolution: '0.1% RH',
        response: '<500ms',
        protocol: 'MQTT / I²C'
    },
    {
        icon: Wind,
        name: 'CO₂ Level',
        range: '0–5000 ppm',
        accuracy: '±30 ppm',
        resolution: '1 ppm',
        response: '<2s',
        protocol: 'MQTT / UART'
    },
    {
        icon: FlaskConical,
        name: 'VOCs',
        range: '0–500 ppb',
        accuracy: '±10 ppb',
        resolution: '1 ppb',
        response: '<1s',
        protocol: 'MQTT / SPI'
    },
    {
        icon: Eye,
        name: 'pH Level',
        range: '0–14 pH',
        accuracy: '±0.02 pH',
        resolution: '0.01 pH',
        response: '<500ms',
        protocol: 'MQTT / Analog'
    },
    {
        icon: Sun,
        name: 'Light Spectrum',
        range: '200–1100 nm',
        accuracy: '±5 nm',
        resolution: '1 nm',
        response: '<100ms',
        protocol: 'MQTT / I²C'
    }
];

const integrationSteps = [
    {
        step: 1,
        title: 'Network Setup',
        description: 'Configure your MQTT broker and establish secure communication channels.',
        code: `# Install Mosquitto MQTT Broker
sudo apt-get install mosquitto mosquitto-clients

# Configure TLS for secure communication  
mosquitto_passwd -c /etc/mosquitto/passwd parambhariya
sudo systemctl restart mosquitto

# Verify broker is running
mosquitto_sub -h localhost -t "test" -u user -P pass`
    },
    {
        step: 2,
        title: 'Device Provisioning',
        description: 'Register your sensor nodes and configure their network parameters.',
        code: `// Initialize sensor node
const sensor = new ParambhariyaSensor({
  nodeId: 'SENSOR_001',
  apiKey: process.env.PARAMBHARIYA_API_KEY,
  broker: 'mqtt://your-broker:8883',
  tls: true
});

// Register with cloud platform
await sensor.provision({
  location: 'Zone-A',
  type: 'environmental',
  interval: 5000 // 5 second readings
});`
    },
    {
        step: 3,
        title: 'Data Streaming',
        description: 'Start receiving real-time telemetry from your deployed sensor network.',
        code: `// Subscribe to sensor data stream
sensor.on('data', (reading) => {
  console.log({
    temperature: reading.temp,    // °C
    humidity: reading.humidity,    // % RH
    co2: reading.co2,             // ppm
    timestamp: reading.ts         // ISO 8601
  });
});

// Start streaming
await sensor.connect();
console.log('✓ Sensor streaming active');`
    }
];

const caseStudies = [
    {
        company: 'AgriTech Solutions',
        location: 'Pune, Maharashtra',
        industry: 'Smart Agriculture',
        challenge: 'Monitoring 50 acres of diverse crops with manual readings taken only twice daily, leading to delayed responses to environmental changes.',
        solution: 'Deployed 200 IoT sensor nodes across the farm with 4G mesh networking, providing real-time monitoring with < 1 second latency.',
        results: [
            { metric: 'Crop Loss', value: '-67%', change: 'Reduced' },
            { metric: 'Data Points/Day', value: '2.4M', change: '+480,000x' },
            { metric: 'Response Time', value: '<30s', change: 'vs 12 hours' },
            { metric: 'Annual Savings', value: '₹18L', change: '' }
        ],
        testimonial: {
            quote: 'We went from checking crops twice a day to having real-time alerts. The sensor network caught a temperature anomaly at 3 AM that would have destroyed an entire crop cycle.',
            author: 'Suresh Patil',
            role: 'CTO, AgriTech Solutions'
        }
    },
    {
        company: 'SmartFarm Network',
        location: 'Coimbatore, Tamil Nadu',
        industry: 'Precision Farming',
        challenge: 'Coordinating sensor data across 12 separate growing facilities with different environmental requirements and legacy monitoring systems.',
        solution: 'Implemented a unified IoT sensor mesh with edge computing nodes, replacing 5 different monitoring systems with a single dashboard.',
        results: [
            { metric: 'Systems Replaced', value: '5→1', change: 'Unified' },
            { metric: 'Network Uptime', value: '99.97%', change: '' },
            { metric: 'Sensor Nodes', value: '480', change: 'Deployed' },
            { metric: 'Setup Time', value: '5 days', change: 'All facilities' }
        ],
        testimonial: {
            quote: 'The integration was seamless. Parambhariya\'s team replaced our fragmented monitoring stack with a cohesive network in under a week. Data quality improved overnight.',
            author: 'Priya Venkatesh',
            role: 'Operations Head, SmartFarm Network'
        }
    }
];

const scalabilityTiers = [
    {
        name: 'Small Farm',
        nodes: '10-50 Nodes',
        coverage: 'Up to 5 acres',
        ideal: 'Specialty growers, research',
        features: ['Mesh WiFi networking', 'Basic alerting', '30-day data retention', 'Community support']
    },
    {
        name: 'Commercial',
        nodes: '50-500 Nodes',
        coverage: '5-100 acres',
        ideal: 'Commercial farms, cooperatives',
        features: ['4G/LoRa networking', 'AI anomaly detection', '1-year data retention', 'Priority support'],
        popular: true
    },
    {
        name: 'Industrial',
        nodes: '500-5000+ Nodes',
        coverage: '100+ acres',
        ideal: 'Estates, multi-facility ops',
        features: ['5G edge computing', 'Custom ML models', 'Unlimited retention', 'Dedicated engineer']
    }
];

const testimonials = [
    {
        quote: 'The sensor accuracy is remarkable. Our soil pH readings match lab results to within 0.02 — we\'ve never had that level of precision in the field before.',
        author: 'Dr. Kavitha Ramesh',
        role: 'Research Director, ICAR',
        rating: 5
    },
    {
        quote: 'Battery life of 18 months means we deploy and forget. The self-healing mesh network handles failures automatically — truly maintenance-free.',
        author: 'Mohammed Ismail',
        role: 'Farm Manager, Nilgiri Plantations',
        rating: 5
    },
    {
        quote: 'The developer API is excellent. We integrated the sensor data into our existing ERP in two days. The documentation is thorough and the SDK is well-designed.',
        author: 'Nandini Rao',
        role: 'Lead Engineer, FarmOS India',
        rating: 5
    }
];

export default function IoTSensors() {
    const [demoModal, setDemoModal] = useState(false);
    const [copiedStep, setCopiedStep] = useState(null);

    const copyCode = (code, stepNum) => {
        navigator.clipboard.writeText(code);
        setCopiedStep(stepNum);
        setTimeout(() => setCopiedStep(null), 2000);
    };

    return (
        <div className="bg-black min-h-screen">
            <DemoRequestModal isOpen={demoModal} onClose={() => setDemoModal(false)} solution="iot-sensors" />

            {/* Hero */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.15),transparent_60%)]" />
                <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <Link to="/Technology" className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors mb-8">
                        <ArrowLeft className="w-4 h-4" />
                        <span className="text-sm">Back to Technology</span>
                    </Link>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
                        <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 mb-6">
                            <Wifi className="w-10 h-10 text-white" />
                        </div>
                        <p className="text-cyan-400 font-mono text-sm tracking-widest mb-2">INTELLIGENT MONITORING NETWORK</p>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                            IoT Field
                            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                Sensors
                            </span>
                        </h1>
                        <p className="text-gray-400 text-xl leading-relaxed max-w-3xl">
                            Deploy a network of smart sensors that monitor every environmental variable,
                            feeding real-time data to our AI for continuous optimization.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
                    >
                        {[
                            { value: '1M+', label: 'Data Points/Day' },
                            { value: '99.7%', label: 'Accuracy Rate' },
                            { value: '<1s', label: 'Response Time' },
                            { value: '18mo', label: 'Battery Life' }
                        ].map((stat, i) => (
                            <div key={i} className="p-6 rounded-2xl border border-gray-800 bg-gray-900/50 text-center">
                                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                    {stat.value}
                                </div>
                                <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Sensor Specifications */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
                        <span className="text-cyan-400 font-mono text-sm tracking-widest">// SENSOR ARRAY</span>
                        <h2 className="text-4xl font-bold text-white mt-4">Sensor Specifications</h2>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                            Industrial-grade sensors designed for agricultural environments. IP67-rated with self-calibration.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {sensorSpecs.map((sensor, index) => (
                            <motion.div
                                key={sensor.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -4 }}
                                className="p-6 rounded-2xl border border-gray-800 bg-gray-900/30 hover:border-cyan-500/30 transition-colors"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-cyan-500/10">
                                        <sensor.icon className="w-5 h-5 text-cyan-400" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white">{sensor.name}</h3>
                                </div>
                                <div className="space-y-3">
                                    {[
                                        { label: 'Range', value: sensor.range },
                                        { label: 'Accuracy', value: sensor.accuracy },
                                        { label: 'Resolution', value: sensor.resolution },
                                        { label: 'Response', value: sensor.response },
                                        { label: 'Protocol', value: sensor.protocol }
                                    ].map((item) => (
                                        <div key={item.label} className="flex justify-between text-sm">
                                            <span className="text-gray-500">{item.label}</span>
                                            <span className="text-gray-300 font-medium">{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Integration Guide */}
            <section className="py-24 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
                        <span className="text-cyan-400 font-mono text-sm tracking-widest">// DEVELOPER GUIDE</span>
                        <h2 className="text-4xl font-bold text-white mt-4">Integration Guide</h2>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                            Get your sensor network up and running in three simple steps.
                        </p>
                    </motion.div>

                    <div className="space-y-8">
                        {integrationSteps.map((step, index) => (
                            <motion.div
                                key={step.step}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="rounded-2xl border border-gray-800 bg-gray-900/30 overflow-hidden"
                            >
                                <div className="p-6 border-b border-gray-800">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
                                            {step.step}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white">{step.title}</h3>
                                            <p className="text-gray-400 text-sm">{step.description}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative">
                                    <button
                                        onClick={() => copyCode(step.code, step.step)}
                                        className="absolute top-4 right-4 p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors z-10"
                                    >
                                        {copiedStep === step.step ? (
                                            <CheckCheck className="w-4 h-4 text-cyan-400" />
                                        ) : (
                                            <Copy className="w-4 h-4 text-gray-400" />
                                        )}
                                    </button>
                                    <pre className="p-6 overflow-x-auto text-sm">
                                        <code className="text-gray-300">{step.code}</code>
                                    </pre>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
                        <span className="text-cyan-400 font-mono text-sm tracking-widest">// SUCCESS STORIES</span>
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
                                        <Building2 className="w-5 h-5 text-cyan-400" />
                                        <span className="text-cyan-400 text-sm font-medium">{study.industry}</span>
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
                                            {result.change && <div className="text-cyan-400 text-xs font-medium mt-1">{result.change}</div>}
                                            <div className="text-gray-500 text-xs mt-2">{result.metric}</div>
                                        </div>
                                    ))}
                                </div>

                                <div className="p-8 border-t border-gray-800 bg-cyan-500/5">
                                    <div className="flex gap-4">
                                        <Quote className="w-8 h-8 text-cyan-500/30 shrink-0 mt-1" />
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
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
                        <span className="text-cyan-400 font-mono text-sm tracking-widest">// SCALABILITY</span>
                        <h2 className="text-4xl font-bold text-white mt-4">Network Sizing</h2>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                            From single greenhouses to multi-facility estates — our sensor network scales seamlessly.
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
                                className={`relative p-8 rounded-2xl border ${tier.popular ? 'border-cyan-500 bg-cyan-500/5' : 'border-gray-800 bg-gray-900/30'
                                    }`}
                            >
                                {tier.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-medium">
                                        Most Popular
                                    </div>
                                )}
                                <h3 className="text-xl font-bold text-white mb-1">{tier.name}</h3>
                                <p className="text-cyan-400 font-mono text-sm mb-2">{tier.nodes}</p>
                                <p className="text-2xl font-bold text-white mb-1">{tier.coverage}</p>
                                <p className="text-gray-500 text-sm mb-6">{tier.ideal}</p>
                                <div className="space-y-3">
                                    {tier.features.map((feature) => (
                                        <div key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                                            <Check className="w-4 h-4 text-cyan-500" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <Button
                                    onClick={() => setDemoModal(true)}
                                    className={`w-full mt-8 rounded-full ${tier.popular
                                            ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
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
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
                        <span className="text-cyan-400 font-mono text-sm tracking-widest">// TESTIMONIALS</span>
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
                                        <span key={i} className="text-cyan-400">★</span>
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
                    <div className="p-12 rounded-3xl border border-gray-800 bg-gradient-to-b from-cyan-500/10 to-transparent">
                        <h2 className="text-4xl font-bold text-white mb-4">Ready to Monitor Smarter?</h2>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                            Schedule a demo and discover how our IoT sensor network can provide unprecedented visibility into your operations.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button onClick={() => setDemoModal(true)} size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full px-10">
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
