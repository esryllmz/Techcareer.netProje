import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Blog.css';

const Blog = () => {
  return (
    <div className="blog-container">
      <div className="blog-content">
        <h1>Blog</h1>
        <p>
          <Link to="/blog" className="blog-link">Teknolojinin nabzını tutun!</Link>
        </p>
        <p>
          En son teknoloji haberlerinden, inceleme yazılarına, derinlemesine
          analizlerden ipuçlarına kadar teknoloji dünyasında aradığınız her şeyi
          burada bulabilirsiniz.
        </p>
          <button
            className="blog-button"
            onClick={() => window.location.href = "https://www.techcareer.net/blog"}
          >
            Oku
             </button>
      </div>
      <div className="blog-image">
        <img
          src="img/blog.png" 
          alt="Teknoloji görseli"
        />
      </div>
    </div>
  );
};

export default Blog;
