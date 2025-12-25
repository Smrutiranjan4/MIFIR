import Link from 'next/link';

export default function StakeholdersLanding() {
  const stakeholders = [
    {
      title: 'Students',
      emoji: '🎓',
      description: 'Discover institutions that prioritize your long-term growth and future-readiness.',
      link: '/stakeholders/students',
      color: 'from-blue-500 to-blue-600',
      benefits: [
        'Choose based on educational quality',
        'Look beyond placement statistics',
        'Find your best fit institution'
      ]
    },
    {
      title: 'Institutions',
      emoji: '🏛️',
      description: 'Participate in a framework that rewards genuine excellence and continuous improvement.',
      link: '/stakeholders/institutions',
      color: 'from-green-500 to-green-600',
      benefits: [
        'Evidence-based evaluation',
        'Fair and transparent process',
        'Improvement roadmap included'
      ]
    },
    {
      title: 'University Leaders',
      emoji: '🧑‍💼',
      description: 'Strategic insights for governance, policy alignment, and institutional transformation.',
      link: '/stakeholders/leaders',
      color: 'from-purple-500 to-purple-600',
      benefits: [
        'Strategic planning tools',
        'Governance benchmarks',
        'Quality improvement metrics'
      ]
    },
    {
      title: 'Employers & Policymakers',
      emoji: '🏭',
      description: 'Identify graduates with real competencies and skills beyond traditional resumes.',
      link: '/stakeholders/employers',
      color: 'from-amber-500 to-amber-600',
      benefits: [
        'Real competency indicators',
        'Future-ready skills assessment',
        'Policy-making insights'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              MIFIR for Every Stakeholder
            </h1>
            <p className="text-xl text-purple-100 leading-relaxed">
              Whether you're a student, educator, administrator, or policy maker, MIFIR provides tailored insights for your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Stakeholder Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stakeholders.map((stakeholder, index) => (
              <Link 
                key={index}
                href={stakeholder.link}
                className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              >
                <div className={`bg-gradient-to-r ${stakeholder.color} h-2`}></div>
                
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${stakeholder.color} rounded-2xl text-4xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all`}>
                      {stakeholder.emoji}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                    {stakeholder.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {stakeholder.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {stakeholder.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center text-blue-900 font-semibold group-hover:translate-x-2 transition-transform">
                    <span>Learn More</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Common Questions */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Common Questions</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How is MIFIR different from other rankings?</h3>
              <p className="text-gray-700">
                MIFIR measures process and culture, not just inputs and outputs. We focus on integrity, pedagogy, and long-term impact rather than easily gamed metrics like publication counts or placement rates.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Who can benefit from MIFIR?</h3>
              <p className="text-gray-700">
                Students making educational choices, institutions seeking genuine improvement, administrators planning strategy, and policymakers shaping higher education policy all benefit from MIFIR's evidence-based insights.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Is MIFIR commercially influenced?</h3>
              <p className="text-gray-700">
                Absolutely not. Zero tolerance for paid influence. Rankings cannot be purchased, sponsored, or manipulated through consulting fees. We are a non-profit initiative committed to educational excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Explore MIFIR</h2>
          <p className="text-lg text-gray-300 mb-8">
            Dive deeper into our methodology, rankings, and resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/framework" className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              View Framework
            </Link>
            <Link href="/rankings" className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              See Rankings
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
