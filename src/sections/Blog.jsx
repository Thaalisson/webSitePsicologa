// src/sections/Blog.jsx
import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';

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
    arrows: false,
    adaptiveHeight: true,
  };

  const facebookPosts = [
    "https://www.facebook.com/100063628449600/posts/1015318393932433/",
    "https://www.facebook.com/100063628449600/posts/1015318393932433/",
    "https://www.facebook.com/100063628449600/posts/1015318393932433/",
  ];

  return (
    <section id="blog" className="bg-[#f9f9f9] text-darkblue1 py-20 px-6 md:px-10 font-cormorant">
      <div className="max-w-5xl mx-auto space-y-12 text-center">

        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Publicações</h2>
          <p className="text-lg text-darkblue2 max-w-2xl mx-auto leading-relaxed">
            Acompanhe reflexões, conteúdos terapêuticos e dicas compartilhadas nas redes sociais. Um espaço para aprofundar o cuidado com você mesmo(a).
          </p>
        </motion.div>

        {/* Slider com posts do Facebook */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Slider {...settings}>
            {facebookPosts.map((postUrl, index) => (
              <div key={index} className="flex justify-center">
                <div
                  className="fb-post"
                  data-href={postUrl}
                  data-width="500"
                  data-show-text="true"
                >
                  <blockquote
                    cite={postUrl}
                    className="fb-xfbml-parse-ignore"
                  >
                    <a href={postUrl}>Ver publicação</a>
                  </blockquote>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
