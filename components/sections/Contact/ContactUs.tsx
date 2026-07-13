"use client";

import React, { useState } from 'react';
// Icons as inline SVGs (lucide-react not used to avoid dependency)
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
const MapPin = (p: { className?: string; size?: number; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={p.size ?? 24} height={p.size ?? 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={p.strokeWidth ?? 2} strokeLinecap="round" strokeLinejoin="round" className={p.className}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const ChevronDown = (p: { className?: string; size?: number; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={p.size ?? 24} height={p.size ?? 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={p.strokeWidth ?? 2} strokeLinecap="round" strokeLinejoin="round" className={p.className}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);
const MoveDownRight = (p: { className?: string; size?: number; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={p.size ?? 24} height={p.size ?? 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={p.strokeWidth ?? 2} strokeLinecap="round" strokeLinejoin="round" className={p.className}>
    <path d="M13 17H9V9" />
    <path d="M9 17 19 7" />
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
    <div className="w-full min-h-screen bg-white text-gray-900 font-sans antialiased flex justify-center items-center p-4">
      {/* Container restricted strictly to 800px with structural red outline */}
      <div className="max-w-[800px] w-full grid grid-cols-1 md:grid-cols-12 border border-[#E03A3E] rounded-lg overflow-hidden shadow-sm">
        
        {/* LEFT COLUMN: Contact Form */}
        <form onSubmit={handleSubmit} className="md:col-span-8 p-6 bg-white flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#E03A3E]">
          <div>
            <h1 className="text-xl md:text-2xl font-normal text-gray-800 leading-tight mb-8">
              You can contact <span className="font-semibold text-black">Cinqo</span> via our secure form or through the contact details provided opposite.
            </h1>

            {/* Name Inputs Row with Red Outlines */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col">
                <label className="text-xs text-gray-500 mb-1 font-medium">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full border border-[#E03A3E] rounded px-3 py-2 bg-white focus:outline-none focus:ring-1 focus:ring-[#E03A3E] text-sm"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-xs text-gray-500 mb-1 font-medium">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full border border-[#E03A3E] rounded px-3 py-2 bg-white focus:outline-none focus:ring-1 focus:ring-[#E03A3E] text-sm"
                />
              </div>
            </div>

            {/* Email & Phone Row with Red Outlines */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex flex-col">
                <label className="text-xs text-gray-500 mb-1 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border border-[#E03A3E] rounded px-3 py-2 bg-white focus:outline-none focus:ring-1 focus:ring-[#E03A3E] text-sm"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-xs text-gray-500 mb-1 font-medium">Phone Number</label>
                <div className="relative flex">
                  <div className="flex items-center gap-1 border border-r-0 border-[#E03A3E] rounded-l px-2 bg-gray-50 text-xs text-gray-700 cursor-pointer select-none">
                    <span>BH</span>
                    <span className="text-gray-400 font-light">+973</span>
                    <ChevronDown size={12} className="text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full border border-[#E03A3E] rounded-r px-3 py-2 bg-white focus:outline-none focus:ring-1 focus:ring-[#E03A3E] text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Purpose Selection Section */}
            <div className="mb-6">
              <div className="flex flex-col gap-1 mb-3">
                <h3 className="text-xs text-gray-500 font-medium tracking-wide uppercase">Enquiries routed by purpose</h3>
                <p className="text-[11px] text-gray-400">
                  Select the route that most closely matches your enquiry and the office will direct it to the relevant division.
                </p>
              </div>

              {/* Selection Grid (Cards only show red border when selected) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* General Card */}
                <div
                  onClick={() => setEnquiryPurpose('general')}
                  className={`border rounded p-3 cursor-pointer transition-all flex flex-col justify-between min-h-[130px] ${
                    enquiryPurpose === 'general' ? 'border-[#E03A3E] bg-red-50/20' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Mail className="text-[#E03A3E]" size={18} strokeWidth={1.5} />
                  <div className="mt-2">
                    <h4 className="text-xs font-semibold text-gray-900 mb-0.5">General enquiries</h4>
                    <p className="text-[10px] leading-tight text-gray-500">
                      Corporate Information, Media requests, & General Communication for the Group Office
                    </p>
                  </div>
                </div>

                {/* Partnerships Card */}
                <div
                  onClick={() => setEnquiryPurpose('partnerships')}
                  className={`border rounded p-3 cursor-pointer transition-all flex flex-col justify-between min-h-[130px] ${
                    enquiryPurpose === 'partnerships' ? 'border-[#E03A3E] bg-red-50/20' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Building2 className="text-[#E03A3E]" size={18} strokeWidth={1.5} />
                  <div className="mt-2">
                    <h4 className="text-xs font-semibold text-gray-900 mb-0.5">Partnerships</h4>
                    <p className="text-[10px] leading-tight text-gray-500">
                      Introductions for strategic collaborations, suppliers relationships, and operating-companies opportunities
                    </p>
                  </div>
                </div>

                {/* Projects Card */}
                <div
                  onClick={() => setEnquiryPurpose('projects')}
                  className={`border rounded p-3 cursor-pointer transition-all flex flex-col justify-between min-h-[130px] ${
                    enquiryPurpose === 'projects' ? 'border-[#E03A3E] bg-red-50/20' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Compass className="text-[#E03A3E]" size={18} strokeWidth={1.5} />
                  <div className="mt-2">
                    <h4 className="text-xs font-semibold text-gray-900 mb-0.5">Projects Introductions</h4>
                    <p className="text-[10px] leading-tight text-gray-500">
                      Early-stage project discussions, Technical hand offs, and requests for division-level coordination.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Message Textarea with Red Outline */}
            <div className="flex flex-col mb-3">
              <label className="text-xs text-gray-500 mb-1 font-medium">Message*</label>
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Message (350 characters max)"
                  rows={4}
                  className="w-full border border-[#E03A3E] rounded px-3 py-2 bg-white focus:outline-none focus:ring-1 focus:ring-[#E03A3E] resize-none placeholder-gray-400 text-xs"
                  required
                />
                <span className="absolute bottom-2 right-2 text-[9px] text-gray-400">
                  {formData.message.length}/350
                </span>
              </div>
            </div>

            {/* Disclaimers */}
            <div className="space-y-0.5 mb-6">
              <p className="text-[11px] text-gray-400">Please do not transmit sensitive or technical information via this form.</p>
              <p className="text-[11px] text-gray-400">
                By submitting this form, you agree to the processing of your personal data in accordance with our{' '}
                <a href="#" className="underline hover:text-gray-600">privacy policy</a>.
              </p>
            </div>
          </div>

          {/* Submit Button with Red Outline */}
          <button
            type="submit"
            className="self-start px-6 py-2.5 border border-[#E03A3E] rounded bg-white text-gray-900 font-medium text-xs hover:bg-[#E03A3E] hover:text-white focus:outline-none transition-all"
          >
            Submit Now
          </button>
        </form>

        {/* RIGHT COLUMN: Info Panel with Red Outlined Structural Sub-blocks */}
        <div className="md:col-span-4 bg-gray-50/50 p-6 flex flex-col justify-between space-y-6">
          
          {/* Top Decorative Graphic Component */}
          <div className="flex justify-end border border-[#E03A3E] p-2 rounded bg-white self-end">
            <Mail className="text-[#E03A3E]" size={16} strokeWidth={1.5} />
          </div>

          {/* Information Content Blocks wrapped in red outlines */}
          <div className="space-y-6 my-auto">
            
            {/* Business Hours Segment */}
            <div className="border border-[#E03A3E] rounded p-4 bg-white">
              <div className="flex items-center justify-between border-b border-gray-100 pb-1.5 mb-3">
                <span className="text-[11px] text-gray-500 font-medium tracking-wider uppercase">Business Hours</span>
                <Clock className="text-[#E03A3E]" size={16} strokeWidth={1.5} />
              </div>
              <MoveDownRight className="text-gray-400 mb-2" size={14} />
              <div className="text-xs space-y-1 text-gray-800 font-medium">
                <p><span className="font-semibold text-black">Sat. - Wed.</span> 8am to 5pm</p>
                <p><span className="font-semibold text-black">Thu.</span> 8am to 11am</p>
                <p className="text-gray-400 font-normal"><span className="font-semibold text-gray-400">Fri.</span> Closed</p>
              </div>
            </div>

            {/* Postal Address Segment */}
            <div className="border border-[#E03A3E] rounded p-4 bg-white">
              <div className="flex items-center justify-between border-b border-gray-100 pb-1.5 mb-3">
                <span className="text-[11px] text-gray-500 font-medium tracking-wider uppercase">Postal Address</span>
                <MapPin className="text-[#E03A3E]" size={16} strokeWidth={1.5} />
              </div>
              <MoveDownRight className="text-gray-400 mb-2" size={14} />
              <div className="text-xs font-semibold text-black space-y-0.5 tracking-wide uppercase leading-relaxed">
                <p>YBAK TOWER,</p>
                <p className="font-normal text-gray-700 normal-case">Level 14, Entrance No. 143-144</p>
                <p className="font-normal text-gray-700 normal-case">Road 1703, Block 317.</p>
                <p>Diplomatic Area, Kingdom of Bahrain.</p>
              </div>
            </div>

          </div>

          {/* Micro structural bottom alignment line */}
          <div className="border-t border-[#E03A3E] pt-2 text-[10px] text-gray-400 text-right hidden md:block">
            Cinqo Secure Core v2.1
          </div>
        </div>

      </div>
    </div>
  );
}