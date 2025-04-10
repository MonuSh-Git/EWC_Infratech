import React from "react";
import projectImg01 from "../assets/img/CurrentProject/project_img01.jpg"
import projectImg02 from "../assets/img/CurrentProject/project_img02.jpg"
import projectImg03 from "../assets/img/CurrentProject/project_img03.jpg"
import projectImg04 from "../assets/img/CurrentProject/project_img04.jpg"

const pastProjects = [
  {
    id: 1,
    name: "DMRC DC-05 (Pulbangash UG Station)",
    imgSrc: projectImg01,
    pageLink: "p1.php",
  },
  {
    id: 2,
    name: "CA-158 Shivaji & Diamond Garden (Elevator) Mumbai",
    imgSrc: projectImg02,
    pageLink: "p2.php",
  },
  {
    id: 3,
    name: "DMRC DC-06 (Krishna Park UG Station)",
    imgSrc: projectImg03,
    pageLink: "p3.php",
  },
  {
    id: 4,
    name: "DMRC Horticulture (Najafgarh)",
    imgSrc: projectImg04,
    pageLink: "p4.php",
  },
  {
    id: 5,
    name: "DMRC Civil Inderlok ED-01 ",
    imgSrc: projectImg02,
    pageLink: "p5.php",
  },
];

const CurrentProjectsPage = () => {
  return (
    <div className="bg-[#010a2c] text-white min-h-screen py-12 pt-24">
      <div className="container mx-auto px-6 lg:px-20">
        <p className="text-4xl flex justify-center pt-14 pb-6">Current Projects</p>
        <div className="mt-4 w-full h-1 bg-orange-500 pb-2"></div>
      </div>
      <div className="container mx-auto py-10">
        <div className="text-center mx-auto mb-10 max-w-xl">
          <h1 className="text-4xl font-bold mt-2">Our Current Endeavors</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastProjects.map((project) => (
            <div
              key={project.id}
              className="text-center p-4 shadow-lg rounded-lg hover:text-amber-600"
            >
              <a href={project.pageLink}>
                <img
                  className="w-full border p-2 mb-4 rounded-md"
                  src={project.imgSrc}
                  alt={project.name}                                                                       
                />
              </a>         
              <p className="font-bold text-lg mb-3">{project.name}</p>
            </div>    
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurrentProjectsPage;
