import React, { useState } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const Container3 = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className="Carousel">

      {/* IMAGE SECTION */}
      <div className="image-wrapper">
        <BsArrowLeftCircle
          className="arrow left-arrow"
          onClick={prevSlide}
        />

        <img
          src={data[slide].src}
          alt={data[slide].alt}
          className="slide"
        />

        <BsArrowRightCircle
          className="arrow right-arrow"
          onClick={nextSlide}
        />

        {/* DOTS */}
        <div className="indicators">
          {data.map((_, index) => (
            <button
              key={index}
              className={
                slide === index
                  ? "indicator"
                  : "indicator indicator-inactive"
              }
              onClick={() => setSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* TEXT SECTION */}
      <div className="card-content">
        <h2 className="ImageTitle">{data[slide].title}</h2>
        <p className="ImageDesc">{data[slide].desc}</p>
      </div>

    </div>
  );
};

export default Container3;
