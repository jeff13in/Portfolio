const { useState, useEffect } = React;

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    padding: '20px 48px',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    background: scrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
    backdropFilter: scrolled ? 'blur(16px)' : 'none',
    borderBottom: scrolled ? '1px solid #1a1a1a' : '1px solid transparent',
    transition: 'all 0.4s ease',
  };

  return (
    <nav style={navStyle}>
      <a href="#" style={{ fontFamily: 'var(--font-mono)', fontSize: '15px', color: 'var(--accent)', letterSpacing: '0.08em', fontWeight: 700 }}>
        JSJ.
      </a>

      <div style={{ display: 'flex', gap: '36px', alignItems: 'center' }}>
        {links.map(({ label, href }) => (
          <a key={label} href={href}
            style={{ fontSize: '13px', color: 'var(--muted)', letterSpacing: '0.06em', textTransform: 'uppercase', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
          >{label}</a>
        ))}
      </div>

      <a href="assets/resume_jeffin.pdf" target="_blank" rel="noopener noreferrer"
        style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--accent)', border: '1px solid rgba(16,185,129,0.35)', padding: '8px 18px', borderRadius: '3px', letterSpacing: '0.05em', transition: 'all 0.2s' }}
        onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = '#000'; }}
        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--accent)'; }}
      >Resume ↗</a>
    </nav>
  );
};

Object.assign(window, { Nav });
