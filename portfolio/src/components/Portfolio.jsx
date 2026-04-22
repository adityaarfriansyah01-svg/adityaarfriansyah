const projects = [
  {
    title: 'Projek Bandara Jenderal Ahmad Yani',
    description: 'Website Bandara Internasional Jenderal Ahmad Yani dirancang sebagai platform informasi digital yang memudahkan pengguna dalam mengakses berbagai layanan penerbangan. Menyediakan informasi jadwal keberangkatan dan kedatangan, fasilitas bandara, layanan penumpang, serta berita terbaru.',
    tags: ['Web Design', 'Responsive', 'UI/UX'],
    image: '/bandara.png',
    link: null,
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16" data-aos="fade-up">
          <p className="text-[#7C3AED] text-sm font-medium tracking-widest uppercase mb-2">My work</p>
          <h2 className="font-heading font-black text-4xl md:text-5xl tracking-tight text-[#0a0a0a] dark:text-[#f5f0e8]">
            Portfolio
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="bg-white dark:bg-[#141414] border border-[#d0c8bc] dark:border-[#2a2218] rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform duration-200"
            >
              <div className="h-44 bg-[#f0ebe3] dark:bg-[#1a1a1a] flex items-center justify-center border-b border-[#d0c8bc] dark:border-[#2a2218] overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                ) : null}
                <div className={`text-center text-[#555555] dark:text-[#a09080] w-full h-full items-center justify-center flex-col ${project.image ? 'hidden' : 'flex'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mx-auto mb-2 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs opacity-50">Project Image</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-[#0a0a0a] dark:text-[#f5f0e8] text-lg mb-2">{project.title}</h3>
                <p className="text-[#555555] dark:text-[#a09080] text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-[#7C3AED]/10 text-[#7C3AED] text-xs rounded-md">{tag}</span>
                  ))}
                </div>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-[#7C3AED] hover:underline">
                    View on GitHub
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}

          {/* Coming soon cards */}
          {[100, 200].map((delay) => (
            <div
              key={delay}
              data-aos="fade-up"
              data-aos-delay={delay}
              className="bg-white dark:bg-[#141414] border border-dashed border-[#d0c8bc] dark:border-[#2a2218] rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-[280px]"
            >
              <div className="w-12 h-12 rounded-full border border-[#d0c8bc] dark:border-[#2a2218] flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#555555] dark:text-[#a09080]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <p className="text-[#555555] dark:text-[#a09080] text-sm">More projects coming soon</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
