'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function StakeholdersSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  const stakeholders = [
    {
      title: "Students & Families",
      description: "Make informed decisions based on real outcomes, not marketing promises.",
      icon: "🎓",
      link: "/stakeholders/students"
    },
    {
      title: "Institutions",
      description: "Participate in transparent evaluation and showcase genuine impact.",
      icon: "🏛️",
      link: "/stakeholders/institutions"
    },
    {
      title: "Education Leaders",
      description: "Access data-driven insights to drive meaningful policy reforms.",
      icon: "👔",
      link: "/stakeholders/leaders"
    },
    {
      title: "Employers",
      description: "Identify institutions that truly prepare graduates for the future.",
      icon: "💼",
      link: "/stakeholders/employers"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1360px' }}>
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            For Every Stakeholder
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            MIFIR serves the entire education ecosystem with tailored insights and actionable data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stakeholders.map((stakeholder, index) => (
            <Link
              key={index}
              href={stakeholder.link}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all transform hover:-translate-y-2 border border-white/20"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-5xl mb-4">{stakeholder.icon}</div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-300 transition-colors">
                {stakeholder.title}
              </h3>
              <p className="text-blue-100 leading-relaxed">
                {stakeholder.description}
              </p>
              <div className="mt-6 flex items-center text-blue-300 font-semibold">
                Learn More
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
