export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="py-8 px-6 border-t border-[#d0c8bc] dark:border-[#2a2218]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[#555555] dark:text-[#a09080] text-sm">
          © {year} <span className="text-[#7C3AED]">Aditya Arfriansyah</span>. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {[
            { label: 'Instagram', href: 'https://instagram.com/achilboyss' },
            { label: 'Email', href: 'mailto:adityaarfriansyah01@gmail.com' },
            { label: 'WhatsApp', href: 'https://wa.me/6289524569825' },
          ].map((link, i, arr) => (
            <span key={link.label} className="flex items-center gap-4">
              <a href={link.href} target="_blank" rel="noopener noreferrer"
                className="text-[#555555] dark:text-[#a09080] hover:text-[#7C3AED] transition-colors text-sm">
                {link.label}
              </a>
              {i < arr.length - 1 && <span className="text-[#d0c8bc] dark:text-[#2a2218]">·</span>}
            </span>
          ))}
        </div>
      </div>
    </footer>
  )
}
