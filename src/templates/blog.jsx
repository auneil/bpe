import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function blog({ title, date, content }) {
  return (
    <Layout>
      <div class="row pad-large">
        <div class="page-title">
          <h2 class="reg-weight">{title}</h2>
        </div>
        <div class="large-9 columns blog-left">
          <div class="post post-single">
            <div class="inner-spacer-right-lrg">
              <div class="post-title">
                <div class="post-meta">{date}</div>
              </div>
            </div>

            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const Head = () => (
  <Seo
    title="The benefits of using photo editing service - BPE"
    description="Read this article to understand more benefit of using photo retouching services"
    keywords="photo editing services, photo editing services, photo retouching services, photoshop services"
  />
);
