import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Shield, Lock, Terminal, Bug } from 'lucide-react';

const Hero = () => {
  return (
    <div id="about" className="relative pt-24 pb-32 sm:pt-32 sm:pb-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 text-emerald-500 mb-4">
              <Terminal className="h-5 w-5" />
              <span className="font-mono">{'>'} whoami</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">
              <TypeAnimation
                sequence={[
                  'Cybersecurity Analyst',
                  2000,
                  'Junior Penetration Tester',
                  2000,
                  'AI Developer',
                  2000,
                  'Full Stack Developer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-400">
            Talented and tech-savvy 4th-year computer science student actively seeking opportunities in IT and Cybersecurity roles for 2025, where I can showcase my strong competence and knowledge in the field.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#projects"
                className="rounded-md bg-emerald-500 px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-emerald-400 transition-colors"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="text-sm font-semibold leading-6 text-gray-300 hover:text-emerald-500 transition-colors"
              >
                Contact Me <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-3xl filter blur-3xl"></div>
            <div className="relative bg-gray-800 p-8 rounded-3xl border border-gray-700">
              <pre className="font-mono text-sm text-gray-300">
                <code>{`#!/usr/bin/python3

def secure_system():
    implement_zero_trust()
    enforce_least_privilege()
    monitor_threats()
    respond_to_incidents()

if __name__ == "__main__":
    secure_system()
    print("System secured.")`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;