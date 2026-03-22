import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export const blogPosts = [
  {
    slug: 'polycab-vs-finolex-conduit-pipes',
    title: 'Polycab vs Finolex Conduit Pipes: Which One Should You Choose?',
    excerpt: 'A detailed comparison of Polycab and Finolex PVC conduit pipes — covering quality, pricing, availability, and what electricians in Saharanpur and Ghaziabad prefer.',
    content: `
      <h2>Polycab vs Finolex: The Ultimate Conduit Pipe Comparison</h2>
      <p>When it comes to choosing PVC conduit pipes for residential or commercial wiring, two brands dominate the Indian market: <strong>Polycab</strong> and <strong>Finolex</strong>. As authorized distributors of both brands, SuperBlue helps you make the right choice.</p>
      
      <h3>Polycab PVC Conduit Pipes</h3>
      <p>Polycab conduit pipes are known for their uniform wall thickness and excellent impact strength. They come ISI certified (IS 9537) and are available in 20mm and 25mm sizes. Polycab pipes feature a smooth interior that makes wire pulling effortless during installation.</p>
      
      <h3>Finolex PVC Conduit Pipes</h3>
      <p>Finolex conduit pipes are manufactured using virgin PVC compound, ensuring superior UV resistance and longevity. They are self-extinguishing (fire retardant) and resist chemical corrosion. Finolex pipes are popular among contractors in Ghaziabad and Saharanpur for their consistent quality.</p>
      
      <h3>Which One to Pick?</h3>
      <p>Both brands offer excellent quality. For heavy commercial installations, many electricians prefer Polycab for its slightly thicker walls. For residential projects, Finolex offers great value. At SuperBlue, we stock both brands at competitive wholesale prices.</p>
      
      <p><strong>Visit SuperBlue in Saharanpur or Ghaziabad</strong> to get the best prices on both Polycab and Finolex conduit pipes.</p>
    `,
    date: 'Mar 10, 2026',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=400&fit=crop'
  },
  {
    slug: 'how-to-choose-house-wire-polycab-finolex',
    title: 'How to Choose the Right House Wire: Polycab & Finolex Guide',
    excerpt: 'Confused about wire sizes? Learn which Polycab or Finolex house wire gauge to use for lights, fans, ACs, and geysers in your new home.',
    content: `
      <h2>Choosing the Right Electrical Wire for Your Home</h2>
      <p>Selecting the correct house wire is critical for electrical safety. Using undersized wire can lead to overheating, voltage drops, and fire hazards. Here's a complete guide using <strong>Polycab</strong> and <strong>Finolex</strong> house wires.</p>
      
      <h3>1.0 Sq mm Wire (Polycab / Finolex)</h3>
      <p>Best for LED lighting circuits and low-power applications. Both Polycab and Finolex offer FRLS (Flame Retardant Low Smoke) insulation in this size.</p>
      
      <h3>1.5 Sq mm Wire (Polycab / Finolex)</h3>
      <p>The most commonly used house wire size. Suitable for fan points, 5A switch sockets, and general lighting. Polycab's Optima series and Finolex's FR house wire are top choices.</p>
      
      <h3>2.5 Sq mm Wire (Polycab / Finolex)</h3>
      <p>Required for 15A power sockets. Use this for points where you'll plug in TVs, computers, and kitchen appliances.</p>
      
      <h3>4.0 Sq mm Wire (Finolex / Polycab)</h3>
      <p>Heavy-duty wire for air conditioners, geysers, and washing machines. Always use this gauge for high-load appliances to prevent overheating.</p>
      
      <p><strong>Buy genuine Polycab and Finolex wires</strong> from SuperBlue — your authorized distributor in Saharanpur and Ghaziabad. Call us for wholesale pricing!</p>
    `,
    date: 'Mar 15, 2026',
    image: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?w=600&h=400&fit=crop'
  },
  {
    slug: 'electrical-accessories-fan-box-conceal-box',
    title: 'Essential Electrical Accessories: Fan Box, Conceal Box & Batten Holder Guide',
    excerpt: 'A complete guide to PVC fan boxes, conceal boxes, and batten holders — the essential accessories every electrician needs for quality installations.',
    content: `
      <h2>Must-Have Electrical Accessories for Every Project</h2>
      <p>Beyond wires and conduit pipes, every electrical installation needs reliable accessories. Here's what you need to know about the essentials available at SuperBlue.</p>
      
      <h3>PVC Fan Box</h3>
      <p>A ceiling fan box is embedded in the ceiling slab and holds the fan hook securely. Our fan boxes support up to 25 kg load and are made from fire-retardant PVC material. They're essential for any residential construction project.</p>
      
      <h3>PVC Conceal Box</h3>
      <p>Conceal boxes (also called switch boxes) are mounted flush inside walls to house modular switches and sockets. They come in standard sizes to fit popular modular switch plates from brands like Anchor, Havells, and Legrand.</p>
      
      <h3>Batten Holder (B22)</h3>
      <p>The batten holder is a simple but crucial component for bulb mounting. Our ISI-marked B22 batten holders feature heat-resistant bodies and brass contacts for reliable, long-lasting performance.</p>
      
      <h3>Junction Box</h3>
      <p>Junction boxes are used for wire splicing and branching. They keep connections safe, organized, and accessible for future maintenance.</p>
      
      <p><strong>SuperBlue stocks all essential electrical accessories</strong> in Saharanpur and Ghaziabad. Visit us or call for bulk orders!</p>
    `,
    date: 'Mar 18, 2026',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop'
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <SEO 
        title="Blog | Polycab & Finolex Tips, Guides & Comparisons - SuperBlue" 
        description="Read expert guides on Polycab and Finolex conduit pipes, house wires, and electrical accessories. Tips from SuperBlue, your trusted distributor in Saharanpur & Ghaziabad." 
        keywords="Polycab vs Finolex, conduit pipe guide, house wire sizes, electrical accessories guide, SuperBlue blog"
      />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-3">SuperBlue Blog</h1>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">Expert guides, comparisons, and tips on Polycab & Finolex electrical products.</p>
        <div className="grid gap-8 md:grid-cols-1">
          {blogPosts.map(post => (
            <div key={post.slug} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition border border-gray-100 flex flex-col sm:flex-row">
              <img src={post.image} alt={post.title} className="w-full sm:w-64 h-48 sm:h-auto object-cover" />
              <div className="p-6 flex flex-col justify-center">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <Link to={`/blog/${post.slug}`}>
                  <h2 className="text-xl font-bold text-blue-900 hover:text-blue-600 mb-3 leading-tight">{post.title}</h2>
                </Link>
                <p className="text-gray-600 mb-4 text-sm line-clamp-2">{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className="text-blue-600 font-semibold hover:underline text-sm">Read More →</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
