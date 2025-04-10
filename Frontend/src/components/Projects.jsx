import { Link } from "react-router-dom";
// import "../styles/projects.css";

// Import images dynamically
import projectImg1 from "../assets/img/PastProject/PastProject01.jpg";
import projectImg2 from "../assets/img/PastProject/PastProject02.jpg";
import projectImg3 from "../assets/img/PastProject/PastProject03.jpg";
import projectImg4 from "../assets/img/PastProject/PastProject04.jpg";
import projectBg from "../assets/img/bg/project_bg.jpg";

// Projects Data Array
const projectsData = [
  { id: 1, title: "Project1", image: projectImg1 },
  { id: 2, title: "Project2", image: projectImg2 },
  { id: 3, title: "Project3", image: projectImg3 },
  { id: 4, title: "Project4", image: projectImg4 },
];

const Projects = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-16"
      style={{ backgroundImage: `url(${projectBg})` }}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12">
          {/* Text Section */}
          <div className="text-center lg:text-left space-y-2">
            <span className="text-amber-600 text-sm font-semibold uppercase tracking-widest">
              Past Projects
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Featured Past Projects
            </h2>
          </div>

          {/* Button */}
          <Link
            to="/portfolio"
            className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-amber-600 transition duration-300 text-sm md:text-base"
          >
            View Past Projects
          </Link>
        </div>

        {/* Projects List */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">
                  {project.title}
                </span>
                <h2 className="text-xl text-white font-bold mt-2">
                  <Link to="/portfolio" className="hover:text-gray-300">
                    {project.title}
                  </Link>
                </h2>
                <Link
                  to="/portfolio"
                  className="mt-4 bg-white text-black p-2 rounded-full hover:bg-gray-300 transition"
                >
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
