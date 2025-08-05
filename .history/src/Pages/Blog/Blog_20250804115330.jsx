import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  Calendar,
  User,
  ArrowRight,
  TrendingUp,
  Filter,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import "./Blog.scss";
import { MdGridView } from "react-icons/md";

const Blog = () => {
  const { t, i18n } = useTranslation();
  const [blogPosts, setBlogPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isWideLayout, setIsWideLayout] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;
  const language = i18n.language;

  const categories = [
    { id: "all", name: t('blogSection.categories.all') },
    { id: "audit", name: t('blogSection.categories.audit') },
    { id: "valuation", name: t('blogSection.categories.valuation') },
    { id: "tax-legal", name: t('blogSection.categories.tax-legal') },
    { id: "consulting", name: t('blogSection.categories.consulting') },
    { id: "accounting", name: t('blogSection.categories.accounting') },
    { id: "hr", name: t('blogSection.categories.hr') },
  ];

  useEffect(() => {
    fetch("http://172.20.10.112:8000/api/blog/posts/")
      .then((res) => res.json())
      .then((data) => setBlogPosts(Array.isArray(data) ? data : [data]))
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

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <section className="blogPage">
      <SectionHeader
        label={t('blogSection.sectionHeader.label')}
        title={t('blogSection.sectionHeader.title')}
        description={t('blogSection.sectionHeader.description')}
      />
      <div className="blogContent">
        <div className="contentContainer">
          <div className="contentGrid">
            <aside className="blogSidebar">
              <div className="sidebarSection">
                <h3>{t('blogSection.sidebar.categoriesTitle')}</h3>
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
                  {t('blogSection.actionButtons.filter')}
                </button>
                <button
                  className="layout-toggle-btn"
                  onClick={() => setIsWideLayout(!isWideLayout)}
                >
                  <i>
                    <MdGridView />
                  </i>
                  {isWideLayout
                    ? t('blogSection.actionButtons.cardLayout')
                    : t('blogSection.actionButtons.wideLayout')}
                </button>
              </div>
              <div className={`mobileSidebar ${isFilterOpen ? "open" : ""}`}>
                <div className="sidebarHeader">
                  <h3>{t('blogSection.mobileSidebar.title')}</h3>
                  <button onClick={() => setIsFilterOpen(false)}>×</button>
                </div>
                <div className="sidebarContent">
                  <h4>{t('blogSection.mobileSidebar.categoriesTitle')}</h4>
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
                      src={
                        featuredPost.image_id
                          ? `http://172.20.10.112:8000/api/blog/images/${featuredPost.image_id}/`
                          : ""
                      }
                      alt={featuredPost[`title_${language}`] || ""}
                    />
                    {featuredPost.featured && (
                      <span className="trendingBadge">
                        <TrendingUp size={14} />
                        {t('blogSection.featuredPost.badge')}
                      </span>
                    )}
                  </div>
                  <div className="featuredContent">
                    <span className="categoryTag">
                      {t(`blogSection.categories.${featuredPost.category}`)}
                    </span>
                    <h2>
                      {truncateText(
                        featuredPost[`title_${language}`] || "",
                        isWideLayout ? 50 : 80
                      )}
                    </h2>
                    <p className="excerpt">
                      {truncateText(
                        featuredPost[`excerpt_${language}`] || "",
                        isWideLayout ? 100 : 150
                      )}
                    </p>
                    <div className="postMeta">
                      <span className="author">
                        <User size={16} />
                        {featuredPost.author}
                      </span>
                      <span className="date">
                        <Calendar size={16} />
                        {new Date(featuredPost.date).toLocaleDateString(
                          language,
                          {
                            month: "numeric",
                            day: "numeric",
                            year: "numeric",
                          }
                        )}
                      </span>
                    </div>
                    <a
                      href={`/blog/${featuredPost.id}`}
                      className="readMore"
                    >
                      {t('blogSection.featuredPost.readMore')}
                      <ArrowRight size={18} />
                    </a>
                  </div>
                </article>
              )}
              <div className={`postsGrid ${isWideLayout ? "wide-layout" : ""}`}>
                {currentPosts.length > 0 ? (
                  currentPosts.map((post) => (
                    <article
                      key={post.id}
                      className={`postCard ${isWideLayout ? "wide-card" : ""}`}
                    >
                      <div className="postImage">
                        {post.image_id ? (
                          <img
                            src={`http://172.20.10.112:8000/api/blog/images/${post.image_id}/`}
                            alt={post[`title_${language}`] || ""}
                          />
                        ) : (
                          <div className="noImage">
                            {t('blogSection.posts.noImage')}
                          </div>
                        )}
                        {post.featured && (
                          <span className="trendingBadge">
                            <TrendingUp size={12} />
                            {t('blogSection.posts.badge')}
                          </span>
                        )}
                        <span className="categoryOverlay">
                          {t(`blogSection.categories.${post.category}`)}
                        </span>
                      </div>
                      <div className="postContent">
                        <div className="postHeader">
                          <h3>
                            {truncateText(
                              post[`title_${language}`] || "",
                              isWideLayout ? 50 : 80
                            )}
                          </h3>
                        </div>
                        <p className="excerpt">
                          {truncateText(
                            post[`excerpt_${language}`] || "",
                            isWideLayout ? 100 : 150
                          )}
                        </p>
                        <div className="postFooter">
                          <div className="authorInfo">
                            <div className="authorAvatar">
                              {post.author.charAt(0)}
                            </div>
                            <div className="authorDetails">
                              <span className="authorName">{post.author}</span>
                            </div>
                          </div>
                          <a href={`/blog/${post.id}`} className="readLink">
                            <ArrowRight size={18} />
                          </a>
                        </div>
                        <div className="postMeta">
                          <span className="date">
                            <Calendar size={14} />
                            {new Date(post.date).toLocaleDateString(language, {
                              month: "numeric",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                      </div>
                    </article>
                  ))
                ) : (
                  <div className="noPosts">
                    <h3>{t('blogSection.noPosts.title')}</h3>
                    <p>{t('blogSection.noPosts.description')}</p>
                    <button
                      className="backToAllBtn"
                      onClick={() => {
                        setSelectedCategory("all");
                        setCurrentPage(1);
                      }}
                    >
                      {t('blogSection.noPosts.button')}
                      <ArrowRight size={18} />
                    </button>
                  </div>
                )}
              </div>
              {totalPages > 1 && currentPosts.length > 0 && (
                <div className="pagination">
                  <button
                    className="paginationBtn"
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                  >
                    <ChevronLeft size={18} />
                    {t('blogSection.pagination.previous')}
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
                    {t('blogSection.pagination.next')}
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