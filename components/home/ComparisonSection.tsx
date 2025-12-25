import Link from 'next/link';

export default function ComparisonSection() {
  const comparisons = [
    {
      aspect: 'What It Measures',
      traditional: 'Historical reputation & legacy',
      mifir: 'Future capability & readiness',
      icon: '🎯'
    },
    {
      aspect: 'Evidence Base',
      traditional: 'Self-reported data & surveys',
      mifir: 'Audited budgets & documents',
      icon: '📋'
    },
    {
      aspect: 'Innovation',
      traditional: 'Penalizes risk & failure',
      mifir: 'Rewards experimentation',
      icon: '🚀'
    },
    {
      aspect: 'Research Quality',
      traditional: 'Publication volume',
      mifir: 'Societal relevance & integrity',
      icon: '🔬'
    },
    {
      aspect: 'Governance',
      traditional: 'Ignored or superficial',
      mifir: 'Core evaluation domain',
      icon: '⚖️'
    },
    {
      aspect: 'Gaming Resistance',
      traditional: 'Easily manipulated',
      mifir: 'Evidence-verification required',
      icon: '🔒'
    },
    {
      aspect: 'Student Outcomes',
      traditional: 'Short-term placement rates',
      mifir: 'Lifelong adaptability & ethics',
      icon: '🌱'
    },
    {
      aspect: 'Ethical Leadership',
      traditional: 'Not assessed',
      mifir: 'Central to evaluation',
      icon: '✨'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1360px' }}>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Not Another Ranking System
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            MIFIR vs. Traditional Rankings
          </h2>
          <p className="text-lg text-gray-600">
            A fundamental paradigm shift in how we evaluate institutional quality, capacity, and readiness for the future.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl shadow-xl overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-3 gap-4 p-6 md:p-8 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
            <div className="text-sm md:text-base font-semibold"></div>
            <div className="text-center">
              <div className="text-sm uppercase tracking-wide opacity-75 mb-1">Traditional</div>
              <div className="text-lg md:text-xl font-bold">Rankings</div>
            </div>
            <div className="text-center">
              <div className="text-sm uppercase tracking-wide opacity-75 mb-1">MIFIR</div>
              <div className="text-lg md:text-xl font-bold">Approach</div>
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="divide-y divide-gray-200">
            {comparisons.map((item, index) => (
              <div 
                key={index}
                className="grid grid-cols-3 gap-4 p-4 md:p-6 hover:bg-white transition-colors group"
              >
                {/* Aspect */}
                <div className="flex items-center space-x-3">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <span className="text-sm md:text-base font-semibold text-gray-900">
                    {item.aspect}
                  </span>
                </div>

                {/* Traditional */}
                <div className="flex items-center justify-center text-center">
                  <div className="inline-flex items-center space-x-2 px-3 py-2 bg-red-50 text-red-700 rounded-lg text-xs md:text-sm">
                    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span>{item.traditional}</span>
                  </div>
                </div>

                {/* MIFIR */}
                <div className="flex items-center justify-center text-center">
                  <div className="inline-flex items-center space-x-2 px-3 py-2 bg-green-50 text-green-700 rounded-lg text-xs md:text-sm font-medium">
                    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{item.mifir}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link 
            href="/about"
            className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-blue-900 rounded-lg hover:bg-blue-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            See MIFIR Philosophy
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
