export default function InstitutionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-green-900 to-teal-900 text-white py-20">
        <div className="max-w-full mx-auto px-2 xl:px-3">
          <h1 className="text-4xl font-bold mb-6">For Institutions</h1>
          <p className="text-xl text-green-100">Why participate in MIFIR and what it means for your institution.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-600">Detailed content for institutions will be available soon.</p>
          <a href="/participation" className="mt-4 inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
            View Participation Guidelines
          </a>
        </div>
      </section>
    </div>
  );
}
