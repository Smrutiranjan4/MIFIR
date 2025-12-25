export default function AlignmentSection() {
  const standards = [
    {
      title: 'Interdisciplinarity',
      description: 'Breaking silos for comprehensive learning',
      icon: '🔗'
    },
    {
      title: 'Transdisciplinarity',
      description: 'Integrating diverse knowledge systems',
      icon: '🌐'
    },
    {
      title: 'Research Excellence',
      description: 'Quality over quantity in scholarship',
      icon: '🔬'
    },
    {
      title: 'Innovation',
      description: 'Fostering creative problem-solving',
      icon: '💡'
    },
    {
      title: 'Entrepreneurship',
      description: 'Cultivating initiative and enterprise',
      icon: '🚀'
    },
    {
      title: 'Ethical Education',
      description: 'Building moral and social responsibility',
      icon: '⚖️'
    },
    {
      title: 'Future Skills',
      description: 'Preparing for emerging challenges',
      icon: '🎯'
    },
    {
      title: 'Sustainability',
      description: 'Long-term environmental stewardship',
      icon: '🌱'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1360px' }}>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Global Standards Alignment
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Alignment with Quality Global Standards
          </h2>
          <p className="text-lg text-blue-100">
            MIFIR measures what leading educators and futurists agree matters most for 21st-century higher education.
          </p>
        </div>

        {/* Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {standards.map((standard, index) => (
            <div 
              key={index}
              className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
                {standard.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">
                {standard.title}
              </h3>
              <p className="text-sm text-blue-100 leading-relaxed">
                {standard.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-blue-100 mb-6 text-lg">
            Our framework integrates these dimensions into a comprehensive evaluation methodology.
          </p>
          <a 
            href="/framework"
            className="inline-flex items-center px-8 py-4 text-base font-semibold text-blue-900 bg-white rounded-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl"
          >
            Explore MIFIR Framework
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
