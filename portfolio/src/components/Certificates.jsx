const certificates = [
  { label: 'Certificate', image: '/cert1.jpg' },
  { label: 'Certificate 2', image: '/cert2.jpg' },
  { label: 'Certificate — Coming Soon', image: null },
  { label: 'Certificate — Coming Soon', image: null },
]

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 px-6 bg-[#f0ebe3] dark:bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16" data-aos="fade-up">
          <p className="text-[#7C3AED] text-sm font-medium tracking-widest uppercase mb-2">Achievements</p>
          <h2 className="font-heading font-black text-4xl md:text-5xl tracking-tight text-[#0a0a0a] dark:text-[#f5f0e8]">
            Certificates
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              className="bg-white dark:bg-[#141414] border border-[#d0c8bc] dark:border-[#2a2218] rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform duration-200"
            >
              <div className="h-40 bg-[#e8e2d9] dark:bg-[#1a1a1a] flex items-center justify-center border-b border-[#d0c8bc] dark:border-[#2a2218]">
                {cert.image ? (
                  <img src={cert.image} alt={cert.label} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-center text-[#555555] dark:text-[#a09080]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mx-auto mb-2 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    <span className="text-xs opacity-40">Image Placeholder</span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <p className="text-[#555555] dark:text-[#a09080] text-xs text-center">{cert.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
