import React, { useState } from "react";
import jobList from "../object/jobList";
import Navbar from "./Navbar";
import { AiOutlinePlusCircle } from "react-icons/ai"; // Add icon

const Jobs = ({ userType }) => {
  const [showForm, setShowForm] = useState(false);
  const [newJob, setNewJob] = useState({
    companyName: "",
    logoUrl: "",
    position: "",
    location: "",
    eligibilityCriteria: {
      education: "",
      experience: "",
      skills: [],
    },
    applyLink: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("eligibilityCriteria.")) {
      const key = name.split(".")[1];
      setNewJob((prev) => ({
        ...prev,
        eligibilityCriteria: {
          ...prev.eligibilityCriteria,
          [key]: key === "skills" ? value.split(",") : value,
        },
      }));
    } else {
      setNewJob((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleAddJob = () => {
    console.log("Job added:", newJob); // Replace with database logic
    setNewJob({
      companyName: "",
      logoUrl: "",
      position: "",
      location: "",
      eligibilityCriteria: {
        education: "",
        experience: "",
        skills: [],
      },
      applyLink: "",
    });
    setShowForm(false);
  };

  return (
    <div>
      <Navbar />
      <div className="bg-gray-200 min-h-screen py-10">
        <div className="flex justify-between items-center px-4 md:px-8 lg:px-16 mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Job Openings</h1>
          {userType === "alumni" && (
            <button
              className="absolute bottom-6 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg focus:outline-none z-50"
              onClick={() => setShowForm((prev) => !prev)}
            >
              <AiOutlinePlusCircle className=" text-yellow-500 text-3xl" />
            </button>
          )}
        </div>

        {showForm ? (
          <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Add Job Opening</h2>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company Name"
                  value={newJob.companyName}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  name="logoUrl"
                  placeholder="Logo URL"
                  value={newJob.logoUrl}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  name="position"
                  placeholder="Position"
                  value={newJob.position}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  value={newJob.location}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  name="eligibilityCriteria.education"
                  placeholder="Education"
                  value={newJob.eligibilityCriteria.education}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  name="eligibilityCriteria.experience"
                  placeholder="Experience"
                  value={newJob.eligibilityCriteria.experience}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  name="eligibilityCriteria.skills"
                  placeholder="Skills (comma-separated)"
                  value={newJob.eligibilityCriteria.skills.join(",")}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  name="applyLink"
                  placeholder="Apply Link"
                  value={newJob.applyLink}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-300 rounded"
                />
              </div>
              <button
                type="button"
                onClick={handleAddJob}
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              >
                Add Job
              </button>
            </form>
          </div>
        ) : (
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
                        <span className="font-medium">Education:</span> {job.eligibilityCriteria.education}
                      </li>
                      <li>
                        <span className="font-medium">Experience:</span> {job.eligibilityCriteria.experience}
                      </li>
                      <li>
                        <span className="font-medium">Skills:</span> {job.eligibilityCriteria.skills.join(", ")}
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
        )}
      </div>
    </div>
  );
};

export default Jobs;
