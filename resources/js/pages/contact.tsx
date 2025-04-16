import React, { useState } from 'react';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import Header from '@/components/Header';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-8 rounded-2xl border border-sky-100 shadow-lg hover:shadow-xl hover:border-sky-200 transition-all duration-300">
              <Phone className="w-10 h-10 text-sky-500 mb-4" />
              <h3 className="text-sky-900 text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-sky-700">+44 (020) 1234-5678</p>
              <p className="text-sky-600 text-sm mt-2">Available 9AM - 6PM GMT</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-sky-100 shadow-lg hover:shadow-xl hover:border-sky-200 transition-all duration-300">
              <Mail className="w-10 h-10 text-sky-500 mb-4" />
              <h3 className="text-sky-900 text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-sky-700">support@iptvservice.uk</p>
              <p className="text-sky-600 text-sm mt-2">24/7 Email Support</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-sky-100 shadow-lg hover:shadow-xl hover:border-sky-200 transition-all duration-300">
              <MapPin className="w-10 h-10 text-sky-500 mb-4" />
              <h3 className="text-sky-900 text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-sky-700">123 IPTV Street</p>
              <p className="text-sky-700">London, UK EC1A 1BB</p>
            </div>
          </div>

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
                    <label htmlFor="name" className="block text-sm font-medium text-sky-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
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
                  className="w-full bg-sky-500 hover:bg-sky-600 text-white py-4 px-6 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl"
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