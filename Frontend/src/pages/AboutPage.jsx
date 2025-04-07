import React from "react";
import Profile1 from "../assets/img/images/AboutProfile1.jpeg";
import Profile2 from "../assets/img/images/AboutProfile2.jpeg";
import Profile3 from "../assets/img/images/AboutProfile3.jpeg";
import AboutImg from "../assets/img/images/h2_about_img02.jpeg";

const teamMembers = [
  {
    name: "Mr. Abhishek Jha",
    position: "Director (PHE Spec.)",
    description:
      "Over 10 years of experience in Metro, Residential, and Institutional Projects, specializing in Public Health Engineering (PHE). Adept at designing and implementing sustainable water supply, drainage, and sanitation systems. Proven track record in project management, quality assurance, and compliance with industry standards. Passionate about innovation and efficiency in infrastructure development.",
    // license: "Registered Civil Engineer",
    image: Profile1,
  },
  {
    name: "Mrs. Sangeeta Kumari",
    position: "Director (Project & Admin Head)",
    description:
      "Over 14 years of experience in Planning and Project Coordination, with expertise in streamlining project workflows, resource allocation, and ensuring timely execution. Skilled in stakeholder communication, risk management, and administrative leadership. Strong ability to enhance operational efficiency and foster collaboration across teams to achieve project goals effectively.",
    // license: "Registered Civil Engineer",
    image: Profile2,
  },
  {
    name: "Mr. Snehil Raj",
    position: "Director (CIVIL Spec.)",
    description:
      "Over 7 years of experience in Metro, Residential, and Institutional projects, specializing in structural design, project execution, and site management. Expertise in ensuring compliance with safety and quality standards, optimizing construction methodologies, and delivering projects within budget and timeline. Strong leadership in coordinating multidisciplinary teams and resolving engineering challenges effectively.",
    // license: "Registered Civil Engineer",
    image: Profile3,
  },
];

const AboutPage = () => {
  return (
    <div className="bg-[#010a2c] text-white min-h-screen py-12 pt-24">
      <div className="container mx-auto px-6 lg:px-20">
        <p className="text-4xl flex justify-center pt-14 pb-6">About EWCIPL</p>
        <div className="mt-4 w-full h-1 bg-orange-500 pb-2"></div>

        {/* ✅ Intro Section */}
        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* Heading + Image */}
          <div className="flex flex-col md:flex-row items-center md:items-start">
            {/* Left - Heading */}
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-5xl font-bold uppercase text-white leading-tight">
                Meet the <br /> Team Leaders behind <br />
                <span className="text-orange-500">EWC Infratech</span>
              </h2>
              <div className="mt-4 w-28 h-1 bg-orange-500"></div>
            </div>

            {/* Right - Image */}
            <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
              <img
                src={AboutImg}
                alt="EWC Infratech Team"
                className="rounded-lg shadow-lg h-96 max-w-sm"
              />
            </div>
          </div>

          {/* ✅ "What We Do" and "Who We Are" Side by Side */}
          <div className="flex flex-col md:flex-row mt-12 gap-12">
            {/* What We Do */}
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-white">What We Do</h2>
              <p className="text-gray-300 leading-relaxed mt-2">
                EWC Infratech Pvt. Ltd. (EWCIPL) is a premium engineering solution and service provider in the focused domains of Civil, Structural, Architectural, Mechanical, and Plumbing Infrastructure.
              </p>
            </div>

            {/* Who We Are */}
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-white">Who We Are</h2>
              <ul className="list-disc pl-5 text-gray-300 leading-relaxed mt-2">
                <li>Begun operations with a small team of highly talented and motivated engineers and consultants.</li>
                <li>Expanded to become a construction, designing, and service provider to Civil, Mechanical needs.</li>
                <li>Headquartered in New Delhi, India.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ✅ Team Members Section */}
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center border-t border-gray-700 py-12 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Image */}
            <div className="md:w-1/2 p-6 h-full flex justify-center object-center">
              <img
                src={member.image}
                alt={member.name}
                className="rounded-lg shadow-lg w-full max-w-sm"
              />
            </div>

            {/* Text */}
            <div className="md:w-1/2 p-6">
              <h3 className="text-2xl font-bold text-orange-500">
                {member.name}
              </h3>
              <p className="text-lg text-gray-400 mt-1">{member.position}</p>
              <div className="h-1 w-20 bg-amber-600 my-4"></div>
              <p className="text-gray-400 leading-relaxed">{member.description}</p>
              {/* <div className="mt-3">
                <p className="text-gray-400 font-semibold">LICENSE</p>
                <p className="text-gray-400">{member.license}</p>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
