import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Calendar, Clock, User } from "lucide-react";
import axios from "axios";
import "./BlogDetails.scss";
import Breadcrumb from "../../../Components/Breadcrumb/Breadcrumb";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";

const BlogDetails = () => {
  const { t, i18n } = useTranslation();
  const { blogId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const language = i18n.language;

  useEffect(() => {
    axios
      .get(`http://172.20.10.112:8000/api/blog/posts/${blogId}/`)
      .then((res) => {
        setPost(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load blog post:", err);
        setLoading(false);
      });
  }, [blogId]);

  if (loading) {
    return <div>{t('blogSection.blogDetailsSection.loading')}</div>;
  }

  if (!post) {
    return <div>{t('blogSection.blogDetailsSection.notFound')}</div>;
  }

  return (
    <section className="blogDetails">
      <SectionHeader
        label={t(`blogSection.blogDetailsSection.categories.${post.category}`)}
        title={post[`title_${language}`]}
        breadcrumbItems={[{ label: "Home", path: "/" }, { label: post[`title_${language}`], path: `/blog/${blogId}` }]}
      />

      <div className="blogDetailsContent">
        <div className="contentContainer">
          <div className="mainContent">
            {post.image_id ? (
              <img
                src={`http://172.20.10.112:8000/api/blog/images/${post.image_id}/`}
                alt={post[`title_${language}`] || ""}
                className="featuredImage"
              />
            ) : (
              <div className="noImage">{t('blogSection.blogDetailsSection.noImage')}</div>
            )}
            <div
              className="contentBody"
              dangerouslySetInnerHTML={{ __html: post[`content_${language}`] || "" }}
            />
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;