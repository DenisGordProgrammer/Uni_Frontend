import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './NewsSlider.scss'
const NewsSlider = ({ newsSlides }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,

    };
    return (
        <section className="news-slider">
            <div className="slider">
                <Slider {...settings}>
                    {newsSlides.map((slide) => (
                        <a  key={slide.title}>
                            <div className="slide" style={{ backgroundImage: `url(${slide.bg})` }}>
                                <h3>{slide.title}</h3>
                                <p>{slide.text}</p>
                                <small>Taken from {slide.from}</small>
                            </div>
                        </a>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default NewsSlider;