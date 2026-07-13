"use client";

import React, { useState } from 'react';

// Icons as inline SVGs
const Mail = (p: { className?: string; size?: number; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={p.size ?? 24} height={p.size ?? 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={p.strokeWidth ?? 2} strokeLinecap="round" strokeLinejoin="round" className={p.className}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const Building2 = (p: { className?: string; size?: number; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={p.size ?? 24} height={p.size ?? 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={p.strokeWidth ?? 2} strokeLinecap="round" strokeLinejoin="round" className={p.className}>
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
    <path d="M10 6h4" />
    <path d="M10 10h4" />
    <path d="M10 14h4" />
    <path d="M10 18h4" />
  </svg>
);

const Compass = (p: { className?: string; size?: number; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={p.size ?? 24} height={p.size ?? 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={p.strokeWidth ?? 2} strokeLinecap="round" strokeLinejoin="round" className={p.className}>
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);

const Clock = (p: { className?: string; size?: number; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={p.size ?? 24} height={p.size ?? 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={p.strokeWidth ?? 2} strokeLinecap="round" strokeLinejoin="round" className={p.className}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const ChevronDown = (p: { className?: string; size?: number; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={p.size ?? 24} height={p.size ?? 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={p.strokeWidth ?? 2} strokeLinecap="round" strokeLinejoin="round" className={p.className}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const ArrowDownRight = (p: { className?: string; size?: number; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={p.size ?? 24} height={p.size ?? 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={p.strokeWidth ?? 2} strokeLinecap="round" strokeLinejoin="round" className={p.className}>
    <path d="M7 7l10 10" />
    <path d="M17 7v10H7" />
  </svg>
);

type EnquiryType = 'general' | 'partnerships' | 'projects';

export default function ContactForm() {
  const [enquiryPurpose, setEnquiryPurpose] = useState<EnquiryType>('general');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'message' && value.length > 350) return;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', { ...formData, enquiryPurpose });
  };

  return (
    <div className="min-h-screen bg-[#F4F1EB] text-[#1A1A1A] font-sans flex justify-center py-16 px-4 sm:px-8">
      <div className="max-w-[1280px] w-full flex flex-col lg:flex-row gap-0">
        
        {/* LEFT COLUMN: Contact Form */}
        <form onSubmit={handleSubmit} className="flex-1 lg:pr-16 pb-12 lg:pb-0">
          
          <h1 className="text-[2.25rem] sm:text-[2.75rem] leading-[1.1] font-normal text-[#1A1A1A] mb-14 max-w-[90%]">
            You can contact Cinqo via our secure form or through the contact details provided opposite.
          </h1>

          {/* Name Inputs Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col">
              <label className="text-sm text-gray-700 mb-2">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full border-2 border-[#E03A3E] bg-white h-12 px-3 focus:outline-none rounded-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-700 mb-2">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full border-2 border-[#E03A3E] bg-white h-12 px-3 focus:outline-none rounded-none"
              />
            </div>
          </div>

          {/* Email & Phone Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            <div className="flex flex-col">
              <label className="text-sm text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border-2 border-[#E03A3E] bg-white h-12 px-3 focus:outline-none rounded-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-700 mb-2">Phone Number</label>
              <div className="flex border-2 border-[#E03A3E] bg-white h-12">
                <div className="flex items-center gap-2 border-r-2 border-[#E03A3E] px-3 bg-white text-sm text-gray-700 cursor-pointer select-none">
                  <span>BH</span>
                  <span className="font-semibold">+973</span>
                  <ChevronDown size={14} className="text-gray-500" />
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="flex-1 px-3 bg-white focus:outline-none rounded-none"
                />
              </div>
            </div>
          </div>

          {/* Purpose Selection Section */}
          <div className="mb-10">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
              <h3 className="text-sm text-gray-700">Enquiries routed by purpose</h3>
              <p className="text-sm text-gray-500 sm:max-w-[50%] sm:text-right">
                Select the route that most closely matches your enquiry and the office will direct it to the relevant division.
              </p>
            </div>

            {/* Selection Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* General Card */}
              <div
                onClick={() => setEnquiryPurpose('general')}
                className="border-2 border-[#E03A3E] bg-white p-5 cursor-pointer flex flex-col justify-between min-h-[160px] rounded-none"
              >
                <Mail className="text-[#E03A3E] mb-4" size={24} strokeWidth={1.5} />
                <div>
                  <h4 className="text-sm font-bold text-[#1A1A1A] mb-1">General enquiries</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Corporate Information, Media requests, & General Communication for the Group Office
                  </p>
                </div>
              </div>

              {/* Partnerships Card */}
              <div
                onClick={() => setEnquiryPurpose('partnerships')}
                className="border-2 border-[#E03A3E] bg-white p-5 cursor-pointer flex flex-col justify-between min-h-[160px] rounded-none"
              >
                <Building2 className="text-[#E03A3E] mb-4" size={24} strokeWidth={1.5} />
                <div>
                  <h4 className="text-sm font-bold text-[#1A1A1A] mb-1">Partnerships</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Introductions for strategic collaborations, suppliers relationships, and operating-companies opportunities
                  </p>
                </div>
              </div>

              {/* Projects Card */}
              <div
                onClick={() => setEnquiryPurpose('projects')}
                className="border-2 border-[#E03A3E] bg-white p-5 cursor-pointer flex flex-col justify-between min-h-[160px] rounded-none"
              >
                <Compass className="text-[#E03A3E] mb-4" size={24} strokeWidth={1.5} />
                <div>
                  <h4 className="text-sm font-bold text-[#1A1A1A] mb-1">Projects Introductions</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Early-stage project discussions, Technical hand offs, and requests for division-level coordination.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Message Textarea */}
          <div className="flex flex-col mb-4">
            <label className="text-sm text-gray-700 mb-2">Message*</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Message (350 characters max)"
              rows={5}
              className="w-full border-2 border-[#E03A3E] bg-white p-4 focus:outline-none resize-none placeholder-gray-500 text-sm rounded-none"
              required
            />
          </div>

          {/* Disclaimers */}
          <div className="space-y-2 mb-8">
            <p className="text-sm text-gray-600">Please do not transmit sensitive or technical information via this form.</p>
            <p className="text-sm text-gray-600">
              By submitting this form, you agree to the processing of your personal data in accordance with our privacy policy
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="px-10 py-3 border-2 border-[#E03A3E] bg-white text-[#1A1A1A] font-medium hover:bg-[#F9F6F0] focus:outline-none transition-colors rounded-none"
          >
            Submit Now
          </button>
        </form>

        {/* RIGHT COLUMN: Info Panel */}
        <div className="lg:w-[380px] w-full border-t lg:border-t-0 lg:border-l border-gray-300 flex flex-col">
          
          {/* Top Cell */}
          <div className="h-24 lg:h-[220px] relative">
            <Mail className="absolute top-6 right-6 text-[#E03A3E]" size={20} strokeWidth={1.5} />
          </div>

          {/* Business Hours Segment */}
          <div className="border-t border-gray-300 p-8 flex flex-col justify-center min-h-[200px]">
            <div className="flex items-center justify-between mb-8">
              <span className="text-sm text-gray-600 font-medium">Business Hours</span>
              <Clock className="text-[#E03A3E]" size={20} strokeWidth={1.5} />
            </div>
            <ArrowDownRight className="text-gray-800 mb-6" size={18} strokeWidth={1.5} />
            <div className="text-lg space-y-1 text-[#1A1A1A] font-medium">
              <p>Sat. - Wed. 8am to 5pm</p>
              <p>Thu. 8am to 11am</p>
              <p>Fri. Closed</p>
            </div>
          </div>

          {/* Postal Address Segment */}
          <div className="border-t border-gray-300 p-8 flex flex-col justify-center min-h-[260px]">
            <div className="flex items-center justify-between mb-8">
              <span className="text-sm text-gray-600 font-medium">Postal Address:</span>
              <Clock className="text-[#E03A3E]" size={20} strokeWidth={1.5} />
            </div>
            <ArrowDownRight className="text-gray-800 mb-6" size={18} strokeWidth={1.5} />
            <div className="text-lg font-medium text-[#1A1A1A] leading-snug">
              <p>YBAK TOWER,</p>
              <p>Level 14, Entrance No. 143-144</p>
              <p>Road 1703, Block 317.</p>
              <p>Diplomatic Area, Kingdom of<br/>Bahrain.</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}