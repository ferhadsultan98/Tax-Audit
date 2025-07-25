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
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import "./LatesUpdatesSection.scss";

const LatesUpdatesSection = () => {
  const { i18n } = useTranslation();
  const [blogPosts, setBlogPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isWideLayout, setIsWideLayout] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;
  const language = i18n.language;

  const categories = [
    { id: "all", name: "All Posts" },
    { id: "tax", name: "Tax Advisory" },
    { id: "technology", name: "Technology" },
    { id: "compliance", name: "Compliance" },
  ];

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/blog/posts/")
      .then((res) => res.json())
      .then((data) => setBlogPosts(data))
      .catch((err) => console.error("Failed to fetch blog posts:", err));
  }, []);

  const filteredPosts = blogPosts.filter((post) => {
    const title = post[`title_${language}`] || post.title || "";
    const excerpt = post[`excerpt_${language}`] || post.excerpt || "";
    const matchesSearch =
      title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = filteredPosts.find((post) => post.trending);
  const regularPosts = filteredPosts.filter((post) => !post.trending);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = regularPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(regularPosts.length / postsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="homeBlog">
      <div className="blogContainer">
        <div className="blogHeader">
          <span className="sectionLabel">Latest Insights</span>
          <h2 className="sectionTitle">News & Professional Insights</h2>
          <p className="sectionDesc">
            Discover the latest news, analysis, and expert advice from the world of audit, accounting, and business
          </p>
        </div>

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
                          onClick={() => {
                            setSelectedCategory(category.id);
                            setCurrentPage(1);
                          }}
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
                          setCurrentPage(1);
                        }}
                      >
                        <span>{category.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {featuredPost && (
                  <article
                    className={`blogCard featured ${
                      isWideLayout ? "" : "card-layout"
                    }`}
                  >
                    <div className="cardImage">
                      <img
                        src={
                          featuredPost.image_id
                            ? `http://127.0.0.1:8000/api/blog/images/${featuredPost.image_id}/`
                            : featuredPost.image
                        }
                        alt={featuredPost[`title_${language}`] || featuredPost.title}
                      />
                      <div className="imageOverlay"></div>
                      {featuredPost.trending && (
                        <span className="trendingBadge">
                          <TrendingUp size={14} />
                          Trending
                        </span>
                      )}
                      <span className="categoryBadge">{featuredPost.category}</span>
                    </div>
                    <div className="cardContent">
                      <div className="cardMeta">
                        <span className="metaItem">
                          <User size={14} />
                          {featuredPost.author}
                        </span>
                        <span className="metaItem">
                          <Calendar size={14} />
                          {new Date(featuredPost.date).toLocaleDateString("en-US", {
                            month: "numeric",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                        <span className="metaItem">
                          <Clock size={14} />
                          {featuredPost.readTime}
                        </span>
                      </div>
                      <h3 className="cardTitle">
                        {featuredPost[`title_${language}`] || featuredPost.title}
                      </h3>
                      <p className="cardExcerpt">
                        {featuredPost[`excerpt_${language}`] || featuredPost.excerpt}
                      </p>
                      <a href={`/blog/${featuredPost.id}`} className="readMore">
                        Read Article
                        <ArrowRight size={16} />
                      </a>
                    </div>
                  </article>
                )}

                <div className="blogGrid">
                  {currentPosts.map((post) => (
                    <article key={post.id} className="blogCard">
                      <div className="cardImage">
                        {post.image_id ? (
                          <img
                            src={`http://127.0.0.1:8000/api/blog/images/${post.image_id}/`}
                            alt={post[`title_${language}`] || post.title}
                          />
                        ) : (
                          <img
                            src={post.image}
                            alt={post[`title_${language}`] || post.title}
                          />
                        )}
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
                            {new Date(post.date).toLocaleDateString("en-US", {
                              month: "numeric",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                          <span className="metaItem">
                            <Clock size={14} />
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="cardTitle">
                          {post[`title_${language}`] || post.title}
                        </h3>
                        <p className="cardExcerpt">
                          {post[`excerpt_${language}`] || post.excerpt}
                        </p>
                        <a href={`/blog/${post.id}`} className="readMore">
                          Read Article
                          <ArrowRight size={16} />
                        </a>
                      </div>
                    </article>
                  ))}
                </div>

                {totalPages > 1 && (
                  <div className="pagination">
                    <button
                      className="paginationBtn"
                      disabled={currentPage === 1}
                      onClick={() => handlePageChange(currentPage - 1)}
                    >
                      <ChevronLeft size={18} />
                      Previous
                    </button>
                    <div className="paginationNumbers">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (page) => (
                          <button
                            key={page}
                            className={`paginationNumber ${
                              currentPage === page ? "active" : ""
                            }`}
                            onClick={() => handlePageChange(page)}
                          >
                            {page}
                          </button>
                        )
                      )}
                    </div>
                    <button
                      className="paginationBtn"
                      disabled={currentPage === totalPages}
                      onClick={() => handlePageChange(currentPage + 1)}
                    >
                      Next
                      <ChevronRight size={18} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
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