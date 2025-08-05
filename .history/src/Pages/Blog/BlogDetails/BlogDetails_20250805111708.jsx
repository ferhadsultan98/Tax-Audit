import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Calendar, User } from "lucide-react";
import postsData from "../BlogPosts.json"; // Import JSON data
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import "./BlogDetails.scss";

const BlogDetails = () => {
  const { t, i18n } = useTranslation();
  const { blogId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const language = i18n.language;

  useEffect(() => {
    // Simulate API fetch by finding the post in JSON data
    try {
      const foundPost = postsData.find((p) => p.id === parseInt(blogId));
      setPost(foundPost);
      setLoading(false);
    } catch (err) {
      console.error("Failed to load blog post:", err);
      setLoading(false);
    }
  }, [blogId]);

  if (loading) {
    return <div>{t("blogSection.blogDetailsSection.loading")}</div>;
  }

  if (!post) {
    return <div>{t("blogSection.blogDetailsSection.notFound")}</div>;
  }

  return (
    <section className="blogDetails">
      <SectionHeader
        label={t(`blogSection.blogDetailsSection.categories.${post.category}`)}
        title={post[`title_${language}`] || post.title_en}
        breadcrumbItems={[
          { label: "Home", path: "/" },
          { label: post[`title_${language}`] || post.title_en, path: `/blog/${blogId}` },
        ]}
      />
      <div className="blogDetailsContent">
        <div className="contentContainer">
          <div className="mainContent">
            {post.image_id ? (
              <img
                src={`/images/${post.image_id}.jpg`} // Adjust path for your setup
                alt={post[`title_${language}`] || post.title_en}
                className="featuredImage"
              />
            ) : (
              <div className="noImage">{t("blogSection.blogDetailsSection.noImage")}</div>
            )}
            <div
              className="contentBody"
              dangerouslySetInnerHTML={{
                __html: post[`content_${language}`] || post.content_en || "",
              }}
            />
            <div className="authorSection">
              <div className="authorAvatar">{post.author.charAt(0)}</div>
              <div className="authorDetails">
                <span className="authorName">{post.author}</span>
                <span className="date">
                  <Calendar size={16} />
                  {new Date(post.date).toLocaleDateString(language, {
                    month: "numeric",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;