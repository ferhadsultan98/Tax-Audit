import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Calendar, Clock, ArrowRight, TrendingUp, User } from 'lucide-react';
import './LatesUpdatesSection.scss';

const LatesUpdatesSection = () => {
  const { i18n } = useTranslation();
  const [blogPosts, setBlogPosts] = useState([]);
  const language = i18n.language;

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/blog/posts/")
      .then((res) => res.json())
      .then((data) => setBlogPosts(data.slice(0, 4))) // Only take first 4 posts
      .catch((err) => console.error("Failed to fetch blog posts:", err));
  }, []);

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
          {blogPosts.map((post) => (
            <article key={post.id} className={`blogCard ${post.featured ? 'featured' : ''}`}>
              <div className="cardImage">
                <img src={post.image_id ? `http://127.0.0.1:8000/api/blog/images/${post.image_id}/` : post.image} alt={post[`title_${language}`] || post.title} />
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
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'numeric',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                  <span className="metaItem">
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                </div>
                
                <h3 className="cardTitle">{post[`title_${language}`] || post.title}</h3>
                <p className="cardExcerpt">{post[`excerpt_${language}`] || post.excerpt}</p>
                
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