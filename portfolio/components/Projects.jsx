const { useState } = React;

const projectsData = [
  {
    num: '01',
    title: 'AI Threat Detection System',
    year: '2025',
    description: 'AI-powered cybersecurity threat detection using ML algorithms (Isolation Forest, DBSCAN, PCA) for anomaly detection. Integrated with VirusTotal, AbuseIPDB, OTX AlienVault, and CVE CIRCL threat intelligence APIs.',
    tags: ['Python', 'Machine Learning', 'Flask', 'Cybersecurity'],
    link: 'https://github.com/jeff13in/AI-threat_Detection',
  },
  {
    num: '02',
    title: 'Instagram Comment-to-Get Automation',
    year: '2025',
    description: 'Full-stack web application automating Instagram comment responses using keyword detection. Features Google OAuth, email subscription management, and automated DM campaigns with 98.7% reply success rate.',
    tags: ['Python', 'Flask', 'Instagram API', 'OAuth 2.0'],
    link: 'https://github.com/jeff13in/Comment-to-Get-Automation',
  },
  {
    num: '03',
    title: 'VibeMap Music Recommendation System',
    year: '2026',
    description: 'Full-stack music recommendation system using Spotify audio features. Songs clustered by mood via K-Means and recommended via KNN. React + TypeScript frontend, Flask REST API with 125 automated tests at 88% coverage.',
    tags: ['Python', 'React', 'TypeScript', 'Flask', 'ML'],
    link: 'https://github.com/jeff13in/VibeMap',
  },
  {
    num: '04',
    title: 'SecureShop Risk Assessment',
    year: '2026',
    description: 'Comprehensive GRC security risk assessment for a hypothetical e-commerce platform. Identified 18 control gaps mapped to NIST CSF, PCI-DSS v4.0, GDPR, and OWASP Top 10. Delivered remediation roadmap reducing $450K annual risk exposure by 83%.',
    tags: ['GRC', 'NIST CSF', 'PCI-DSS', 'Risk Assessment'],
    link: 'https://github.com/jeff13in/SecureShop-Risk-Assessment',
  },
  {
    num: '05',
    title: 'AI Newsletter & Social Media Generator',
    year: '2025',
    description: 'Full-stack web application using Django and NLP to automate content creation for newsletters and social media platforms. Supports multi-platform publishing workflows.',
    tags: ['Python', 'Django', 'NLP', 'Full-Stack'],
    link: 'https://github.com/iaminhri/COSC-4P02',
  },
  {
    num: '06',
    title: 'Neural Network Hyperparameter Tuning',
    year: '2024',
    description: 'Optimized machine learning models by experimenting with hyperparameters like learning rate and momentum using Weka. Comprehensive analysis of model performance across configurations.',
    tags: ['Machine Learning', 'Weka', 'Data Analysis'],
    link: 'assets/Cosc_3p71_Assignment_3.pdf',
  },
  {
    num: '07',
    title: 'Multiplayer Game via Socket Programming',
    year: '2025',
    description: 'Networked multiplayer game in Java using sockets and Swing, supporting real-time synchronization and in-game messaging between distributed clients.',
    tags: ['Java', 'Socket Programming', 'Swing'],
    link: '#',
  },
  {
    num: '08',
    title: 'Introduction to Cyber-Security Labs',
    year: '2025',
    description: 'Hands-on offensive security assignments using Kali Linux and Docker-based labs, including privilege escalation, ARP spoofing, and network reconnaissance techniques.',
    tags: ['Cybersecurity', 'Kali Linux', 'Docker', 'Python'],
    link: '#',
  },
];

const Projects = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" style={{ padding: '120px 48px', maxWidth: '1400px', margin: '0 auto' }}>
      <div className="reveal" style={{ display: 'flex', alignItems: 'baseline', gap: '24px', marginBottom: '80px' }}>
        <h2 style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 700, letterSpacing: '-0.02em' }}>Selected Work</h2>
        <span className="mono" style={{ fontSize: '13px', color: 'var(--muted)' }}>({projectsData.length} projects)</span>
      </div>

      <div>
        {projectsData.map((p, i) => (
          <a key={p.num} href={p.link} target="_blank" rel="noopener noreferrer"
            className="reveal"
            style={{ transitionDelay: `${i * 0.05}s` }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <div style={{
              display: 'grid',
              gridTemplateColumns: '60px 1fr auto',
              gap: '32px',
              alignItems: 'start',
              padding: '32px 0',
              borderBottom: '1px solid #1a1a1a',
              transition: 'background 0.3s',
              cursor: 'pointer',
              position: 'relative',
            }}>
              {/* Hover highlight */}
              {hovered === i && (
                <div style={{
                  position: 'absolute', inset: '-1px -24px',
                  background: 'rgba(16,185,129,0.04)',
                  borderRadius: '3px',
                  pointerEvents: 'none',
                }} />
              )}

              {/* Number */}
              <span className="mono" style={{
                fontSize: '13px',
                color: hovered === i ? 'var(--accent)' : '#333',
                paddingTop: '4px',
                transition: 'color 0.2s',
              }}>{p.num}</span>

              {/* Content */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
                  <h3 style={{
                    fontSize: 'clamp(18px, 2vw, 26px)',
                    fontWeight: 600,
                    letterSpacing: '-0.01em',
                    color: hovered === i ? 'var(--accent)' : 'var(--text)',
                    transition: 'color 0.2s',
                  }}>{p.title}</h3>
                  {hovered === i && (
                    <span style={{ fontSize: '18px', color: 'var(--accent)', transition: 'all 0.2s' }}>↗</span>
                  )}
                </div>

                <p style={{
                  fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7,
                  maxWidth: '640px',
                  height: hovered === i ? 'auto' : '0',
                  overflow: 'hidden',
                  opacity: hovered === i ? 1 : 0,
                  marginBottom: hovered === i ? '16px' : '0',
                  transition: 'opacity 0.3s',
                }}>{p.description}</p>

                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '14px' }}>
                  {p.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Year */}
              <span className="mono" style={{ fontSize: '12px', color: '#333', paddingTop: '6px' }}>{p.year}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

Object.assign(window, { Projects });
