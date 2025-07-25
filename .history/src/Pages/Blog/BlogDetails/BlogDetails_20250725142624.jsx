import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Calendar, Clock, User } from "lucide-react";
import axios from "axios";
import "./BlogDetails.scss";

const BlogDetails = () => {
  const { blogId } = useParams();
  const { i18n } = useTranslation();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const language = i18n.language;

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/blog/posts/${blogId}/`)
      .then((res) => {
        setPost(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load blog post:', err);
        setLoading(false);
      });
  }, [blogId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Blog post not found</div>;
  }

  return (
    <section className="blogDetails">
      <div className="blogDetailsHero">
        <div className="heroContainer">
          <span className="categoryTag">{post.category}</span>
          <h1>{post[`title_${language}`]}</h1>
          <div className="postMeta">
            <span className="author">
              <User size={16} />
              {post.author}
            </span>
            <span className="date">
              <Calendar size={16} />
              {new Date(post.date).toLocaleDateString()}
            </span>
            <span className="readTime">
              <Clock size={16} />
              {post.readTime}
            </span>
          </div>
        </div>
      </div>

      <div className="blogDetailsContent">
        <div className="contentContainer">
          <div className="mainContent">
{post.image_id ? (
  <img
    src={`http://127.0.0.1:8000/api/blog/images/${post.image_id}/`}
    alt={post[`title_${language}`] || ""}
    className="featuredImage"
  />
) : (
  <div className="noImage">No Image</div>
)}
            <div className="contentBody" dangerouslySetInnerHTML={{ __html: post[`content_${language}`] }} />
            <div className="authorSection">
              <div className="authorAvatar">{post.author.charAt(0)}</div>
              <div className="authorDetails">
                <span className="authorName">{post.author}</span>
                <span className="authorRole">{post.authorRole}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;