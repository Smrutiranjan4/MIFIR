export default function StudentsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-blue-900 to-cyan-900 text-white py-20">
        <div className="max-w-full mx-auto px-2 xl:px-3">
          <h1 className="text-4xl font-bold mb-6">For Students</h1>
          <p className="text-xl text-blue-100">Making informed decisions about your medical education journey.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Choose Your Institution Wisely</h2>
          <p className="text-gray-600 mb-4">
            MIFIR helps you evaluate institutions based on genuine educational quality, not just placement statistics.
          </p>
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Benefits:</h3>
            <ul className="space-y-2 text-gray-600">
              <li>✓ Evidence-based institutional comparisons</li>
              <li>✓ Focus on long-term career outcomes</li>
              <li>✓ Transparent evaluation criteria</li>
              <li>✓ Real competency development metrics</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
