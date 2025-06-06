import React from 'react';

const About = () => {
  return (
    <div id="about" className="bg-stone-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Story</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Hebr was born from a desire to create clothing that honors cultural heritage while embracing modern minimalism. 
              Each piece in our collection is thoughtfully designed to tell a story, combining traditional elements with 
              contemporary silhouettes.
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              We work with skilled artisans who bring generations of expertise to our pieces, ensuring that every 
              garment maintains the highest standards of craftsmanship while promoting sustainable and ethical 
              fashion practices.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80"
              alt="Artisan workshop"
              className="aspect-[3/2] w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;