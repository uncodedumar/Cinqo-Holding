"use client";

import React, { useState, useRef, useEffect } from 'react';

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

const ArrowDownRight = (p: { className?: string; size?: number; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={p.size ?? 24} height={p.size ?? 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={p.strokeWidth ?? 2} strokeLinecap="round" strokeLinejoin="round" className={p.className}>
    <path d="M7 7l10 10" />
    <path d="M17 7v10H7" />
  </svg>
);

type EnquiryType = 'general' | 'partnerships' | 'projects';

const countryCodes = [
  { code: 'AF', label: 'AF', dial: '+93' }, { code: 'AL', label: 'AL', dial: '+355' },
  { code: 'DZ', label: 'DZ', dial: '+213' }, { code: 'AD', label: 'AD', dial: '+376' },
  { code: 'AO', label: 'AO', dial: '+244' }, { code: 'AG', label: 'AG', dial: '+1-268' },
  { code: 'AR', label: 'AR', dial: '+54' }, { code: 'AM', label: 'AM', dial: '+374' },
  { code: 'AU', label: 'AU', dial: '+61' }, { code: 'AT', label: 'AT', dial: '+43' },
  { code: 'AZ', label: 'AZ', dial: '+994' }, { code: 'BS', label: 'BS', dial: '+1-242' },
  { code: 'BH', label: 'BH', dial: '+973' }, { code: 'BD', label: 'BD', dial: '+880' },
  { code: 'BB', label: 'BB', dial: '+1-246' }, { code: 'BY', label: 'BY', dial: '+375' },
  { code: 'BE', label: 'BE', dial: '+32' }, { code: 'BZ', label: 'BZ', dial: '+501' },
  { code: 'BJ', label: 'BJ', dial: '+229' }, { code: 'BT', label: 'BT', dial: '+975' },
  { code: 'BO', label: 'BO', dial: '+591' }, { code: 'BA', label: 'BA', dial: '+387' },
  { code: 'BW', label: 'BW', dial: '+267' }, { code: 'BR', label: 'BR', dial: '+55' },
  { code: 'BN', label: 'BN', dial: '+673' }, { code: 'BG', label: 'BG', dial: '+359' },
  { code: 'BF', label: 'BF', dial: '+226' }, { code: 'BI', label: 'BI', dial: '+257' },
  { code: 'KH', label: 'KH', dial: '+855' }, { code: 'CM', label: 'CM', dial: '+237' },
  { code: 'CA', label: 'CA', dial: '+1' }, { code: 'CV', label: 'CV', dial: '+238' },
  { code: 'CF', label: 'CF', dial: '+236' }, { code: 'TD', label: 'TD', dial: '+235' },
  { code: 'CL', label: 'CL', dial: '+56' }, { code: 'CN', label: 'CN', dial: '+86' },
  { code: 'CO', label: 'CO', dial: '+57' }, { code: 'KM', label: 'KM', dial: '+269' },
  { code: 'CG', label: 'CG', dial: '+242' }, { code: 'CR', label: 'CR', dial: '+506' },
  { code: 'CI', label: 'CI', dial: '+225' }, { code: 'HR', label: 'HR', dial: '+385' },
  { code: 'CU', label: 'CU', dial: '+53' }, { code: 'CY', label: 'CY', dial: '+357' },
  { code: 'CZ', label: 'CZ', dial: '+420' }, { code: 'DK', label: 'DK', dial: '+45' },
  { code: 'DJ', label: 'DJ', dial: '+253' }, { code: 'DM', label: 'DM', dial: '+1-767' },
  { code: 'DO', label: 'DO', dial: '+1-809' }, { code: 'EC', label: 'EC', dial: '+593' },
  { code: 'EG', label: 'EG', dial: '+20' }, { code: 'SV', label: 'SV', dial: '+503' },
  { code: 'GQ', label: 'GQ', dial: '+240' }, { code: 'ER', label: 'ER', dial: '+291' },
  { code: 'EE', label: 'EE', dial: '+372' }, { code: 'SZ', label: 'SZ', dial: '+268' },
  { code: 'ET', label: 'ET', dial: '+251' }, { code: 'FJ', label: 'FJ', dial: '+679' },
  { code: 'FI', label: 'FI', dial: '+358' }, { code: 'FR', label: 'FR', dial: '+33' },
  { code: 'GA', label: 'GA', dial: '+241' }, { code: 'GM', label: 'GM', dial: '+220' },
  { code: 'GE', label: 'GE', dial: '+995' }, { code: 'DE', label: 'DE', dial: '+49' },
  { code: 'GH', label: 'GH', dial: '+233' }, { code: 'GR', label: 'GR', dial: '+30' },
  { code: 'GD', label: 'GD', dial: '+1-473' }, { code: 'GT', label: 'GT', dial: '+502' },
  { code: 'GN', label: 'GN', dial: '+224' }, { code: 'GW', label: 'GW', dial: '+245' },
  { code: 'GY', label: 'GY', dial: '+592' }, { code: 'HT', label: 'HT', dial: '+509' },
  { code: 'HN', label: 'HN', dial: '+504' }, { code: 'HK', label: 'HK', dial: '+852' },
  { code: 'HU', label: 'HU', dial: '+36' }, { code: 'IS', label: 'IS', dial: '+354' },
  { code: 'IN', label: 'IN', dial: '+91' }, { code: 'ID', label: 'ID', dial: '+62' },
  { code: 'IR', label: 'IR', dial: '+98' }, { code: 'IQ', label: 'IQ', dial: '+964' },
  { code: 'IE', label: 'IE', dial: '+353' }, { code: 'IL', label: 'IL', dial: '+972' },
  { code: 'IT', label: 'IT', dial: '+39' }, { code: 'JM', label: 'JM', dial: '+1-876' },
  { code: 'JP', label: 'JP', dial: '+81' }, { code: 'JO', label: 'JO', dial: '+962' },
  { code: 'KZ', label: 'KZ', dial: '+7' }, { code: 'KE', label: 'KE', dial: '+254' },
  { code: 'KI', label: 'KI', dial: '+686' }, { code: 'KP', label: 'KP', dial: '+850' },
  { code: 'KR', label: 'KR', dial: '+82' }, { code: 'KW', label: 'KW', dial: '+965' },
  { code: 'KG', label: 'KG', dial: '+996' }, { code: 'LA', label: 'LA', dial: '+856' },
  { code: 'LV', label: 'LV', dial: '+371' }, { code: 'LB', label: 'LB', dial: '+961' },
  { code: 'LS', label: 'LS', dial: '+266' }, { code: 'LR', label: 'LR', dial: '+231' },
  { code: 'LY', label: 'LY', dial: '+218' }, { code: 'LI', label: 'LI', dial: '+423' },
  { code: 'LT', label: 'LT', dial: '+370' }, { code: 'LU', label: 'LU', dial: '+352' },
  { code: 'MG', label: 'MG', dial: '+261' }, { code: 'MW', label: 'MW', dial: '+265' },
  { code: 'MY', label: 'MY', dial: '+60' }, { code: 'MV', label: 'MV', dial: '+960' },
  { code: 'ML', label: 'ML', dial: '+223' }, { code: 'MT', label: 'MT', dial: '+356' },
  { code: 'MH', label: 'MH', dial: '+692' }, { code: 'MR', label: 'MR', dial: '+222' },
  { code: 'MU', label: 'MU', dial: '+230' }, { code: 'MX', label: 'MX', dial: '+52' },
  { code: 'FM', label: 'FM', dial: '+691' }, { code: 'MD', label: 'MD', dial: '+373' },
  { code: 'MC', label: 'MC', dial: '+377' }, { code: 'MN', label: 'MN', dial: '+976' },
  { code: 'ME', label: 'ME', dial: '+382' }, { code: 'MA', label: 'MA', dial: '+212' },
  { code: 'MZ', label: 'MZ', dial: '+258' }, { code: 'MM', label: 'MM', dial: '+95' },
  { code: 'NA', label: 'NA', dial: '+264' }, { code: 'NR', label: 'NR', dial: '+674' },
  { code: 'NP', label: 'NP', dial: '+977' }, { code: 'NL', label: 'NL', dial: '+31' },
  { code: 'NZ', label: 'NZ', dial: '+64' }, { code: 'NI', label: 'NI', dial: '+505' },
  { code: 'NE', label: 'NE', dial: '+227' }, { code: 'NG', label: 'NG', dial: '+234' },
  { code: 'NO', label: 'NO', dial: '+47' }, { code: 'OM', label: 'OM', dial: '+968' },
  { code: 'PK', label: 'PK', dial: '+92' }, { code: 'PW', label: 'PW', dial: '+680' },
  { code: 'PS', label: 'PS', dial: '+970' }, { code: 'PA', label: 'PA', dial: '+507' },
  { code: 'PG', label: 'PG', dial: '+675' }, { code: 'PY', label: 'PY', dial: '+595' },
  { code: 'PE', label: 'PE', dial: '+51' }, { code: 'PH', label: 'PH', dial: '+63' },
  { code: 'PL', label: 'PL', dial: '+48' }, { code: 'PT', label: 'PT', dial: '+351' },
  { code: 'QA', label: 'QA', dial: '+974' }, { code: 'RO', label: 'RO', dial: '+40' },
  { code: 'RU', label: 'RU', dial: '+7' }, { code: 'RW', label: 'RW', dial: '+250' },
  { code: 'KN', label: 'KN', dial: '+1-869' }, { code: 'LC', label: 'LC', dial: '+1-758' },
  { code: 'VC', label: 'VC', dial: '+1-784' }, { code: 'WS', label: 'WS', dial: '+685' },
  { code: 'SM', label: 'SM', dial: '+378' }, { code: 'ST', label: 'ST', dial: '+239' },
  { code: 'SA', label: 'SA', dial: '+966' }, { code: 'SN', label: 'SN', dial: '+221' },
  { code: 'RS', label: 'RS', dial: '+381' }, { code: 'SC', label: 'SC', dial: '+248' },
  { code: 'SL', label: 'SL', dial: '+232' }, { code: 'SG', label: 'SG', dial: '+65' },
  { code: 'SK', label: 'SK', dial: '+421' }, { code: 'SI', label: 'SI', dial: '+386' },
  { code: 'SB', label: 'SB', dial: '+677' }, { code: 'SO', label: 'SO', dial: '+252' },
  { code: 'ZA', label: 'ZA', dial: '+27' }, { code: 'SS', label: 'SS', dial: '+211' },
  { code: 'ES', label: 'ES', dial: '+34' }, { code: 'LK', label: 'LK', dial: '+94' },
  { code: 'SD', label: 'SD', dial: '+249' }, { code: 'SR', label: 'SR', dial: '+597' },
  { code: 'SE', label: 'SE', dial: '+46' }, { code: 'CH', label: 'CH', dial: '+41' },
  { code: 'SY', label: 'SY', dial: '+963' }, { code: 'TW', label: 'TW', dial: '+886' },
  { code: 'TJ', label: 'TJ', dial: '+992' }, { code: 'TZ', label: 'TZ', dial: '+255' },
  { code: 'TH', label: 'TH', dial: '+66' }, { code: 'TL', label: 'TL', dial: '+670' },
  { code: 'TG', label: 'TG', dial: '+228' }, { code: 'TO', label: 'TO', dial: '+676' },
  { code: 'TT', label: 'TT', dial: '+1-868' }, { code: 'TN', label: 'TN', dial: '+216' },
  { code: 'TR', label: 'TR', dial: '+90' }, { code: 'TM', label: 'TM', dial: '+993' },
  { code: 'TV', label: 'TV', dial: '+688' }, { code: 'UG', label: 'UG', dial: '+256' },
  { code: 'UA', label: 'UA', dial: '+380' }, { code: 'AE', label: 'AE', dial: '+971' },
  { code: 'GB', label: 'GB', dial: '+44' }, { code: 'US', label: 'US', dial: '+1' },
  { code: 'UY', label: 'UY', dial: '+598' }, { code: 'UZ', label: 'UZ', dial: '+998' },
  { code: 'VU', label: 'VU', dial: '+678' }, { code: 'VA', label: 'VA', dial: '+379' },
  { code: 'VE', label: 'VE', dial: '+58' }, { code: 'VN', label: 'VN', dial: '+84' },
  { code: 'YE', label: 'YE', dial: '+967' }, { code: 'ZM', label: 'ZM', dial: '+260' },
  { code: 'ZW', label: 'ZW', dial: '+263' }
];

export default function ContactForm() {
  const [enquiryPurpose, setEnquiryPurpose] = useState<EnquiryType>('general');
  const [countryCode, setCountryCode] = useState('BH');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
        setSearch('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (!dropdownOpen) setSearch('');
  }, [dropdownOpen]);

  const handleDropdownKeyDown = (e: React.KeyboardEvent) => {
    if (!dropdownOpen) return;
    if (e.key === 'Backspace') { setSearch(s => s.slice(0, -1)); return; }
    if (e.key === 'Escape') { setDropdownOpen(false); return; }
    if (e.key.length === 1) {
      setSearch(s => s + e.key);
    }
  };

  const filteredCountries = countryCodes.filter(c =>
    c.dial.includes(search) || c.code.toLowerCase().includes(search.toLowerCase()) || c.label.toLowerCase().includes(search.toLowerCase())
  );

  const selectedCountry = countryCodes.find(c => c.code === countryCode);

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
    <div className="min-h-screen text-[#1A1A1A] font-sans" style={{ backgroundColor: 'rgba(217, 217, 217, 0.19)' }}>
      <div className="w-full flex flex-col lg:flex-row min-h-screen">
        
        {/* LEFT COLUMN: Contact Form */}
        <form onSubmit={handleSubmit} className="flex-1 min-h-[820px] pt-3 pl-4 pr-4 pb-8 lg:pb-0">
          
          <h1 className="text-[30px] leading-[1.2] font-normal text-[#1A1A1A] mb-6">
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
              <div className="flex border-2 border-[#E03A3E] bg-white h-10 relative" ref={dropdownRef}>
                <div
                  tabIndex={0}
                  onClick={() => { setDropdownOpen(!dropdownOpen); }}
                  onKeyDown={handleDropdownKeyDown}
                  className="flex items-center gap-1 border-r-2 border-[#E03A3E] px-3 bg-white text-sm text-gray-700 cursor-pointer select-none shrink-0 focus:outline-none"
                >
                  <span className={`fi fi-${selectedCountry?.code?.toLowerCase() ?? ''}`}></span>
                  <span className="font-semibold">{selectedCountry?.dial}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="m6 9 6 6 6-6" /></svg>
                </div>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-0 w-[240px] bg-white border border-gray-300 shadow-lg z-50 max-h-[200px] flex flex-col rounded-none">
                    <ul className="overflow-y-auto flex-1">
                      {filteredCountries.map(c => (
                        <li
                          key={c.code}
                          onClick={() => { setCountryCode(c.code); setDropdownOpen(false); }}
                          className={`flex items-center gap-2 px-3 py-1.5 text-xs cursor-pointer hover:bg-gray-100 ${c.code === countryCode ? 'bg-gray-50' : ''}`}
                        >
                          <span className={`fi fi-${c.code.toLowerCase()}`}></span>
                          <span className="font-medium">{c.label}</span>
                          <span className="text-gray-500 ml-auto">{c.dial}</span>
                        </li>
                      ))}
                      {filteredCountries.length === 0 && (
                        <li className="px-3 py-2 text-xs text-gray-400">No results</li>
                      )}
                    </ul>
                  </div>
                )}
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
          <div className="mb-[18px]">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3">
              <h3 className="text-xs text-gray-700">Enquiries routed by purpose</h3>
              <p className="text-xs text-gray-500 sm:max-w-[50%] sm:text-right">
                Select the route that most closely matches your enquiry <br />and the office will direct it to the relevant division.
              </p>
            </div>

            {/* Selection Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[17px] items-end">
              {/* General Card */}
              <div
                onClick={() => setEnquiryPurpose('general')}
                className={`border-2 ${enquiryPurpose === 'general' ? 'border-[#E03A3E]' : 'border-gray-300'} bg-white px-3 pt-[19px] pb-[16px] cursor-pointer min-h-[150px] rounded-none flex flex-col`}
              >
                <Mail className="text-[#E03A3E] mb-4" size={18} strokeWidth={1.5} />
                <h4 className="text-[12px] font-bold text-[#1A1A1A] mb-1">General enquiries</h4>
                <p className="text-[10px] text-gray-500 leading-relaxed ">
                  Corporate Information, Media requests, & General Communication for the Group Office
                </p>
              </div>

              {/* Partnerships Card */}
              <div
                onClick={() => setEnquiryPurpose('partnerships')}
                className={`border-2 ${enquiryPurpose === 'partnerships' ? 'border-[#E03A3E]' : 'border-gray-300'} bg-white px-3 pt-[19px] pb-[16px] cursor-pointer min-h-[150px] rounded-none flex flex-col`}
              >
                <Building2 className="text-[#E03A3E] mb-4" size={18} strokeWidth={1.5} />
                <h4 className="text-[12px] font-bold text-[#1A1A1A] mb-1">Partnerships</h4>
                <p className="text-[10px] text-gray-500 leading-relaxed ">
                  Introductions for strategic collaborations, suppliers relationships, and operating-companies opportunities
                </p>
              </div>

              {/* Projects Card */}
              <div
                onClick={() => setEnquiryPurpose('projects')}
                className={`border-2 ${enquiryPurpose === 'projects' ? 'border-[#E03A3E]' : 'border-gray-300'} bg-white px-3 pt-[19px] pb-[16px] cursor-pointer min-h-[150px] rounded-none flex flex-col`}
              >
                <Compass className="text-[#E03A3E] mb-4" size={18} strokeWidth={1.5} />
                <h4 className="text-[12px] font-bold text-[#1A1A1A] mb-1">Projects Introductions</h4>
                <p className="text-[10px] text-gray-500 leading-relaxed">
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
            className="px-8 py-2 border-2 border-[#E03A3E] bg-white text-[#1A1A1A] font-medium text-sm cursor-pointer hover:opacity-80 active:opacity-50 focus:outline-none rounded-none"
          >
            Submit Now
          </button>
        </form>

        {/* RIGHT COLUMN: Info Panel */}
        <div className="lg:w-[34%] w-full border-t lg:border-t-0 lg:border-l border-black flex flex-col">
          
          {/* Top Cell */}
            <div className="border-t-0 pt-4 pr-5 pb-4 w-full flex-1 relative">
            <Mail className="absolute top-4 right-3 text-[#E03A3E]" size={16} strokeWidth={1.5} />
            <h4 className="text-[11px] font-medium text-gray-600 pl-3">RFP Responses and Qualification Submissions</h4>
            <div className="absolute bottom-4 left-3 text-left">
               <ArrowDownRight className="text-gray-800 mb-1" size={21} strokeWidth={1.5} />
               <div className="text-[21px] leading-[1] text-[#1A1A1A] font-medium">
                 <p>info@cinqo-me.com</p>
               </div>
             </div>
          </div>

          {/* Business Hours Segment */}
          <div className="border-t border-black pt-4 pr-5 pb-4 w-full flex-1 relative">
            <Clock className="absolute top-4 right-3 text-[#E03A3E]" size={16} strokeWidth={1.5} />
            <h4 className="text-[11px] font-medium text-gray-600 pl-3">Business Hours</h4>
            <div className="absolute bottom-4 left-3 text-left">
               <ArrowDownRight className="text-gray-800 mb-1" size={21} strokeWidth={1.5} />
               <div className="text-[21px] leading-[1] text-[#1A1A1A] font-medium">
                 <p>Sat. - Wed. 8am to 5pm</p>
                 <p>Thu. 8am to 11am</p>
                 <p>Fri. Closed</p>
               </div>
             </div>
          </div>

          {/* Postal Address Segment */}
          <div className="border-t border-black pt-4 pr-5 pb-4 w-full flex-1 relative">
            <Clock className="absolute top-4 right-3 text-[#E03A3E]" size={16} strokeWidth={1.5} />
            <h4 className="text-[11px] font-medium text-gray-600 pl-3">Postal Address:</h4>
            <div className="absolute bottom-4 left-3 text-left">
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