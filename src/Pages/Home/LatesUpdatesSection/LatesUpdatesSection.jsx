import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Calendar, Clock, ArrowRight, TrendingUp, User } from 'lucide-react';
import './LatesUpdatesSection.scss';

const LatesUpdatesSection = () => {
  const { t, i18n } = useTranslation();
  const [blogPosts, setBlogPosts] = useState([]);
  const language = i18n.language;
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; 
  
  useEffect(() => {
    fetch(`${API_BASE_URL}/api/blog/posts/`)
      .then((res) => res.json())
      .then((data) => {
        // Sort posts to put featured first
        const sortedPosts = data.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        setBlogPosts(sortedPosts.slice(0, 3)); 
      })
      .catch((err) => console.error("Failed to fetch blog posts:", err));
  }, []);

  // If no blog posts are available, don't render the section
  if (blogPosts.length === 0) {
    return null;
  }

  return (
    <section className="homeBlog">
      <div className="blogContainer">
        <div className="blogHeader">
          <span className="sectionLabel">{t('home.latestUpdates.section_label')}</span>
          <h2 className="sectionTitle">
            {t('home.latestUpdates.section_title')}
          </h2>
          <p className="sectionDesc">
            {t('home.latestUpdates.section_description')}
          </p>
        </div>

        <div className="blogGrid">
          {blogPosts.map((post) => (
            <article key={post.id} className={`blogCard ${post.featured ? 'featured' : ''}`}>
              <div className="cardImage">
                <img src={post.image_id ? `${API_BASE_URL}/api/blog/images/${post.image_id}/` : post.image} alt={post[`title_${language}`] || post.title} />
                <div className="imageOverlay"></div>
                {post.trending && (
                  <span className="trendingBadge">
                    <TrendingUp size={14} />
                    {t('home.latestUpdates.trending')}
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
                  {/* <span className="metaItem">
                    <Clock size={14} />
                    {post.readTime}
                  </span> */}
                </div>
                
                <h3 className="cardTitle">{(post[`title_${language}`] || post.title).length > 15 ? (post[`title_${language}`] || post.title).substring(0, 15) + '...' : (post[`title_${language}`] || post.title)}</h3>
                <p className="cardExcerpt">{(post[`excerpt_${language}`] || post.excerpt).length > 15 ? (post[`excerpt_${language}`] || post.excerpt).substring(0, 15) + '...' : (post[`excerpt_${language}`] || post.excerpt)}</p>
                
                <a href={`/blog/${post.id}`} className="readMore">
                  {t('home.latestUpdates.read_article')}
                  <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="blogFooter">
          <a href="/blog" className="viewAllBtn">
            {t('home.latestUpdates.view_all_articles')}
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LatesUpdatesSection;