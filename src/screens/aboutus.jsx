import React from "react";
import Aboutushero from "../components/aboutus/hero";
import Ourteams from "../components/aboutus/ourteams";
import Footer from "../constant/footer";

const Aboutus = () => {
  return (
    <div className="w-full bg-[#fbfbfb] font-['Poppins'] text-[#1a1a1a] selection:bg-teal-100">
      
      {/* 1. HERO SECTION */}
      <Aboutushero />

      {/* 2. THE JOURNEY - CLEAN & SUBTLE */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/2">
            <span className="text-[#00D1C1] font-bold tracking-[0.2em] uppercase text-[10px] mb-3 block">Our Story</span>
            <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4 text-gray-900">
              Defined by <span className="text-[#00D1C1]">silence.</span>
            </h2>
            <div className="w-12 h-0.5 bg-[#00D1C1] mb-6"></div>
            <p className="text-gray-500 italic text-md leading-relaxed">
              "Simplicity is the ultimate sophistication in mindfulness."
            </p>
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              SOHAM was built to be the antidote to modern noise. We focus on the pure essence of breath and clarity.
            </p>
            <p className="text-gray-600 text-base leading-relaxed">
              We don't teach you how to escape life; we teach you how to embrace it with a calm, centered heart.
            </p>
          </div>
        </div>
      </section>

      {/* 3. BENTO CARDS - MEDIUM FONT */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Focus Card */}
          <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-3 tracking-tight">
              100% Focused on <span className="text-[#00D1C1]">You.</span>
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              No advertisements. No distractions. No tracking. Just a sacred space for your personal growth and mental well-being.
            </p>
          </div>

          {/* Peaceful Environment Filled Card */}
          <div className="bg-[#f3f4f6] p-10 rounded-[2rem] border border-gray-100 flex flex-col justify-center relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-3 tracking-tight text-gray-800">Peaceful Environment</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Our tools are designed to feel like a digital sanctuary. We use soft tones, minimal interfaces, and natural soundscapes to help you descend into a state of deep relaxation instantly.
              </p>
            </div>
            {/* Subtle background glow */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#00D1C1] opacity-5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* 4. LIVE LOCATION */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold tracking-tight">Visit Our Sanctuary</h2>
              <p className="text-gray-400 text-xs uppercase tracking-widest mt-1">Kathmandu, Nepal</p>
            </div>
            <button className="text-[#00D1C1] font-semibold text-sm hover:underline">
              Get Directions →
            </button>
          </div>

          <div className="w-full h-[400px] rounded-[2.5rem] overflow-hidden shadow-sm border-4 border-white grayscale hover:grayscale-0 transition-all duration-700">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.362215984405!2d85.3216856!3d27.7010434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1907b1d9c497%3A0x6ec0c5504e9c7333!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* 5. TEAM SECTION */}
      <Ourteams />

      {/* 6. FOOTER */}
      <Footer />
    </div>
  );
};

export default Aboutus;