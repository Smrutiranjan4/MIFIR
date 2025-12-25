'use client';

import { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function CrisisSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic'
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const crises = [
    {
      title: 'Legacy Metrics Don\'t Predict Future Capability',
      description: 'Historical reputation, alumni wealth, and citation volume tell us nothing about whether an institution can educate for 2035.',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="30" fill="white" fillOpacity="0.2"/>
          <path d="M32 16V32M32 40H32.02" stroke="white" strokeWidth="3" strokeLinecap="round"/>
          <path d="M32 48C40.8366 48 48 40.8366 48 32C48 23.1634 40.8366 16 32 16C23.1634 16 16 23.1634 16 32C16 40.8366 23.1634 48 32 48Z" stroke="white" strokeWidth="3"/>
          <circle cx="32" cy="32" r="4" fill="white" opacity="0.3"/>
        </svg>
      ),
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50'
    },
    {
      title: 'Optics Over Outcomes',
      description: 'Glossy brochures, symbolic committees, and dormant MOUs distract from genuine systemic reform and resource allocation.',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="30" fill="white" fillOpacity="0.2"/>
          <circle cx="32" cy="32" r="8" stroke="white" strokeWidth="3"/>
          <path d="M12 32C14.5 24 22 18 32 18C42 18 49.5 24 52 32C49.5 40 42 46 32 46C22 46 14.5 40 12 32Z" stroke="white" strokeWidth="3"/>
          <circle cx="32" cy="32" r="5" fill="white" opacity="0.5"/>
        </svg>
      ),
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      title: 'Ranking Manipulation as Strategy',
      description: 'Institutions game metrics instead of investing in teaching quality, research integrity, or student support systems.',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="30" fill="white" fillOpacity="0.2"/>
          <path d="M20 44L32 32L40 40L52 20" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M44 20H52V28" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="32" cy="32" r="3" fill="white"/>
          <circle cx="20" cy="44" r="3" fill="white"/>
          <circle cx="40" cy="40" r="3" fill="white"/>
        </svg>
      ),
      color: 'from-amber-500 to-amber-600',
      bgColor: 'bg-amber-50'
    },
    {
      title: 'No Signal for Risk-Taking or Innovation',
      description: 'Current systems penalize experimentation, pedagogical courage, and failure-learning—exactly what the future demands.',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="30" fill="white" fillOpacity="0.2"/>
          <path d="M32 20V32" stroke="white" strokeWidth="3" strokeLinecap="round"/>
          <circle cx="32" cy="38" r="10" stroke="white" strokeWidth="3"/>
          <path d="M26 44L32 50L38 44" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="32" cy="38" r="4" fill="white" opacity="0.5"/>
          <path d="M32 16L36 20L32 24L28 20L32 16Z" fill="white" opacity="0.3"/>
        </svg>
      ),
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50'
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-20 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30 animate-float-delayed"></div>
      </div>

      <div className="relative mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1360px' }}>
        {/* Section Header */}
        <div 
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-bold mb-4 animate-pulse-slow">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            Critical Gap Alert
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Why Traditional Rankings <span className="text-red-600">Fail the Future</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            The global higher-education landscape is measured by systems designed for the 20th century. Students, employers, and policymakers need a new signal—one that reveals institutional capacity for navigating uncertainty.
          </p>
        </div>

        {/* Crisis Cards with Stagger Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {crises.map((crisis, index) => (
            <div 
              key={index}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-3 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="800"
            >
              {/* Animated Gradient Header */}
              <div className={`bg-gradient-to-br ${crisis.color} p-6 text-white relative overflow-hidden`}>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <div className="relative mb-3 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  {crisis.icon}
                </div>
                <h3 className="relative text-lg font-bold leading-tight">
                  {crisis.title}
                </h3>
              </div>

              {/* Content */}
              <div className={`p-6 ${crisis.bgColor} bg-opacity-30`}>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {crisis.description}
                </p>
              </div>

              {/* Animated Accent Bar */}
              <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${crisis.color} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500`}></div>
              
              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${crisis.color} opacity-10 transform rotate-45 translate-x-8 -translate-y-8`}></div>
            </div>
          ))}
        </div>

        {/* Animated Quote Section */}
        <div 
          className={`relative max-w-4xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          data-aos="zoom-in"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 rounded-3xl p-8 md:p-12 text-center shadow-2xl overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                backgroundSize: '30px 30px'
              }}></div>
            </div>
            
            {/* Floating orbs */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 bg-purple-400 rounded-full blur-2xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            <div className="relative z-10">
              <svg className="w-12 h-12 text-blue-300 mx-auto mb-6 opacity-50 animate-bounce-subtle" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-2xl md:text-3xl font-bold text-white mb-6 leading-relaxed">
                Reputation measures the past. <span className="text-yellow-300">MIFIR measures readiness</span> for the future no one can predict.
              </blockquote>
              <p className="text-blue-200 text-base md:text-lg">
                Universities cannot rely on century-old prestige when the world demands adaptability, ethics, and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
       
