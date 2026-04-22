import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

export default function Hero() {
  const typedRef = useRef(null)

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Building Connections That Power the Future.',
        'Network Engineering Student.',
        'Always Ready for New Challenges.',
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
    })
    return () => typed.destroy()
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      <div className="max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row items-center gap-12 pt-24 pb-16">
        {/* Text */}
        <div className="flex-1 text-center md:text-left" data-aos="fade-up">
          <p className="text-[#7C3AED] text-sm font-medium tracking-widest uppercase mb-4">
            Hello, I'm
          </p>
          <h1 className="font-heading font-black text-5xl md:text-7xl tracking-tight text-[#0a0a0a] dark:text-[#f5f0e8] leading-none mb-4">
            Aditya<br />
            <span className="text-[#7C3AED]">Arfriansyah</span>
          </h1>
          <div className="text-lg md:text-xl text-[#555555] dark:text-[#a09080] mb-6 min-h-[2rem]">
            <span ref={typedRef} />
          </div>
          <p className="text-[#555555] dark:text-[#a09080] max-w-lg mb-8 leading-relaxed">
            I am a Network Engineering student passionate about building secure and reliable systems.
            I enjoy learning about networking and infrastructure.
            Always ready to grow and face new challenges in the digital world.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="#portfolio" className="px-6 py-3 border border-[#7C3AED] text-[#7C3AED] rounded-lg text-sm font-medium hover:bg-[#7C3AED] hover:text-white transition-all duration-200">
              View My Work
            </a>
            <a href="#contact" className="px-6 py-3 bg-[#7C3AED] text-white rounded-lg text-sm font-medium hover:bg-[#6D28D9] transition-all duration-200">
              Get in Touch
            </a>
          </div>
        </div>

        {/* Photo */}
        <div className="flex-shrink-0" data-aos="fade-up" data-aos-delay="150">
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-2xl border-2 border-[#d0c8bc] dark:border-[#2a2218] bg-[#e8e2d9] dark:bg-[#141414] flex items-center justify-center overflow-hidden relative">
            <img
              src="/photo.jpg"
              alt="Aditya Arfriansyah"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'flex'
              }}
            />
            <div className="absolute inset-0 hidden flex-col items-center justify-center text-[#a09080]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mb-2 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-xs opacity-50">Your Photo Here</span>
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#7C3AED] rounded-md" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#555555] dark:text-[#a09080] animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
