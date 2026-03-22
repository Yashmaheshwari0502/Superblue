import React, { useEffect, useState } from 'react';
import rajeshImage from '../assets/images/rajeshmaheshwari.jpg';
import shrayImage from '../assets/images/shraymaheshwari.jpg';
import SEO from '../components/SEO';

const teamMembers = [
  {
    name: 'Rajesh Maheshwari',
    role: 'Founder & Co-owner, SuperBlue',
    image: rajeshImage,
    bio: 'With decades of experience in the electrical industry, Rajesh Maheshwari founded SuperBlue to become the most trusted distributor of Polycab and Finolex products in Uttar Pradesh. His deep industry knowledge and commitment to quality have built strong relationships with brands and customers alike.'
  },
  {
    name: 'Shray Maheshwari',
    role: 'Marketing Head & Co-owner',
    image: shrayImage,
    bio: 'Shray spearheads SuperBlue\'s digital presence and marketing strategy, driving expansion across Saharanpur, Ghaziabad, and beyond. He is passionate about making genuine Polycab and Finolex products accessible to every electrician and contractor in the region.'
  }
];

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <SEO 
        title="About SuperBlue | Polycab & Finolex Distributor Saharanpur & Ghaziabad" 
        description="Meet Rajesh and Shray Maheshwari, the team behind SuperBlue — authorized distributors of Polycab and Finolex conduit pipes and wires in Saharanpur and Ghaziabad." 
      />
      
      {/* Mission Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">About SuperBlue</h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          SuperBlue is the <strong>authorized distributor of Polycab and Finolex</strong> conduit pipes, electrical wires, and accessories. Based in <strong>Saharanpur</strong> and <strong>Ghaziabad</strong>, we serve electricians, contractors, and builders across Uttar Pradesh, Delhi-NCR, Haryana, Punjab, and Uttarakhand with 100% genuine products, competitive pricing, and fast delivery.
        </p>
      </div>

      {/* Brand Badges */}
      <div className="max-w-3xl mx-auto mb-16">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-2xl font-bold text-blue-900 text-center mb-6">Our Brand Partners</h2>
          <div className="flex flex-wrap justify-center items-center gap-10">
            <img 
              src="/polycab-logo.png" 
              alt="Polycab Logo" 
              className="h-12 sm:h-14 object-contain"
            />
            <img 
              src="/finolex-logo.svg" 
              alt="Finolex Logo" 
              className="h-12 sm:h-14 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-10">Meet the Leadership</h2>
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
                <div className="bg-white shadow-lg rounded-2xl overflow-hidden h-full border border-gray-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-72 object-contain"
                  />
                  <div className="p-6 text-center">
                    <h2 className="text-xl font-bold text-gray-900">{member.name}</h2>
                    <p className="text-blue-600 font-medium mt-1">{member.role}</p>
                    <p className="mt-3 text-gray-600 text-sm leading-relaxed">{member.bio}</p>
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
