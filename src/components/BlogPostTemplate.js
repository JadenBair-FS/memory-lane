import React from "react";
import { Link } from "react-router-dom";

const BlogPost = (props) => {
  const { title, content, author, date, image, webLink } = props;

  return (
    
      <div className="bg-white rounded-lg shadow-lg p-4 ">
        <div className="flex flex-col lg:flex-row">
          <img
            src={image}
            alt="Blog Post"
            className="w-11/12 lg:w-1/3 h-auto lg:h-30 m-auto lg:m-2 lg:object-cover"
          />
          <div className="ml-0 mt-4 lg:mt-0 lg:p-1">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-gray-600 mb-2">{content}</p>
            <p className="text-gray-500 mb-2">Author: {author}</p>
            <p className="text-gray-500">Date: {date}</p>
            <Link to={webLink}>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-5 py-2 px-4 rounded">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
  );
};

export default BlogPost;
