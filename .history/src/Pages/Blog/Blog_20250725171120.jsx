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
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import "./Blog.scss";
import { MdGridView } from "react-icons/md";

const Blog = () => {
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

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = regularPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(regularPosts.length / postsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="blogPage">
      <SectionHeader
        label="salam"
        title="About Us"
        description="Discover our story and mission to create impactful solutions."
      />

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
                  <i>
                    <MdGridView />
                  </i>
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
                  className={`featuredPost ${
                    isWideLayout ? "" : "card-layout"
                  }`}
                >
                  <div className="featuredImage">
                    <img
                      src={`http://127.0.0.1:8000/api/blog/images/${featuredPost.image_id}/`}
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
                        {new Date(featuredPost.date).toLocaleDateString(
                          "en-US",
                          {
                            month: "numeric",
                            day: "numeric",
                            year: "numeric",
                          }
                        )}
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

              <div className={`postsGrid ${isWideLayout ? "wide-layout" : ""}`}>
                {currentPosts.map((post) => (
                  <article
                    key={post.id}
                    className={`postCard ${isWideLayout ? "wide-card" : ""}`}
                  >
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
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "numeric",
                            day: "numeric",
                            year: "numeric",
                          })}
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
    </section>
  );
};

export default Blog;
