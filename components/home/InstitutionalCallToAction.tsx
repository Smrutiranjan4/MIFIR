'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function InstitutionalCallToAction() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <section className="py-16 px-4 bg-blue-50">
      <div className="max-w-4xl mx-auto text-center" data-aos="zoom-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Build Trust Through Transparency?
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Join leading institutions committed to accountability and excellence in higher education.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>
          <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
