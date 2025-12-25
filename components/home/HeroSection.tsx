import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#002147] via-[#003366] to-[#001a35] overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 animate-pulse-slow" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFD700' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-full opacity-20 blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-[#4169E1] to-[#1E90FF] rounded-full opacity-20 blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-[#9370DB] to-[#8A2BE2] rounded-full opacity-15 blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20" style={{ maxWidth: '1360px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-5">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#002147] px-3 py-1.5 rounded-full text-xs font-bold hover:scale-105 transition-transform duration-300">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>A New Standard in Higher Education Evaluation</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight animate-fade-in-up">
              Measuring What <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] animate-gradient-x relative">
                Truly Matters
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#FFD700] opacity-60" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path d="M0,7 Q50,2 100,7 T200,7" fill="none" stroke="currentColor" strokeWidth="4"/>
                </svg>
              </span> in Higher Education
            </h1>

            {/* Sub-text */}
            <p className="text-base md:text-lg text-gray-200 leading-relaxed animate-fade-in-up animation-delay-200">
              A future-oriented ranking framework focused on <strong className="text-[#FFD700]">intellectual vitality</strong>, <strong className="text-[#FFD700]">pedagogical courage</strong>, <strong className="text-[#FFD700]">integrity</strong>, and <strong className="text-[#FFD700]">long-term impact</strong> — not marketing metrics.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up animation-delay-400">
              <Link 
                href="/framework"
                className="group relative inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-[#002147] bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-lg transition-all transform hover:scale-105 overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#FFA500] to-[#FFD700] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <svg className="w-4 h-4 mr-2 relative z-10 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="relative z-10">Explore the MIFIR Framework</span>
              </Link>
              
              <Link 
                href="/participation"
                className="group relative inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-transparent border-2 border-[#FFD700] rounded-lg hover:bg-[#FFD700] hover:text-[#002147] transition-all transform hover:scale-105 overflow-hidden"
              >
                <span className="absolute inset-0 w-0 h-full bg-[#FFD700] transition-all duration-300 ease-out group-hover:w-full"></span>
                <svg className="w-4 h-4 mr-2 relative z-10 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="relative z-10">Participate as an Institution</span>
              </Link>
            </div>

            <Link 
              href="/stakeholders/students"
              className="inline-flex items-center text-[#FFD700] text-sm font-semibold hover:text-[#FFA500] group animate-fade-in-up animation-delay-600"
            >
              <span>For Students: Why MIFIR Matters</span>
              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Right Visual */}
          <div className="relative animate-fade-in-up animation-delay-800">
            <div className="relative z-10 bg-white rounded-2xl p-8 overflow-hidden shadow-none">
              <div className="relative h-80 overflow-hidden">
                <div className="absolute inset-0 animate-scroll-up space-y-5">
                  <div className="flex items-start space-x-4 group transition-all duration-300">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#002147] to-[#003366] rounded-xl flex items-center justify-center transition-all duration-300">
                      <svg className="w-7 h-7 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#002147] text-base mb-1">Intellectual Vitality</h3>
                      <p className="text-sm text-gray-500">Beyond publication counts</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group transition-all duration-300">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center transition-all duration-300">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#002147] text-base mb-1">Integrity-Driven</h3>
                      <p className="text-sm text-gray-500">Evidence-based assessment</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group transition-all duration-300">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center transition-all duration-300">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#002147] text-base mb-1">Future-Ready</h3>
                      <p className="text-sm text-gray-500">Long-term impact focus</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group transition-all duration-300">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center transition-all duration-300">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#002147] text-base mb-1">Pedagogical Courage</h3>
                      <p className="text-sm text-gray-500">Innovation in teaching</p>
                    </div>
                  </div>
                  
                  {/* Duplicate items for seamless loop */}
                  <div className="flex items-start space-x-4 group transition-all duration-300">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#002147] to-[#003366] rounded-xl flex items-center justify-center transition-all duration-300">
                      <svg className="w-7 h-7 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#002147] text-base mb-1">Intellectual Vitality</h3>
                      <p className="text-sm text-gray-500">Beyond publication counts</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group transition-all duration-300">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center transition-all duration-300">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#002147] text-base mb-1">Integrity-Driven</h3>
                      <p className="text-sm text-gray-500">Evidence-based assessment</p>
                    </div>
                  </div>
                </div>
                {/* Gradient fade at top and bottom */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white to-transparent pointer-events-none z-10"></div>
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
