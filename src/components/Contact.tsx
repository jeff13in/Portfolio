import React, { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link with form data
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:ejffinsam14@gmail.com?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">Get in Touch</h2>
          <p className="mt-4 text-lg leading-8 text-gray-400">
            Interested in collaborating on security research. Let's connect.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-100">
                Name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 bg-gray-800 px-3.5 py-2 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-emerald-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-100">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 bg-gray-800 px-3.5 py-2 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-emerald-500 sm:text-sm sm:leading-6"
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
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 bg-gray-800 px-3.5 py-2 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-emerald-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-emerald-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 transition-colors"
            >
              Send Message
            </button>
          </div>
        </form>

        <div className="mt-16 flex justify-center gap-8">
          <a href="https://github.com/jeff13in" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-500 transition-colors">
            <Github className="h-6 w-6" />
          </a>
          <a href="https://www.linkedin.com/in/jeffin-sam-joji/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-500 transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="mailto:ejffinsam14@gmail.com" className="text-gray-400 hover:text-emerald-500 transition-colors">
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;