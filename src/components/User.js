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

        console.log(response, "response");

        setUserInfo({
          name: response.data.full_name,
          role: response.data.user_type,
          batch: response.data.batch,
          profilePhoto: response.data.profilePhoto || "https://via.placeholder.com/150",
          email: response.data.email,
          gender: response.data.gender,
          skills: Array.isArray(response.data.skills) ? response.data.skills : [], // Ensure skills is an array, even if empty
          connectHandles: {
            instagram: response.data.instagram || "",
            facebook: response.data.facebook || "",
            linkedin: response.data.linkedin || "",
            github: response.data.github || "",
          },
          education: response.data.education || "",
          experience: Array.isArray(response.data.experience) ? response.data.experience : [],// Ensure experience is an array, even if empty
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

  const handleSave = async () => {
    console.log("Saved user info:", userInfo);
    setEditMode(false);
    const token = localStorage.getItem("authToken");
    if (!token) {
      alert("You need to log in to edit the profile.");
      return;
    }

    try {
      const userData = {
        full_name: userInfo.name,
        user_type: userInfo.role,
        batch: userInfo.batch,
        gender: userInfo.gender,
        skills: userInfo.skills,
        experience: userInfo.experience,
        instagram: userInfo.connectHandles.instagram,
        linkedin: userInfo.connectHandles.linkedin,
        facebook: userInfo.connectHandles.facebook,
        github: userInfo.connectHandles.github,
      };

      const response = await axios.put(
        "http://localhost:8000/api/alumni/user/update",
        userData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Profile updated successfully", response.data);
    } catch (error) {
      console.error("Error updating user profile:", error);
      alert("Failed to update the profile. Please try again.");
    }
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
    const updatedExperience = userInfo.experience?.filter((_, i) => i !== index);
    setUserInfo(prevState => ({ ...prevState, experience: updatedExperience }));
  };

  const updateExperience = (index, value) => {
    const updatedExperience = userInfo.experience?.map((exp, i) => (i === index ? value : exp));
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
              {userInfo.skills.length > 0 ? (
                userInfo.skills.map((skill, index) => (
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
                ))
              ) : (
                <p>No skills added yet.</p>  // Display when skills array is empty
              )}
              <button onClick={addSkill} className="mt-4 p-2 bg-blue-500 text-white rounded">
                Add Skill
              </button>

              <h3 className="mt-4 text-lg font-semibold">Experience</h3>
              {userInfo.experience?.length > 0 ? (
                userInfo.experience?.map((exp, index) => (
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
                ))
              ) : (
                <p>No experience added yet.</p>  // Display when experience array is empty
              )}
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
                placeholder="Instagram"
              />
              <input
                type="url"
                value={userInfo.connectHandles.facebook || ""}
                onChange={(e) => setUserInfo({ ...userInfo, connectHandles: { ...userInfo.connectHandles, facebook: e.target.value } })}
                className="mb-2 p-2 border rounded"
                placeholder="Facebook"
              />
              <input
                type="url"
                value={userInfo.connectHandles.linkedin || ""}
                onChange={(e) => setUserInfo({ ...userInfo, connectHandles: { ...userInfo.connectHandles, linkedin: e.target.value } })}
                className="mb-2 p-2 border rounded"
                placeholder="LinkedIn"
              />
              <input
                type="url"
                value={userInfo.connectHandles.github || ""}
                onChange={(e) => setUserInfo({ ...userInfo, connectHandles: { ...userInfo.connectHandles, github: e.target.value } })}
                className="mb-2 p-2 border rounded"
                placeholder="GitHub"
              />

              <button
                onClick={handleSave}
                className="mt-4 p-3 bg-green-500 text-white rounded"
              >
                Save Changes
              </button>
            </div>
          ) : (
            <div>
              <div className="flex items-center">
                <img src={userInfo.profilePhoto} alt="Profile" className="w-20 h-20 rounded-full" />
                <button onClick={() => setEditMode(true)} className="ml-4">
                  <PencilIcon className="h-6 w-6 text-gray-500" />
                </button>
              </div>

              <h2 className="mt-4 text-2xl font-semibold">{userInfo.name}</h2>
              <p>{userInfo.role}</p>
              <p>{userInfo.batch}</p>

              <h3 className="mt-4 text-lg font-semibold">Skills</h3>
              {userInfo.skills.length > 0 ? (
                <ul>
                  {userInfo.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              ) : (
                <p>No skills added yet.</p>
              )}

              <h3 className="mt-4 text-lg font-semibold">Experience</h3>
              {userInfo.experience?.length > 0 ? (
                <ul>
                  {userInfo.experience?.map((exp, index) => (
                    <li key={index}>{exp}</li>
                  ))}
                </ul>
              ) : (
                <p>No experience added yet.</p>
              )}

              <h3 className="mt-4 text-lg font-semibold">Connect Handles</h3>
              <div className="flex space-x-4">
                <a href={userInfo.connectHandles.instagram} className="text-blue-500"><FaInstagram /></a>
                <a href={userInfo.connectHandles.facebook} className="text-blue-500"><FaFacebook /></a>
                <a href={userInfo.connectHandles.linkedin} className="text-blue-500"><FaLinkedin /></a>
                <a href={userInfo.connectHandles.github} className="text-blue-500"><FaGithub /></a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default User;
