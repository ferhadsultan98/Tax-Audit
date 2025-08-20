import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Calendar, ArrowRight, TrendingUp, User } from "lucide-react";
import postsData from "../../Blog/BlogPosts.json";
import "./LatesUpdatesSection.scss";

const LatesUpdatesSection = () => {
  const { t, i18n } = useTranslation();
  const [blogPosts, setBlogPosts] = useState([]);
  const language = i18n.language;

  useEffect(() => {
    try {
      const sortedPosts = postsData.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
      setBlogPosts(sortedPosts.slice(0, 3));
    } catch (err) {
      console.error("Failed to load blog posts:", err);
    }
  }, []);

  if (blogPosts.length === 0) {
    return null;
  }

  return (
    <section className="homeBlog">
      <div className="blogContainer">
        <div className="blogHeader">
          <span className="sectionLabel">{t("home.latestUpdates.section_label")}</span>
          <h2 className="sectionTitle">{t("home.latestUpdates.section_title")}</h2>
          <p className="sectionDesc">{t("home.latestUpdates.section_description")}</p>
        </div>

        <div className="blogGrid">
          {blogPosts.map((post) => (
            <article key={post.id} className={`blogCard ${post.featured ? "featured" : ""}`}>
              <div className="cardImage">
                <img
                  src={post.image_id}
                  alt={post[`title_${language}`] || post.title_en}
                />
                <div className="imageOverlay"></div>
                {post.featured && (
                  <span className="trendingBadge">
                    <TrendingUp size={14} />
                    {t("home.latestUpdates.trending")}
                  </span>
                )}
                <span className="categoryBadge">{t(`blogSection.categories.${post.category}`)}</span>
              </div>

              <div className="cardContent">
                <div className="cardMeta">
                  <span className="metaItem">
                    <User size={14} />
                    {post.author}
                  </span>
                  <span className="metaItem">
                    <Calendar size={14} />
                    {new Date(post.date).toLocaleDateString(language, {
                      month: "numeric",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>

                <h3 className="cardTitle">
                  {(post[`title_${language}`] || post.title_en).length > 15
                    ? (post[`title_${language}`] || post.title_en).substring(0, 15) + "..."
                    : post[`title_${language}`] || post.title_en}
                </h3>
                <p className="cardExcerpt">
                  {(post[`excerpt_${language}`] || post.excerpt_en).length > 15
                    ? (post[`excerpt_${language}`] || post.excerpt_en).substring(0, 15) + "..."
                    : post[`excerpt_${language}`] || post.excerpt_en}
                </p>

                <a href={`/blog/${post.id}`} className="readMore">
                  {t("home.latestUpdates.read_article")}
                  <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="blogFooter">
          <a href="/blog" className="viewAllBtn">
            {t("home.latestUpdates.view_all_articles")}
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LatesUpdatesSection;