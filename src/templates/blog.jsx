import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { slugify, sortByDate } from "../utils/utils.mjs";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";

export default function Blog({ data }) {
  const { title, date, description, content } = data.dataJson;
  const blogs = sortByDate(data.allDataJson.nodes);

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="photo editing services, photo editing services, photo retouching services, photoshop services"
        />
      </Helmet>
      <div className="row pad-large">
        <div className="large-9 columns blog-left">
          <div className="page-title">
            <h2 className="reg-weight">{title}</h2>
          </div>
          <div className="post post-single">
            <div className="inner-spacer-right-lrg">
              <div className="post-title">
                <div className="post-meta">{date}</div>
              </div>
            </div>

            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>

        <div className="large-3 columns blog-right">
          <div className="sidebar">
            <div className="widget widget_text">
              <h6>Related blogs</h6>
              <div className="textwidget">
                <ul>
                  {blogs.map(({ title }) => (
                    <li key={title}>
                      <Link to={`/blog/${slugify(title)}`}>{title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ($title: String!) {
    dataJson(title: { eq: $title }) {
      title
      date
      description
      content
    }
    allDataJson(limit: 10) {
      nodes {
        title
        date
      }
    }
  }
`;
