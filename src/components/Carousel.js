import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "./assets/slide.png"

const Carousel = () => {
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <div>
            <Slider {...settings}>
                <div>
                    <img src={image} alt="image" style={{ width: "100%" }} />
                </div>
                <div>
                    <img src={image} alt="image" style={{ width: "100%" }} />
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
            </Slider>
        </div>
    );
}
export default Carousel;