import { useState, useEffect, useRef } from "react";
import styles from "./SlideBar.module.css";
import image1 from "../../assets/Celular.jpg";
import image2 from "../../assets/notebook.jpg";
import image3 from "../../assets/Samsung.jpg";

const SlideBar = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrollVisible, setIsScrollVisible] = useState(true);

  useEffect(() => {
    const slider = sliderRef.current;
    const handleScroll = () => {
      setIsScrollVisible(slider.scrollWidth > slider.clientWidth);
    };

    slider.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      slider.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    const interval = setInterval(() => {
      const newIndex = (currentIndex + 1) % slider.children.length;
      slider.scrollTo({
        left: slider.children[newIndex].offsetLeft,
        behavior: "smooth",
      });
      setCurrentIndex(newIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.sliderWrapper}>
          <div ref={sliderRef} className={styles.slider}>
            <img src={image1} alt="asd" id="slide1" />
            <img src={image2} alt="asd" id="slide2" />
            <img src={image3} alt="asd" id="slide3" />
          </div>
          {isScrollVisible && (
            <div className={styles.sliderNav}>
              <a href="#slide1"></a>
              <a href="#slide2"></a>
              <a href="#slide3"></a>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SlideBar;
