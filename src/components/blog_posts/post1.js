import React, { Fragment } from "react";
import HeaderImage from "../../images/blog-image-1.jpeg";
import BlogPostTemplate from "../../components/BlogPostTemplate";

const BlogPostOne = () => {
  return (
    <BlogPostTemplate
      title="Journey to Coding!"
      content={
        <Fragment>
          <p>
            My journey to coding with Full Sail has been so{" "}
            <strong>exciting!</strong>
            <br />I came with very little knowledge of coding and now I am able
            to create a website from scratch. All thanks to the help of my
            instructors and classmates. I am so excited to see what the future
            holds for me.
          </p>
        </Fragment>
      }
      author="Jaden Bair"
      date="11/30/2023"
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
