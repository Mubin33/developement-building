"use client";

import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle,
  User,
  MessageSquare,
  Building,
  ArrowRight
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeOffice, setActiveOffice] = useState(0);

  const offices = [
    {
      city: "Head Office - Dhaka",
      address: "House 45, Road 7, Gulshan-1",
      country: "Dhaka-1212, Bangladesh",
      phone: "+880 2-988-4847",
      email: "info@buildingbd.com",
      hours: "Sat - Thu: 9:00 - 18:00",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.0604773368544!2d90.41311131543135!3d23.78096848457479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c79ebfc345d5%3A0xf25a96c4519285d5!2sGulshan%201%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1620000000000!5m2!1sen!2sbd"
    },
    {
      city: "Regional Office - Chittagong",
      address: "Plot 15, CDA Avenue, Nasirabad",
      country: "Chittagong-4000, Bangladesh",
      phone: "+880 31-255-1234",
      email: "ctg@buildingbd.com",
      hours: "Sat - Thu: 9:00 - 17:30",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.387452448848!2d91.809438315428!3d22.34753624719342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd89f5eefc095%3A0x6f24322916861d55!2sNasirabad%2C%20Chattogram!5e0!3m2!1sen!2sbd!4v1620000000000!5m2!1sen!2sbd"
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section className="py-20 bg-[#f4f7f9] px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto outfit">
            Have a project in mind? Contact us for a free consultation and quote
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-sm shadow-lg p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <MessageSquare size={20} className="text-primary" />
              Send Us a Message
            </h3>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                <p className="text-gray-600 outfit">
                  Thank you for contacting us. We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all outfit"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all outfit"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all outfit"
                        placeholder="+44 20 7123 4567"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Subject *
                    </label>
                    <div className="relative">
                      <Building size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all outfit appearance-none bg-white"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="quote">Request a Quote</option>
                        <option value="project">Project Consultation</option>
                        <option value="career">Career Opportunities</option>
                        <option value="partnership">Business Partnership</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all outfit resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 font-bold uppercase tracking-wider rounded-sm hover:bg-secondary transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Map & Contact Info */}
          <div className="space-y-6">
            {/* Office Tabs */}
            <div className="flex gap-2">
              {offices.map((office, index) => (
                <button
                  key={index}
                  onClick={() => setActiveOffice(index)}
                  className={`flex-1 py-3 px-4 font-semibold text-sm rounded-sm transition-colors ${
                    activeOffice === index 
                      ? 'bg-secondary text-white' 
                      : 'bg-white text-gray-600 hover:bg-secondary/10'
                  }`}
                >
                  {office.city}
                </button>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-sm overflow-hidden shadow-lg">
              <iframe
                src={offices[activeOffice].mapUrl}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${offices[activeOffice].city} Location`}
              />
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Address */}
              <div className="bg-white p-5 rounded-sm shadow-md">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center text-primary flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600 text-sm outfit">
                      {offices[activeOffice].address}<br />
                      {offices[activeOffice].country}
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white p-5 rounded-sm shadow-md">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center text-primary flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600 text-sm outfit">{offices[activeOffice].phone}</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white p-5 rounded-sm shadow-md">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center text-primary flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600 text-sm outfit">{offices[activeOffice].email}</p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white p-5 rounded-sm shadow-md">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center text-primary flex-shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Working Hours</h4>
                    <p className="text-gray-600 text-sm outfit">{offices[activeOffice].hours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-secondary text-white p-6 rounded-sm shadow-lg">
              <h4 className="text-lg font-bold mb-2">Need Urgent Assistance?</h4>
              <p className="text-gray-300 text-sm mb-4 outfit">
                Our emergency response team is available 24/7 for urgent construction matters.
              </p>
              <a 
                href={`tel:${offices[activeOffice].phone}`}
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 font-bold uppercase tracking-wider rounded-sm hover:bg-white hover:text-secondary transition-colors"
              >
                <Phone size={18} />
                Call Now
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
