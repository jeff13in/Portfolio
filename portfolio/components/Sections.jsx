const { useState } = React;

// ── ABOUT ──────────────────────────────────────────────
const About = () => (
  <section id="about" style={{ padding: '120px 48px' }}>
    <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
      <div className="reveal">
        <p className="mono accent" style={{ fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '24px' }}>About</p>
        <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '32px', lineHeight: 1.1 }}>
          Building at the intersection of<br />
          <span style={{ color: 'var(--accent)' }}>security & software.</span>
        </h2>
      </div>
      <div className="reveal reveal-delay-1">
        <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '24px' }}>
          I'm a 4th-year Computer Science student at Brock University, pursuing a Bachelor's degree with a focus on cybersecurity and AI. I'm passionate about offensive security, building automation tools, and creating systems that solve real-world problems.
        </p>
        <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '40px' }}>
          When I'm not hunting bugs or writing code, you'll find me solving chess puzzles or working through CTF challenges. Currently seeking internship and co-op opportunities in cybersecurity and software development for 2025.
        </p>
        <div style={{ display: 'flex', gap: '16px' }}>
          {['Puzzle Solving', 'Chess', 'CTF Challenges'].map(i => (
            <span key={i} className="tag accent-tag">{i}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ── SKILLS ──────────────────────────────────────────────
const skillsData = [
  {
    category: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C#', 'C++', 'PHP', 'Ruby', 'Bash'],
  },
  {
    category: 'Frameworks & Tools',
    items: ['React', 'Django', 'Flask', 'Node.js', 'Docker', 'PostgreSQL', 'Prisma', 'n8n'],
  },
  {
    category: 'Cybersecurity',
    items: ['Burp Suite', 'Metasploit', 'Wireshark', 'Nmap', 'Kali Linux', 'Splunk', 'SIEM', 'Pen Testing'],
  },
  {
    category: 'Concepts',
    items: ['NIST CSF', 'OWASP Top 10', 'Zero Trust', 'GRC', 'ML / NLP', 'REST APIs', 'OAuth 2.0'],
  },
];

const Skills = () => (
  <section id="skills" style={{ padding: '120px 48px', borderTop: '1px solid #1a1a1a' }}>
    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
      <div className="reveal" style={{ marginBottom: '80px' }}>
        <h2 style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 700, letterSpacing: '-0.02em' }}>Technical Skills</h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '48px' }}>
        {skillsData.map((group, i) => (
          <div key={group.category} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
            <p className="mono" style={{ fontSize: '11px', color: 'var(--accent)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '24px' }}>
              {group.category}
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {group.items.map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--muted)' }}>
                  <span style={{ width: '4px', height: '4px', background: '#333', borderRadius: '50%', flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ── CONTACT ──────────────────────────────────────────────
const Contact = () => (
  <section id="contact" style={{ padding: '140px 48px', background: '#0d0d0d', borderTop: '1px solid #1a1a1a', textAlign: 'center' }}>
    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
      <p className="mono accent reveal" style={{ fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '24px' }}>Get in touch</p>
      <h2 className="reveal reveal-delay-1" style={{ fontSize: 'clamp(36px, 5vw, 72px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '32px' }}>
        Let's build something<br /><span style={{ color: 'var(--accent)' }}>together.</span>
      </h2>
      <p className="reveal reveal-delay-2" style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '56px' }}>
        I'm actively looking for internship and co-op opportunities in cybersecurity and software development. If you have an opportunity or just want to connect — my inbox is always open.
      </p>
      <div className="reveal reveal-delay-3" style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        <a href="mailto:ejffinsam14@gmail.com"
          style={{ background: 'var(--accent)', color: '#000', padding: '16px 40px', borderRadius: '3px', fontSize: '14px', fontWeight: 600, letterSpacing: '0.04em', transition: 'opacity 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >Say Hello →</a>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          {[
            { label: 'GitHub', href: 'https://github.com/jeff13in' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jeffin-sam-joji/' },
          ].map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: '13px', color: 'var(--muted)', border: '1px solid #1f1f1f', padding: '16px 28px', borderRadius: '3px', letterSpacing: '0.04em', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(16,185,129,0.4)'; e.currentTarget.style.color = 'var(--accent)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#1f1f1f'; e.currentTarget.style.color = 'var(--muted)'; }}
            >{label} ↗</a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ── FOOTER ──────────────────────────────────────────────
const Footer = () => (
  <footer style={{ padding: '32px 48px', borderTop: '1px solid #1a1a1a', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <span className="mono" style={{ fontSize: '12px', color: '#2a2a2a' }}>© 2025 Jeffin Sam Joji</span>
    <span className="mono" style={{ fontSize: '12px', color: '#2a2a2a' }}>Brock University · CS</span>
  </footer>
);

Object.assign(window, { About, Skills, Contact, Footer });
