'use client';

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function WhyMifirExists() {
  const [activeTab, setActiveTab] = useState<'problem' | 'solution'>('problem');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1360px' }}>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up" data-aos-duration="800">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-600"></div>
            <span className="text-blue-600 text-sm font-bold tracking-wider uppercase">Our Mission</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-600"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Why MIFIR Exists
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            A response to systemic failure—and an instrument for institutional reform.
          </p>
        </div>

        {/* Interactive Tab Section */}
        <div className="mb-20" data-aos="fade-up" data-aos-delay="200">
          {/* Tab Buttons */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-gray-100 rounded-full p-1.5 shadow-inner">
              <button
                onClick={() => setActiveTab('problem')}
                className={`px-8 py-3 rounded-full font-bold text-sm transition-all ${
                  activeTab === 'problem'
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                The Problem
              </button>
              <button
                onClick={() => setActiveTab('solution')}
                className={`px-8 py-3 rounded-full font-bold text-sm transition-all ${
                  activeTab === 'solution'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                MIFIR's Response
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="max-w-5xl mx-auto">
            {activeTab === 'problem' && (
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 md:p-12 shadow-xl border border-red-100 animate-fade-in-up">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">The Problem</h3>
                    <p className="text-lg text-gray-700">Traditional rankings incentivize the wrong behaviors</p>
                  </div>
                </div>

                <div className="space-y-5">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Higher education is being measured by systems that prioritize:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { title: 'Wealth and size', subtitle: 'over innovation and agility' },
                      { title: 'Publication volume', subtitle: 'over research integrity' },
                      { title: 'Brand perception', subtitle: 'over governance quality' },
                      { title: 'Historical reputation', subtitle: 'over future-readiness' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-white/60 backdrop-blur-sm rounded-xl p-4 hover:shadow-md transition-shadow">
                        <div className="flex-shrink-0 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mt-0.5">
                          <span className="text-white text-xs font-bold">✕</span>
                        </div>
                        <div>
                          <p className="font-bold text-gray-900">{item.title}</p>
                          <p className="text-sm text-gray-600">{item.subtitle}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-red-600/10 border-l-4 border-red-600 p-6 rounded-r-xl">
                    <p className="text-gray-800 font-medium leading-relaxed">
                      As a result, institutions spend resources on <strong className="text-red-700">cosmetic improvements</strong>—new buildings, PR campaigns, and glossy reports—while neglecting governance reform, pedagogical innovation, and student learning outcomes.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'solution' && (
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 shadow-xl border border-blue-100 animate-fade-in-up">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">MIFIR's Response</h3>
                    <p className="text-lg text-gray-700">Measuring capability to navigate the future</p>
                  </div>
                </div>

                <div className="space-y-5">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    MIFIR measures <strong className="text-blue-700">institutional capability to navigate the future</strong>—a future defined by technological disruption, climate crisis, geopolitical instability, and societal transformation.
                  </p>

                  <div className="space-y-3">
                    {[
                      { title: 'Commitments backed by budgets', subtitle: 'not vision statements' },
                      { title: 'Governance structures', subtitle: 'that enable decision-making under uncertainty' },
                      { title: 'Risk-taking and experimentation', subtitle: 'including documented failures' },
                      { title: 'Technology integration', subtitle: 'in pedagogy, not IT showrooms' },
                      { title: 'Faculty development ecosystems', subtitle: 'not celebrity hires' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-white/60 backdrop-blur-sm rounded-xl p-4 hover:shadow-md transition-shadow group">
                        <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-bold text-gray-900">{item.title}</p>
                          <p className="text-sm text-gray-600">{item.subtitle}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-xl shadow-lg">
                    <p className="text-white font-bold text-lg leading-relaxed">
                      MIFIR is built for institutions preparing for 2030–2040 realities, not those relying on 1950s prestige.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Key Differentiator Cards */}
        <div className="relative">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            What Makes MIFIR <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Fundamentally Different</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                color: 'blue',
                title: 'Evidence-Based',
                description: 'Validated through documents, budgets, policies, and outcomes—not self-reported narratives.',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                icon: '⚡',
                color: 'green',
                title: 'Future-Oriented',
                description: 'Focuses on readiness for 2030+ challenges, not historical performance or legacy metrics.',
                gradient: 'from-emerald-500 to-teal-500'
              },
              {
                icon: '🔄',
                color: 'purple',
                title: 'Reform-Driven',
                description: 'Rewards action and learning, penalizes symbolic gestures and optics without substance.',
                gradient: 'from-purple-500 to-pink-500'
              }
            ].map((item, idx) => (
              <div key={idx} className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} rounded-t-2xl`}></div>
                
                <div className="text-5xl mb-4">{item.icon}</div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>

                <div className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br ${item.gradient} opacity-5 rounded-tl-full transition-opacity group-hover:opacity-10`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
