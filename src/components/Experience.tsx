import React from 'react';

const Experience = [
  {
    id: 1,
    title: 'Cybersecurity Job Simulation at PwC',
    description: 'Completed a job simulation involving cybersecurity for PwC Digital Intelligence, gaining experience in understanding and explaining the concept of integrated defense. Developed expertise in integrated defense strategies and their application in real-world scenarios. Conducted risk assessments and formulated security recommendations for a client. Demonstrated proficiency in cybersecurity terminology, network segmentation, and firewall configuration',
    link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/4sLyCPgmsy8DA6Dh3/f9H4CHchzrKQbnbmK_4sLyCPgmsy8DA6Dh3_TnaiatFqQ63rTfNSf_1730924737896_completion_certificate.pdf', // Ensure this is a valid URL
    tags: ['Cause Analysis',
        'Firewall Configuration',
        'Integrated Defense',
        'Network Segmentation',     
        'Impact Analysis',
        'Network Security',
        'Presentation Prep',
        'Principles of Defense',
        'Risk Impact Assessment',
        'Risk Management Frameworks',
        'System Security'],
  },
 
];

const Experiences = () => {
  return (
    <div id="experience" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">Experience</h2>
          <p className="mt-4 text-lg leading-8 text-gray-400">
            A selection of my work in cybersecurity research and development.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {Experience.map((experience) => {
            return (
              <div
                key={experience.id}
                className="flex flex-col bg-gray-800/50 border border-gray-700 rounded-2xl p-8 transition-colors hover:bg-gray-800"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                  </div>
                  <h3 className="text-xl font-semibold text-gray-100">
                    <a
                      href={experience.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-emerald-500"
                    >
                      {experience.title}
                    </a>
                  </h3>
                </div>
                <p className="mt-4 text-gray-400 flex-grow">{experience.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {experience.tags.map((tag) => (
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

export default Experiences;