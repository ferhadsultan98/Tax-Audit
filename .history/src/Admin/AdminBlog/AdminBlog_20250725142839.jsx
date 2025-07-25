import React, { useEffect, useState } from "react";
import axios from "axios";
import ToastContainer from "../../Components/ToastNotification/ToastNotification";
import "./AdminBlog.scss";

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
  });
  const [editingId, setEditingId] = useState(null);
  const [toasts, setToasts] = useState([]);
  const [filterCategory, setFilterCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [language, setLanguage] = useState("az");
  const postsPerPage = 6;

  const addToast = (message, type, duration, postId) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [
      ...prev,
      {
        id,
        message,
        type,
        duration,
        postId,
        onClose: () => setToasts((prev) => prev.filter((t) => t.id !== id)),
        onConfirm: type === "confirm" ? (response) => handleConfirm(response, id) : undefined,
      },
    ]);
  };

  const handleConfirm = async (response, toastId) => {
    if (response) {
      const postId = toasts.find((t) => t.id === toastId)?.postId;
      if (postId) {
        try {
          await axios.delete(`http://127.0.0.1:8000/api/blog/posts/${postId}/`);
          setBlogPosts((prev) => prev.filter((post) => post.id !== postId));
          addToast("Blog post deleted successfully!", "success", 3000);
        } catch (err) {
          addToast("Failed to delete blog post!", "error", 3000);
        }
      }
    }
  };

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
        addToast("Failed to load blog posts!", "error", 3000);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
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
    if (formData.image) data.append("image", formData.image);

    try {
      if (editingId) {
        const res = await axios.put(`http://127.0.0.1:8000/api/blog/posts/${editingId}/`, data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setBlogPosts((prev) =>
          prev.map((post) => (post.id === editingId ? res.data : post))
        );
        setEditingId(null);
        addToast("Blog post updated successfully!", "success", 3000);
      } else {
        const res = await axios.post("http://127.0.0.1:8000/api/blog/posts/", data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setBlogPosts((prev) => [res.data, ...prev]);
        addToast("Blog post created successfully!", "success", 3000);
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
      });
    } catch (err) {
      addToast(editingId ? "Failed to update blog post!" : "Failed to create blog post!", "error", 3000);
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
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = (id) => {
    addToast("Are you sure you want to delete this post?", "confirm", undefined, id);
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
    });
  };

  const filteredPosts = filterCategory === "all"
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
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="az">Azerbaijani</option>
          <option value="en">English</option>
          <option value="ru">Russian</option>
        </select>
      </div>
{/* 
      <div className="adminBlogSectionHeader">
        <h2 className="sectionTitle">{editingId ? "Edit Blog Post" : "Manage Blog Posts"}</h2>
        <p className="sectionDesc">
          {editingId
            ? "Update your blog post information below."
            : "Create, edit, and delete blog posts to keep your content up to date."}
        </p>
      </div> */}

      <form className="createBlogForm" onSubmit={handleSubmit}>
        <h3 className="formTitle">{editingId ? "Edit Blog Post" : "Create New Blog Post"}</h3>
        
        <div className="formGrid">
          <div className="formGroup">
            <label>Title</label>
            <input
              type="text"
              name={`title_${language}`}
              value={formData[`title_${language}`]}
              onChange={handleChange}
              placeholder={`Enter blog title in ${language === 'az' ? 'Azerbaijani' : language === 'en' ? 'English' : 'Russian'}`}
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
            <select name="category" value={formData.category} onChange={handleChange}>
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
        </div>
        
        <div className="formGroup fullWidth">
          <label>Excerpt</label>
          <textarea
            name={`excerpt_${language}`}
            value={formData[`excerpt_${language}`]}
            onChange={handleChange}
            placeholder={`Enter a brief description in ${language === 'az' ? 'Azerbaijani' : language === 'en' ? 'English' : 'Russian'}`}
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
            placeholder={`Enter the full blog content in ${language === 'az' ? 'Azerbaijani' : language === 'en' ? 'English' : 'Russian'}`}
            rows="8"
            required
          ></textarea>
        </div>
        
        <div className="formActions">
          <button type="submit" className="submitBtn">
            {editingId ? "Update Post" : "Create Post"}
          </button>
          {editingId && (
            <button type="button" className="cancelBtn" onClick={handleCancelEdit}>
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
              <img src={`http://127.0.0.1:8000/api/blog/images/${post.image_id}/`} />
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
                    <i className="fas fa-user"></i>
                    <span>{post.author}</span>
                  </div>
                  <div className="metaItem">
                    <i className="fas fa-calendar"></i>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <div className="cardActions">
                  <button className="editBtn" onClick={() => handleEdit(post)}>
                    <i className="fas fa-edit"></i>
                    Edit
                  </button>
                  <button className="deleteBtn" onClick={() => handleDelete(post.id)}>
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

      <ToastContainer toasts={toasts} />
    </section>
  );
};

export default AdminBlog;