export default function CrisisSection() {
  const crises = [
    {
      title: 'Ranking Manipulation',
      description: 'Institutions gaming metrics instead of improving education',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'Publication Quantity over Quality',
      description: 'Chasing numbers at the expense of meaningful research',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Placement Obsession',
      description: 'Short-term job metrics overshadow lifelong learning',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: 'from-amber-500 to-amber-600'
    },
    {
      title: 'Infrastructure Showmanship',
      description: 'Impressive buildings masking educational substance',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
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
            The Crisis MIFIR Responds To
          </h2>
          <p className="text-lg text-gray-600">
            Higher education rankings have lost their way. It's time to redirect focus to what truly builds excellent institutions.
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
            <blockquote className="text-2xl md:text-3xl font-semibold text-white mb-4 leading-relaxed">
              What we measure shapes what institutions become.
            </blockquote>
            <p className="text-blue-200 text-sm">
              Let's measure what truly matters for the future of education.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
