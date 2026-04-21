const { useEffect, useRef } = React;

const Hero = () => {
  const nameRef = useRef(null);

  useEffect(() => {
    // Parallax on name
    const handler = (e) => {
      if (!nameRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 12;
      const y = (e.clientY / window.innerHeight - 0.5) * 6;
      nameRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', padding: '0 48px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Subtle grid */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: 'linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
        opacity: 0.4,
      }} />

      <div style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr auto', gap: '60px', alignItems: 'center', maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
        {/* Left: Text */}
        <div>
          <p className="mono accent reveal" style={{ fontSize: '13px', letterSpacing: '0.15em', marginBottom: '32px', textTransform: 'uppercase' }}>
            {'>'} Hello, world
          </p>

          <h1 ref={nameRef} className="reveal reveal-delay-1" style={{
            fontSize: 'clamp(56px, 8vw, 120px)',
            fontWeight: 700,
            lineHeight: 0.92,
            letterSpacing: '-0.03em',
            color: '#f0f0f0',
            transition: 'transform 0.15s ease-out',
            marginBottom: '32px',
          }}>
            Jeffin<br />
            Sam<br />
            <span style={{ color: 'var(--accent)' }}>Joji.</span>
          </h1>

          <div className="reveal reveal-delay-2" style={{ display: 'flex', gap: '24px', marginBottom: '32px', flexWrap: 'wrap' }}>
            {['Cybersecurity Analyst', 'Full-Stack Developer', 'AI Engineer'].map((role, i) => (
              <span key={i} className="mono" style={{ fontSize: '12px', color: 'var(--muted)', letterSpacing: '0.05em' }}>
                {i > 0 && <span style={{ color: '#2a2a2a', marginRight: '24px' }}>—</span>}
                {role}
              </span>
            ))}
          </div>

          <p className="reveal reveal-delay-2" style={{ fontSize: '16px', color: 'var(--muted)', maxWidth: '500px', lineHeight: 1.75, marginBottom: '48px' }}>
            4th-year CS student at Brock University. Passionate about breaking systems to make them stronger — and building things that actually matter.
          </p>

          <div className="reveal reveal-delay-3" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <a href="#projects" style={{
              background: 'var(--accent)', color: '#000', padding: '14px 32px',
              borderRadius: '3px', fontSize: '13px', fontWeight: 600, letterSpacing: '0.05em',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >View Work</a>

            <div style={{ display: 'flex', gap: '20px' }}>
              {[
                { label: 'GitHub', href: 'https://github.com/jeff13in' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jeffin-sam-joji/' },
                { label: 'Email', href: 'mailto:ejffinsam14@gmail.com' },
              ].map(({ label, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: '12px', color: 'var(--muted)', letterSpacing: '0.06em', textTransform: 'uppercase', borderBottom: '1px solid transparent', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderBottomColor = 'var(--accent)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.borderBottomColor = 'transparent'; }}
                >{label} ↗</a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Photo */}
        <div className="reveal reveal-delay-2" style={{ position: 'relative' }}>
          <div style={{
            width: 'clamp(240px, 22vw, 360px)',
            aspectRatio: '3/4',
            borderRadius: '4px',
            overflow: 'hidden',
            position: 'relative',
            border: '1px solid #1f1f1f',
          }}>
            <img src="assets/jeffin.jpg" alt="Jeffin Sam Joji"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', filter: 'grayscale(20%) contrast(1.05)' }}
            />
            {/* Emerald tint overlay */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(180deg, transparent 50%, rgba(16,185,129,0.15) 100%)',
            }} />
          </div>

          {/* Floating tag */}
          <div className="mono" style={{
            position: 'absolute', bottom: '-20px', left: '-20px',
            background: '#111', border: '1px solid #1f1f1f',
            padding: '12px 20px', borderRadius: '3px',
            fontSize: '11px', color: 'var(--accent)', letterSpacing: '0.08em',
          }}>
            {'>'} Available for 2025
          </div>

          {/* Decorative corner */}
          <div style={{
            position: 'absolute', top: '-12px', right: '-12px',
            width: '60px', height: '60px',
            border: '1px solid rgba(16,185,129,0.3)',
            borderRadius: '2px',
            zIndex: -1,
          }} />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="reveal" style={{
        position: 'absolute', bottom: '40px', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
      }}>
        <span className="mono" style={{ fontSize: '10px', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>scroll</span>
        <div style={{
          width: '1px', height: '50px',
          background: 'linear-gradient(to bottom, var(--accent), transparent)',
          animation: 'scrollPulse 2s ease-in-out infinite',
        }} />
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.1); }
        }
      `}</style>
    </section>
  );
};

Object.assign(window, { Hero });
