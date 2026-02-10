import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Building2, Users, Package, HelpCircle, Mail, MapPin, Phone, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { base44 } from '@/api/base44Client';

const inquiryTypes = [
  { value: 'investment', label: 'Investment Opportunity', icon: Building2, description: 'Looking to invest in Parambhariya' },
  { value: 'partnership', label: 'Strategic Partnership', icon: Users, description: 'Explore collaboration opportunities' },
  { value: 'b2b_solution', label: 'B2B Solutions', icon: Package, description: 'Interested in our technology for your business' },
  { value: 'product_inquiry', label: 'Product Inquiry', icon: Package, description: 'Questions about our products' },
  { value: 'general', label: 'General Inquiry', icon: HelpCircle, description: 'Other questions or feedback' },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiry_type: 'general',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type');
    if (type && inquiryTypes.some(t => t.value === type)) {
      setFormData(prev => ({ ...prev, inquiry_type: type }));
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await base44.entities.ContactInquiry.create(formData);
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Message Sent!</h2>
          <p className="text-gray-400 mb-8">
            Thank you for reaching out. Our team will review your inquiry and get back to you within 24-48 hours.
          </p>
          <Button 
            onClick={() => {
              setIsSubmitted(false);
              setFormData({ name: '', email: '', company: '', inquiry_type: 'general', message: '' });
            }}
            variant="outline" 
            className="border-gray-700 text-white hover:bg-white/10 rounded-full"
          >
            Send Another Message
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.1),transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-emerald-400 font-mono text-sm tracking-widest">// CONTACT</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mt-4">
              Let's Build the
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"> Future</span>
            </h1>
            <p className="text-gray-400 text-lg mt-6">
              Whether you're an investor, potential partner, or curious customer — we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Inquiry Type Selector */}
            <div className="lg:col-span-2">
              <h3 className="text-white font-semibold mb-6">What brings you here?</h3>
              <div className="space-y-3">
                {inquiryTypes.map((type) => (
                  <motion.button
                    key={type.value}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setFormData(prev => ({ ...prev, inquiry_type: type.value }))}
                    className={`w-full p-4 rounded-xl border text-left transition-all ${
                      formData.inquiry_type === type.value 
                        ? 'border-emerald-500 bg-emerald-500/10' 
                        : 'border-gray-800 bg-gray-900/30 hover:border-gray-700'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-2 rounded-lg ${
                        formData.inquiry_type === type.value 
                          ? 'bg-emerald-500/20' 
                          : 'bg-gray-800'
                      }`}>
                        <type.icon className={`w-5 h-5 ${
                          formData.inquiry_type === type.value 
                            ? 'text-emerald-400' 
                            : 'text-gray-400'
                        }`} />
                      </div>
                      <div>
                        <div className={`font-medium ${
                          formData.inquiry_type === type.value 
                            ? 'text-white' 
                            : 'text-gray-300'
                        }`}>
                          {type.label}
                        </div>
                        <div className="text-gray-500 text-sm mt-1">{type.description}</div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Contact Info */}
              <div className="mt-12 space-y-4">
                <div className="flex items-center gap-4 text-gray-400">
                  <Mail className="w-5 h-5 text-emerald-400" />
                  <span>contact@parambhariya.com</span>
                </div>
                <div className="flex items-center gap-4 text-gray-400">
                  <MapPin className="w-5 h-5 text-emerald-400" />
                  <span>Bangalore, Karnataka, India</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onSubmit={handleSubmit}
                className="p-8 rounded-2xl border border-gray-800 bg-gray-900/30"
              >
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-300 mb-2 block">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      required
                      className="bg-black/50 border-gray-700 text-white focus:border-emerald-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-300 mb-2 block">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      required
                      className="bg-black/50 border-gray-700 text-white focus:border-emerald-500"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <Label htmlFor="company" className="text-gray-300 mb-2 block">Company / Organization</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                    className="bg-black/50 border-gray-700 text-white focus:border-emerald-500"
                    placeholder="Your Company Name"
                  />
                </div>

                <div className="mb-6">
                  <Label htmlFor="message" className="text-gray-300 mb-2 block">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    required
                    rows={5}
                    className="bg-black/50 border-gray-700 text-white focus:border-emerald-500 resize-none"
                    placeholder="Tell us about your interest or inquiry..."
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  size="lg" 
                  className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-black font-semibold rounded-full"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      Send Message
                    </span>
                  )}
                </Button>
              </motion.form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}