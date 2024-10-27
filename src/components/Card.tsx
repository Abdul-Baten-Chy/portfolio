import { TProject } from "@/Pages/Projects";
import { Link } from "react-router-dom";

const Card = ({ project }: { project: TProject }) => {
  return (
    <div
      className="shadow-custom m-5 mb-5 flex w-96 flex-col items-center space-y-5 rounded-2xl border-2 border-black bg-white p-5 transition-transform duration-300 ease-in-out hover:translate-y-[-5px] hover:scale-105 hover:shadow-lg dark:bg-[#1a1a1a]"
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-offset="100"
    >
      <img
        className="h-64 w-96 border-8 border-gray-50 object-cover transition-transform duration-300 ease-in-out hover:scale-105 dark:border-[#0d0d0d] "
        src={project.images[0]}
        alt=""
      />
      <div className="content">
        <h2 className="title mb-2 text-center text-2xl font-bold">
          {project.title}
        </h2>
        <Link to={`/${project._id}`}>
          <button className="bg-blue-500 w-full mx-2 px-4 py-2 rounded mt-2 hover:bg-blue-400 transition">
            See Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
