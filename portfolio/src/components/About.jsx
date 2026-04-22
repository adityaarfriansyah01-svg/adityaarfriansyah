export default function About() {
  const education = [
    { school: 'SMP Negeri 9 Semarang', period: '2022 – 2024', desc: 'Junior High School' },
    { school: 'SMK Negeri 7 Semarang', period: '2024 – 2028', desc: 'Jurusan: Sistem Informasi, Jaringan, dan Aplikasi (SIJA)' },
  ]
  const softSkills = ['Problem Solving', 'Teamwork', 'Communication', 'Adaptability']
  const hardSkills = ['Network Configuration', 'Network Infrastructure', 'Troubleshooting']

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16" data-aos="fade-up">
          <p className="text-[#7C3AED] text-sm font-medium tracking-widest uppercase mb-2">Get to know me</p>
          <h2 className="font-heading font-black text-4xl md:text-5xl tracking-tight text-[#0a0a0a] dark:text-[#f5f0e8]">
            About Me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left */}
          <div data-aos="fade-up" data-aos-delay="100">
            <div className="bg-white dark:bg-[#141414] border border-[#d0c8bc] dark:border-[#2a2218] rounded-2xl p-8 mb-6">
              <h3 className="font-heading font-bold text-lg text-[#7C3AED] mb-6">Personal Info</h3>
              <ul className="space-y-4 text-sm">
                {[
                  ['Full Name', 'Aditya Arfriansyah'],
                  ['Nickname', 'Adit'],
                  ['Origin', 'Semarang, Jawa Tengah'],
                  ['Address', 'Pedurungan Tengah, Semarang'],
                  ['Family', 'Anak pertama dari 2 bersaudara'],
                  ['Hobby', 'Berolahraga'],
                  ['Interest', 'Network Engineering'],
                  ['Career Goal', 'Menjadi Network Engineer di suatu perusahaan atau instalasi'],
                ].map(([label, value]) => (
                  <li key={label} className="flex gap-3">
                    <span className="text-[#555555] dark:text-[#a09080] w-28 shrink-0">{label}</span>
                    <span className="text-[#0a0a0a] dark:text-[#f5f0e8]">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a href="#" className="inline-flex items-center gap-2 px-6 py-3 border border-[#7C3AED] text-[#7C3AED] rounded-lg text-sm font-medium hover:bg-[#7C3AED] hover:text-white transition-all duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download CV
            </a>
          </div>

          {/* Right */}
          <div className="space-y-6">
            <div data-aos="fade-up" data-aos-delay="150">
              <div className="bg-white dark:bg-[#141414] border border-[#d0c8bc] dark:border-[#2a2218] rounded-2xl p-8">
                <h3 className="font-heading font-bold text-lg text-[#7C3AED] mb-6">Education</h3>
                <div className="space-y-6">
                  {education.map((edu, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="mt-1 w-2 h-2 rounded-full bg-[#7C3AED] shrink-0" />
                      <div>
                        <p className="font-medium text-[#0a0a0a] dark:text-[#f5f0e8] text-sm">{edu.school}</p>
                        <p className="text-[#7C3AED] text-xs mt-0.5">{edu.period}</p>
                        <p className="text-[#555555] dark:text-[#a09080] text-xs mt-1">{edu.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="200">
              <div className="bg-white dark:bg-[#141414] border border-[#d0c8bc] dark:border-[#2a2218] rounded-2xl p-8">
                <h3 className="font-heading font-bold text-lg text-[#7C3AED] mb-4">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((s) => (
                    <span key={s} className="px-3 py-1.5 border border-[#d0c8bc] dark:border-[#2a2218] rounded-full text-xs text-[#555555] dark:text-[#a09080]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="250">
              <div className="bg-white dark:bg-[#141414] border border-[#d0c8bc] dark:border-[#2a2218] rounded-2xl p-8">
                <h3 className="font-heading font-bold text-lg text-[#7C3AED] mb-4">Hard Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {hardSkills.map((s) => (
                    <span key={s} className="px-3 py-1.5 bg-[#7C3AED]/10 border border-[#7C3AED]/20 rounded-full text-xs text-[#7C3AED]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
