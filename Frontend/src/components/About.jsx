import { Link } from "react-router-dom";
import aboutBg from "../assets/img/bg/about_bg.jpg";
import experienceIcon from "../assets/img/icon/h2_about_icon03.svg";
import aboutImg1 from "../assets/img/images/h2_about_img01.jpeg";
import aboutImg2 from "../assets/img/images/h2_about_img02.jpeg";
import aboutImg3 from "../assets/img/images/h2_about_img01.jpeg";
// import icon1 from "../assets/img/icon/h2_about_icon01.svg";
// import icon2 from "../assets/img/icon/h2_about_icon02.svg";
import shape1 from "../assets/img/images/about_shape01.png";
import shape2 from "../assets/img/images/about_shape02.png";
// import shape3 from "../assets/img/images/about_shape03.png";

const About = () => {
  return (
    <section
      className="relative bg-cover bg-center py-16"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      <div className="w-auto mx-20 px-1 md:px-12 sm:px-14">
        <div className="grid gap-30 md:grid-cols-2 items-center">
          {/* Image Section */}
          <div className="grid grid-cols-[200px_1fr] grid-rows-2 gap-0">
            {/* Top Left - Badge */}
            <div className="bg-orange-500 rounded-tl-2xl p-6 text-white shadow-lg flex flex-col justify-center items-center h-[250px]">
              <div className="text-3xl font-bold leading-tight">10+</div>
              <div className="text-2xl font-bold leading-tight">Years</div>
              <div className="text-md leading-tight mt-1">Experience</div>
            </div>

            {/* Right - Big Image (spans 2 rows) */}
            <div className="row-span-2">
              <img
                src={aboutImg1}
                alt="About Image 1"
                className="rounded-tr-2xl rounded-br-2xl shadow-lg w-full h-[500px] object-cover"
              />
            </div>

            {/* Bottom Left - Small Image */}
            <div>
              <img
                src={aboutImg2}
                alt="About Image 2"
                className="rounded-bl-2xl shadow-lg w-full h-[250px] object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div>
            <div className="mb-6">
              <span className="text-lg text-blue-500 uppercase font-bold">
                About EWCIPL
              </span>
              <h2 className="text-3xl font-bold text-gray-800 mt-2">
                What We do
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              EWC Infratech Pvt. Ltd. (EWCIPL) is a premium engineering solution
              and service provider in the focused domains of Civil, Structural,
              Architectural, Mechanical, and Plumbing Infrastructure. Team has
              many years of experience in implementing such solutions in
              Building, Road, Metro, Residential and corporate office.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mt-2">
              Who We are
            </h2>

            <ul className="list-disc pl-5 text-gray-600 leading-relaxed mt-4">
              <li>
                Begun operations with a small team of highly talented and
                motivated engineers and consultants.
              </li>
              <li>
                Expanded to become Construction, Designing and service provider
                to Civil, Mechanical, needs of the industries.
              </li>
              <li>Headquartered at New Delhi, India.</li>
            </ul>

            {/* Features List */}
            {/* <div className="mt-6">
              <ul className="space-y-4">
                <li className="flex items-center space-x-4">
                  <img src={icon1} alt="Knowledgeable Icon" className="w-10 h-10" />
                  <h5 className="text-lg font-semibold text-gray-800">Knowledgeable</h5>
                </li>
                <li className="flex items-center space-x-4">
                  <img src={icon2} alt="Time Sensitive Icon" className="w-10 h-10" />
                  <h5 className="text-lg font-semibold text-gray-800">Time Sensitive</h5>
                </li>
              </ul>
            </div> */}

            {/* Learn More Button */}
            <div>
              <Link
                to="/about"
                className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={shape1}
          className="absolute top-10 left-10 w-20 opacity-50"
          alt="Shape 1"
        />
        <img
          src={shape2}
          className="absolute bottom-10 right-10 w-32 opacity-50"
          alt="Shape 2"
        />
        {/* <img src={shape3} className="absolute top-1/2 left-1/3 w-16 opacity-50" alt="Shape 3" /> */}
      </div>
    </section>
  );
};

export default About;
