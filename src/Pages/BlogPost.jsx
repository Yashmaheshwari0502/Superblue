import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from './Blog';
import SEO from '../components/SEO';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) return <div className="text-center mt-20 text-xl text-red-600">Post not found</div>;

  return (
    <div className="min-h-screen bg-white px-4 py-12 sm:px-6 lg:px-8">
      <SEO 
        title={`${post.title} | Superblue Blog`} 
        description={post.excerpt} 
      />
      <article className="max-w-3xl mx-auto text-gray-800">
        <Link to="/blog" className="text-blue-600 hover:underline mb-6 inline-block font-semibold">← Back to Blog</Link>
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">{post.title}</h1>
        <p className="text-gray-500 mb-8 border-b pb-4">{post.date}</p>
        
        {/* We use standard HTML classnames here but generally tailwind prose is preferred.
            Since typography plugin isn't installed by default, we'll manually style the inner HTML using standard CSS cascades if needed, or simply standard semantic tags. */}
        <div 
          className="space-y-6 leading-relaxed text-lg 
                     [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-blue-800 [&>h2]:mt-8
                     [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-blue-700 [&>h3]:mt-6
                     [&>p]:text-gray-700" 
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
      </article>
    </div>
  );
}
