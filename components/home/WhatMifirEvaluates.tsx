'use client';

import { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function WhatMifirEvaluates() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
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

  const dimensions = [
    {
      title: 'Governance & Future-Readiness',
      icon: '🎯',
      description: 'Strategic planning, resource allocation, and institutional agility under uncertainty',
      metrics: ['Budget transparency', 'Decision-making speed', 'Crisis response systems'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Innovation Depth',
      icon: '💡',
      description: 'Experimentation culture, failure learning, and breakthrough pedagogical approaches',
      metrics: ['Pilot programs', 'Documented failures', 'Cross-disciplinary initiatives'],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Technology Integration',
      icon: '⚡',
      description: 'Embedded learning systems, not showcase tech labs or PR-driven AI announcements',
      metrics: ['Faculty tech adoption', 'Student digital literacy', 'Adaptive learning systems'],
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50'
    },
    {
      title: 'Ethical Leadership',
      icon: '🤝',
      description: 'Commitments backed by action, diversity metrics, and community accountability',
      metrics: ['Policy enforcement', 'Stakeholder engagement', 'Transparency reports'],
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50'
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-24 bg-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
            </svg>
            Four Core Dimensions
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            What MIFIR <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Evaluates</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We measure institutional capability across four critical dimensions—each backed by evidence, not rhetoric.
          </p>
        </div>

        {/* Dimension Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {dimensions.map((dimension, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${dimension.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="800"
            >
              {/* Top gradient bar */}
              <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${dimension.color}`}></div>
              
              {/* Icon */}
              <div className="text-6xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                {dimension.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {dimension.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {dimension.description}
              </p>

              {/* Metrics */}
              <div className="space-y-2">
                <p className="text-sm font-semibold text-gray-600 mb-3">Key Metrics:</p>
                {dimension.metrics.map((metric, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className={`w-5 h-5 text-${dimension.color.split('-')[1]}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{metric}</span>
                  </div>
                ))}
              </div>

              {/* Decorative corner element */}
              <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br ${dimension.color} opacity-10 rounded-tl-full transform group-hover:scale-150 transition-transform duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Want to see the full methodology?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Our framework is transparent, evidence-based, and designed for institutional evolution.
              </p>
              <a
                href="/framework"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Explore the Framework
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
