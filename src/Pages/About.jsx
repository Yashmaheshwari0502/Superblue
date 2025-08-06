import React, { useEffect, useState } from 'react';
import rajeshImage from '../assets/images/rajeshmaheshwari.jpg';
import shrayImage from '../assets/images/shraymaheshwari.jpg';

const teamMembers = [
  {
    name: 'Rajesh Maheshwari',
    role: 'Founder & Co-owner, SuperBlue',
    image: rajeshImage,
    bio: 'With decades of industry experience, Rajesh Maheshwari established SuperBlue to deliver high-quality electrical conduit solutions to customers across the country.'
  },
  {
    name: 'Shray Maheshwari',
    role: 'Marketing Head & Co-owner',
    image: shrayImage,
    bio: 'Shray leads the marketing and brand strategy at SuperBlue, bringing fresh ideas, digital innovation, and vision to expand the company’s impact.'
  }
];

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for previous
  
  useEffect(() => {
    document.title = 'SuperBlue - About';
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-12">
          Meet the Leadership at SuperBlue
        </h1>

        <div className="relative w-full h-[500px] overflow-hidden">
          {teamMembers.map((member, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={member.name}
                className={`
                  absolute top-0 left-0 w-full h-full transition-transform duration-700 ease-in-out
                  ${isActive ? 'translate-x-0 z-10' : direction === 1 ? 'translate-x-full z-0' : '-translate-x-full z-0'}
                `}
              >
                <div className="bg-white shadow-xl rounded-xl overflow-hidden h-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-72 object-contain"
                  />
                  <div className="p-6 text-center">
                    <h2 className="text-xl font-semibold text-gray-900">{member.name}</h2>
                    <p className="text-blue-600 font-medium mt-1">{member.role}</p>
                    <p className="mt-4 text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
