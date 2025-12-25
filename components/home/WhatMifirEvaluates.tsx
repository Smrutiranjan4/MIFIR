import Link from 'next/link';

export default function WhatMifirEvaluates() {
  const domains = [
    {
      title: 'Governance & Future-Readiness',
      description: 'Does the institution have decision-making structures capable of responding to disruption? Are budgets aligned with strategic priorities?',
      metrics: ['Board composition & independence', 'Scenario planning processes', 'Budget transparency & allocation'],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: 'from-blue-600 to-blue-700'
    },
    {
      title: 'Curriculum & Pedagogical Innovation',
      description: 'Is the institution experimenting with teaching methods? Are students learning to navigate ambiguity and complexity?',
      metrics: ['Interdisciplinary programs', 'Failure documentation', 'Real-world problem integration'],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      color: 'from-green-600 to-green-700'
    },
    {
      title: 'Research, Innovation & IPR',
      description: 'Is research addressing societal challenges? Are there systems for translating ideas into impact?',
      metrics: ['Societal relevance of research', 'Patent activity & licensing', 'Cross-sector collaboration'],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: 'from-purple-600 to-purple-700'
    },
    {
      title: 'Technology & Digital Futures',
      description: 'Is technology integrated into learning, not just infrastructure? Are students prepared for AI, automation, and digital transformation?',
      metrics: ['AI literacy programs', 'Digital pedagogy adoption', 'Data governance policies'],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      color: 'from-indigo-600 to-indigo-700'
    },
    {
      title: 'Faculty Ecosystem & Academic Culture',
      description: 'Does the institution support risk-taking, intellectual curiosity, and continuous learning among faculty?',
      metrics: ['Teaching innovation support', 'Faculty autonomy indicators', 'Collaborative research ecosystems'],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: 'from-amber-600 to-amber-700'
    },
    {
      title: 'Student Future-Readiness',
      description: 'Are students developing adaptability, critical thinking, and ethical reasoning—not just job-ready skills?',
      metrics: ['Meta-cognitive skill development', 'Career pivot capacity', 'Ethical decision-making frameworks'],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      color: 'from-red-600 to-red-700'
    },
    {
      title: 'Societal, Global & Sustainability Impact',
      description: 'Is the institution addressing climate, inequality, and global challenges—beyond symbolic commitments?',
      metrics: ['Carbon neutrality pathways', 'Community engagement depth', 'Global partnerships with impact'],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-teal-600 to-teal-700'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1360px' }}>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What MIFIR Evaluates
          </h2>
          <p className="text-lg text-gray-600">
            Seven core domains that reveal institutional capacity for navigating the next 15 years—not the last 50.
          </p>
        </div>

        {/* Domain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {domains.map((domain, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Header with gradient */}
              <div className={`bg-gradient-to-r ${domain.color} p-6 text-white`}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {domain.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{domain.title}</h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {domain.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                  Example Indicators
                </h4>
                <ul className="space-y-2">
                  {domain.metrics.map((metric, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Important Note */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg max-w-4xl mx-auto">
          <div className="flex items-start">
            <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">MIFIR Measures Action, Not Intent</h4>
              <p className="text-gray-700 leading-relaxed">
                We evaluate <strong>committed resources</strong>, <strong>documented policies</strong>, <strong>implemented systems</strong>, and <strong>measurable outcomes</strong>. Vision statements, aspirational goals, and symbolic committees without evidence of execution receive no credit.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link 
            href="/framework"
            className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-blue-900 rounded-lg hover:bg-blue-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span>View the Complete MIFIR Framework</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
