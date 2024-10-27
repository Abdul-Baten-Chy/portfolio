import { FaRegDotCircle } from "react-icons/fa";

const Qualification = () => {
  return (
    <div
      className="container-fluid py-5"
      id="qualification"
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-offset="100"
    >
      <div className="container">
        <div className="relative flex items-center justify-center">
          <h1
            className="text-9xl text-white uppercase"
            style={{ WebkitTextStroke: "1px #dee2e6" }}
          >
            Quality
          </h1>
          <h1 className="absolute text-4xl uppercase text-blue-400">
            Education & Training
          </h1>
        </div>
        <div className="flex flex-wrap mt-10 ">
          <div className="lg:w-1/2">
            <h3 className="mb-4 text-3xl">My Education</h3>
            <div className="border-l-2 border-blue-400 pl-4 ml-2">
              <div className="relative mb-4 flex items-start">
                <FaRegDotCircle
                  className="text-blue-400 absolute"
                  style={{ left: "-24px", top: "5px" }}
                />
                <div className="ml-6">
                  <h5 className="font-bold mb-1">
                    Master of Business Administration
                  </h5>
                  <p className="mb-2">
                    <strong>Leading University</strong> |{" "}
                    <small>2015-2016</small>
                  </p>
                  <p>
                    I did my MBA in Human Resource Management in 2016 from
                    Leading University.
                  </p>
                </div>
              </div>
              <div className="relative mb-4 flex items-start">
                <FaRegDotCircle
                  className="text-blue-400 absolute"
                  style={{ left: "-24px", top: "5px" }}
                />
                <div className="ml-6">
                  <h5 className="font-bold mb-1">
                    Bachelor of Business Administration (BBA)
                  </h5>
                  <p className="mb-2">
                    <strong>Sylhet International University</strong> |{" "}
                    <small>2012-2015</small>
                  </p>
                  <p>
                    In 2015, I completed my bachelor's degree in management.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h3 className="mb-4 text-3xl">My Training</h3>
            <div className="border-l-2 border-blue-400 pl-4 ml-2">
              <div className="relative mb-4 flex items-start">
                <FaRegDotCircle
                  className="text-blue-400 absolute"
                  style={{ left: "-24px", top: "5px" }}
                />
                <div className="ml-6">
                  <h5 className="font-bold mb-1">Next Level Web Development</h5>
                  <p className="mb-2">
                    <strong>Programming Hero</strong> | <small>2024</small>
                  </p>
                  <p>
                    I have taken extensive MERN Stack training from Programming
                    Hero focusing on React, Express, MongoDB, Node.js,
                    TypeScript, Redux, Next.js, and Mongoose.
                  </p>
                </div>
              </div>
              <div className="relative mb-4 flex items-start">
                <FaRegDotCircle
                  className="text-blue-400 absolute"
                  style={{ left: "-24px", top: "5px" }}
                />
                <div className="ml-6">
                  <h5 className="font-bold mb-1">Complete Web Development</h5>
                  <p className="mb-2">
                    <strong>Programming Hero</strong> | <small>2023</small>
                  </p>
                  <p>
                    I have taken extensive complete web development training
                    from Programming Hero focusing on React, Express, MongoDB,
                    and Node.js.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
