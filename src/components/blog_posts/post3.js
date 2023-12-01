import React, { Fragment } from "react";
import HeaderImage from "../../images/blog-image-3.jpeg";
import BlogPostTemplate from "../../components/BlogPostTemplate";

const BlogPostThree = () => {
  return (
    <BlogPostTemplate
      title="Research...."
      content={
        <Fragment>
          <p>
            A little nugget for you to enjoy... <br />
            To become a successful coder you need to be consistently researching
            and learning new things. <br />
            You can never know everything, but you can know a lot. <br />
            The more you know the more you can do. <br />
            The more you can do the more you can make. <br />
            The more you make the more you can enjoy life. <br />
            So, keep researching and learning new things. <br />
            You will be glad you did. <br />
            oh, and don't forget to have fun. <br />
          </p>
        </Fragment>
      }
      author="Jaden Bair"
      date="11/30/2023"
      image={HeaderImage}
      webLink="/blog-post-three"
    />
  );
};

export default BlogPostThree;
