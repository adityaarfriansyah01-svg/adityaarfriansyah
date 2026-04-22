const skills = [
  {
    category: 'Networking',
    icon: '🌐',
    items: [
      { name: 'Cisco Packet Tracer', level: 75 },
      { name: 'Network Topology', level: 70 },
      { name: 'IP Addressing & Subnetting', level: 72 },
      { name: 'Routing & Switching', level: 65 },
    ],
  },
  {
    category: 'Security',
    icon: '🔒',
    items: [
      { name: 'Firewall Configuration', level: 55 },
      { name: 'Network Monitoring', level: 58 },
    ],
  },
  {
    category: 'Infrastructure',
    icon: '🖥️',
    items: [
      { name: 'Virtualization', level: 50 },
      { name: 'Structured Cabling', level: 65 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#f0ebe3] dark:bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16" data-aos="fade-up">
          <p className="text-[#7C3AED] text-sm font-medium tracking-widest uppercase mb-2">What I know</p>
          <h2 className="font-heading font-black text-4xl md:text-5xl tracking-tight text-[#0a0a0a] dark:text-[#f5f0e8]">
            Skills
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((group, i) => (
            <div
              key={group.category}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="bg-white dark:bg-[#141414] border border-[#d0c8bc] dark:border-[#2a2218] rounded-2xl p-8 hover:-translate-y-1 transition-transform duration-200"
            >
              <div className="text-3xl mb-3">{group.icon}</div>
              <h3 className="font-heading font-bold text-[#7C3AED] text-lg mb-6">{group.category}</h3>
              <div className="space-y-4">
                {group.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-[#0a0a0a] dark:text-[#f5f0e8]">{skill.name}</span>
                      <span className="text-[#555555] dark:text-[#a09080]">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-[#e0d8cc] dark:bg-[#2a2218] rounded-full overflow-hidden">
                      <div className="h-full bg-[#7C3AED] rounded-full" style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
