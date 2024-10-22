// import content
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { content } from "../Content";
const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className=" absolute top-[20%] right-[-15%] text-[#EAF2FA] ml-2">
            {hero.firstName}{" "}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
          <div className="flex justify-content-center mt-10 ml-4">
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
        </div>

        {/* first col */}
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          <h2>{hero.title}</h2>
          <br />
          <div className="flex justify-end">
            <a href="https://drive.usercontent.google.com/uc?id=1wznn9RWubUpasmE1pCBgwO-PCTFAP4q-&export=download">
              <button className="btn hover:bg-blue-400">{hero.btnText}</button>
            </a>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            <div
              data-aos="fade-down"
              data-aos-delay={2 * 300}
              className="flex items-center w-80 gap-5"
            >
              <p>{hero.hero_content}</p>
            </div>
          </div>
        </div>

        {/* sec col */}
        <div className="md:h-[37rem] h-96">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
