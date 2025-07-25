import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  Search,
  TrendingUp,
  Filter,
} from "lucide-react";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import "./Blog.scss";

const Blog = () => {
  const { i18n } = useTranslation();
  const [blogPosts, setBlogPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isWideLayout, setIsWideLayout] = useState(true);
  const language = i18n.language;

  const categories = [
    { id: "all", name: "All Posts" },
    { id: "tax", name: "Tax Advisory" },
    { id: "audit", name: "Audit & Compliance" },
    { id: "consulting", name: "Business Consulting" },
    { id: "accounting", name: "Accounting" },
    { id: "legal", name: "Legal Updates" },
  ];

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/blog/posts/")
      .then((res) => res.json())
      .then((data) => setBlogPosts(data))
      .catch((err) => console.error("Failed to fetch blog posts:", err));
  }, []);

  const filteredPosts = blogPosts.filter((post) => {
    const title = post[`title_${language}`] || "";
    const excerpt = post[`excerpt_${language}`] || "";
    const matchesSearch =
      title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = filteredPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <section className="blogPage">
      <SectionHeader
        label="salam"
        title="About Us"
        description="Discover our story and mission to create impactful solutions."
      />

      {/* <div className="blogHero">
        <div className="heroContainer">
          <span className="heroLabel">Our Blog</span>
          <h1 className="heroTitle">Insights & Expertise</h1>
          <p className="heroDescription">
            Stay informed with the latest news, analysis, and expert advice from
            the world of audit, accounting, and business consulting
          </p>

        
          <div className="searchWrapper">
            <div className="searchBox">
              <Search size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div> */}

      <div className="blogContent">
        <div className="contentContainer">
          <div className="contentGrid">
            <aside className="blogSidebar">
              <div className="sidebarSection">
                <h3>Categories</h3>
                <ul className="categoryList">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button
                        className={`categoryBtn ${
                          selectedCategory === category.id ? "active" : ""
                        }`}
                        onClick={() => setSelectedCategory(category.id)}
                      >
                        <span>{category.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="blogMain">
              <div className="actionButton">
                <button
                  className="mobileFilterBtn"
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                >
                  <Filter size={20} />
                  Filter Posts
                </button>
                <button
                  className="layout-toggle-btn"
                  onClick={() => setIsWideLayout(!isWideLayout)}
                >
                  {isWideLayout ? "Switch to Card View" : "Switch to Wide View"}
                </button>
              </div>

              <div className={`mobileSidebar ${isFilterOpen ? "open" : ""}`}>
                <div className="sidebarHeader">
                  <h3>Filter Posts</h3>
                  <button onClick={() => setIsFilterOpen(false)}>×</button>
                </div>
                <div className="sidebarContent">
                  <h4>Categories</h4>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      className={`categoryBtn ${
                        selectedCategory === category.id ? "active" : ""
                      }`}
                      onClick={() => {
                        setSelectedCategory(category.id);
                        setIsFilterOpen(false);
                      }}
                    >
                      <span>{category.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {featuredPost && (
                <article
                  className={`featuredPost ${
                    isWideLayout ? "" : "card-layout"
                  }`}
                >
                  <div className="featuredImage">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost[`title_${language}`] || ""}
                    />
                    {featuredPost.trending && (
                      <span className="trendingBadge">
                        <TrendingUp size={14} />
                        Trending
                      </span>
                    )}
                  </div>
                  <div className="featuredContent">
                    <span className="categoryTag">{featuredPost.category}</span>
                    <h2>{featuredPost[`title_${language}`] || ""}</h2>
                    <p className="excerpt">
                      {featuredPost[`excerpt_${language}`] || ""}
                    </p>
                    <div className="postMeta">
                      <span className="author">
                        <User size={16} />
                        {featuredPost.author}
                      </span>
                      <span className="date">
                        <Calendar size={16} />
                        {featuredPost.date}
                      </span>
                      <span className="readTime">
                        <Clock size={16} />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <a href={`/blog/${featuredPost.id}`} className="readMore">
                      Read Full Article
                      <ArrowRight size={18} />
                    </a>
                  </div>
                </article>
              )}

              <div className="postsGrid">
                {regularPosts.map((post) => (
                  <article key={post.id} className="postCard">
                    <div className="postImage">
                      {post.image_id ? (
                        <img
                          src={`http://127.0.0.1:8000/api/blog/images/${post.image_id}/`}
                          alt={post[`title_${language}`] || ""}
                        />
                      ) : (
                        <div className="noImage">No Image</div>
                      )}
                      {post.trending && (
                        <span className="trendingBadge">
                          <TrendingUp size={12} />
                          Trending
                        </span>
                      )}
                      <span className="categoryOverlay">{post.category}</span>
                    </div>
                    <div className="postContent">
                      <div className="postHeader">
                        <h3>{post[`title_${language}`] || ""}</h3>
                      </div>
                      <p className="excerpt">
                        {post[`excerpt_${language}`] || ""}
                      </p>
                      <div className="postFooter">
                        <div className="authorInfo">
                          <div className="authorAvatar">
                            {post.author.charAt(0)}
                          </div>
                          <div className="authorDetails">
                            <span className="authorName">{post.author}</span>
                            <span className="authorRole">
                              {post.authorRole}
                            </span>
                          </div>
                        </div>
                        <a href={`/blog/${post.id}`} className="readLink">
                          <ArrowRight size={18} />
                        </a>
                      </div>
                      <div className="postMeta">
                        <span className="date">
                          <Calendar size={14} />
                          {post.date}
                        </span>
                        <span className="readTime">
                          <Clock size={14} />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
