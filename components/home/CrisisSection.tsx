export default function CrisisSection() {
  const crises = [
    {
      title: 'Legacy Metrics Don\'t Predict Future Capability',
      description: 'Historical reputation, alumni wealth, and citation volume tell us nothing about whether an institution can educate for 2035.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'Optics Over Outcomes',
      description: 'Glossy brochures, symbolic committees, and dormant MOUs distract from genuine systemic reform and resource allocation.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Ranking Manipulation as Strategy',
      description: 'Institutions game metrics instead of investing in teaching quality, research integrity, or student support systems.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      color: 'from-amber-500 to-amber-600'
    },
    {
      title: 'No Signal for Risk-Taking or Innovation',
      description: 'Current systems penalize experimentation, pedagogical courage, and failure-learning—exactly what the future demands.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1360px' }}>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Traditional Rankings Fail the Future
          </h2>
          <p className="text-lg text-gray-600">
            The global higher-education landscape is measured by systems designed for the 20th century. Students, employers, and policymakers need a new signal—one that reveals institutional capacity for navigating uncertainty.
          </p>
        </div>

        {/* Crisis Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {crises.map((crisis, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
            >
              {/* Gradient Header */}
              <div className={`bg-gradient-to-br ${crisis.color} p-6 text-white`}>
                <div className="mb-3">
                  {crisis.icon}
                </div>
                <h3 className="text-lg font-bold leading-tight">
                  {crisis.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {crisis.description}
                </p>
              </div>

              {/* Accent Bar */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${crisis.color} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left`}></div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 md:p-12 text-center shadow-xl">
            <svg className="w-12 h-12 text-blue-300 mx-auto mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-xl md:text-2xl font-semibold text-white mb-4 leading-relaxed">
              Reputation measures the past. MIFIR measures readiness for the future no one can predict.
            </blockquote>
            <p className="text-blue-200 text-sm">
              Universities cannot rely on century-old prestige when the world demands adaptability, ethics, and innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
