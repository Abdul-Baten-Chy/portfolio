import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container-fluid bg-blue-600 text-white mt-5 py-5 px-4 md:px-5">
      <div className="container text-center py-5">
        <div className="flex justify-center mt-10 ml-4 mb-6 ">
          <div className="bg-gray w-10 h-10 rounded-full mr-2 flex justify-center items-center">
            <a href="https://github.com/Abdul-Baten-Chy">
              <FaGithub />
            </a>
          </div>
          <div className="bg-gray w-10 h-10 rounded-full mr-2 flex justify-center items-center">
            <a
              className="bg-gray w-10 h-10 rounded-full mr-2 flex justify-center items-center"
              href="https://web.facebook.com/AbdulBatenchyabc"
            >
              <FaFacebookF />
            </a>
          </div>
          <div className="bg-gray w-10 h-10 rounded-full mr-2 flex justify-center items-center">
            <a href="https://www.linkedin.com/in/abdul-baten-chowdhury-ba6653102">
              <FaLinkedinIn />
            </a>
          </div>
          <div className="bg-gray w-10 h-10 rounded-full mr-2 flex justify-center items-center">
            <a
              className="bg-gray w-10 h-10 rounded-full mr-2 flex justify-center items-center"
              href="https://www.instagram.com/abdulbatenchy"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="flex justify-center mb-3">
          <a className="text-white" href="#">
            Privacy
          </a>
          <span className="px-3">|</span>
          <a className="text-white" href="#">
            Terms
          </a>
          <span className="px-3">|</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
