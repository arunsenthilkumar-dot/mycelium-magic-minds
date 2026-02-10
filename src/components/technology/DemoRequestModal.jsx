import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Building2, Users, Zap, CheckCircle, ChevronRight, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Checkbox } from '@/components/ui/checkbox';
import { base44 } from '@/api/base44Client';
import { format, addDays, isWeekend } from 'date-fns';

const solutionInfo = {
  'micro-factories': {
    title: 'AI-Powered Micro-Factories',
    color: 'emerald',
    gradient: 'from-emerald-500 to-green-500'
  },
  'iot-sensors': {
    title: 'IoT Field Sensors',
    color: 'cyan',
    gradient: 'from-cyan-500 to-blue-500'
  },
  'mycelium-packaging': {
    title: 'Mycelium Packaging',
    color: 'amber',
    gradient: 'from-amber-500 to-orange-500'
  },
  'platform': {
    title: 'Intelligent Platform',
    color: 'purple',
    gradient: 'from-purple-500 to-pink-500'
  }
};

const businessSizes = [
  { value: 'startup', label: 'Startup', description: 'Early stage, < 10 employees' },
  { value: 'small', label: 'Small Business', description: '10-50 employees' },
  { value: 'medium', label: 'Medium Enterprise', description: '50-500 employees' },
  { value: 'enterprise', label: 'Large Enterprise', description: '500+ employees' }
];

const integrationOptions = [
  'ERP Systems (SAP, Oracle)',
  'CRM Platforms',
  'Inventory Management',
  'Supply Chain Software',
  'Analytics & BI Tools',
  'IoT Platforms',
  'Cloud Services (AWS, Azure, GCP)',
  'Custom API Integration'
];

const timeSlots = [
  { value: 'morning', label: 'Morning', time: '9:00 AM - 12:00 PM' },
  { value: 'afternoon', label: 'Afternoon', time: '12:00 PM - 5:00 PM' },
  { value: 'evening', label: 'Evening', time: '5:00 PM - 8:00 PM' }
];

