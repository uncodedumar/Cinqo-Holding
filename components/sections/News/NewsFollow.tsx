import React from 'react';
import { FaInstagram, FaFacebook, FaXTwitter, FaLinkedin } from 'react-icons/fa6';

const FollowUsBanner: React.FC = () => {
  return (
    <section className="w-full max-w-[98%] mx-auto p-4">
      {/* 
        Container matching the light gray background, thin border, 
        and bottom-aligned responsive flexbox layout. 
      */}
      <div className="bg-[#f2f2f2] border border-[#d1d1d1] rounded-sm px-6 py-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
        
        {/* Left Side: Text Content Area */}
        <div className="max-w-[45rem]">
          <h2 className="text-2xl md:text-[1.4rem] font-bold text-black mb-4 tracking-tight leading-snug">
            Follow us to stay updated with the latest news from our Group
          </h2>
          <p className="text-[#333333] text-[0.7rem] leading-relaxed">
            Be the first to know about our newest developments, industry insights, and corporate milestones. Follow our social media pages to join the conversation and see how our Group is shaping the future.
          </p>
        </div>

        {/* Right Side: Social Icons Area */}
        <div className="flex items-center gap-6 pb-1">
          <a 
            href="#" 
            className="text-gray-800 hover:text-black hover:scale-110 transition-all duration-200"
            aria-label="Instagram"
          >
            <FaInstagram size={28} />
          </a>
          <a 
            href="#" 
            className="text-gray-800 hover:text-black hover:scale-110 transition-all duration-200"
            aria-label="Facebook"
          >
            <FaFacebook size={28} />
          </a>
          <a 
            href="#" 
            className="text-gray-800 hover:text-black hover:scale-110 transition-all duration-200"
            aria-label="X (formerly Twitter)"
          >
            <FaXTwitter size={28} />
          </a>
          <a 
            href="#" 
            className="text-gray-800 hover:text-black hover:scale-110 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={28} />
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default FollowUsBanner;