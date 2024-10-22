import React, { useEffect, useRef, useState } from "react";

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after visibility
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is in view
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, []);

  const skillsData = [
    { name: "Typescript", percentage: 85, color: "bg-blue-500" },
    { name: "Next.js", percentage: 75, color: "bg-yellow-500" },
    { name: "JavaScript", percentage: 70, color: "bg-red-500" },
    { name: "Redux", percentage: 80, color: "bg-cyan-500" },
    { name: "React", percentage: 80, color: "bg-red-500" },
    { name: "Express.js", percentage: 65, color: "bg-gray-800" },
    { name: "MongoDB", percentage: 60, color: "bg-cyan-500" },
    { name: "Mongoose", percentage: 70, color: "bg-cyan-500" },
  ];

  return (
    <div className="container-fluid py-5 mt-10" id="skill" ref={skillRef}>
      <div className="container">
        <div className="relative flex items-center justify-center mb-4">
          <h1
            className="text-9xl text-white uppercase"
            style={{ WebkitTextStroke: "1px #dee2e6" }}
          >
            Skills
          </h1>
          <h1 className="absolute text-4xl uppercase text-blue-400">
            My Skills
          </h1>
        </div>
        <div className="flex flex-wrap mt-10">
          {skillsData.map((skill) => (
            <div
              className="flex flex-col w-full md:w-1/2 mb-4 px-2"
              key={skill.name}
            >
              <div className="flex justify-between">
                <h6 className="font-bold">{skill.name}</h6>
                <h6 className="font-bold">{skill.percentage}%</h6>
              </div>
              <div className="bg-gray-200 rounded-full h-2">
                <div
                  className={`${skill.color} h-2 rounded-full`}
                  role="progressbar"
                  aria-valuenow={isVisible ? skill.percentage : 0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{
                    width: isVisible ? `${skill.percentage}%` : "0%",
                    transition: isVisible ? "width 1s ease-in-out" : "none",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
