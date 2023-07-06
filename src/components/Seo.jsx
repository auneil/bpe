import React from "react";

export default function Seo({ title, description, keywords, children }) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {children}
    </>
  );
}