export default function DemoRequestModal({ isOpen, onClose, solution }) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    solution: solution,
    business_size: '',
    current_operations: '',
    integration_requirements: [],
    specific_needs: '',
    preferred_date: null,
    preferred_time: '',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
  });

  const info = solutionInfo[solution] || solutionInfo['platform'];

  const handleIntegrationToggle = (integration) => {
    setFormData(prev => ({
      ...prev,
      integration_requirements: prev.integration_requirements.includes(integration)
        ? prev.integration_requirements.filter(i => i !== integration)
        : [...prev.integration_requirements, integration]
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await base44.entities.DemoRequest.create({
      ...formData,
      preferred_date: formData.preferred_date ? format(formData.preferred_date, 'yyyy-MM-dd') : null
    });
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.name && formData.email && formData.company;
      case 2:
        return formData.business_size;
      case 3:
        return formData.preferred_date && formData.preferred_time;
      default:
        return true;
    }
  };

  const disabledDays = (date) => {
    return date < new Date() || isWeekend(date);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-gray-900 border border-gray-800 rounded-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className={`sticky top-0 z-10 p-6 border-b border-gray-800 bg-gray-900/95 backdrop-blur-sm`}>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className={`inline-flex px-3 py-1 rounded-full bg-gradient-to-r ${info.gradient} text-white text-xs font-medium mb-3`}>
              Demo Request
            </div>
            <h2 className="text-2xl font-bold text-white">{info.title}</h2>
            <p className="text-gray-400 text-sm mt-1">Schedule a personalized demonstration</p>

            {/* Progress */}
            {!isSubmitted && (
              <div className="flex items-center gap-2 mt-6">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                      step >= s 
                        ? `bg-gradient-to-r ${info.gradient} text-white` 
                        : 'bg-gray-800 text-gray-500'
                    }`}>
                      {step > s ? <CheckCircle className="w-4 h-4" /> : s}
                    </div>
                    {s < 3 && <div className={`w-12 h-0.5 ${step > s ? `bg-${info.color}-500` : 'bg-gray-800'}`} />}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-8"
              >
                <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${info.gradient} flex items-center justify-center mx-auto mb-6`}>
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Demo Scheduled!</h3>
                <p className="text-gray-400 mb-2">
                  Your demo for <span className="text-white">{info.title}</span> has been requested.
                </p>
                <p className="text-gray-500 text-sm mb-6">
                  {formData.preferred_date && format(formData.preferred_date, 'EEEE, MMMM d, yyyy')} • {timeSlots.find(t => t.value === formData.preferred_time)?.time}
                </p>
                <p className="text-gray-400 text-sm">
                  Our team will send a calendar invite to <span className="text-white">{formData.email}</span> within 24 hours.
                </p>
                <Button onClick={onClose} className="mt-8" variant="outline">
                  Close
                </Button>
              </motion.div>
            ) : (
              <>
                {/* Step 1: Contact Info */}
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <Label className="text-gray-300 mb-2 block">Full Name *</Label>
                          <Input
                            value={formData.name}
                            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                            className="bg-black/50 border-gray-700 text-white"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <Label className="text-gray-300 mb-2 block">Work Email *</Label>
                          <Input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                            className="bg-black/50 border-gray-700 text-white"
                            placeholder="john@company.com"
                          />
                        </div>
                        <div>
                          <Label className="text-gray-300 mb-2 block">Company *</Label>
                          <Input
                            value={formData.company}
                            onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                            className="bg-black/50 border-gray-700 text-white"
                            placeholder="Company Name"
                          />
                        </div>
                        <div>
                          <Label className="text-gray-300 mb-2 block">Phone Number</Label>
                          <Input
                            value={formData.phone}
                            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                            className="bg-black/50 border-gray-700 text-white"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Business Needs */}
                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4">Business Size *</h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {businessSizes.map((size) => (
                          <button
                            key={size.value}
                            onClick={() => setFormData(prev => ({ ...prev, business_size: size.value }))}
                            className={`p-4 rounded-xl border text-left transition-all ${
                              formData.business_size === size.value
                                ? `border-${info.color}-500 bg-${info.color}-500/10`
                                : 'border-gray-700 bg-gray-800/50 hover:border-gray-600'
                            }`}
                          >
                            <div className="font-medium text-white">{size.label}</div>
                            <div className="text-gray-500 text-sm">{size.description}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4">Integration Requirements</h3>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {integrationOptions.map((integration) => (
                          <label
                            key={integration}
                            className="flex items-center gap-3 p-3 rounded-lg border border-gray-700 bg-gray-800/30 cursor-pointer hover:border-gray-600 transition-colors"
                          >
                            <Checkbox
                              checked={formData.integration_requirements.includes(integration)}
                              onCheckedChange={() => handleIntegrationToggle(integration)}
                            />
                            <span className="text-gray-300 text-sm">{integration}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label className="text-gray-300 mb-2 block">Specific Needs & Goals</Label>
                      <Textarea
                        value={formData.specific_needs}
                        onChange={(e) => setFormData(prev => ({ ...prev, specific_needs: e.target.value }))}
                        className="bg-black/50 border-gray-700 text-white resize-none"
                        rows={3}
                        placeholder="Describe your specific requirements, challenges, and what you hope to achieve..."
                      />
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Schedule */}
                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4">Select a Date *</h3>
                      <div className="flex justify-center">
                        <CalendarComponent
                          mode="single"
                          selected={formData.preferred_date}
                          onSelect={(date) => setFormData(prev => ({ ...prev, preferred_date: date }))}
                          disabled={disabledDays}
                          fromDate={addDays(new Date(), 1)}
                          toDate={addDays(new Date(), 60)}
                          className="rounded-xl border border-gray-700 bg-gray-800/50 p-3"
                        />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4">Preferred Time *</h3>
                      <div className="grid grid-cols-3 gap-3">
                        {timeSlots.map((slot) => (
                          <button
                            key={slot.value}
                            onClick={() => setFormData(prev => ({ ...prev, preferred_time: slot.value }))}
                            className={`p-4 rounded-xl border text-center transition-all ${
                              formData.preferred_time === slot.value
                                ? `border-${info.color}-500 bg-${info.color}-500/10`
                                : 'border-gray-700 bg-gray-800/50 hover:border-gray-600'
                            }`}
                          >
                            <Clock className={`w-5 h-5 mx-auto mb-2 ${
                              formData.preferred_time === slot.value ? `text-${info.color}-400` : 'text-gray-500'
                            }`} />
                            <div className="font-medium text-white text-sm">{slot.label}</div>
                            <div className="text-gray-500 text-xs">{slot.time}</div>
                          </button>
                        ))}
                      </div>
                      <p className="text-gray-500 text-xs mt-3 text-center">
                        Times shown in {formData.timezone}
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Navigation */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-800">
                  {step > 1 ? (
                    <Button
                      variant="outline"
                      onClick={() => setStep(s => s - 1)}
                      className="border-gray-700 text-white"
                    >
                      <ChevronLeft className="w-4 h-4 mr-2" />
                      Back
                    </Button>
                  ) : (
                    <div />
                  )}

                  {step < 3 ? (
                    <Button
                      onClick={() => setStep(s => s + 1)}
                      disabled={!canProceed()}
                      className={`bg-gradient-to-r ${info.gradient} text-white`}
                    >
                      Continue
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Button
                      onClick={handleSubmit}
                      disabled={!canProceed() || isSubmitting}
                      className={`bg-gradient-to-r ${info.gradient} text-white`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Scheduling...
                        </span>
                      ) : (
                        <>
                          <Calendar className="w-4 h-4 mr-2" />
                          Schedule Demo
                        </>
                      )}
                    </Button>
                  )}
                </div>
              </>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}