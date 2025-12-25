export default function WhyMifirExists() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1360px' }}>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why MIFIR Exists
          </h2>
          <p className="text-lg text-gray-600">
            A response to systemic failure—and an instrument for institutional reform.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - The Problem */}
          <div className="space-y-6">
            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">The Problem</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Higher education is being measured by systems that incentivize the wrong behaviors. Traditional rankings prioritize:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span><strong>Wealth and size</strong> over innovation and agility</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span><strong>Publication volume</strong> over research integrity and societal relevance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span><strong>Brand perception</strong> over governance quality and ethical leadership</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span><strong>Historical reputation</strong> over future-readiness and adaptability</span>
                  </li>
                </ul>
                <p className="pt-2">
                  As a result, institutions spend resources on cosmetic improvements—new buildings, PR campaigns, and glossy reports—while neglecting governance reform, pedagogical innovation, and student learning outcomes.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - MIFIR's Response */}
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">MIFIR's Response</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  MIFIR measures <strong>institutional capability to navigate the future</strong>—a future defined by technological disruption, climate crisis, geopolitical instability, and societal transformation.
                </p>
                <p>
                  We evaluate:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Commitments backed by budgets</strong>, not vision statements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Governance structures</strong> that enable decision-making under uncertainty</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Risk-taking and experimentation</strong>, including documented failures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Technology integration</strong> in pedagogy, not IT infrastructure showrooms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Faculty development ecosystems</strong>, not celebrity hires</span>
                  </li>
                </ul>
                <p className="pt-2 font-semibold">
                  MIFIR is built for institutions preparing for 2030–2040 realities, not those relying on 1950s prestige.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Differentiator Box */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
              What Makes MIFIR Fundamentally Different
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold mb-2">Evidence-Based</h4>
                <p className="text-gray-300 text-sm">
                  Validated through documents, budgets, policies, and outcomes—not self-reported narratives.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-bold mb-2">Future-Oriented</h4>
                <p className="text-gray-300 text-sm">
                  Focuses on readiness for 2030+ challenges, not historical performance or legacy metrics.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h4 className="font-bold mb-2">Reform-Driven</h4>
                <p className="text-gray-300 text-sm">
                  Rewards action and learning, penalizes symbolic gestures and optics without substance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
