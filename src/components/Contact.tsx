import React from 'react';
import { Mail, Github, Linkedin, Terminal } from 'lucide-react';

const Contact = () => {
  return (
    <div id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">Get in Touch</h2>
          <p className="mt-4 text-lg leading-8 text-gray-400">
            Interested in collaborating on security research. Let's connect.
          </p>
        </div>
        <form className="mx-auto mt-16 max-w-xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-100">
                Name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full rounded-md border-0 bg-gray-800 px-3.5 py-2 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-100">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-md border-0 bg-gray-800 px-3.5 py-2 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-100">
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 bg-gray-800 px-3.5 py-2 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-emerald-500 px-3.5 py-2.5 text-center text-sm font-semibold text-gray-900 shadow-sm hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
            >
              Send Message
            </button>
          </div>
        </form>
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