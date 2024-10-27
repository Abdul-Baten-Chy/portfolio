import image from "../assets/img/me-pro.jpg";

const About = () => {
  return (
    <div
      className="container-fluid py-14"
      id="about"
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-offset="100"
    >
      <div className="container">
        <div className="relative flex items-center justify-center mb-10">
          <h1
            className="text-9xl text-white uppercase"
            style={{ WebkitTextStroke: "1px #dee2e6" }}
          >
            About
          </h1>
          <h1 className="absolute text-4xl uppercase text-blue-400">
            About Me
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="lg:w-1/2 pb-4 lg:pb-0 flex-1">
            <img
              className="img-fluid rounded w-full max-w-[550px]"
              src={image}
              alt="My Profile"
            />
          </div>
          <div className="lg:w-1/2 flex-1">
            <h3 className="mb-3 text-3xl">Front-end Web Developer</h3>
            <p className="mb-3">
              Hello, I'm an enthusiastic learner venturing into the captivating
              realms of web development. Currently in the process of unraveling
              the mysteries of HTML, CSS, and JavaScript, with a dash of MERN
              excitement. I’m currently working on a project which is Employee
              Management Software and building a portfolio. In this process, I
              have an action plan to master the art of the MERN stack.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
              <div className="py-1">
                <h6>
                  Name:{" "}
                  <span className="text-gray-500">Abdul Baten Chowdhury</span>
                </h6>
              </div>
              <div className="py-1">
                <h6>
                  Birthday: <span className="text-gray-500">22 Jun 1992</span>
                </h6>
              </div>
              <div className="py-1">
                <h6>
                  Degree: <span className="text-gray-500">MBA</span>
                </h6>
              </div>
              <div className="py-1">
                <h6>
                  Experience: <span className="text-gray-500">1 Year</span>
                </h6>
              </div>
              <div className="py-1">
                <h6>
                  Phone: <span className="text-gray-500">+8801766-218476</span>
                </h6>
              </div>
              <div className="py-1">
                <h6>
                  E:{" "}
                  <span className="text-gray-500">
                    abdulbatenchyabc@gmail.com
                  </span>
                </h6>
              </div>
              <div className="py-2">
                <h6>
                  Address:{" "}
                  <span className="text-gray-500">Sylhet, Bangladesh</span>
                </h6>
              </div>
              <div className="py-2">
                <h6>
                  Freelance: <span className="text-gray-500">Available</span>
                </h6>
              </div>
            </div>
            <a
              href="#"
              className="btn btn-outline-primary mr-4 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
            >
              Hire Me
            </a>
            <a
              href="#"
              className="btn btn-outline-primary border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
