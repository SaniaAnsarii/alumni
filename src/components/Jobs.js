import React from "react";
import jobList from "../object/jobList";
import Navbar from "./Navbar";

const Jobs = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 py-10">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Job Openings
        </h1>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 lg:px-16">
          {jobList.length > 0 ? (
            jobList.map((job, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center"
              >
                <img
                  src={job.logoUrl}
                  alt={`${job.companyName} logo`}
                  className="h-16 w-auto mb-4"
                />
                <h2 className="text-lg font-bold text-gray-800">
                  {job.companyName}
                </h2>
                <p className="text-sm text-gray-600">{job.position}</p>
                <p className="text-sm text-gray-600">{job.location}</p>
                <div className="mt-4 w-full">
                  <h3 className="text-gray-700 font-semibold">
                    Eligibility Criteria:
                  </h3>
                  <ul className="list-disc ml-5 text-gray-600 text-sm mt-2">
                    <li>
                      <span className="font-medium">Education:</span>{" "}
                      {job.eligibilityCriteria.education}
                    </li>
                    <li>
                      <span className="font-medium">Experience:</span>{" "}
                      {job.eligibilityCriteria.experience}
                    </li>
                    <li>
                      <span className="font-medium">Skills:</span>{" "}
                      {job.eligibilityCriteria.skills.join(", ")}
                    </li>
                  </ul>
                </div>
                <a
                  href={job.applyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                  Apply Now
                </a>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-full">
              No job openings found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
