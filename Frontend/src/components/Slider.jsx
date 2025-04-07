import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import sliderImg1 from "../assets/img/slider/slider_img01.jpeg";
import sliderImg2 from "../assets/img/slider/slider_img02.jpeg";
import sliderImg3 from "../assets/img/slider/slider_img03.jpeg";
import sliderImg4 from "../assets/img/slider/slider_img04.jpeg";
import sliderImg5 from "../assets/img/slider/slider_img05.jpeg";
import sliderImg6 from "../assets/img/slider/slider_img06.jpeg";
import sliderShape from "../assets/img/slider/slider_shape.png";

const slides = [
  // {
  //   id: 1,
  //   background: sliderImg1,
  //   title: "Commercial & Residential Construction",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsam nostrum vero praesentium optio cum eos. Expedita, corporis corrupti.",
  //   // buttonText: "Learn More",
  //   // buttonLink: "/about",
  // },
  {
    id: 2,
    background: sliderImg2,
    title: "Over 9 Years of Experience",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex dolorem deserunt vel dicta fugiat amet vitae doloremque, aspernatur id, rem non cum fugit esse earum dolor. Neque.",
    // buttonText: "Learn More",
    // buttonLink: "/portfolio",
  },
  {
    id: 3,
    background: sliderImg3,
    title: "Over 9 Years of Experience",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex dolorem deserunt vel dicta fugiat amet vitae doloremque, aspernatur id, rem non cum fugit esse earum dolor. Neque.",
    // buttonText: "Learn More",
    // buttonLink: "/portfolio",
  },
  {
    id: 4,
    background: sliderImg4,
    title: "Over 9 Years of Experience",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex dolorem deserunt vel dicta fugiat amet vitae doloremque, aspernatur id, rem non cum fugit esse earum dolor. Neque.",
    // buttonText: "Learn More",
    // buttonLink: "/portfolio",
  },
  {
    id: 5,
    background: sliderImg5,
    title: "Over 9 Years of Experience",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex dolorem deserunt vel dicta fugiat amet vitae doloremque, aspernatur id, rem non cum fugit esse earum dolor. Neque.",
    // buttonText: "Learn More",
    // buttonLink: "/portfolio",
  },
  {
    id: 6,
    background: sliderImg6,
    title: "Over 9 Years of Experience",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex dolorem deserunt vel dicta fugiat amet vitae doloremque, aspernatur id, rem non cum fugit esse earum dolor. Neque.",
    // buttonText: "Learn More",
    // buttonLink: "/portfolio",
  },
];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[100vh] overflow-hidden flex items-center justify-center">
      {/* Slider Shape */}
      <div className="absolute top-0 left-0 w-full h-full bg-[rgb(9,3,4)]">
        <img src={sliderShape} alt="Slider Shape" className="w-full h-full object-contain opacity-100" />
      </div>

      {/* Slider Images */}
      <div className="w-full h-full absolute inset-0 transition-all duration-700">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-700 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.background}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-contain opacity-100 z-10"
            />
          </div>
        ))}
      </div>

      {/* Slider Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center text-white px-6">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute w-full max-w-3xl transition-all duration-700 ${
              index === activeIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* <h2 className="text-4xl font-bold my-4">{slide.title}</h2>
            <p className="text-lg mb-6">{slide.description}</p> */}
            {/* <Link
              to={slide.buttonLink}
              className="bg-white text-gray-800 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition"
            >
              {slide.buttonText}
            </Link> */}
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full transition ${
              index === activeIndex ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setActiveIndex(index)}
          ></button>
        ))}
      </div>

      {/* Brand Section */}
      <div className="absolute bottom-0 w-full bg-gray-900 bg-opacity-50 py-3 z-30">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h6 className="text-[25px] font-medium">Your Vision, Our Expertise.</h6>
        </div>
      </div>
    </section>
  );
};

export default Slider;
