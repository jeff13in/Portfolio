import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Code2, Puzzle, Trophy } from 'lucide-react';

const About = () => {
  const technologies = [
    // Frontend
    { name: 'React', category: 'Frontend' },
    { name: 'TypeScript', category: 'Frontend' },
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'HTML/CSS', category: 'Frontend' },
    { name: 'Node.js', category: 'Frontend' },

    // Backend
    { name: 'Python', category: 'Backend' },
    { name: 'Java', category: 'Backend' },
    { name: 'C#', category: 'Backend' },
    { name: 'C++', category: 'Backend' },
    { name: 'PHP', category: 'Backend' },
    { name: 'Ruby', category: 'Backend' },
    { name: 'Django', category: 'Backend' },
    { name: 'Flask', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Backend' },
    { name: 'SQL', category: 'Backend' },

    // Hacking Tools
    { name: 'Splunk', category: 'Hacking Tools' },
    { name: 'Wireshark', category: 'Hacking Tools' },
    { name: 'Burp Suite', category: 'Hacking Tools' },
    { name: 'Nmap', category: 'Hacking Tools' },
    { name: 'Metasploit', category: 'Hacking Tools' },
    { name: 'Bash Scripting', category: 'Hacking Tools' },
    { name: 'Docker', category: 'Hacking Tools' },
    { name: 'PowerShell', category: 'Hacking Tools' },
    { name: 'Kali Linux', category: 'Hacking Tools' },
  ];

  const interests = [
    { name: 'Solving Puzzles', icon: Puzzle },
    { name: 'Playing Chess', icon: Trophy },
  ];

  return (
    <div id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">About Me</h2>
          <p className="mt-4 text-lg leading-8 text-gray-400">
            Full-stack developer and cybersecurity enthusiast
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Profile Card */}
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Avatar className="h-32 w-32 ring-2 ring-emerald-500/20">
                  <AvatarImage
                    src="/Portfolio/IMG_6789.jpg"
                    alt="Jeffin Sam Joji"
                    className="object-cover object-center"
                  />
                  <AvatarFallback className="bg-emerald-500 text-white text-2xl">JSJ</AvatarFallback>
                </Avatar>
              </div>
              <CardTitle className="text-2xl text-gray-100">Jeffin Sam Joji</CardTitle>
              <CardDescription className="text-gray-400">
                Computer Science Student at Brock University
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed">
                Hi, I'm a full-time student at Brock University pursuing a Bachelor of Computer Science.
                I'm passionate about cybersecurity, full-stack development, and building automation tools
                that solve real-world problems.
              </p>

              <Separator className="my-6 bg-gray-700" />

              <div>
                <h3 className="text-lg font-semibold text-gray-100 mb-4 flex items-center gap-2">
                  <Puzzle className="h-5 w-5 text-emerald-500" />
                  Interests
                </h3>
                <div className="flex flex-wrap gap-3">
                  {interests.map((interest) => {
                    const IconComponent = interest.icon;
                    return (
                      <Badge
                        key={interest.name}
                        variant="outline"
                        className="border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10"
                      >
                        <IconComponent className="h-3 w-3 mr-1" />
                        {interest.name}
                      </Badge>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technologies Card */}
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-gray-100 flex items-center gap-2">
                <Code2 className="h-6 w-6 text-emerald-500" />
                Tech Stack
              </CardTitle>
              <CardDescription className="text-gray-400">
                Technologies and tools I've been working with
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-300 mb-3">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    {technologies
                      .filter(tech => tech.category === 'Frontend')
                      .map((tech) => (
                        <Badge
                          key={tech.name}
                          className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20"
                        >
                          {tech.name}
                        </Badge>
                      ))}
                  </div>
                </div>

                <Separator className="bg-gray-700" />

                <div>
                  <h4 className="text-sm font-medium text-gray-300 mb-3">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    {technologies
                      .filter(tech => tech.category === 'Backend')
                      .map((tech) => (
                        <Badge
                          key={tech.name}
                          className="bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/20"
                        >
                          {tech.name}
                        </Badge>
                      ))}
                  </div>
                </div>

                <Separator className="bg-gray-700" />

                <div>
                  <h4 className="text-sm font-medium text-gray-300 mb-3">Cybersecurity & Hacking Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {technologies
                      .filter(tech => tech.category === 'Hacking Tools')
                      .map((tech) => (
                        <Badge
                          key={tech.name}
                          className="bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20"
                        >
                          {tech.name}
                        </Badge>
                      ))}
                  </div>
                </div>

                <Separator className="bg-gray-700" />

                <div className="pt-2">
                  <p className="text-sm text-gray-400 italic">
                    Always learning and exploring new technologies...
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;