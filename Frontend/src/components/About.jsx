import { Link } from "react-router-dom";
import aboutBg from "../assets/img/bg/about_bg.jpg";
import experienceIcon from "../assets/img/icon/h2_about_icon03.svg";
import aboutImg1 from "../assets/img/images/h2_about_img01.jpeg";
import aboutImg2 from "../assets/img/images/h2_about_img02.jpeg";
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
        <div className="grid gap-60 md:grid-cols-2 items-center">
          {/* Image Section */}
          <div className="flex flex-col items-center justify-center space-y-6">
            {/* Experience Badge */}
            <div className="relative">
              <div className="absolute -top-8 -left-8 bg-blue-950 shadow-lg rounded-lg p-4 flex flex-col items-center">
                <img
                  src={experienceIcon}
                  alt="Experience Icon"
                  className="w-12 mb-2"
                />
                <h2 className="text-lg font-bold text-white text-center">
                  10+ Years
                  <span className="block text-sm text-amber-600">
                    Experience
                  </span>
                </h2>
              </div>
            </div>

            {/* Image Section - Always Two Images Side by Side */}
            <div className="flex gap-2">
              <img
                src={aboutImg1}
                alt="About Image 1"
                className="rounded-lg shadow-lg  h-60"
              />
              <img
                src={aboutImg2}
                alt="About Image 2"
                className="rounded-lg shadow-lg h-70"
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
