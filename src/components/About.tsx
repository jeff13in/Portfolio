import React from 'react';

const About = () => {
  return (
    <div id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
          {/* Text Section */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">About</h2>
            <p className="mt-4 text-lg leading-8 text-gray-400">
              Hi, I am Jeffin Sam Joji. I am a full-time student at Brock University pursuing a Bachelor of Computer Science.
            </p>
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-gray-100">Here are the technologies I have been working with:</h3>
              <ul className="mt-4 list-disc list-inside text-gray-400">
                <li>TypeScript</li>
                <li>Python</li>
                <li>React.js</li>
                <li>Java</li>
                <li>JavaScript</li>
                <li>C#</li>
              </ul>
            </div>
            <div className="mt-10">
              <p className="mt-4 text-lg leading-8 text-gray-400">
                Outside of Work, I'm interested in solving puzzles and playing chess.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center">
            <img
              src="/Portfolio/IMG_6789.jpg" // Replace with the actual path to your image
              alt="Jeffin Sam Joji"
              className="rounded-lg shadow-lg w-64 h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;