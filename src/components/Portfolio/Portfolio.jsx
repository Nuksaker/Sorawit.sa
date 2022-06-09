import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { themeContext } from "../../Context";
import { images } from "../../constants";
import { motion } from "framer-motion";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={1}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        {[images.project, images.Law, images.Foodgang].map((circle, index) => (
          <SwiperSlide>
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.3 }}
              transition={{ duration: 0.4, type: "tween" }}
              key={`img-${index}`}
            >
              <img src={circle} alt="img-portfolio" />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <Swiper
        spaceBetween={2}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        
        {[images.panuwat, images.receipt, images.FCFS].map((circle, index) => (
            <SwiperSlide>
              <motion.div
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.3 }}
                transition={{ duration: 0.4, type: "tween" }}
                key={`img-${index}`}
              >
                
                  <img src={circle} alt="img-portfolio" />
                
              </motion.div>
            </SwiperSlide>
            ))}
        
        {/* <SwiperSlide>
          <img src={images.panuwat} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images.receipt} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images.FCFS} alt="" />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Portfolio;
