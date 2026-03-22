import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  // Define words to filter out (add your specific words here)
  const forbiddenWords = [
    'choot',
    'madarchod',
    'bhosdike',
    'gandu',
    'bhenchod',
    'saala',
    'behen',
    'bhen ki',
    'bhen ki chut',
    'chut',
    'chutiyapa',
    'chutiyah',
    'chutiyah',
    'chutiyapan', 
    'sex',
    'sexual',
    'fuck',
    'porn',
    'bhosdi',
    'aand',
    'rape',
    // Add more words as needed
  ];



  // Function to filter out forbidden words
  const filterMessage = (text) => {
    let filteredText = text;
    forbiddenWords.forEach(word => {
      const regex = new RegExp(word, 'gi'); // Case insensitive
      filteredText = filteredText.replace(regex, '');
    });
    return filteredText;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'name') {
      if (/^[A-Za-z\s]*$/.test(value)) {
        setFormData({ ...formData, [name]: value });
      }
    } else if (name === 'phone') {
      if (/^[0-9]*$/.test(value)) {
        setFormData({ ...formData, [name]: value });
      }
    } else if (name === 'message') {
      // Filter the message content instantly
      const filteredValue = filterMessage(value);
      setFormData({ ...formData, [name]: filteredValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formEndpoint = "https://formspree.io/f/xvgqbdra"; // Replace with your actual Formspree endpoint

    try {
      const res = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Thank you! Your message has been sent.");

        // Auto-download Price List PDF
        const link = document.createElement("a");
        link.href = "/SuperBlue_Price_List.pdf"; // Place this file in /public
        link.download = "SuperBlue_Price_List.pdf";
        link.click();

        setFormData({ name: '', phone: '', message: '' });
      } else {
        throw new Error("Form not submitted");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-white px-4 py-12">
      <SEO 
        title="Contact SuperBlue | Buy Electrical Pipe & Wire" 
        description="Contact Superblue Industries today. Get a quote or download our price list for premium electrical pipes and wiring accessories." 
      />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-2">
          Contact Us
        </h1>

        <p className="text-center font-bold text-gray-600 text-lg mb-3">
          Fill form for downloading the price list
        </p>

        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your mobile number"
              maxLength={10}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <div className="pt-4 space-y-4">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all shadow-md w-full"
            >
              Submit & Download Price List
            </button>

            <div className="text-center">
              <a
                href="/SuperBlue_Distributorship_Form.pdf" // Place this in public/
                download
                className="text-blue-600 font-medium underline hover:text-blue-800"
              >
                Download Distributorship Form
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}