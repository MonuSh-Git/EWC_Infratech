import { Link } from "react-router-dom";

// Import images dynamically
import serviceBg1 from "../assets/img/services/services_item01.jpg";
import serviceBg2 from "../assets/img/services/services_item02.jpg";
import serviceBg3 from "../assets/img/services/services_item03.jpg";
import serviceBg4 from "../assets/img/services/services_item04.jpg";
import serviceBg5 from "../assets/img/services/services_item05.jpg";
import serviceBg6 from "../assets/img/services/services_item06.jpg";

import icon1 from "../assets/img/icon/services_icon01.svg";
import icon2 from "../assets/img/icon/services_icon02.svg";
import icon3 from "../assets/img/icon/services_icon03.svg";
import icon4 from "../assets/img/icon/services_icon04.svg";
import icon5 from "../assets/img/icon/services_icon05.svg";
import icon6 from "../assets/img/icon/services_icon06.svg";

// Services Data Array
const servicesData = [
  { id: 1, title: "Preconstruction", image: serviceBg1, icon: icon1 },
  { id: 2, title: "Roofing Services", image: serviceBg2, icon: icon2 },
  { id: 3, title: "BIM/Design Build", image: serviceBg3, icon: icon3 },
  { id: 4, title: "Sustainability", image: serviceBg4, icon: icon4 },
  { id: 5, title: "Construction", image: serviceBg5, icon: icon5 },
  { id: 6, title: "Post Construction", image: serviceBg6, icon: icon6 },
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">
            Featured EWC Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="relative group rounded-lg overflow-hidden shadow-lg bg-cover bg-center h-80 flex items-end p-6"
              style={{ backgroundImage: `url(${service.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-4">
                  <img src={service.icon} alt={service.title} className="w-12 h-12" />
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-gray-300 text-lg">{service.id.toString().padStart(2, "0")}</span>
                  <Link to="/contact" className="text-white hover:text-gray-300 transition">
                    Learn More <i className="fas fa-arrow-right ml-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
