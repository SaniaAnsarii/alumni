import React, { useState, useEffect } from "react";
import { PencilIcon } from "@heroicons/react/24/solid";
import Navbar from "./Navbar";
import axios from "axios";
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa'; // Import social media icons

const User = () => {
  const [editMode, setEditMode] = useState(null);
  const [profile, setProfile] = useState({
    name: "Sania naz ansari",
    role: "Student",
    batch: "2021-2025",
    profilePhoto: "https://via.placeholder.com/150",
  });
  const [skills, setSkills] = useState(["Frontend Developer"]);
  const [info, setInfo] = useState({
    email: "ansarisania789@gmail.com",
    
    gender: "Female",
  });
  const [connectHandles, setConnectHandles] = useState({
    instagram: "",
    facebook: "",
    linkedin: "",
    github: "",
  });
  const [education, setEducation] = useState("GEC, Bilaspur");
  const [experience, setExperience] = useState(["Intern at XYZ Company"]);
  const [imagePreview, setImagePreview] = useState(profile.profilePhoto);

  useEffect(() => {
    document.body.classList.add('bg-gray-200'); // Apply background color to the whole body
    return () => {
      document.body.classList.remove('bg-gray-200'); // Remove it when component is unmounted
    };
  }, []);


  const handleEdit = (type) => setEditMode(type);
  const closeEdit = () => setEditMode(null);

  // const addExperience = () => {
  //   setExperience([...experience, ""]); // Add a new blank experience
  // };

  // const removeExperience = (index) => {
  //   const updatedExperience = experience.filter((_, i) => i !== index);
  //   setExperience(updatedExperience);
  // };

  // const updateExperience = (index, value) => {
  //   const updatedExperience = experience.map((exp, i) => (i === index ? value : exp));
  //   setExperience(updatedExperience);
  // };

  const getUserInfo = async () => {
    const token = localStorage.getItem("authToken");

    if (token) {
      try {
        const response = await axios.get("http://localhost:8000/api/alumni/user/info", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setProfile({
          name: response.data.full_name,
          role: response.data.user_type,
          batch: response.data.batch,
          profilePhoto: response.data.profilePhoto || "https://via.placeholder.com/150", // Set the profile photo if available
        });

        setInfo({
          email: response.data.email,
          dob: response.data.dob,
          gender: response.data.gender,
        });

        setConnectHandles({
          instagram: response.data.instagram || "",
          facebook: response.data.facebook || "",
          linkedin: response.data.linkedin || "",
          github: response.data.github || "",
        });

        setEducation(response.data.education || "Not Provided");
        // setExperience(response.data.experience || "Not Provided");
      } catch (error) {
        console.error("Failed to fetch user info:", error);
      }
    } else {
      alert("You need to log in to view this page.");
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };


  const handleSave = (type) => {
    if (type === "profile") {
      setProfile({ ...profile, profilePhoto: imagePreview });
    }
    if (type === "experience") {
      console.log("Saved experience:", experience);
    }
    // Add your logic to save the edited data
    setEditMode(null);
  };
  const addSkill = () => {
    setSkills([...skills, ""]);
  };

  const removeSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  };

  const updateSkill = (index, value) => {
    const updatedSkills = skills.map((skill, i) => (i === index ? value : skill));
    setSkills(updatedSkills);
  };

  const addExperience = () => {
    setExperience([...experience, ""]);
  };

  const removeExperience = (index) => {
    const updatedExperience = experience.filter((_, i) => i !== index);
    setExperience(updatedExperience);
  };

  const updateExperience = (index, value) => {
    const updatedExperience = experience.map((exp, i) => (i === index ? value : exp));
    setExperience(updatedExperience);
  };

  return (
    <div className="bg-gray-200 ">
      <Navbar />
      <div className="p-4 sm:p-6 md:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Profile Box */}
          <div className="box bg-white shadow-md rounded-lg p-4">
            {editMode === "profile" ? (
              <div>
                <div className="mb-4">
                  <label htmlFor="profilePhoto" className="block text-sm font-medium text-gray-700">
                    Profile Photo
                  </label>
                  <input
                    type="file"
                    id="profilePhoto"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="mt-2"
                  />
                  {imagePreview && (
                    <img
                      src={imagePreview}
                      alt="Profile Preview"
                      className="w-20 h-20 rounded-full mx-auto mt-4"
                    />
                  )}
                </div>
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  className="mb-2 p-2 border rounded"
                  placeholder="Name"
                />
                <input
                  type="text"
                  value={profile.role}
                  onChange={(e) => setProfile({ ...profile, role: e.target.value })}
                  className="mb-2 p-2 border rounded"
                  placeholder="Role"
                />
                <input
                  type="text"
                  value={profile.batch}
                  onChange={(e) => setProfile({ ...profile, batch: e.target.value })}
                  className="mb-2 p-2 border rounded"
                  placeholder="Batch"
                />
                <button
                  onClick={() => handleSave("profile")}
                  className="mt-4 p-2 bg-blue-500 text-white rounded"
                >
                  Save
                </button>
                <button onClick={closeEdit} className="mt-4 p-2 bg-gray-200 rounded">
                  Cancel
                </button>
              </div>
            ) : (
              <div>
                <img
                  src={profile.profilePhoto}
                  alt="Profile"
                  className="w-20 h-20 rounded-full mx-auto mb-4"
                />
                <h2 className="text-lg font-semibold">{profile.name}</h2>
                <p>{profile.role}</p>
                <p>{profile.batch}</p>
                <button
                  onClick={() => handleEdit("profile")}
                  className="mt-4 p-2 bg-gray-100 hover:bg-gray-200 rounded"
                >
                  <PencilIcon className="w-6 h-6 inline-block" /> Edit
                </button>
              </div>
            )}
          </div>

          {/* Skills Box */}
          <div className="box bg-white shadow-md rounded-lg p-4">
            {editMode === "skills" ? (
              <div>
                {skills.map((skill, index) => (
                  <div key={index} className="flex mb-2">
                    <input
                      type="text"
                      value={skill}
                      onChange={(e) => updateSkill(index, e.target.value)}
                      className="p-2 border rounded w-3/4"
                      placeholder="Enter skill"
                    />
                    <button onClick={() => removeSkill(index)} className="ml-2 p-2 bg-red-500 text-white rounded">
                      Remove
                    </button>
                  </div>
                ))}
                <button onClick={addSkill} className="mt-4 p-2 bg-blue-500 text-white rounded">
                  Add Skill
                </button>
                <button onClick={() => handleSave("skills")} className="mt-4 p-2 bg-blue-500 text-white rounded">
                  Save
                </button>
                <button onClick={closeEdit} className="mt-4 p-2 bg-gray-200 rounded">
                  Cancel
                </button>
              </div>
            ) : (
              <div>
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
            )}
          </div>

          {/* Info Box */}
          <div className="box bg-white shadow-md rounded-lg p-4">
            {editMode === "info" ? (
              <div>
                <input
                  type="email"
                  value={info.email}
                  onChange={(e) => setInfo({ ...info, email: e.target.value })}
                  className="mb-2 p-2 border rounded"
                />
                <input
                  type="text"
                  value={info.gender}
                  onChange={(e) => setInfo({ ...info, gender: e.target.value })}
                  className="mb-2 p-2 border rounded"
                />
                <button onClick={() => handleSave("info")} className="mt-4 p-2 bg-blue-500 text-white rounded">
                  Save
                </button>
                <button onClick={closeEdit} className="mt-4 p-2 bg-gray-200 rounded">
                  Cancel
                </button>
              </div>
            ) : (
              <div>
                <h2 className="text-lg font-semibold">More Information</h2>
                <p className="text-sm mt-2">Email: {info.email}</p>
                <p className="text-sm">Gender: {info.gender}</p>
                <button onClick={() => handleEdit("info")} className="mt-4 p-2 bg-gray-100 hover:bg-gray-200 rounded">
                  <PencilIcon className="w-6 h-6 inline-block" /> Edit
                </button>
              </div>
            )}
           </div>

         
        {/* Connect Box */}
        <div className="box bg-white shadow-md rounded-lg p-4">
  {editMode === "connect" ? (
    <div>
      <input
        type="url"
        value={connectHandles.instagram}
        onChange={(e) => setConnectHandles({ ...connectHandles, instagram: e.target.value })}
        className="mb-2 p-2 border rounded"
        placeholder="Instagram URL"
      />
      <input
        type="url"
        value={connectHandles.facebook}
        onChange={(e) => setConnectHandles({ ...connectHandles, facebook: e.target.value })}
        className="mb-2 p-2 border rounded"
        placeholder="Facebook URL"
      />
      <input
        type="url"
        value={connectHandles.linkedin}
        onChange={(e) => setConnectHandles({ ...connectHandles, linkedin: e.target.value })}
        className="mb-2 p-2 border rounded"
        placeholder="LinkedIn URL"
      />
      <input
        type="url"
        value={connectHandles.github}
        onChange={(e) => setConnectHandles({ ...connectHandles, github: e.target.value })}
        className="mb-2 p-2 border rounded"
        placeholder="GitHub URL"
      />

      <button onClick={() => handleSave("connect")} className="mt-4 p-2 bg-blue-500 text-white rounded">
        Save
      </button>
      <button onClick={closeEdit} className="mt-4 p-2 bg-gray-200 rounded">
        Cancel
      </button>
    </div>
  ) : (
    <div>
      <h2 className="text-lg font-semibold">Connect With Me</h2>
      <p className="text-sm mt-2">
        {connectHandles.instagram ? (
          <a href={connectHandles.instagram} target="_blank" rel="noopener noreferrer" className="text-blue-500 flex items-center">
            <FaInstagram className="mr-2" /> Instagram
          </a>
        ) : (
          "Instagram: Enter URL"
        )}
      </p>
      <p className="text-sm">
        {connectHandles.facebook ? (
          <a href={connectHandles.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-500 flex items-center">
            <FaFacebook className="mr-2" /> Facebook
          </a>
        ) : (
          "Facebook: Enter URL"
        )}
      </p>
      <p className="text-sm">
        {connectHandles.linkedin ? (
          <a href={connectHandles.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 flex items-center">
            <FaLinkedin className="mr-2" /> LinkedIn
          </a>
        ) : (
          "LinkedIn: Enter URL"
        )}
      </p>
      <p className="text-sm">
        {connectHandles.github ? (
          <a href={connectHandles.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 flex items-center">
            <FaGithub className="mr-2" /> GitHub
          </a>
        ) : (
          "GitHub: Enter URL"
        )}
      </p>

      <button onClick={() => handleEdit("connect")} className="mt-4 p-2 bg-gray-100 hover:bg-gray-200 rounded">
        <PencilIcon className="w-6 h-6 inline-block" /> Edit
      </button>
    </div>
  )}
</div>




          {/* Education Box */}
          <div className="box bg-white shadow-md rounded-lg p-4">
            {editMode === "education" ? (
              <div>
                <input
                  type="text"
                  value={education}
                  onChange={(e) => setEducation(e.target.value)}
                  className="mb-2 p-2 border rounded"
                />
                <button onClick={() => handleSave("education")} className="mt-4 p-2 bg-blue-500 text-white rounded">
                  Save
                </button>
                <button onClick={closeEdit} className="mt-4 p-2 bg-gray-200 rounded">
                  Cancel
                </button>
              </div>
            ) : (
              <div>
                <h2 className="text-lg font-semibold">Education</h2>
                <p className="text-sm mt-2">{education}</p>
                <button onClick={() => handleEdit("education")} className="mt-4 p-2 bg-gray-100 hover:bg-gray-200 rounded">
                  <PencilIcon className="w-6 h-6 inline-block" /> Edit
                </button>
              </div>
            )}
          </div>

           {/* Experience Section */}
           <div className="box bg-white shadow-md rounded-lg p-4">
        {editMode === "experience" ? (
          <div>
            {experience.map((exp, index) => (
              <div key={index} className="flex mb-2">
                <input
                  type="text"
                  value={exp}
                  onChange={(e) => updateExperience(index, e.target.value)}
                  className="p-2 border rounded w-3/4"
                  placeholder="Enter experience"
                />
                <button
                  onClick={() => removeExperience(index)}
                  className="ml-2 p-2 bg-red-500 text-white rounded"
                >
                  Remove
                </button>
              </div>
            ))}
            <button onClick={addExperience} className="mt-4 p-2 bg-blue-500 text-white rounded">
              Add Experience
            </button>
            <button onClick={() => handleSave("experience")} className="mt-4 p-2 bg-blue-500 text-white rounded">
              Save
            </button>
            <button onClick={closeEdit} className="mt-4 p-2 bg-gray-200 rounded">
              Cancel
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-lg font-semibold">Experience</h2>
            <ul className="mt-2">
              {experience.length > 0 ? (
                experience.map((exp, index) => <li key={index} className="text-sm">{exp}</li>)
              ) : (
                <li className="text-sm text-gray-500">No experiences added yet.</li>
              )}
            </ul>
            <button
              onClick={() => handleEdit("experience")}
              className="mt-4 p-2 bg-gray-100 hover:bg-gray-200 rounded"
            >
              Edit
            </button>
          </div>
        )}
      </div>
        </div>
      </div>
    </div>
  );
};

export default User;