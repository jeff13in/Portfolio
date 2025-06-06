import React from 'react';

const products = [
  {
    id: 1,
    name: 'Linen Tunic',
    price: '$120',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Draped Dress',
    price: '$180',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'Woven Jacket',
    price: '$240',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80',
  },
];

const Featured = () => {
  return (
    <div id="products" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Featured Collection</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Handcrafted pieces that tell stories through minimal design and cultural inspiration.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {products.map((product) => (
            <article key={product.id} className="flex flex-col items-start">
              <div className="w-full overflow-hidden rounded-2xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-96 w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="mt-4 flex items-center justify-between w-full">
                <div className="text-lg font-semibold text-gray-900">{product.name}</div>
                <div className="text-base text-gray-600">{product.price}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;