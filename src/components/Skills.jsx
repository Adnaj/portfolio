import React from "react";

import skillsData from "../components/data/skills.json";


const Skills = () => {
  return (
    <div name="skills" className=" w-full h-auto text-[#e5e7eb] bg-[#0d1224]">
      {/* container */}
      <div className="max-w-[900px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl text-white font-bold inline  border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-3 sm:grid-cols-5 gap-4 text-center py-8">
          {skillsData.map((skill, index) => {
            // Dynamically require the image
            

            return (
              <div
                key={index}
                className="rounded-lg border border-violet-500 bg-[#11152c] shadow-none shadow-gray-50  p-5 mb-3 w-full "
              >
                <img
                  className="w-10 h-10 mx-auto"
                  src={require(`../assets/skills/${skill.image}`)}
                  alt={`${skill.name} icon`}
                />
                <p className="mt-3 text-white font-medium text-sm sm:text-lg">{skill.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
