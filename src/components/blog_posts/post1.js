import React from "react";
import HeaderImage from "../../images/blog-image-1.jpeg";
import BlogPostTemplate from "../../components/BlogPostTemplate";

const BlogPostOne = () => {
  return (
    <BlogPostTemplate
      title="Blog Post One"
      content="Some Content"
      author="John Doe"
      date="2021-01-01"
      image={HeaderImage}
      webLink="/blog-post-one"
      webLinkText="Blog Post One"
    />
  );
};

export default BlogPostOne;


// import React from "react";
// import HeaderImage from "../images/blog-image-1.jpeg";

// const BlogPostOne = () => {
//   return (
//     <div>
//       <img src={HeaderImage} alt="Header Image" />
//       <div>
//         <h2>Blog Post One</h2>
//         <p>Some Content</p>
//       </div>
//     </div>
//   );
// };

// export default BlogPostOne;
