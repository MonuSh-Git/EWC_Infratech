import { Link } from "react-router-dom";
import featuresBg from "../assets/img/bg/features_bg.jpg";
import icon1 from "../assets/img/icon/features_icon01.svg";
import icon2 from "../assets/img/icon/features_icon02.svg";
import icon3 from "../assets/img/icon/features_icon03.svg";

const featuresData = [
  {
    id: 1,
    title: "Our Vision",
    description:
      "To enable our customers to be in step with the evolving infrastructural trends by providing the latest state-of-the-art solution at most affordable costs.",
    icon: icon1,
  },
  {
    id: 2,
    title: "Our Expertise",
    description: (
      <>
        <p>
          Our proven expertise and state-of-the-art deployment provide seamless
          professional solutions and services to its clients. We excel in
          delivering solutions in the broad domains of:
        </p>
        <ul className="list-disc pl-5 mt-2">
          <li>Project Planning and Consultancy (Civil and Plumbing)</li>
          <li>Project Execution (Civil, Road, Horticulture, and Plumbing)</li>
          <li>Project Management (Civil and Plumbing)</li>
        </ul>
      </>
    ),
    icon: icon2,
  },
  {
    id: 3,
    title: "Mission",
    description:
      "To create a combination of offerings that form a uniquely powerful combination of excellence in project management, optimal cost utilization, support at every stage and a network of strategic partnerships to add value in whatever we deliver.",
    icon: icon3,
  },
];

const Features = () => {
  return (
    <section
      className="relative bg-cover bg-center py-16"
      style={{ backgroundImage: `url(${featuresBg})` }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Middle Card (Spanning Full Width) */}
          <div className="lg:col-span-2 flex justify-center">
            <div className="group bg-white shadow-lg rounded-xl p-4 sm:p-6 relative overflow-hidden w-full max-w-2xl transition-all duration-500 ease-in-out hover:bg-amber-600">
              {/* Background Shape */}
              <div className="absolute inset-0">
                <svg
                  viewBox="0 0 451 518"
                  className="w-full h-full text-blue-950 transition-colors duration-500 "
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 15.5706C0 12.3122 2.60044 9.64945 5.85786 9.57226L389.414 0.483096C423.541 -0.32561 451.466 27.4618 450.825 61.5922L442.369 512.113C442.308 515.382 439.64 518 436.37 518H6C2.6863 518 0 515.314 0 512V15.5706Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              {/* Feature Content */}
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={featuresData[1].icon}
                    alt={featuresData[1].title}
                    className="w-12 h-12"
                  />
                  <h2 className="text-lg sm:text-xl font-bold text-white">
                    {featuresData[1].title}
                  </h2>
                </div>
                <p className="text-[16px] sm:text-[18px] text-white mb-4">
                  {featuresData[1].description}
                </p>
              </div>
            </div>
          </div>

          {/* Left and Right Cards */}
          {featuresData.map((feature, index) => {
            if (index === 1) return null; // Skip middle card
            return (
              <div
                key={feature.id}
                className="group bg-white shadow-lg rounded-xl p-4 sm:p-6 relative overflow-hidden transition-all duration-500 ease-in-out hover:bg-amber-600"
              >
                {/* Background Shape */}
                <div className="absolute inset-0">
                  <svg
                    viewBox="0 0 451 518"
                    className="w-full h-full text-blue-950 transition-colors duration-500"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 15.5706C0 12.3122 2.60044 9.64945 5.85786 9.57226L389.414 0.483096C423.541 -0.32561 451.466 27.4618 450.825 61.5922L442.369 512.113C442.308 515.382 439.64 518 436.37 518H6C2.6863 518 0 515.314 0 512V15.5706Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>

                {/* Feature Content */}
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-12 h-12"
                    />
                    <h2 className="text-lg sm:text-xl font-bold text-white">
                      {feature.title}
                    </h2>
                  </div>
                  <p className="text-[16px] sm:text-[18px] text-white mb-4">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* More Button */}
        <div className="text-center mt-12">
          <Link
            to="/project"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;
