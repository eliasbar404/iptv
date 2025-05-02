import React, { useState } from 'react';
import WhatsAppButton from '@/components/WhatsAppButton';
import {Send, MessageSquare } from 'lucide-react';
import Header from '@/components/Header';
import { router } from '@inertiajs/react'

function Contact() {
  const [formData, setFormData] = useState({
    user_name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    router.post('/contact', formData);
    setFormData({ user_name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-white">
      <Header/>
      {/* Header */}
      <div className="w-full py-12 px-4 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-sky-900 mb-6 tracking-tight">
            Let's Start a Conversation
          </h1>
          <p className="text-sky-700 text-lg max-w-2xl mx-auto">
            Have questions about our IPTV service? Our team is here to help you get the best streaming experience.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="relative">
          {/* Contact Methods */}

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-sky-100">
              <div className="flex items-center gap-4 mb-8">
                <MessageSquare className="w-8 h-8 text-sky-500" />
                <h2 className="text-2xl font-bold text-sky-900">Send us a Message</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="user_name" className="block text-sm font-medium text-sky-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="user_name"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-sky-50 border border-sky-200 rounded-xl text-sky-900 placeholder-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-sky-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-sky-50 border border-sky-200 rounded-xl text-sky-900 placeholder-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-sky-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-sky-50 border border-sky-200 rounded-xl text-sky-900 placeholder-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-sky-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-sky-50 border border-sky-200 rounded-xl text-sky-900 placeholder-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-transparent transition-all duration-200"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 cursor-pointer text-white py-4 px-6 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}

export default Contact;