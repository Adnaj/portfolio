import React, { useState,useRef } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import projectsData from "../components/data/projects.json";

const Work = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const workRef = useRef(null);

  // Handler for page change
  const handlePageChange = (event, value) => {
    setPage(value);
    if (workRef.current) {
      workRef.current.scrollIntoView({ behavior: "smooth" }); // Scroll to the top of the "Works" section
    }
  };

  // Get the projects to display for the current page
  const paginatedProjects = projectsData.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div
      name="work"
      ref={workRef}
      className="w-full pt-60 pb-40 sm:pt-0 h-auto text-[#e5e7eb] bg-[#0d1224]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-white border-pink-600">
            Works
          </p>
          <p className="py-6"> Check out some of my recent work</p>
        </div>

        {/* Container */}
        <Stack spacing={3}>
          <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-6">
            {paginatedProjects.map((project, index) => {
              return (
                <div
                  key={index}
                  className="relative shadow-lg content-div1 shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                >
                  <img
                    className="z-0 opacity-100 group-hover:opacity-10"
                    src={require(`../assets/websites/${project.image}`)}
                    alt={project.name}
                  />
                  {/* Hover Effects */}
                  <div className="hidden group-hover:flex z-10 absolute left-0 top-0 w-full h-full flex-col justify-center">
                    <span className="text-2xl text-center font-bold text-white tracking-wider">
                      {project.name}
                    </span>
                    <div className="pt-4 text-center">
                      {project.github && (
                        <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                          <FaGithub />
                        </button>
                      </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                            <FiExternalLink />
                          </button>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination Component */}
          <div className="flex justify-center mt-6">
            <Pagination
              count={Math.ceil(projectsData.length / itemsPerPage)}
              page={page}
              onChange={handlePageChange}
              variant="outlined"
              shape="circular" // Shape to ensure circle appearance
              sx={{
                "& .MuiPaginationItem-root": {
                  borderRadius: "50%", // Force circular shape
                  border: "1px solid #1976d2", // Use the primary color as border
                  color: "#1976d2",
                },
                "& .Mui-selected": {
                  backgroundColor: "#1976d2", // Highlight selected item with primary color
                  color: "#fff", // White text for selected
                },
                "& .MuiPaginationItem-ellipsis": {
                  border: "none", // Remove borders for ellipsis
                },
              }}
            />
          </div>
        </Stack>
      </div>
    </div>
  );
};

export default Work;
