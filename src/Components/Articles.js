import React from 'react';

const articles = [
  {
    id: 1,
    title: 'From Bits to Qubits: Understanding Superposition and Dirac Notation',
    description: 'This article explores the very basics of quantum computing, focusing on qubits and their difference from classical bits. It delves into the concept of superposition, and then goes on to explain Dirac notation, a standard notation used to describe quantum states.',
    link: 'https://medium.com/@abdtariq78/from-bits-to-qubits-understanding-superposition-and-dirac-notation-f75b78633a30',
    date: 'Sep 29, 2025',
    category: 'Quantum Computing',
  }
];

const Articles = () => {
  return (
    <div className="py-16 bg-[#0a192f]">
      <div className="max-w-6xl mx-auto px-4">
        
        <h2 className="text-4xl font-semibold text-[#416D19] border-b-4 border-pink-300 inline-block mb-6">
          Articles & Stories
        </h2>

        <p className="text-white mb-12 font-normal">
          / Read the latest stories and articles that I have written or will write. /
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div 
              key={article.id} 
              className="bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            >
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm text-gray-500">{article.date}</span>
                  <span className="px-3 py-1 text-xs font-medium bg-white border border-gray-300 rounded-full text-gray-700">
                    {article.category}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 h-12 leading-6 line-clamp-2">
                  {article.title}
                </h3>

                <div className="border-b border-gray-200 mb-4" />
                
                <p className="text-sm text-gray-600 mb-4 text-justify leading-relaxed flex-grow">
                  {article.description}
                </p>

                <div className="border-b border-gray-200 mb-4" />

                <a 
                  href={article.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline text-sm font-medium mt-auto"
                >
                  Read more
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
