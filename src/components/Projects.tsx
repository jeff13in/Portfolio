import React from 'react';
import { Shield, Lock, Bug, Wifi, SquareGantt, Bot, ClipboardCheck, Music } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Instagram Comment-to-Get Automation',
    description: 'Built a full-stack web application that automates Instagram comment responses using keyword detection. Features Google OAuth authentication, email subscription management, and automated DM campaigns with 98.7% reply success rate.',
    icon: Bot,
    link: 'https://github.com/jeff13in/Comment-to-Get-Automation',
    tags: ['Python', 'Flask', 'Instagram API', 'OAuth 2.0', 'SQLAlchemy', 'Automation'],
  },
  {
    id: 2,
    title: 'AI Newsletter and Social Media Content Generator',
    description: 'Developed a full-stack web application using Django and NLP to automate content creation for newsletters and social media platforms.',
    icon: SquareGantt,
    link: 'https://github.com/iaminhri/COSC-4P02', // Ensure this is a valid URL
    tags: ['Python', 'Django', 'NLP', 'Full Stack'],
  },
  {
    id: 3,
    title: 'Neural Network Hyperparameter Tuning using Weka',
    description: 'Optimized machine learning models by experimenting with hyperparameters like learning rate and momentum using Weka.',
    icon: Bug,
    link: '/Portfolio/Cosc_3p71_Assignment_3.pdf', // Replace with actual link if available
    tags: ['Machine Learning', 'Weka', 'Data Analysis'],
  },
  {
    id: 4,
    title: 'Multiplayer Game using Socket Programming',
    description: 'Built a networked multiplayer game in Java using sockets and Swing, supporting real-time synchronization and messaging.',
    icon: Wifi,
    link: '#', // Replace with actual link if available
    tags: ['Java', 'Socket Programming', 'Game Development'],
  },
  {
    id: 5,
    title: 'Introduction to Cyber-Security',
    description: 'Completed hands-on offensive security assignments using Kali Linux and Docker-based labs, including privilege escalation and ARP spoofing.',
    icon: Lock,
    link: '#',
    tags: ['Cybersecurity', 'Kali Linux', 'Docker', 'Python'],
  },
  {
    id: 6,
    title: 'AI Threat Detection System',
    description: 'Built an AI-powered cybersecurity threat detection system using ML algorithms (Isolation Forest, DBSCAN, PCA) for anomaly detection, integrated with VirusTotal, AbuseIPDB, OTX AlienVault, MalwareBazaar, and CVE CIRCL threat intelligence APIs for comprehensive security analysis.',
    icon: Shield,
    link: 'https://github.com/jeff13in/AI-threat_Detection',
    tags: ['Python', 'Machine Learning', 'Flask', 'scikit-learn', 'Cybersecurity', 'Threat Intelligence'],
  },
  {
    id: 7,
    title: 'SecureShop Risk Assessment',
    description: 'Conducted a comprehensive GRC security risk assessment for a hypothetical e-commerce platform, identifying 18 control gaps mapped to NIST CSF, PCI-DSS v4.0, GDPR, and OWASP Top 10. Delivered a prioritized remediation roadmap reducing $450K annual risk exposure by 83% with a 383% ROI.',
    icon: ClipboardCheck,
    link: 'https://github.com/jeff13in/SecureShop-Risk-Assessment',
    tags: ['GRC', 'NIST CSF', 'PCI-DSS', 'GDPR', 'OWASP', 'Risk Assessment'],
  },
  {
    id: 8,
    title: 'VibeMap – Music Recommendation System',
    description: 'Developed a full-stack music recommendation system using Spotify audio features. Songs are clustered by mood using K-Means and recommended via KNN, cosine, and euclidean similarity. Features a React + TypeScript frontend, Flask REST API with 8 endpoints, interactive CLI, and 125 automated tests at 88% coverage.',
    icon: Music,
    link: 'https://github.com/jeff13in/VibeMap',
    tags: ['Python', 'React', 'TypeScript', 'Flask', 'Machine Learning', 'scikit-learn'],
  },
];

const Projects = () => {
  return (
    <div id="projects" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">Featured Projects</h2>
          <p className="mt-4 text-lg leading-8 text-gray-400">
            A selection of my work in cybersecurity research and development.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.id}
                className="flex flex-col bg-gray-800/50 border border-gray-700 rounded-2xl p-8 transition-colors hover:bg-gray-800"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <IconComponent className="h-6 w-6 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-100">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-emerald-500"
                    >
                      {project.title}
                    </a>
                  </h3>
                </div>
                <p className="mt-4 text-gray-400 flex-grow">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;