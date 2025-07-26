import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminBlog.scss";
import { FaUser } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa6";

const AdminBlog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [formData, setFormData] = useState({
    title_az: "",
    title_en: "",
    title_ru: "",
    excerpt_az: "",
    excerpt_en: "",
    excerpt_ru: "",
    content_az: "",
    content_en: "",
    content_ru: "",
    category: "tax",
    author: "",
    image: null,
    featured: false,
    trending: false,
  });
  const [editingId, setEditingId] = useState(null);
  const [filterCategory, setFilterCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [language, setLanguage] = useState("az");
  const postsPerPage = 6;

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/blog/posts/")
      .then((res) => {
        if (Array.isArray(res.data)) {
          setBlogPosts(res.data);
        } else {
          setBlogPosts([res.data]);
        }
      })
      .catch((err) => {
        console.error("Error loading blogs:", err);
        alert("Failed to load blog posts!");
      });
  }, []);

  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;
    if (type === "checkbox" && name === "featured") {
      const hasFeatured = blogPosts.some(
        (post) => post.featured && post.id !== editingId
      );
      if (hasFeatured && checked) {
        alert("Only one post can be featured at a time!");
        return;
      }
    }
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title_az", formData.title_az);
    data.append("title_en", formData.title_en);
    data.append("title_ru", formData.title_ru);
    data.append("excerpt_az", formData.excerpt_az);
    data.append("excerpt_en", formData.excerpt_en);
    data.append("excerpt_ru", formData.excerpt_ru);
    data.append("content_az", formData.content_az);
    data.append("content_en", formData.content_en);
    data.append("content_ru", formData.content_ru);
    data.append("category", formData.category);
    data.append("author", formData.author);
    data.append("featured", formData.featured);
    data.append("trending", formData.trending);
    if (formData.image) data.append("image", formData.image);

    try {
      if (editingId) {
        const res = await axios.put(
          `http://127.0.0.1:8000/api/blog/posts/${editingId}/`,
          data,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
        setBlogPosts((prev) =>
          prev.map((post) => (post.id === editingId ? res.data : post))
        );
        setEditingId(null);
        alert("Blog post updated successfully!");
      } else {
        const res = await axios.post(
          "http://127.0.0.1:8000/api/blog/posts/",
          data,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
        setBlogPosts((prev) => [res.data, ...prev]);
        alert("Blog post created successfully!");
      }

      setFormData({
        title_az: "",
        title_en: "",
        title_ru: "",
        excerpt_az: "",
        excerpt_en: "",
        excerpt_ru: "",
        content_az: "",
        content_en: "",
        content_ru: "",
        category: "tax",
        author: "",
        image: null,
        featured: false,
        trending: false,
      });
    } catch (err) {
      alert(
        editingId
          ? "Failed to update blog post!"
          : "Failed to create blog post!"
      );
    }
  };

  const handleEdit = (post) => {
    setEditingId(post.id);
    setFormData({
      title_az: post.title_az || "",
      title_en: post.title_en || "",
      title_ru: post.title_ru || "",
      excerpt_az: post.excerpt_az || "",
      excerpt_en: post.excerpt_en || "",
      excerpt_ru: post.excerpt_ru || "",
      content_az: post.content_az || "",
      content_en: post.content_en || "",
      content_ru: post.content_ru || "",
      category: post.category || "tax",
      author: post.author || "",
      image: null,
      featured: post.featured || false,
      trending: post.trending || false,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/blog/posts/${id}/`);
        setBlogPosts((prev) => prev.filter((post) => post.id !== id));
        alert("Blog post deleted successfully!");
      } catch (err) {
        alert("Failed to delete blog post!");
      }
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setFormData({
      title_az: "",
      title_en: "",
      title_ru: "",
      excerpt_az: "",
      excerpt_en: "",
      excerpt_ru: "",
      content_az: "",
      content_en: "",
      content_ru: "",
      category: "tax",
      author: "",
      image: null,
      featured: false,
      trending: false,
    });
  };

  const filteredPosts =
    filterCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === filterCategory);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="blogManagement">
      <div className="languageFilter">
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="az">Azerbaijani</option>
          <option value="en">English</option>
          <option value="ru">Russian</option>
        </select>
      </div>

      <form className="createBlogForm" onSubmit={handleSubmit}>
        <h3 className="formTitle">
          {editingId ? "Edit Blog Post" : "Create New Blog Post"}
        </h3>

        <div className="formGrid">
          <div className="formGroup">
            <label>Title</label>
            <input
              type="text"
              name={`title_${language}`}
              value={formData[`title_${language}`]}
              onChange={handleChange}
              placeholder={`Enter blog title in ${
                language === "az"
                  ? "Azerbaijani"
                  : language === "en"
                  ? "English"
                  : "Russian"
              }`}
              required
            />
          </div>
          <div className="formGroup">
            <label>Author</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              placeholder="Enter author name"
              required
            />
          </div>
          <div className="formGroup">
            <label>Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="tax">Tax Advisory</option>
              <option value="audit">Audit & Compliance</option>
              <option value="consulting">Business Consulting</option>
              <option value="accounting">Accounting</option>
              <option value="legal">Legal Updates</option>
            </select>
          </div>
          <div className="formGroup">
            <label>Featured Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
            />
          </div>
          <div className="formGroup">
            <label>
              <input
                type="checkbox"
                name="featured"
                checked={formData.featured}
                onChange={handleChange}
              />
              Featured
            </label>
          </div>
          <div className="formGroup">
            <label>
              <input
                type="checkbox"
                name="trending"
                checked={formData.trending}
                onChange={handleChange}
              />
              Trending
            </label>
          </div>
        </div>

        <div className="formGroup fullWidth">
          <label>Excerpt</label>
          <textarea
            name={`excerpt_${language}`}
            value={formData[`excerpt_${language}`]}
            onChange={handleChange}
            placeholder={`Enter a brief description in ${
              language === "az"
                ? "Azerbaijani"
                : language === "en"
                ? "English"
                : "Russian"
            }`}
            rows="3"
            required
          ></textarea>
        </div>

        <div className="formGroup fullWidth">
          <label>Content</label>
          <textarea
            name={`content_${language}`}
            value={formData[`content_${language}`]}
            onChange={handleChange}
            placeholder={`Enter the full blog content in ${
              language === "az"
                ? "Azerbaijani"
                : language === "en"
                ? "English"
                : "Russian"
            }`}
            rows="8"
            required
          ></textarea>
        </div>

        <div className="formActions">
          <button type="submit" className="submitBtn">
            {editingId ? "Update Post" : "Create Post"}
          </button>
          {editingId && (
            <button
              type="button"
              className="cancelBtn"
              onClick={handleCancelEdit}
            >
              Cancel Edit
            </button>
          )}
        </div>
      </form>

      <div className="filterContainer">
        <select
          className="filterSelect"
          value={filterCategory}
          onChange={(e) => {
            setFilterCategory(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option value="all">All Categories</option>
          <option value="tax">Tax Advisory</option>
          <option value="audit">Audit & Compliance</option>
          <option value="consulting">Business Consulting</option>
          <option value="accounting">Accounting</option>
          <option value="legal">Legal Updates</option>
        </select>
      </div>

      <div className="blogCardsContainer">
        {currentPosts.length > 0 ? (
          currentPosts.map((post) => (
            <div key={post.id} className="blogCard">
              <div className="cardImage">
                {post.image_id ? (
                  <img
                    src={`http://127.0.0.1:8000/api/blog/images/${post.image_id}/`}
                  />
                ) : (
                  <div className="noImage">
                    <i className="fas fa-image"></i>
                  </div>
                )}
                <span className={`categoryBadge ${post.category}`}>
                  {post.category}
                </span>
              </div>

              <div className="cardContent">
                <div className="cardHeader">
                  <h3 className="blogTitle">{post[`title_${language}`]}</h3>
                  <p className="blogExcerpt">{post[`excerpt_${language}`]}</p>
                </div>

                <div className="cardMeta">
                  <div className="metaItem">
                    <i>
                      <FaUser />
                    </i>
                    <span>{post.author}</span>
                  </div>
                  <div className="metaItem">
                    <i>
                      <FaRegCalendarCheck />
                    </i>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="cardActions">
                  <button className="editBtn" onClick={() => handleEdit(post)}>
                    <i className="fas fa-edit"></i>
                    Edit
                  </button>
                  <button
                    className="deleteBtn"
                    onClick={() => handleDelete(post.id)}
                  >
                    <i className="fas fa-trash"></i>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="emptyState">
            <i className="fas fa-newspaper"></i>
            <h3>No Blog Posts Yet</h3>
            <p>Create your first blog post using the form above.</p>
          </div>
        )}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className={currentPage === i + 1 ? "active" : ""}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </section>
  );
};

export default AdminBlog;
