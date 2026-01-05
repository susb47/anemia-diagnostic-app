"use client";

import React, { useState } from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Send, 
  MessageSquare,
  Clock,
  Globe,
  User
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-24 px-4 sm:px-6 lg:px-8 font-sans transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-4 text-indigo-600 dark:text-indigo-400">
            <MessageSquare size={32} />
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Have questions about our Federated Graph Learning architecture or interested in collaboration? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* --- LEFT COLUMN: Contact Info --- */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Lab Info Card */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Globe className="text-indigo-600" size={20} />
                Research Lab
              </h3>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-50 dark:bg-slate-800 rounded-lg text-indigo-600 dark:text-indigo-400 flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white text-sm uppercase tracking-wide mb-1">Address</p>
                    <p className="text-slate-600 dark:text-slate-300 font-medium">MedVisAI Research Centre</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Dhaka, Bangladesh</p>
                  </div>
                </div>

                {/* General Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-50 dark:bg-slate-800 rounded-lg text-indigo-600 dark:text-indigo-400 flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white text-sm uppercase tracking-wide mb-1">General Inquiries</p>
                    <a href="mailto:contact@medvisai.com" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition-colors font-medium">
                      contact@medvisai.com
                    </a>
                  </div>
                </div>

                {/* Personal / Project Lead Email (NEW) */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-50 dark:bg-slate-800 rounded-lg text-indigo-600 dark:text-indigo-400 flex-shrink-0">
                    <User size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white text-sm uppercase tracking-wide mb-1">Project Lead</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Susmoy Biswas</p>
                    <a href="mailto:saukhin15-5647@diu.edu.bd" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium text-sm break-all">
                      saukhin15-5647@diu.edu.bd
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-50 dark:bg-slate-800 rounded-lg text-indigo-600 dark:text-indigo-400 flex-shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white text-sm uppercase tracking-wide mb-1">Working Hours</p>
                    <p className="text-slate-600 dark:text-slate-300 font-medium">Sunday - Thursday</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">9:00 AM - 5:00 PM (BST)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-slate-200 dark:bg-slate-800 rounded-2xl h-64 w-full relative overflow-hidden flex items-center justify-center border border-slate-300 dark:border-slate-700">
               <div className="text-center opacity-50">
                  <MapPin size={48} className="mx-auto mb-2 text-slate-400" />
                  <p className="text-sm font-semibold text-slate-500">Dhaka, Bangladesh</p>
               </div>
            </div>

          </div>

          {/* --- RIGHT COLUMN: Contact Form --- */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 lg:p-12 shadow-sm border border-slate-200 dark:border-slate-800 h-full">
              
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-8 animate-fade-in">
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6 text-green-600 dark:text-green-400">
                    <Send size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-500 dark:text-slate-400 max-w-md">
                    Thank you for reaching out to MedVisAI. We have received your inquiry and will get back to you shortly at {formData.email}.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-8 px-6 py-2 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg hover:bg-slate-200 transition-colors font-medium"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                    Send us a Message
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all dark:text-white"
                        placeholder="Dr. John Doe"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all dark:text-white"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all dark:text-white"
                      placeholder="Collaboration Proposal..."
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all resize-none dark:text-white"
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}