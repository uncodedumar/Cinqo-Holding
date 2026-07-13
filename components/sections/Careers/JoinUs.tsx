"use client";

import React, { useState } from 'react';
const Mail = ({ size = 24, strokeWidth = 1.5, className = "" }: { size?: number; strokeWidth?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const Building2 = ({ size = 24, strokeWidth = 1.5, className = "" }: { size?: number; strokeWidth?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>
  </svg>
);

const Compass = ({ size = 24, strokeWidth = 1.5, className = "" }: { size?: number; strokeWidth?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"/><path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12Z"/>
  </svg>
);

const Clock = ({ size = 24, strokeWidth = 1.5, className = "" }: { size?: number; strokeWidth?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);

const MapPin = ({ size = 24, strokeWidth = 1.5, className = "" }: { size?: number; strokeWidth?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);

const ChevronDown = ({ size = 24, strokeWidth = 1.5, className = "" }: { size?: number; strokeWidth?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m6 9 6 6 6-6"/>
  </svg>
);

const MoveDownRight = ({ size = 24, strokeWidth = 1.5, className = "" }: { size?: number; strokeWidth?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M13 17H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v8"/><path d="m19 13-5 5 5 5"/>
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
    if (name === 'message' && value.length > 350) return; // 350 char limit
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', { ...formData, enquiryPurpose });
  };

  return (
    <div className="w-full h-[800px] bg-white text-gray-900 font-sans antialiased flex justify-center items-center p-4 md:p-12">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 border border-gray-100 shadow-sm rounded-lg overflow-hidden">
        
        {/* LEFT COLUMN: Contact Form */}
        <form onSubmit={handleSubmit} className="lg:col-span-8 p-6 md:p-12 bg-white flex flex-col justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-normal text-gray-800 leading-tight mb-10 max-w-2xl">
              You can contact <span className="font-semibold text-black">Cinqo</span> via our secure form or through the contact details provided opposite.
            </h1>

            {/* Name Inputs Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col">
                <label className="text-xs text-gray-500 mb-2 font-medium">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full border border-[#E03A3E] rounded px-4 py-3 bg-white focus:outline-none transition-colors"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-xs text-gray-500 mb-2 font-medium">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full border border-[#E03A3E] rounded px-4 py-3 bg-white focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Email & Phone Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex flex-col">
                <label className="text-xs text-gray-500 mb-2 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border border-[#E03A3E] rounded px-4 py-3 bg-white focus:outline-none transition-colors"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-xs text-gray-500 mb-2 font-medium">Phone Number</label>
                <div className="relative flex">
                  <div className="flex items-center gap-1 border border-r-0 border-[#E03A3E] rounded-l px-3 bg-gray-50 text-sm text-gray-700 cursor-pointer select-none">
                    <span>BH</span>
                    <span className="text-gray-400 font-light">+973</span>
                    <ChevronDown size={14} className="text-gray-400 ml-1" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full border border-[#E03A3E] rounded-r px-4 py-3 bg-white focus:outline-none transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Purpose Selection Section */}
            <div className="mb-8">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-4">
                <h3 className="text-xs text-gray-500 font-medium tracking-wide uppercase">Enquiries routed by purpose</h3>
                <p className="text-xs text-gray-400 max-w-md md:text-right">
                  Select the route that most closely matches your enquiry and the office will direct it to the relevant division.
                </p>
              </div>

              {/* Selection Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* General Card */}
                <div
                  onClick={() => setEnquiryPurpose('general')}
                  className={`border rounded p-5 cursor-pointer transition-all flex flex-col justify-between min-h-[160px] ${
                    enquiryPurpose === 'general' ? 'border-[#E03A3E] bg-red-50/10' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Mail className="text-[#E03A3E]" size={20} strokeWidth={1.5} />
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">General enquiries</h4>
                    <p className="text-[11px] leading-relaxed text-gray-500">
                      Corporate Information, Media requests, & General Communication for the Group Office
                    </p>
                  </div>
                </div>

                {/* Partnerships Card */}
                <div
                  onClick={() => setEnquiryPurpose('partnerships')}
                  className={`border rounded p-5 cursor-pointer transition-all flex flex-col justify-between min-h-[160px] ${
                    enquiryPurpose === 'partnerships' ? 'border-[#E03A3E] bg-red-50/10' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Building2 className="text-[#E03A3E]" size={20} strokeWidth={1.5} />
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">Partnerships</h4>
                    <p className="text-[11px] leading-relaxed text-gray-500">
                      Introductions for strategic collaborations, suppliers relationships, and operating-companies opportunities
                    </p>
                  </div>
                </div>

                {/* Projects Card */}
                <div
                  onClick={() => setEnquiryPurpose('projects')}
                  className={`border rounded p-5 cursor-pointer transition-all flex flex-col justify-between min-h-[160px] ${
                    enquiryPurpose === 'projects' ? 'border-[#E03A3E] bg-red-50/10' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Compass className="text-[#E03A3E]" size={20} strokeWidth={1.5} />
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">Projects Introductions</h4>
                    <p className="text-[11px] leading-relaxed text-gray-500">
                      Early-stage project discussions, Technical hand offs, and requests for division-level coordination.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Message Textarea */}
            <div className="flex flex-col mb-4">
              <label className="text-xs text-gray-500 mb-2 font-medium">Message*</label>
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Message (350 characters max)"
                  rows={4}
                  className="w-full border border-[#E03A3E] rounded px-4 py-3 bg-white focus:outline-none transition-colors resize-none placeholder-gray-400 text-sm"
                  required
                />
                <span className="absolute bottom-3 right-3 text-[10px] text-gray-400">
                  {formData.message.length}/350
                </span>
              </div>
            </div>

            {/* Disclaimers */}
            <div className="space-y-1 mb-8">
              <p className="text-xs text-gray-400">Please do not transmit sensitive or technical information via this form.</p>
              <p className="text-xs text-gray-400">
                By submitting this form, you agree to the processing of your personal data in accordance with our{' '}
                <a href="#" className="underline hover:text-gray-600">privacy policy</a>.
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="self-start px-8 py-3 border border-[#E03A3E] rounded bg-white text-gray-900 font-medium text-sm hover:bg-[#E03A3E] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#E03A3E] focus:ring-offset-2 transition-all"
          >
            Submit Now
          </button>
        </form>

        {/* RIGHT COLUMN: Info Panel */}
        <div className="lg:col-span-4 bg-gray-50 border-t lg:border-t-0 lg:border-l border-gray-200 p-6 md:p-12 flex flex-col justify-between whitespace-pre-line">
          
          {/* Top Decorative Mail Indicator */}
          <div className="flex justify-end mb-12 lg:mb-0">
            <Mail className="text-[#E03A3E]" size={20} strokeWidth={1.5} />
          </div>

          {/* Information Content Blocks */}
          <div className="space-y-12 my-auto">
            
            {/* Business Hours Segment */}
            <div>
              <div className="flex items-center justify-between border-b border-gray-200 pb-2 mb-4">
                <span className="text-xs text-gray-500 font-medium tracking-wider uppercase">Business Hours</span>
                <Clock className="text-[#E03A3E]" size={18} strokeWidth={1.5} />
              </div>
              <MoveDownRight className="text-gray-400 mb-3" size={16} />
              <div className="text-sm space-y-1 text-gray-800 font-medium">
                <p><span className="font-semibold text-black">Sat. - Wed.</span> 8am to 5pm</p>
                <p><span className="font-semibold text-black">Thu.</span> 8am to 11am</p>
                <p className="text-gray-400 font-normal"><span className="font-semibold text-gray-500">Fri.</span> Closed</p>
              </div>
            </div>

            {/* Postal Address Segment */}
            <div>
              <div className="flex items-center justify-between border-b border-gray-200 pb-2 mb-4">
                <span className="text-xs text-gray-500 font-medium tracking-wider uppercase">Postal Address</span>
                <MapPin className="text-[#E03A3E]" size={18} strokeWidth={1.5} />
              </div>
              <MoveDownRight className="text-gray-400 mb-3" size={16} />
              <div className="text-sm font-semibold text-black space-y-1 tracking-wide uppercase leading-relaxed">
                <p>YBAK TOWER,</p>
                <p className="font-normal text-gray-800">Level 14, Entrance No. 143-144</p>
                <p className="font-normal text-gray-800">Road 1703, Block 317.</p>
                <p>Diplomatic Area, Kingdom of Bahrain.</p>
              </div>
            </div>

          </div>

          {/* Bottom spacer to align nicely with the left column's layout */}
          <div className="hidden lg:block h-10" />
        </div>

      </div>
    </div>
  );
}