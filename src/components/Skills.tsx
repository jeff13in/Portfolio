import React from 'react';
import { Shield, Terminal, Database, Cloud, Code, Lock, Network, Bug } from 'lucide-react';

const skills = [
  {
    category: 'Offensive Security',
    items: ['Penetration Testing', 'Exploit Development', 'Red Teaming', 'Social Engineering'],
    icon: Shield,
  },
  {
    category: 'Malware Analysis',
    items: ['Reverse Engineering', 'Dynamic Analysis', 'Static Analysis', 'Threat Intelligence'],
    icon: Bug,
  },
  {
    category: 'Security Development',
    items: ['Secure Coding', 'SAST/DAST', 'CI/CD Security', 'Security Architecture'],
    icon: Code,
  },
  {
    category: 'Network Security',
    items: ['Protocol Analysis', 'IDS/IPS', 'Firewall Configuration', 'Zero Trust'],
    icon: Network,
  },
];

const Skills = () => {
  return (
    <div id="skills" className="py-24 sm:py-32 bg-gray-800/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">Technical Expertise</h2>
          <p className="mt-4 text-lg leading-8 text-gray-400">
            Comprehensive skillset in cybersecurity and secure software development.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {skills.map((skill) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.category}
                className="relative flex flex-col bg-gray-900 rounded-2xl p-8 border border-gray-700"
              >
                <div className="flex items-center gap-4 mb-6">
                  <IconComponent className="h-6 w-6 text-emerald-500" />
                  <h3 className="text-xl font-semibold text-gray-100">{skill.category}</h3>
                </div>
                <ul className="space-y-4">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-400">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;