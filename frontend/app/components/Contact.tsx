"use client";

import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Globe } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 font-sans transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm md:text-base text-indigo-600 dark:text-indigo-400 font-bold tracking-wide uppercase">Get in Touch</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Contact the Research Team
          </p>
          <div className="w-24 h-1 bg-indigo-600 dark:bg-indigo-500 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400 mx-auto">
            Have questions about our anemia diagnostic research, methodology, or dataset? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT SIDE: Contact Info */}
          <div className="space-y-8">
            {/* Card 1: Address */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 flex items-start gap-4">
              <div className="bg-indigo-50 dark:bg-indigo-900/30 p-3 rounded-lg text-indigo-600 dark:text-indigo-400">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Research Lab Location</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Department of CSE<br/>
                  Daffodil International University<br/>
                  Daffodil Smart City, Ashulia, Savar, Dhaka 1216
                </p>
              </div>
            </div>

            {/* Card 2: Email & Phone */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 flex items-start gap-4">
              <div className="bg-indigo-50 dark:bg-indigo-900/30 p-3 rounded-lg text-indigo-600 dark:text-indigo-400">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Electronic Correspondence</h3>
                <div className="space-y-1">
                  <p className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 transition-colors">
                    <a href="mailto:saukhin15-5647@diu.edu.bd">saukhin15-5647@diu.edu.bd</a> (Main Author)
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 transition-colors">
                    <a href="mailto:rabeya15-6056@diu.edu.bd">rabeya15-6056@diu.edu.bd</a> (Supporting Author)
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start pt-4">
               <a href="https://github.com/susb47" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-slate-900 rounded-full shadow-md text-slate-600 dark:text-slate-400 hover:text-indigo-600 hover:scale-110 transition-all">
                 <Github className="w-6 h-6" />
               </a>
               <a href="https://port-sbs.vercel.app/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-slate-900 rounded-full shadow-md text-slate-600 dark:text-slate-400 hover:text-indigo-600 hover:scale-110 transition-all">
                 <Globe className="w-6 h-6" />
               </a>
               <a href="https://www.linkedin.com/in/susmoy-biswas-b868671b0/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-slate-900 rounded-full shadow-md text-slate-600 dark:text-slate-400 hover:text-indigo-600 hover:scale-110 transition-all">
                 <Linkedin className="w-6 h-6" />
               </a>
            </div>
          </div>

          {/* RIGHT SIDE: Contact Form */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 p-8 lg:p-10">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                    placeholder="Dr. John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                  placeholder="Research Collaboration Inquiry"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "success"}
                className={`w-full py-4 rounded-xl font-bold text-white shadow-lg transition-all flex items-center justify-center gap-2 ${
                  status === "success" 
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98]"
                }`}
              >
                {status === "sending" ? (
                   "Sending..."
                ) : status === "success" ? (
                   "Message Sent!"
                ) : (
                   <>Send Message <Send className="w-5 h-5" /></>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}