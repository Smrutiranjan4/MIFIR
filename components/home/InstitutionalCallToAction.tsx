import Link from 'next/link';

export default function InstitutionalCallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1360px' }}>
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>For Institutional Leaders</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Why Institutions Should Care Now
          </h2>

          {/* Sub-text */}
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            The institutions that survive the next 15 years will not be those with the largest endowments or oldest buildings. They will be those that demonstrate <strong className="text-white">capacity to learn, adapt, and lead</strong> under conditions of radical uncertainty.
          </p>

          {/* Key Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 text-left">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-bold text-white mb-2">Signal Quality to New Stakeholders</h3>
                  <p className="text-gray-300 text-sm">
                    Students, employers, and policymakers are demanding new signals. MIFIR provides credible evidence of institutional capability.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <div>
                  <h3 className="font-bold text-white mb-2">Benchmark Against the Future, Not the Past</h3>
                  <p className="text-gray-300 text-sm">
                    Understand where your institution stands on governance, innovation, and technology—relative to 2035 demands.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <div>
                  <h3 className="font-bold text-white mb-2">Attract Reform-Minded Leaders & Investors</h3>
                  <p className="text-gray-300 text-sm">
                    Faculty, administrators, and philanthropists want institutions demonstrating genuine transformation.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
                <div>
                  <h3 className="font-bold text-white mb-2">Drive Internal Accountability & Reform</h3>
                  <p className="text-gray-300 text-sm">
                    Use MIFIR as a tool for strategic planning, resource allocation, and systemic institutional change.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Important Statement */}
          <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-6 mb-10 backdrop-blur-sm">
            <p className="text-lg text-white leading-relaxed">
              <strong>MIFIR is not for institutions seeking superficial improvements to their ranking position.</strong> It is designed for leadership teams committed to evidence-based reform, long-term thinking, and institutional transformation.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/participation"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-blue-900 bg-white rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Apply for MIFIR Evaluation
            </Link>
            
            <Link 
              href="/framework"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-transparent border-2 border-white rounded-lg hover:bg-white/10 transition-all transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Review the Framework
            </Link>
          </div>

          {/* Footer Note */}
          <p className="text-sm text-gray-400 mt-8">
            Evaluation cycles open quarterly. Early participants shape the framework's evolution.
          </p>
        </div>
      </div>
    </section>
  );
}
