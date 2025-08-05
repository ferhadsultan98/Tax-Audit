import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./AdminBlog.scss";
import { FaUser } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa6";
import Switch from "react-switch";
import { CiEdit } from "react-icons/ci";
import { IoNewspaperOutline } from "react-icons/io5";

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
    category: "audit",
    author: "",
    image: null,
    featured: false,
  });
  const [editingId, setEditingId] = useState(null);
  const [filterCategory, setFilterCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [language, setLanguage] = useState("az");
  const postsPerPage = 6;

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };

  useEffect(() => {
    axios
      .get("http://172.20.10.112:8000/api/blog/posts/")
      .then((res) => {
        setBlogPosts(Array.isArray(res.data) ? res.data : [res.data]);
      })
      .catch((err) => {
        console.error("Bloqları yükləmə xətası:", err);
        alert("Bloq yazıları yüklənə bilmədi!");
      });
  }, []);

  const handleChange = (value, event, name) => {
    if (name === "featured") {
      const hasFeatured = blogPosts.some(
        (post) => post.featured && post.id !== editingId
      );
      if (hasFeatured && value) {
        alert("Eyni anda yalnız bir yazı seçilə bilər!");
        return;
      }
      setFormData((prev) => ({
        ...prev,
        featured: value,
      }));
    } else {
      const { value: inputValue, files } = event.target;
      setFormData((prev) => ({
        ...prev,
        [name]: files ? files[0] : inputValue,
      }));
    }
  };

  const handleQuillChange = (value, field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
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
    if (formData.image) data.append("image", formData.image);

    try {
      if (editingId) {
        const res = await axios.put(
          `http://172.20.10.112:8000/api/blog/posts/${editingId}/`,
          data,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
        setBlogPosts((prev) =>
          prev.map((post) => (post.id === editingId ? res.data : post))
        );
        setEditingId(null);
        alert("Bloq yazısı uğurla yeniləndi!");
      } else {
        const res = await axios.post(
          "http://172.20.10.112:8000/api/blog/posts/",
          data,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
        setBlogPosts((prev) => [res.data, ...prev]);
        alert("Bloq yazısı uğurla yaradıldı!");
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
        category: "audit",
        author: "",
        image: null,
        featured: false,
      });
    } catch (err) {
      alert(
        editingId
          ? "Bloq yazısını yeniləmək alınmadı!"
          : "Bloq yazısını yaratmaq alınmadı!"
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
      category: post.category || "audit",
      author: post.author || "",
      image: null,
      featured: post.featured || false,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (window.confirm("Bu yazını silmək istədiyinizə əminsiniz?")) {
      try {
        await axios.delete(`http://172.20.10.112:8000/api/blog/posts/${id}/`);
        setBlogPosts((prev) => prev.filter((post) => post.id !== id));
        alert("Bloq yazısı uğurla silindi!");
      } catch (err) {
        alert("Bloq yazısını silmək alınmadı!");
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
      category: "audit",
      author: "",
      image: null,
      featured: false,
    });
  };

  const filteredPosts =
    filterCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === filterCategory);

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(sortedPosts.length / postsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="blogManagement">
      <div className="createBlogForm">
        <div className="languageFilter">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="az">Azərbaycanca</option>
            <option value="en">İngiliscə</option>
            <option value="ru">Rusca</option>
          </select>
        </div>
        <h3 className="formTitle">
          {editingId ? "Bloq Yazısını Redaktə Et" : "Yeni Bloq Yazısı Yarat"}
        </h3>

        <div className="formGrid">
          <div className="formGroup">
            <label>Başlıq (AZ)</label>
            <input
              type="text"
              name="title_az"
              value={formData.title_az}
              onChange={(e) => handleChange(e.target.value, e, "title_az")}
              placeholder="Bloq başlığını Azərbaycanca daxil edin"
              required
            />
          </div>
          <div className="formGroup">
            <label>Başlıq (EN)</label>
            <input
              type="text"
              name="title_en"
              value={formData.title_en}
              onChange={(e) => handleChange(e.target.value, e, "title_en")}
              placeholder="Bloq başlığını İngiliscə daxil edin"
              required
            />
          </div>
          <div className="formGroup">
            <label>Başlıq (RU)</label>
            <input
              type="text"
              name="title_ru"
              value={formData.title_ru}
              onChange={(e) => handleChange(e.target.value, e, "title_ru")}
              placeholder="Bloq başlığını Rusca daxil edin"
              required
            />
          </div>
          <div className="formGroup">
            <label>Müəllif</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={(e) => handleChange(e.target.value, e, "author")}
              placeholder="Müəllifin adını daxil edin"
              required
            />
          </div>
          <div className="formGroup">
            <label>Kateqoriya</label>
            <select
              name="category"
              value={formData.category}
              onChange={(e) => handleChange(e.target.value, e, "category")}
            >
              <option value="audit">Audit Xidmətləri</option>
              <option value="valuation">Qiymətləndirmə Xidmətləri</option>
              <option value="tax-legal">Vergi və Hüquqi Xidmətlər</option>
              <option value="consulting">Konsultasiya Xidmətləri</option>
              <option value="accounting">Mühasibat Xidmətləri</option>
              <option value="hr">İnsan Resursları Xidmətləri</option>
            </select>
          </div>
          <div className="formGroup">
            <label>Seçilmiş Şəkil</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={(e) => handleChange(null, e, "image")}
            />
          </div>
          <div className="formGroup">
            <label>Seçilmiş</label>
            <Switch
              checked={formData.featured}
              onChange={(checked) => handleChange(checked, {}, "featured")}
              onColor="#86d3ff"
              onHandleColor="#2693e6"
              handleDiameter={20}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              height={20}
              width={40}
            />
          </div>
        </div>

        <div className="formGroup fullWidth">
          <label>Qısa Təsvir (AZ)</label>
          <textarea
            name="excerpt_az"
            value={formData.excerpt_az}
            onChange={(e) => handleChange(e.target.value, e, "excerpt_az")}
            placeholder="Qısa təsviri Azərbaycanca daxil edin"
            rows="4"
          />
        </div>
        <div className="formGroup fullWidth">
          <label>Qısa Təsvir (EN)</label>
          <textarea
            name="excerpt_en"
            value={formData.excerpt_en}
            onChange={(e) => handleChange(e.target.value, e, "excerpt_en")}
            placeholder="Qısa təsviri İngiliscə daxil edin"
            rows="4"
          />
        </div>
        <div className="formGroup fullWidth">
          <label>Qısa Təsvir (RU)</label>
          <textarea
            name="excerpt_ru"
            value={formData.excerpt_ru}
            onChange={(e) => handleChange(e.target.value, e, "excerpt_ru")}
            placeholder="Qısa təsviri Rusca daxil edin"
            rows="4"
          />
        </div>

        <div className="formGroup fullWidth">
          <label>Məzmun (AZ)</label>
          <ReactQuill
            theme="snow"
            value={formData.content_az}
            onChange={(value) => handleQuillChange(value, "content_az")}
            modules={quillModules}
            placeholder="Tam bloq məzmununu Azərbaycanca daxil edin"
          />
        </div>
        <div className="formGroup fullWidth">
          <label>Məzmun (EN)</label>
          <ReactQuill
            theme="snow"
            value={formData.content_en}
            onChange={(value) => handleQuillChange(value, "content_en")}
            modules={quillModules}
            placeholder="Tam bloq məzmununu İngiliscə daxil edin"
          />
        </div>
        <div className="formGroup fullWidth">
          <label>Məzmun (RU)</label>
          <ReactQuill
            theme="snow"
            value={formData.content_ru}
            onChange={(value) => handleQuillChange(value, "content_ru")}
            modules={quillModules}
            placeholder="Tam bloq məzmununu Rusca daxil edin"
          />
        </div>

        <div className="formActions">
          <button type="submit" className="submitBtn" onClick={handleSubmit}>
            {editingId ? "Yazını Yenilə" : "Yazı Yarat"}
          </button>
          {editingId && (
            <button
              type="button"
              className="cancelBtn"
              onClick={handleCancelEdit}
            >
              Ləğv Et
            </button>
          )}
        </div>
      </div>

      <div className="filterContainer">
        <select
          className="filterSelect"
          value={filterCategory}
          onChange={(e) => {
            setFilterCategory(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option value="all">Bütün Kateqoriyalar</option>
          <option value="audit">Audit Xidmətləri</option>
          <option value="valuation">Qiymətləndirmə Xidmətləri</option>
          <option value="tax-legal">Vergi və Hüquqi Xidmətlər</option>
          <option value="consulting">Konsultasiya Xidmətləri</option>
          <option value="accounting">Mühasibat Xidmətləri</option>
          <option value="hr">İnsan Resursları Xidmətləri</option>
        </select>
      </div>

      <div className="blogCardsContainer">
        {currentPosts.length > 0 ? (
          currentPosts.map((post) => (
            <div key={post.id} className="blogCard">
              <div className="cardImage">
                {post.image_id ? (
                  <img
                    src={`http://172.20.10.112:8000/api/blog/images/${post.image_id}/`}
                  />
                ) : (
                  <div className="noImage">
                    <i className="fas fa-image"></i>
                  </div>
                )}
                <span className={`categoryBadge ${post.category}`}>
                  {post.category === "audit"
                    ? "Audit Xidmətləri"
                    : post.category === "valuation"
                    ? "Qiymətləndirmə Xidmətləri"
                    : post.category === "tax-legal"
                    ? "Vergi və Hüquqi Xidmətlər"
                    : post.category === "consulting"
                    ? "Konsultasiya Xidmətləri"
                    : post.category === "accounting"
                    ? "Mühasibat Xidmətləri"
                    : "İnsan Resursları Xidmətləri"}
                </span>
              </div>

              <div className="cardContent">
                <div className="cardHeader">
                  <h3 className="blogTitle">{post[`title_${language}`]}</h3>
                  <div
                    className="blogExcerpt"
                    dangerouslySetInnerHTML={{
                      __html: post[`excerpt_${language}`],
                    }}
                  />
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
                    <i>
                      <CiEdit />
                    </i>
                    Redaktə Et
                  </button>
                  <button
                    className="deleteBtn"
                    onClick={() => handleDelete(post.id)}
                  >
                    <i className="fas fa-trash"></i>
                    Sil
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="emptyState">
            <i>
              <IoNewspaperOutline />
            </i>
            <h3>Hələ Bloq Yazısı Yoxdur</h3>
            <p>
              Yuxarıdakı formadan istifadə edərək ilk bloq yazınızı yaradın.
            </p>
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