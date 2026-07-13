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
    <div className="min-h-screen text-[#1A1A1A] font-sans border border-black" style={{ backgroundColor: '#F9F6F0' }}>
      <div className="w-full flex flex-col lg:flex-row min-h-screen">
        
        {/* LEFT COLUMN: Contact Form */}
        <form onSubmit={handleSubmit} className="flex-1 py-10 pl-4 sm:pl-8 lg:pl-16 pr-8 pb-8 lg:pb-0">
          
          <h1 className="text-lg sm:text-xl leading-[1.2] font-normal text-[#1A1A1A] mb-6">
            You can contact Cinqo via our secure form or through the contact details provided opposite.
          </h1>

          {/* Name Inputs Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col">
              <label className="text-xs text-gray-700 mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full border-2 border-[#E03A3E] bg-white h-10 px-3 focus:outline-none rounded-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xs text-gray-700 mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full border-2 border-[#E03A3E] bg-white h-10 px-3 focus:outline-none rounded-none"
              />
            </div>
          </div>

          {/* Email & Phone Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="flex flex-col">
              <label className="text-xs text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border-2 border-[#E03A3E] bg-white h-10 px-3 focus:outline-none rounded-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xs text-gray-700 mb-1">Phone Number</label>
              <div className="flex border-2 border-[#E03A3E] bg-white h-10">
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
          <div className="mb-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3">
              <h3 className="text-xs text-gray-700">Enquiries routed by purpose</h3>
              <p className="text-xs text-gray-500 sm:max-w-[50%] sm:text-right">
                Select the route that most closely matches your enquiry <br />and the office will direct it to the relevant division.
              </p>
            </div>

            {/* Selection Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {/* General Card */}
              <div
                onClick={() => setEnquiryPurpose('general')}
                className={`relative border-2 ${enquiryPurpose === 'general' ? 'border-[#E03A3E]' : 'border-gray-300'} bg-white p-3 cursor-pointer min-h-[110px] rounded-none`}
              >
                <Mail className="absolute top-[36px] right-[36px] text-[#E03A3E]" size={18} strokeWidth={1.5} />
                <h4 className="text-[11px] font-bold text-[#1A1A1A] pr-10 mb-1">General enquiries</h4>
                <p className="text-[11px] text-gray-500 leading-relaxed pr-10">
                  Corporate Information, Media requests, & General Communication for the Group Office
                </p>
              </div>

              {/* Partnerships Card */}
              <div
                onClick={() => setEnquiryPurpose('partnerships')}
                className={`relative border-2 ${enquiryPurpose === 'partnerships' ? 'border-[#E03A3E]' : 'border-gray-300'} bg-white p-3 cursor-pointer min-h-[110px] rounded-none`}
              >
                <Building2 className="absolute top-[36px] right-[36px] text-[#E03A3E]" size={18} strokeWidth={1.5} />
                <h4 className="text-[11px] font-bold text-[#1A1A1A] pr-10 mb-1">Partnerships</h4>
                <p className="text-[11px] text-gray-500 leading-relaxed pr-10">
                  Introductions for strategic collaborations, suppliers relationships, and operating-companies opportunities
                </p>
              </div>

              {/* Projects Card */}
              <div
                onClick={() => setEnquiryPurpose('projects')}
                className={`relative border-2 ${enquiryPurpose === 'projects' ? 'border-[#E03A3E]' : 'border-gray-300'} bg-white p-3 cursor-pointer min-h-[110px] rounded-none`}
              >
                <Compass className="absolute top-[36px] right-[36px] text-[#E03A3E]" size={18} strokeWidth={1.5} />
                <h4 className="text-[11px] font-bold text-[#1A1A1A] pr-10 mb-1">Projects Introductions</h4>
                <p className="text-[11px] text-gray-500 leading-relaxed pr-10">
                  Early-stage project discussions, Technical hand offs, and requests for division-level coordination.
                </p>
              </div>
            </div>
          </div>

          {/* Message Textarea */}
          <div className="flex flex-col mb-3">
            <label className="text-xs text-gray-700 mb-1">Message*</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Message (350 characters max)"
              rows={3}
              className="w-full border-2 border-[#E03A3E] bg-white p-3 focus:outline-none resize-none placeholder-gray-500 text-xs rounded-none"
              required
            />
          </div>

          {/* Disclaimers */}
          <div className="space-y-1 mb-5">
            <p className="text-xs text-gray-600">Please do not transmit sensitive or technical information via this form.</p>
            <p className="text-xs text-gray-600">
              By submitting this form, you agree to the processing of your personal data in accordance with our privacy policy
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="px-8 py-2 border-2 border-[#E03A3E] bg-white text-[#1A1A1A] font-medium text-sm hover:bg-[#F9F6F0] focus:outline-none transition-colors rounded-none"
          >
            Submit Now
          </button>
        </form>

        {/* RIGHT COLUMN: Info Panel */}
        <div className="lg:w-[34%] w-full border-t lg:border-t-0 lg:border-l border-black flex flex-col">
          
          {/* Top Cell */}
          <div className="border-t-0 pt-5 pr-5 pb-5 w-full flex-1 relative">
            <Mail className="absolute top-[36px] right-[36px] text-[#E03A3E]" size={16} strokeWidth={1.5} />
            <h4 className="text-[11px] font-medium text-gray-600 pl-6">RFP Responses and Qualification Submissions</h4>
            <div className="absolute bottom-[36px] left-[24px] text-left">
              <ArrowDownRight className="text-gray-800 mb-1" size={21} strokeWidth={1.5} />
              <div className="text-[21px] leading-[1] text-[#1A1A1A] font-medium">
                <p>info@cinqo-me.com</p>
              </div>
            </div>
          </div>

          {/* Business Hours Segment */}
          <div className="border-t border-black pt-5 pr-5 pb-5 w-full flex-1 relative">
            <Clock className="absolute top-[36px] right-[36px] text-[#E03A3E]" size={16} strokeWidth={1.5} />
            <h4 className="text-[11px] font-medium text-gray-600 pl-6">Business Hours</h4>
            <div className="absolute bottom-[36px] left-[24px] text-left">
              <ArrowDownRight className="text-gray-800 mb-1" size={21} strokeWidth={1.5} />
              <div className="text-[21px] leading-[1] text-[#1A1A1A] font-medium">
                <p>Sat. - Wed. 8am to 5pm</p>
                <p>Thu. 8am to 11am</p>
                <p>Fri. Closed</p>
              </div>
            </div>
          </div>

          {/* Postal Address Segment */}
          <div className="border-t border-black pt-5 pr-5 pb-5 w-full flex-1 relative">
            <Clock className="absolute top-[36px] right-[36px] text-[#E03A3E]" size={16} strokeWidth={1.5} />
            <h4 className="text-[11px] font-medium text-gray-600 pl-6">Postal Address:</h4>
            <div className="absolute bottom-[36px] left-[24px] text-left">
              <ArrowDownRight className="text-gray-800 mb-1" size={21} strokeWidth={1.5} />
              <div className="text-[21px] leading-[1] text-[#1A1A1A] font-medium">
                <p>YBAK TOWER,</p>
                <p>Level 14, Entrance No. 143-144</p>
                <p>Road 1703, Block 317.</p>
                <p>Diplomatic Area, Kingdom of<br/>Bahrain.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}