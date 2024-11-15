import React, { useState } from "react";
import { PencilIcon } from "@heroicons/react/24/solid";
import Navbar from "./Navbar";

const User = () => {
  const [editMode, setEditMode] = useState(null);
  const [profile, setProfile] = useState({
    name: "John Doe",
    role: "Student",
    batch: "2022-2025",
    profilePhoto: "https://via.placeholder.com/150",
  });
  const [skills, setSkills] = useState(["Frontend Developer"]);
  const [info, setInfo] = useState({
    email: "johndoe@example.com",
    dob: "2000-01-01",
    gender: "Male",
  });
  const [connectHandles, setConnectHandles] = useState({
    instagram: "",
    facebook: "",
    linkedin: "",
    github: "",
  });
  const [education, setEducation] = useState("High School Name, City");
  const [experience, setExperience] = useState("Intern at XYZ Company");

  const handleEdit = (type) => setEditMode(type);
  const closeEdit = () => setEditMode(null);

  return (
    <div>

        <Navbar/>
    <div className="p-8">
      

      {/* Grid Container */}
      <div className="grid grid-cols-3 gap-6">
        {/* Profile Box */}
        <div className="box">
          <img src={profile.profilePhoto} alt="Profile" className="w-20 h-20 rounded-full mx-auto mb-4" />
          <h2 className="text-lg font-semibold">{profile.name}</h2>
          <p>{profile.role}</p>
          <p>{profile.batch}</p>
          <button onClick={() => handleEdit("profile")} className="mt-4 p-2 bg-gray-100 hover:bg-gray-200 rounded">
            <PencilIcon className="w-6 h-6 inline-block" /> Edit
          </button>
        </div>

        {/* Skills Box */}
        <div className="box">
          <h2 className="text-lg font-semibold">Skills</h2>
          <ul className="mt-2">
            {skills.map((skill, index) => (
                <li key={index} className="text-sm">{skill}</li>
            ))}
          </ul>
          <button onClick={() => handleEdit("skills")} className="mt-4 p-2 bg-gray-100 hover:bg-gray-200 rounded">
            <PencilIcon className="w-6 h-6 inline-block" /> Edit
          </button>
        </div>

        {/* Info Box */}
        <div className="box">
          <h2 className="text-lg font-semibold">More Information</h2>
          <p className="text-sm mt-2">Email: {info.email}</p>
          <p className="text-sm">DOB: {info.dob}</p>
          <p className="text-sm">Gender: {info.gender}</p>
          <button onClick={() => handleEdit("info")} className="mt-4 p-2 bg-gray-100 hover:bg-gray-200 rounded">
            <PencilIcon className="w-6 h-6 inline-block" /> Edit
          </button>
        </div>

        {/* Connect Box */}
        <div className="box">
          <h2 className="text-lg font-semibold">Connect With Me</h2>
          <p className="text-sm mt-2">Instagram: {connectHandles.instagram || "Not Added"}</p>
          <p className="text-sm">Facebook: {connectHandles.facebook || "Not Added"}</p>
          <p className="text-sm">LinkedIn: {connectHandles.linkedin || "Not Added"}</p>
          <p className="text-sm">GitHub: {connectHandles.github || "Not Added"}</p>
          <button onClick={() => handleEdit("connect")} className="mt-4 p-2 bg-gray-100 hover:bg-gray-200 rounded">
            <PencilIcon className="w-6 h-6 inline-block" /> Edit
          </button>
        </div>

        {/* Education Box */}
        <div className="box">
          <h2 className="text-lg font-semibold">Education</h2>
          <p className="text-sm mt-2">{education}</p>
          <button onClick={() => handleEdit("education")} className="mt-4 p-2 bg-gray-100 hover:bg-gray-200 rounded">
            <PencilIcon className="w-6 h-6 inline-block" /> Edit
          </button>
        </div>

        {/* Experience Box */}
        <div className="box">
          <h2 className="text-lg font-semibold">Experience</h2>
          <p className="text-sm mt-2">{experience}</p>
          <button onClick={() => handleEdit("experience")} className="mt-4 p-2 bg-gray-100 hover:bg-gray-200 rounded">
            <PencilIcon className="w-6 h-6 inline-block" /> Edit
          </button>
        </div>
      </div>
    </div>
            </div>
  );
};

export default User;
