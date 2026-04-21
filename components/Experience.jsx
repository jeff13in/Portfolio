const { useState } = React;

const expData = [
  {
    num: '01',
    role: 'Software Developer / AI Engineer',
    company: 'Venture for Canada Intrapreneurship',
    period: '2024',
    description: 'Designed and developed an AI-powered platform to generate personalized newsletters and social media content using React and Prisma, supporting 500+ active users. Engineered prompt engineering systems for podcast guest booking automation, increasing booking response rates by 40%. Built scalable backend services with Docker, reducing content creation time from 2 hours to 15 minutes per newsletter.',
    tags: ['React', 'OpenAI API', 'Claude', 'Prisma', 'Docker', 'n8n'],
  },
  {
    num: '02',
    role: 'Software Engineer Intern',
    company: 'Meritrium Corp',
    period: '2023',
    description: 'Built a full-stack web application using React and Python/Flask. Designed and implemented RESTful APIs to integrate external data sources and support real-time features. Applied OCR and file handling pipelines to automate document parsing and data extraction.',
    tags: ['React', 'Python', 'Flask', 'RESTful APIs', 'OCR'],
  },
  {
    num: '03',
    role: 'Cybersecurity Job Simulation',
    company: 'PwC Digital Intelligence',
    period: '2024',
    description: 'Completed a job simulation focused on integrated defense strategies. Conducted risk assessments and formulated security recommendations. Demonstrated proficiency in network segmentation, firewall configuration, and risk management frameworks.',
    tags: ['Risk Assessment', 'Network Security', 'Firewall', 'Integrated Defense'],
    link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/4sLyCPgmsy8DA6Dh3/f9H4CHchzrKQbnbmK_4sLyCPgmsy8DA6Dh3_TnaiatFqQ63rTfNSf_1730924737896_completion_certificate.pdf',
  },
  {
    num: '04',
    role: 'Supervisor',
    company: 'Digital Attractions',
    period: '2022 – 2023',
    description: 'Trained and mentored new hires improving first-month efficiency by 35%. Implemented structured troubleshooting processes, reducing customer wait times by 25%. Submitted and tracked inventory tickets ensuring accurate stock management.',
    tags: ['Leadership', 'Mentoring', 'Process Improvement'],
  },
];

const Experience = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="experience" style={{ padding: '120px 48px', background: '#0d0d0d', borderTop: '1px solid #1a1a1a', borderBottom: '1px solid #1a1a1a' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div className="reveal" style={{ display: 'flex', alignItems: 'baseline', gap: '24px', marginBottom: '80px' }}>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 700, letterSpacing: '-0.02em' }}>Experience</h2>
          <span className="mono" style={{ fontSize: '13px', color: 'var(--muted)' }}>(work & simulations)</span>
        </div>

        <div>
          {expData.map((e, i) => (
            <div key={e.num}
              className="reveal"
              style={{ transitionDelay: `${i * 0.07}s` }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div style={{
                display: 'grid',
                gridTemplateColumns: '60px 1fr 160px',
                gap: '32px',
                alignItems: 'start',
                padding: '36px 0',
                borderBottom: '1px solid #1a1a1a',
                position: 'relative',
                transition: 'all 0.2s',
              }}>
                {hovered === i && (
                  <div style={{
                    position: 'absolute', inset: '-1px -24px',
                    background: 'rgba(16,185,129,0.03)',
                    borderRadius: '3px', pointerEvents: 'none',
                  }} />
                )}

                <span className="mono" style={{ fontSize: '12px', color: hovered === i ? 'var(--accent)' : '#2a2a2a', paddingTop: '6px', transition: 'color 0.2s' }}>{e.num}</span>

                <div>
                  <h3 style={{ fontSize: 'clamp(16px, 1.8vw, 22px)', fontWeight: 600, marginBottom: '6px', color: hovered === i ? 'var(--accent)' : 'var(--text)', transition: 'color 0.2s' }}>
                    {e.role}
                  </h3>
                  <p className="mono" style={{ fontSize: '12px', color: 'var(--muted)', letterSpacing: '0.05em', marginBottom: '16px' }}>
                    {e.company}
                    {e.link && (
                      <a href={e.link} target="_blank" rel="noopener noreferrer"
                        style={{ color: 'var(--accent)', marginLeft: '12px', fontSize: '11px' }}>
                        View Certificate ↗
                      </a>
                    )}
                  </p>
                  <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.75, maxWidth: '620px', marginBottom: '20px' }}>
                    {e.description}
                  </p>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {e.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <span className="mono" style={{ fontSize: '12px', color: '#2a2a2a' }}>{e.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Experience });
