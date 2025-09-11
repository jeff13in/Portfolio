import React from 'react';
import { Mail, Github, Linkedin, Terminal } from 'lucide-react';

const Contact = () => {
  return (
    <div id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">Contact</h2>
          <p className="mt-4 text-lg leading-8 text-gray-400">
            Feel free to reach out to me via email or connect with me on LinkedIn.
          </p>
        </div>
        <div className="mt-10">
          <ul className="list-none text-gray-400">
            <li>Email: <a href="mailto:jeffinsam@example.com" className="text-blue-400">jeffinsam@example.com</a></li>
            <li>LinkedIn: <a href="https://linkedin.com/in/jeffinsam" className="text-blue-400">linkedin.com/in/jeffinsam</a></li>
          </ul>
        </div>
        <div className="mt-16 flex justify-center gap-8">
          <a href="https://github.com/jeff13in" target="_blank" className="text-gray-400 hover:text-emerald-500 transition-colors">
            <Github className="h-6 w-6" />
          </a>
          <a href="https://www.linkedin.com/in/jeffin-sam-joji/" target="_blank" className="text-gray-400 hover:text-emerald-500 transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="mailto:ejffinsam14@gmail.com" target="_blank" className="text-gray-400 hover:text-emerald-500 transition-colors">
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;