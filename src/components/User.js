import React, { useState, useEffect } from "react";
import { PencilIcon } from "@heroicons/react/24/solid";
import Navbar from "./Navbar";
import axios from "axios";
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const User = () => {
  const [editMode, setEditMode] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: null,
    role: null,
    batch: null,
    profilePhoto: "https://via.placeholder.com/150",
    email: null,
    gender: null,
    skills: [],
    connectHandles: {
      instagram: "",
      facebook: "",
      linkedin: "",
      github: "",
    },
    education: null,
    experience: [],
  });

  const [imagePreview, setImagePreview] = useState(userInfo.profilePhoto);

  useEffect(() => {
    document.body.classList.add('bg-gray-200');
    return () => {
      document.body.classList.remove('bg-gray-200');
    };
  }, []);

  const getUserInfo = async () => {
    const token = localStorage.getItem("authToken");
    if (token) {
      try {
        const response = await axios.get("http://localhost:8000/api/alumni/user/info", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUserInfo({
          name: response.data.full_name,
          role: response.data.user_type,
          batch: response.data.batch,
          profilePhoto: response.data.profilePhoto || "https://via.placeholder.com/150",
          email: response.data.email,
          gender: response.data.gender,
          skills: response.data.skills || [],
          connectHandles: {
            instagram: response.data.instagram || "",
            facebook: response.data.facebook || "",
            linkedin: response.data.linkedin || "",
            github: response.data.github || "",
          },
          education: response.data.education || "",
          experience: response.data.experience || [],
        });
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
  const saveUserDetails = async () => {
    const token = localStorage.getItem("authToken");
  
    if (token) {
      try {
        const userData = {
          full_name: userInfo.name,
          user_type: userInfo.role,
          batch: userInfo.batch,
          profilePhoto: userInfo.profilePhoto,
          skills: userInfo.skills,
          email: userInfo.email,
          gender: userInfo.gender,
          instagram: userInfo.instagram,
          facebook: userInfo.facebook,
          linkedin: userInfo.linkedin,
          github: userInfo.github,
          education: userInfo.education,
          experience: userInfo.experience,
        };
  
        const response = await axios.post("http://localhost:8000/api/alumni/user/update", userData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        console.log("User details updated successfully", response.data);
        // Optionally, you can show a success message or update UI
      } catch (error) {
        console.error("Error updating user details:", error);
        // Optionally, show an error message
      }
    } else {
      alert("You need to log in to save these details.");
    }
  };
  

  const handleSave = () => {
    console.log("Saved user info:", userInfo);
    setEditMode(false);
    saveUserDetails();
  };

  const addSkill = () => {
    setUserInfo(prevState => ({
      ...prevState,
      skills: [...prevState.skills, ""]
    }));
  };

  const removeSkill = (index) => {
    const updatedSkills = userInfo.skills.filter((_, i) => i !== index);
    setUserInfo(prevState => ({ ...prevState, skills: updatedSkills }));
  };

  const updateSkill = (index, value) => {
    const updatedSkills = userInfo.skills.map((skill, i) => (i === index ? value : skill));
    setUserInfo(prevState => ({ ...prevState, skills: updatedSkills }));
  };

  const addExperience = () => {
    setUserInfo(prevState => ({
      ...prevState,
      experience: [...prevState.experience, ""]
    }));
  };

  const removeExperience = (index) => {
    const updatedExperience = userInfo.experience.filter((_, i) => i !== index);
    setUserInfo(prevState => ({ ...prevState, experience: updatedExperience }));
  };

  const updateExperience = (index, value) => {
    const updatedExperience = userInfo.experience.map((exp, i) => (i === index ? value : exp));
    setUserInfo(prevState => ({ ...prevState, experience: updatedExperience }));
  };

  return (
    <div className="bg-gray-200">
      <Navbar />
      <div className="p-4 sm:p-6 md:p-8">
        <div className="box bg-white shadow-md rounded-lg p-4">
          {editMode ? (
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
                value={userInfo.name || ""}
                onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                className="mb-2 p-2 border rounded"
                placeholder="Name"
              />
              <input
                type="text"
                value={userInfo.role || ""}
                onChange={(e) => setUserInfo({ ...userInfo, role: e.target.value })}
                className="mb-2 p-2 border rounded"
                placeholder="Role"
              />
              <input
                type="text"
                value={userInfo.batch || ""}
                onChange={(e) => setUserInfo({ ...userInfo, batch: e.target.value })}
                className="mb-2 p-2 border rounded"
                placeholder="Batch"
              />
              <h3 className="mt-4 text-lg font-semibold">Skills</h3>
              {userInfo.skills.map((skill, index) => (
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

              <h3 className="mt-4 text-lg font-semibold">Experience</h3>
              {userInfo.experience.map((exp, index) => (
                <div key={index} className="flex mb-2">
                  <input
                    type="text"
                    value={exp}
                    onChange={(e) => updateExperience(index, e.target.value)}
                    className="p-2 border rounded w-3/4"
                    placeholder="Enter experience"
                  />
                  <button onClick={() => removeExperience(index)} className="ml-2 p-2 bg-red-500 text-white rounded">
                    Remove
                  </button>
                </div>
              ))}
              <button onClick={addExperience} className="mt-4 p-2 bg-blue-500 text-white rounded">
                Add Experience
              </button>

              <h3 className="mt-4 text-lg font-semibold">Education</h3>
              <input
                type="text"
                disabled
                value={userInfo.education || ""}
                className="mb-2 p-2 border rounded"
                placeholder="Education"
              />

              <h3 className="mt-4 text-lg font-semibold">Connect Handles</h3>
              <input
                type="url"
                value={userInfo.connectHandles.instagram || ""}
                onChange={(e) => setUserInfo({ ...userInfo, connectHandles: { ...userInfo.connectHandles, instagram: e.target.value } })}
                className="mb-2 p-2 border rounded"
                placeholder="Instagram URL"
              />
              <input
                type="url"
                value={userInfo.connectHandles.facebook || ""}
                onChange={(e) => setUserInfo({ ...userInfo, connectHandles: { ...userInfo.connectHandles, facebook: e.target.value } })}
                className="mb-2 p-2 border rounded"
                placeholder="Facebook URL"
              />
              <input
                type="url"
                value={userInfo.connectHandles.linkedin || ""}
                onChange={(e) => setUserInfo({ ...userInfo, connectHandles: { ...userInfo.connectHandles, linkedin: e.target.value } })}
                className="mb-2 p-2 border rounded"
                placeholder="LinkedIn URL"
              />
              <input
                type="url"
                value={userInfo.connectHandles.github || ""}
                onChange={(e) => setUserInfo({ ...userInfo, connectHandles: { ...userInfo.connectHandles, github: e.target.value } })}
                className="mb-2 p-2 border rounded"
                placeholder="GitHub URL"
              />
              <br />

              <button onClick={handleSave} className="mt-4 p-2 bg-blue-500 text-white rounded">
                Save
              </button>
            </div>
          ) : (
            <div>
              <img
                src={userInfo.profilePhoto}
                alt="Profile"
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h2 className="text-lg font-semibold">{userInfo.name}</h2>
              <p>{userInfo.role}</p>
              <p>{userInfo.batch}</p>
              <p>{userInfo.email}</p>
              <p>{userInfo.gender}</p>

              <h3 className="mt-4 text-lg font-semibold">Skills</h3>
              <ul>
                {userInfo.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
              <h3 className="mt-4 text-lg font-semibold">Experience</h3>
              <ul>
                {userInfo.experience.map((exp, index) => (
                  <li key={index}>{exp}</li>
                ))}
              </ul>
              <h3 className="mt-4 text-lg font-semibold">Education</h3>
              <p>{userInfo.education}</p>
              <h3 className="mt-4 text-lg font-semibold">Connect Handles</h3>
              <p>Instagram: {userInfo.connectHandles.instagram}</p>
              <p>Facebook: {userInfo.connectHandles.facebook}</p>
              <p>LinkedIn: {userInfo.connectHandles.linkedin}</p>
              <p>GitHub: {userInfo.connectHandles.github}</p>

              <button onClick={() => setEditMode(true)} className="mt-4 p-2 bg-blue-500 text-white rounded">
                Edit Profile
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default User;
