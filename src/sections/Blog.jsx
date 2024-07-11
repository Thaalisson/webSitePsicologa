// src/sections/Blog.jsx
import React, { useEffect } from 'react';
import Slider from 'react-slick';
import '../styles/Blog.css';

const Blog = () => {
  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <section className="blog-container" id="blog">
      <h2>Meu Blog</h2>
      <Slider {...settings}>
        <div className="fb-post-container">
          <div className="fb-post" 
            data-href="https://www.facebook.com/100063628449600/posts/1015318393932433/?mibextid=WC7FNe&rdid=Jc1MClOkS0HbUeIX"
            data-width="500"
            data-show-text="true">
            <blockquote cite="https://www.facebook.com/100063628449600/posts/1015318393932433/?mibextid=WC7FNe&rdid=Jc1MClOkS0HbUeIX" className="fb-xfbml-parse-ignore">
              <a href="https://www.facebook.com/100063628449600/posts/1015318393932433/?mibextid=WC7FNe&rdid=Jc1MClOkS0HbUeIX">Post</a>
              <p>Post content</p>
              Posted by <a href="https://www.facebook.com/100063628449600">Erivan Figueiredo Psicóloga</a> on&nbsp;<a href="https://www.facebook.com/100063628449600/posts/1015318393932433/?mibextid=WC7FNe&rdid=Jc1MClOkS0HbUeIX">21 de maio</a>
            </blockquote>
          </div>
        </div>
        <div className="fb-post-container">
          <div className="fb-post" 
            data-href="https://www.facebook.com/100063628449600/posts/1015318393932433/?mibextid=WC7FNe&rdid=Jc1MClOkS0HbUeIX"
            data-width="500"
            data-show-text="true">
            <blockquote cite="https://www.facebook.com/100063628449600/posts/1015318393932433/?mibextid=WC7FNe&rdid=Jc1MClOkS0HbUeIX" className="fb-xfbml-parse-ignore">
              <a href="https://www.facebook.com/100063628449600/posts/1015318393932433/?mibextid=WC7FNe&rdid=Jc1MClOkS0HbUeIX">Post</a>
              <p>Post content</p>
              Posted by <a href="https://www.facebook.com/100063628449600">Erivan Figueiredo Psicóloga</a> on&nbsp;<a href="https://www.facebook.com/100063628449600/posts/1015318393932433/?mibextid=WC7FNe&rdid=Jc1MClOkS0HbUeIX">Date</a>
            </blockquote>
          </div>
        </div>
        <div className="fb-post-container">
          <div className="fb-post" 
            data-href="https://www.facebook.com/100063628449600/posts/1015318393932433/?mibextid=WC7FNe&rdid=Jc1MClOkS0HbUeIX"
            data-width="500"
            data-show-text="true">
            <blockquote cite="https://www.facebook.com/100063628449600/posts/1015318393932433/?mibextid=WC7FNe&rdid=Jc1MClOkS0HbUeIX" className="fb-xfbml-parse-ignore">
              <a href="https://www.facebook.com/100063628449600/posts/1015318393932433/?mibextid=WC7FNe&rdid=Jc1MClOkS0HbUeIX">Post</a>
              <p>Post content</p>
              Posted by <a href="https://www.facebook.com/100063628449600">Erivan Figueiredo Psicóloga</a> on&nbsp;<a href="https://www.facebook.com/100063628449600/posts/1015318393932433/?mibextid=WC7FNe&rdid=Jc1MClOkS0HbUeIX">Date</a>
            </blockquote>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default Blog;
