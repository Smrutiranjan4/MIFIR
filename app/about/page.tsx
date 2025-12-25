export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-slate-900 to-gray-900 text-white py-20">
        <div className="max-w-full mx-auto px-2 xl:px-3">
          <h1 className="text-4xl font-bold mb-6">About MIFIR</h1>
          <p className="text-xl text-gray-100">Understanding the Mission and Vision of the Medical Institution Framework for Institutional Rankings</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gray-600 mb-4">
            MIFIR represents a new approach to evaluating medical institutions, focusing on genuine educational quality and long-term outcomes.
          </p>
          <p className="text-gray-600">
            More details about our mission, vision, and methodology will be available soon.
          </p>
        </div>
      </section>
    </div>
  );
}
