"use client";
import React, { useState, useRef } from 'react';

interface JoinCinqoProps {
  /** Submission event handler */
  onSubmit?: (data: any) => void;
}

export default function JoinCinqo({
  onSubmit
}: JoinCinqoProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>('');
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+973',
    phoneNumber: '',
    currentLocation: '',
    countryState: '',
    areaOfExpertise: '',
    preferredCompany: '',
    yearsOfExperience: '',
    linkedinProfile: '',
    professionalSummary: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({ ...formData, resumeName: fileName });
    } else {
      console.log('Form Submitted Data:', { ...formData, resumeName: fileName });
    }
  };

  return (
    <div className="flex flex-col lg:flex-row w-full bg-[rgba(0,0,0,0.02)] text-black font-display antialiased gap-4">
      
      {/* LEFT COLUMN: Form Body (White background matching instructions) */}
      <div className="w-full lg:w-[67%] py-12 pr-2.5 flex flex-col justify-center">
        <div className="w-full max-w-[792px] mx-auto">
          
          {/* Header & Subtitle Section */}
          <div className="mb-6 pl-3">
            <h1 className="text-[32px] font-normal leading-[37px] tracking-normal text-black font-ibm-plex mb-2">
              Join Cinqo
            </h1>
            <p className="text-[16px] font-normal leading-[20px] text-black/80 max-w-[799px] font-ibm-plex">
              Interested candidates may submit their profiles submitting your profile for future opportunities across our specialized operating companies
            </p>
          </div>

          {/* Form Element */}
          <form onSubmit={handleFormSubmit} className="space-y-3 text-[10px] mx-4">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-2">
              
              {/* Row 1: First Name & Last Name */}
              <div className="flex flex-col space-y-1.5">
                <label className="text-[10px] font-normal leading-tight text-black/64">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full h-[41px] px-3 bg-white border border-[rgba(251,51,62,0.8)] text-black focus:outline-none transition-all"
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <label className="text-[10px] font-normal leading-tight text-black/64">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full h-[41px] px-3 bg-white border border-[rgba(251,51,62,0.8)] text-black focus:outline-none transition-all"
                />
              </div>

              {/* Row 2: Email & Phone Number */}
              <div className="flex flex-col space-y-1.5">
                <label className="text-[10px] font-normal leading-tight text-black/64">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-[41px] px-3 bg-white border border-[rgba(251,51,62,0.8)] text-black focus:outline-none transition-all"
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <label className="text-[10px] font-normal leading-tight text-black/64">
                  Phone Number
                </label>
                <div className="flex h-[41px] bg-white border border-[rgba(251,51,62,0.8)]">
                  {/* Custom Split Dropdown Area */}
                  <div className="w-[85px] h-full flex items-center justify-between px-2.5 border-r border-[rgba(251,51,62,0.8)] relative bg-transparent">
                    <span className="text-[10px] text-black/64">BH</span>
                    <span className="text-[10px] text-black font-normal">{formData.countryCode}</span>
                    <svg className="w-2.5 h-2.5 text-[#5C5C5C] ml-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    >
                      <option value="+973">+973</option>
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                    </select>
                  </div>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="flex-1 h-full px-3 bg-transparent text-black focus:outline-none"
                  />
                </div>
              </div>

              {/* Row 3: Current Location & Country/State */}
              <div className="flex flex-col space-y-1.5">
                <label className="text-[10px] font-normal leading-tight text-black/64">
                  Current Location / City
                </label>
                <input
                  type="text"
                  name="currentLocation"
                  value={formData.currentLocation}
                  onChange={handleChange}
                  className="w-full h-[41px] px-3 bg-white border border-[rgba(251,51,62,0.8)] text-black focus:outline-none transition-all"
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <label className="text-[10px] font-normal leading-tight text-black/64">
                  Country/State
                </label>
                <input
                  type="text"
                  name="countryState"
                  value={formData.countryState}
                  onChange={handleChange}
                  className="w-full h-[41px] px-3 bg-white border border-[rgba(251,51,62,0.8)] text-black focus:outline-none transition-all"
                />
              </div>

              {/* Row 4: Area of Expertise & Preferred Company / Subsidiary */}
              <div className="flex flex-col space-y-1.5">
                <label className="text-[10px] font-normal leading-tight text-black/64">
                  Area of Expertise
                </label>
                <div className="relative">
                  <select
                    name="areaOfExpertise"
                    value={formData.areaOfExpertise}
                    onChange={handleChange}
                    className="w-full h-[41px] px-3 bg-white border border-[rgba(251,51,62,0.8)] text-black/64 text-[10px] focus:outline-none appearance-none cursor-pointer"
                  >
                    <option value="">(Dropdown Menu)</option>
                    <option value="engineering">Engineering</option>
                    <option value="finance">Finance</option>
                    <option value="operations">Operations & Logistics</option>
                    <option value="technology">Information Technology</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-black/64">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-1.5">
                <label className="text-[10px] font-normal leading-tight text-black/64">
                  Preferred Company / Subsidiary
                </label>
                <div className="relative">
                  <select
                    name="preferredCompany"
                    value={formData.preferredCompany}
                    onChange={handleChange}
                    className="w-full h-[41px] px-3 bg-white border border-[rgba(251,51,62,0.8)] text-black/64 text-[10px] focus:outline-none appearance-none cursor-pointer"
                  >
                    <option value="">(Dropdown Menu)</option>
                    <option value="subsidiary1">Specialized Op Company A</option>
                    <option value="subsidiary2">Specialized Op Company B</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-black/64">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Row 5 & 6 Stack Layout (Years of Experience, Linkedin Stacked on Left vs Upload Box on Right) */}
              <div className="flex flex-col space-y-3">
                
                {/* Years of Experience Dropdown */}
                <div className="flex flex-col space-y-1.5">
                  <label className="text-[10px] font-normal leading-tight text-black/64">
                    Years of Experience
                  </label>
                  <div className="relative">
                    <select
                      name="yearsOfExperience"
                      value={formData.yearsOfExperience}
                      onChange={handleChange}
                      className="w-full h-[41px] px-3 bg-white border border-[rgba(251,51,62,0.8)] text-black/64 text-[10px] focus:outline-none appearance-none cursor-pointer"
                    >
                      <option value="">(Dropdown Menu)</option>
                      <option value="0-2">0 - 2 Years</option>
                      <option value="3-5">3 - 5 Years</option>
                      <option value="6-10">6 - 10 Years</option>
                      <option value="10+">10+ Years</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-black/64">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Linkedin Link Input */}
                <div className="flex flex-col space-y-1.5">
                  <label className="text-[10px] font-normal leading-tight text-black/64">
                    Linkedin Profile Link
                  </label>
                  <input
                    type="url"
                    name="linkedinProfile"
                    value={formData.linkedinProfile}
                    onChange={handleChange}
                    className="w-full h-[41px] px-3 bg-white border border-[rgba(251,51,62,0.8)] text-black focus:outline-none transition-all"
                  />
                </div>

              </div>

              {/* Upload Panel spanning the height of the left elements */}
              <div className="flex flex-col space-y-1.5 justify-end h-full">
                <span className="text-[10px] font-normal leading-tight text-transparent select-none hidden md:block">
                  Upload Filler
                </span>
                <div 
                  onClick={handleUploadClick}
                  className="w-full h-[117px] border border-[rgba(251,51,62,0.8)] bg-white flex flex-col items-center justify-center cursor-pointer hover:bg-neutral-50 transition-colors px-4 text-center relative group"
                >
                  <input 
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept=".pdf,.docx"
                    className="hidden"
                  />
                  
                  {/* Envelope-style Vector SVG in Crimson matching layout */}
                  <svg className="w-7 h-7 text-[#F5333F] mb-1.5 group-hover:scale-105 transition-transform" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                    <rect x="3" y="5" width="18" height="14" rx="1" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                  
                  <span className="text-[12px] font-semibold text-black/64 leading-none mb-1">
                    {fileName || "Resume / CV Upload"}
                  </span>
                  
                  <span className="text-[10px] font-normal text-black/64 leading-tight max-w-[280px]">
                    (File Upload Button — Supported formats: PDF, DOCX. Less than 10 MB)
                  </span>
                </div>
              </div>

              {/* Professional Summary Textarea (Spans full width) */}
              <div className="col-span-1 md:col-span-2 flex flex-col space-y-1.5">
                <label className="text-[10px] font-normal leading-tight text-black/64">
                  Professional Summary
                </label>
                <textarea
                  name="professionalSummary"
                  placeholder="Briefly describe your core capability and how you execute with discipline..."
                  value={formData.professionalSummary}
                  onChange={handleChange}
                  rows={4}
                  className="w-full h-[120px] p-3 bg-white border border-[rgba(251,51,62,0.8)] text-black placeholder-black/64 text-[10px] focus:outline-none transition-all resize-none"
                />
              </div>

            </div>

            {/* Legal Disclaimers */}
            <div className="pt-2 space-y-1">
              <p className="text-[10px] leading-[18px] text-black/64">
                By submitting this form,you agree to the processing of your personal data in accordance with our privacy policy
              </p>
              <p className="text-[10px] leading-[18px] text-black/64">
                By submitting this form,you agree that all information provided is authentic
              </p>
            </div>

            {/* Submit Action Button Block */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-[153px] h-[41px] border border-[rgba(251,51,62,0.8)] bg-transparent text-[#231F20] text-[14px] font-normal tracking-wide flex items-center justify-center hover:opacity-60 active:opacity-40 transition-all focus:outline-none"
              >
                Submit Now
              </button>
            </div>

          </form>
        </div>
      </div>

      {/* RIGHT COLUMN: Image */}
      <div className="w-full lg:w-[29%] relative min-h-[600px] border-l border-neutral-100">
        <img
          src="/images/careers/image.png"
          alt="Careers"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

    </div>
  );
}