'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HeroSection() {
  const circleTexts = [
    { 
      title: 'Evidence-Based', 
      subtitle: 'Future-Oriented Rankings',
      icon: (
        <svg className="w-24 h-24 text-[#FDB813] drop-shadow-lg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6 2C5.45 2 5 2.45 5 3V5H3C2.45 5 2 5.45 2 6V8C2 10.21 3.79 12 6 12C6.26 12 6.5 11.96 6.74 11.9C7.5 13.55 9.12 14.71 11 14.96V18H9C7.9 18 7 18.9 7 20V21C7 21.55 7.45 22 8 22H16C16.55 22 17 21.55 17 21V20C17 18.9 16.1 18 15 18H13V14.96C14.88 14.71 16.5 13.55 17.26 11.9C17.5 11.96 17.74 12 18 12C20.21 12 22 10.21 22 8V6C22 5.45 21.55 5 21 5H19V3C19 2.45 18.55 2 18 2H6ZM7 5H17V9C17 10.66 15.66 12 14 12H10C8.34 12 7 10.66 7 9V5ZM4 7H5V9C5 9.34 5.04 9.67 5.09 10C4.47 9.87 4 9.44 4 9V7ZM19 7H20V9C20 9.44 19.53 9.87 18.91 10C18.96 9.67 19 9.34 19 9V7Z" />
        </svg>
      )
    },
    { 
      title: 'Quality-Focused', 
      subtitle: 'Transparent Evaluation',
      icon: (
        <svg className="w-24 h-24 text-[#FDB813] drop-shadow-lg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1ZM10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z" />
        </svg>
      )
    },
    { 
      title: 'Data-Driven', 
      subtitle: 'Institutional Excellence',
      icon: (
        <svg className="w-24 h-24 text-[#FDB813] drop-shadow-lg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16,11.78L20.24,4.45L21.97,5.45L16.74,14.5L10.23,10.75L5.46,19H22V21H2V3H4V17.54L9.5,8L16,11.78Z" />
        </svg>
      )
    },
    { 
      title: 'Future-Ready', 
      subtitle: 'Educational Leadership',
      icon: (
        <svg className="w-24 h-24 text-[#FDB813] drop-shadow-lg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.13 22.19L11.5 18.36C13.07 17.78 14.54 17 15.9 16.09L13.13 22.19M5.64 12.5L1.81 10.87L7.91 8.1C7 9.46 6.22 10.93 5.64 12.5M19.22 4C19.5 4 19.75 4 19.96 4.05C20.13 5.44 19.94 8.3 16.66 11.58C14.96 13.29 12.93 14.6 10.65 15.47L8.5 13.37C9.42 11.06 10.73 9.03 12.42 7.34C15.18 4.58 17.64 4 19.22 4M19.22 2C17.24 2 14.24 2.69 11 5.93C8.81 8.12 7.5 10.53 6.65 12.64C6.37 13.39 6.56 14.21 7.11 14.77L9.24 16.89C9.79 17.45 10.61 17.63 11.36 17.35C13.5 16.53 15.88 15.19 18.07 13C23.73 7.34 21.61 2.39 21.61 2.39S20.7 2 19.22 2M14.54 9.46C13.76 8.68 13.76 7.41 14.54 6.63S16.59 5.85 17.37 6.63C18.14 7.41 18.15 8.68 17.37 9.46C16.59 10.24 15.32 10.24 14.54 9.46M8.88 16.53L7.47 15.12L8.88 16.53M6.24 22L9.88 18.36C9.54 18.27 9.21 18.12 8.91 17.91L4.83 22H6.24M2 22H3.41L8.18 17.24L6.76 15.83L2 20.59V22M2 19.17L6.09 15.09C5.88 14.79 5.73 14.47 5.64 14.12L2 17.76V19.17Z" />
        </svg>
      )
    },
    { 
      title: 'Innovation-First', 
      subtitle: 'Academic Integrity',
      icon: (
        <svg className="w-24 h-24 text-[#FDB813] drop-shadow-lg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,2A7,7 0 0,1 19,9C19,11.38 17.81,13.47 16,14.74V17A1,1 0 0,1 15,18H9A1,1 0 0,1 8,17V14.74C6.19,13.47 5,11.38 5,9A7,7 0 0,1 12,2M9,21V20H15V21A1,1 0 0,1 14,22H10A1,1 0 0,1 9,21M12,4A5,5 0 0,0 7,9C7,11.05 8.23,12.81 10,13.58V16H14V13.58C15.77,12.81 17,11.05 17,9A5,5 0 0,0 12,4Z" />
        </svg>
      )
    }
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Now Open for 2025 Evaluation!';

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 50,
      easing: 'ease-out-cubic'
    });
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    
    const typewriterInterval = setInterval(() => {
      if (!isDeleting && currentIndex <= fullText.length) {
        // Typing forward
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else if (!isDeleting && currentIndex > fullText.length) {
        // Pause at end before deleting
        setTimeout(() => {
          isDeleting = true;
        }, 2000); // Pause for 2 seconds
      } else if (isDeleting && currentIndex > 0) {
        // Deleting backward
        currentIndex--;
        setDisplayedText(fullText.slice(0, currentIndex));
      } else if (isDeleting && currentIndex === 0) {
        // Reset to start typing again
        isDeleting = false;
        setTimeout(() => {
          currentIndex = 0;
        }, 500); // Brief pause before retyping
      }
    }, isDeleting ? 50 : 80); // Faster when deleting

    return () => clearInterval(typewriterInterval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % circleTexts.length);
        setIsVisible(true);
      }, 500); // Wait for fade out before changing text
      
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, [circleTexts.length]);

  return (
    <section className="relative overflow-hidden bg-white" style={{ minHeight: '600px' }}>
      {/* Left Section - Light Gray Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-white"></div>

      {/* Right Section - Blue Background */}
      <div className="absolute top-0 right-0 w-[45%] h-full bg-[#1e3a8a]"></div>

      {/* Yellow Wave Divider */}
      <div className="absolute top-0 right-[45%] h-full w-32 overflow-visible">
        <svg
          viewBox="0 0 100 600"
          preserveAspectRatio="none"
          className="absolute top-0 left-0 h-full w-full"
          style={{ transform: 'translateX(0%)' }}
        >
          <path
            d="M 0 0 Q 50 50 0 100 T 0 200 T 0 300 T 0 400 T 0 500 T 0 600 L 100 600 L 100 0 Z"
            fill="#FDB813"
          />
        </svg>
      </div>

      {/* Decorative Elements on Blue Side */}
      <div className="absolute top-12 right-[8%] w-8 h-8 border-2 border-white/30 rotate-45"></div>
      <div className="absolute top-24 right-[15%] w-3 h-3 bg-white rounded-full"></div>
      <div className="absolute top-[35%] right-[5%] w-12 h-12 border border-white/20 rounded-full"></div>
      <div className="absolute bottom-[30%] right-[10%] w-6 h-6 border-2 border-yellow-400/50 rounded-full"></div>

      {/* Wavy line */}
      <svg className="absolute top-16 right-[20%] w-16 h-8" viewBox="0 0 60 20">
        <path d="M 0 10 Q 15 0, 30 10 T 60 10" stroke="white" strokeWidth="2" fill="none" opacity="0.3" />
      </svg>

      {/* Chevron pattern */}
      <div className="absolute top-[40%] right-[8%] space-y-1">
        <div className="flex space-x-1">
          <div className="w-2 h-2 border-r-2 border-b-2 border-white/40 transform rotate-45"></div>
          <div className="w-2 h-2 border-r-2 border-b-2 border-white/40 transform rotate-45"></div>
          <div className="w-2 h-2 border-r-2 border-b-2 border-white/40 transform rotate-45"></div>
        </div>
      </div>

      {/* X pattern bottom right */}
      <div className="absolute bottom-16 right-[6%] grid grid-cols-5 gap-1">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="w-2 h-2 text-white/30 text-xs">×</div>
        ))}
      </div>

      {/* Triple chevron left */}
      <div className="absolute top-[30%] right-[38%]">
        <svg width="30" height="20" viewBox="0 0 30 20">
          <path d="M 5 10 L 0 15 L 5 20" stroke="#1e3a8a" strokeWidth="2" fill="none" />
          <path d="M 15 10 L 10 15 L 15 20" stroke="#1e3a8a" strokeWidth="2" fill="none" />
          <path d="M 25 10 L 20 15 L 25 20" stroke="#1e3a8a" strokeWidth="2" fill="none" />
        </svg>
      </div>

      {/* Small triangle */}
      <div className="absolute top-16 right-[35%] w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[14px] border-b-[#1e3a8a]"></div>

      <div className="relative mx-auto px-6 lg:px-12 py-12 md:py-16" style={{ maxWidth: '1400px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Content Section */}
          <div className="lg:col-span-6 relative z-10 space-y-6" data-aos="fade-right" data-aos-duration="1000">
            {/* Main Heading */}
            <div data-aos="fade-up" data-aos-delay="200">
              <h1 className="text-2xl md:text-3xl lg:text-6xl font-black text-[#002147] leading-tight mb-4" style={{ letterSpacing: '-0.02em' }}>
                QUALITY THAT PREPARES FOR 
                <br />
                TOMORROW
              </h1>

              {/* Yellow Badge */}
              <div className="inline-block bg-[#FDB813] px-6 py-3 mt-2">
                <span className="text-[#002147] font-bold text-lg md:text-xl">
                  {displayedText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
            </div>

            {/* Description Text */}
            <p className="text-[#002147] text-base md:text-lg italic max-w-md leading-relaxed" data-aos="fade-up" data-aos-delay="400">
              "Measuring what institutions are committing resources to and building systems for the future."
            </p>

            {/* CTA Button and Contact Info */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4" data-aos="fade-up" data-aos-delay="600">
              <Link
                href="/framework"
                className="inline-flex items-center px-8 py-3 bg-[#002147] text-white font-bold text-sm uppercase tracking-wide rounded-full hover:bg-[#003d82] transition-colors shadow-lg"
              >
                VIEW FRAMEWORK
              </Link>

              <div className="flex flex-col sm:flex-row gap-4 text-sm text-[#002147]">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="font-medium">Contact Us</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">www.mifir.org</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end items-center py-8" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
            {/* Large Circular Frame */}
            <div className="relative w-[460px] h-[460px] flex items-center justify-center" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000">
              
              {/* Outer golden/bronze accent ring - positioned to create depth */}
              <div className="absolute -bottom-8 -right-8 w-[450px] h-[450px] rounded-full border-[18px] border-[#8B7355] opacity-50"></div>

              {/* White circular container - perfectly centered */}
              <div className="relative w-[430px] h-[430px] bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-full shadow-2xl flex items-center justify-center overflow-hidden border-[12px] border-white">
                
                {/* Inner background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-white to-white rounded-full"></div>

                {/* Content container - perfectly centered */}
                <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-8 pt-12 pb-0">
                  
                  {/* Badge Icon Container with Ranking Symbol */}
                  <div className="mb-10">
                    <div className="w-[180px] h-[180px] bg-gradient-to-br from-[#002147] via-[#003366] to-[#1e3a8a] rounded-[32px] flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform">
                      {/* Dynamic Icon */}
                      <div 
                        className="transition-opacity duration-500"
                        style={{ opacity: isVisible ? 1 : 0 }}
                      >
                        {circleTexts[currentTextIndex].icon}
                      </div>
                    </div>
                  </div>

                  {/* Text content - centered */}
                  <div className="text-center space-y-2 mb-8">
                    <h3 
                      className="text-[32px] font-black text-[#002147] tracking-tight leading-tight transition-opacity duration-500"
                      style={{ opacity: isVisible ? 1 : 0 }}
                    >
                      {circleTexts[currentTextIndex].title}
                    </h3>
                    <p 
                      className="text-[15px] text-gray-600 font-medium tracking-wide transition-opacity duration-500"
                      style={{ opacity: isVisible ? 1 : 0 }}
                    >
                      {circleTexts[currentTextIndex].subtitle}
                    </p>
                  </div>

                </div>

                {/* Turquoise/Teal curved bar at bottom with rising wave effect */}
                <div className="absolute bottom-0 left-0 right-0 h-[100px] overflow-hidden rounded-b-full">
                  {/* Base gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00CED1] via-[#20B2AA] to-[#48D1CC] rounded-b-full shadow-inner">
                    {/* Subtle shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/30"></div>
                  </div>
                  
                  {/* Rising wave layers */}
                  <div className="absolute inset-0">
                    {/* Bottom wave layer - darkest */}
                    <div className="absolute bottom-0 left-0 right-0 h-[40px] bg-gradient-to-t from-[#1a9999]/30 to-transparent"></div>
                    
                    {/* Middle wave layer */}
                    <div className="absolute bottom-0 left-0 right-0">
                      <svg className="w-full h-24" viewBox="0 0 1200 100" preserveAspectRatio="none">
                        <path 
                          d="M0,50 Q150,30 300,50 T600,50 T900,50 T1200,50 L1200,100 L0,100 Z" 
                          fill="rgba(255,255,255,0.15)"
                          className="animate-wave"
                        />
                      </svg>
                    </div>
                    
                    {/* Top wave layer */}
                    <div className="absolute bottom-0 left-0 right-0">
                      <svg className="w-full h-20" viewBox="0 0 1200 80" preserveAspectRatio="none">
                        <path 
                          d="M0,40 Q200,20 400,40 T800,40 T1200,40 L1200,80 L0,80 Z" 
                          fill="rgba(255,255,255,0.25)"
                          className="animate-wave-delayed"
                        />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Ranking increase arrows/indicators */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                    <svg className="w-4 h-4 text-white/40 animate-bounce-subtle" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 4l-8 8h5v8h6v-8h5z"/>
                    </svg>
                    <svg className="w-4 h-4 text-white/50 animate-bounce-subtle" style={{animationDelay: '0.2s'}} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 4l-8 8h5v8h6v-8h5z"/>
                    </svg>
                    <svg className="w-4 h-4 text-white/40 animate-bounce-subtle" style={{animationDelay: '0.4s'}} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 4l-8 8h5v8h6v-8h5z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Decorative dots on circle border - white and yellow */}
              <div className="absolute top-[60px] right-[40px] w-[14px] h-[14px] bg-white rounded-full shadow-lg"></div>
              <div className="absolute top-[85px] right-[15px] w-[16px] h-[16px] bg-white rounded-full shadow-lg"></div>
              <div className="absolute top-[115px] right-[5px] w-[18px] h-[18px] bg-white rounded-full shadow-lg"></div>
              <div className="absolute bottom-[140px] right-[-5px] w-[22px] h-[22px] bg-[#FDB813] rounded-full shadow-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
