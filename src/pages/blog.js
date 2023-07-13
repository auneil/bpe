import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { useStaticQuery, graphql, Link } from "gatsby";
import { slugify, sortByDate } from "../utils/utils.mjs";

function Blog({ content }) {
  const { title, description, date } = content;
  return (
    <div className="post post-single">
      <div className="inner-spacer-right-lrg">
        <div className="post-title">
          <h4>
            <Link to={`/blog/${slugify(title)}`}>{title}</Link>
          </h4>
          <div className="date">
            <strong>{date}</strong>
          </div>
        </div>
      </div>

      <div className="post-body">
        <p>{description}</p>
      </div>
    </div>
  );
}
export default function Blogs() {
  const data = useStaticQuery(graphql`
    query {
      allDataJson(limit: 20) {
        nodes {
          title
          date
          description
        }
      }
    }
  `);

  const blogs = sortByDate(data.allDataJson.nodes);

  return (
    <Layout>
      <div className="row pad-large">
        <div className="medium-12 columns ">
          <h2 className="page-title">Blogs</h2>
          {blogs.map((blog) => (
            <Blog key={blog.title} content={blog} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export const Head = () => (
  <Seo
    title="Photo Editing Services Blogs - BPE"
    description="Check BPE blogs to find out information related to photo editing and retouching services"
    keywords="photo editing services blogs, photo editing services blogs, photo retouching services blogs, photoshop services blogs"
  />
);
