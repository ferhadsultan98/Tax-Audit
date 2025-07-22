import React from 'react';
import './LatesUpdatesSection.scss';
import { Calendar, Clock, ArrowRight, TrendingUp, User } from 'lucide-react';

const LatesUpdatesSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'New Tax Regulations for 2025: What Businesses Need to Know',
      excerpt: 'Comprehensive guide to understanding the latest tax law changes and their impact on corporate financial planning strategies.',
      category: 'Tax Advisory',
      author: 'Michael Chen',
      date: 'Jan 15, 2025',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop',
      trending: true
    },
    {
      id: 2,
      title: 'Digital Transformation in Audit: Embracing AI and Analytics',
      excerpt: 'Explore how artificial intelligence and data analytics are revolutionizing traditional audit processes and improving accuracy.',
      category: 'Technology',
      author: 'Sarah Johnson',
      date: 'Jan 12, 2025',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      trending: false
    },
    {
      id: 3,
      title: 'ESG Reporting: A Complete Guide for Modern Businesses',
      excerpt: 'Understanding Environmental, Social, and Governance reporting requirements and best practices for sustainable business growth.',
      category: 'Compliance',
      author: 'David Kumar',
      date: 'Jan 10, 2025',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop',
      trending: false
    }
  ];

  return (
    <section className="homeBlog">
      <div className="blogContainer">
        <div className="blogHeader">
          <span className="sectionLabel">Latest Insights</span>
          <h2 className="sectionTitle">
            News & Professional Insights
          </h2>
          <p className="sectionDesc">
            Discover the latest news, analysis, and expert advice from the world of audit, accounting, and business
          </p>
        </div>

        <div className="blogGrid">
          {blogPosts.map((post, index) => (
            <article key={post.id} className={`blogCard ${index === 0 ? 'featured' : ''}`}>
              <div className="cardImage">
                <img src={post.image} alt={post.title} />
                <div className="imageOverlay"></div>
                {post.trending && (
                  <span className="trendingBadge">
                    <TrendingUp size={14} />
                    Trending
                  </span>
                )}
                <span className="categoryBadge">{post.category}</span>
              </div>
              
              <div className="cardContent">
                <div className="cardMeta">
                  <span className="metaItem">
                    <User size={14} />
                    {post.author}
                  </span>
                  <span className="metaItem">
                    <Calendar size={14} />
                    {post.date}
                  </span>
                  <span className="metaItem">
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                </div>
                
                <h3 className="cardTitle">{post.title}</h3>
                <p className="cardExcerpt">{post.excerpt}</p>
                
                <a href={`/blog/${post.id}`} className="readMore">
                  Read Article
                  <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="blogFooter">
          <a href="/blog" className="viewAllBtn">
            View All Articles
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LatesUpdatesSection;