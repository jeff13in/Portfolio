import React from 'react';
import { Shield, Lock, Bug, Wifi, SquareGantt } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'AI Newsletter and Social Media Content Generator',
    description: 'Developed a full-stack web application using Django and NLP to automate content creation for newsletters and social media platforms.',
    icon: SquareGantt,
    link: 'https://github.com/iaminhri/COSC-4P02', // Ensure this is a valid URL
    tags: ['Python', 'Django', 'NLP', 'Full Stack'],
  },
  {
    id: 2,
    title: 'Neural Network Hyperparameter Tuning using Weka',
    description: 'Optimized machine learning models by experimenting with hyperparameters like learning rate and momentum using Weka.',
    icon: Bug,
    link: '/Portfolio/Cosc_3p71_Assignment_3.pdf', // Replace with actual link if available
    tags: ['Machine Learning', 'Weka', 'Data Analysis'],
  },
  {
    id: 3,
    title: 'Multiplayer Game using Socket Programming',
    description: 'Built a networked multiplayer game in Java using sockets and Swing, supporting real-time synchronization and messaging.',
    icon: Wifi,
    link: '#', // Replace with actual link if available
    tags: ['Java', 'Socket Programming', 'Game Development'],
  },
  {
    id: 4,
    title: 'Introduction to Cyber-Security',
    description: 'Completed hands-on offensive security assignments using Kali Linux and Docker-based labs, including privilege escalation and ARP spoofing.',
    icon: Lock,
    link: '#', // Replace with actual link if available
    tags: ['Cybersecurity', 'Kali Linux', 'Docker', 'Python'],
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