// src/pages/Result.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const { topDomains } = location.state || { topDomains: [] };

  // Course recommendations (you can expand content later)
  const courseDetails = {
    academic: {
      title: "📘 Academic Stress Course",
      description:
        "Learn time management, study techniques, and mindfulness practices to handle exam pressure and assignments with confidence.",
      color: "from-blue-400 to-blue-600",
    },
    finance: {
      title: "💰 Financial Stress Course",
      description:
        "Discover budgeting tools, financial planning, and practical advice to reduce money-related worries and improve stability.",
      color: "from-green-400 to-green-600",
    },
    relationship: {
      title: "💞 Relationship Stress Course",
      description:
        "Build communication skills, manage conflicts, and strengthen bonds with friends, family, and partners.",
      color: "from-pink-400 to-pink-600",
    },
    career: {
      title: "🚀 Career & Future Course",
      description:
        "Clarify your career goals, learn job-prep strategies, and overcome uncertainty about the future.",
      color: "from-purple-400 to-purple-600",
    },
    general: {
      title: "🌈 General Stress & Wellness Course",
      description:
        "Adopt relaxation techniques, mindfulness, and holistic wellness strategies to balance all areas of life.",
      color: "from-orange-400 to-orange-600",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-blue-100 to-yellow-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-extrabold text-purple-700 drop-shadow mb-4">
        🎉 Your Personalized Results 🎉
      </h1>
      <p className="text-lg text-gray-700 mb-10 text-center max-w-2xl">
        Based on your answers, we recommend the following course
        {topDomains.length > 1 ? "s" : ""} to help you manage stress and
        improve your well-being. 🌟
      </p>

      <div className="grid gap-6 w-full max-w-5xl md:grid-cols-2">
        {topDomains.map((domain) => {
          const course = courseDetails[domain];
          return (
            <div
              key={domain}
              className={`p-6 rounded-2xl shadow-lg text-white bg-gradient-to-r ${course.color} hover:scale-105 hover:shadow-2xl transition transform`}
            >
              <h2 className="text-2xl font-bold mb-3">{course.title}</h2>
              <p className="text-white/90 leading-relaxed">{course.description}</p>
              <button
                onClick={() => alert(`Starting ${course.title}...`)} // Replace with real navigation later
                className="mt-4 px-6 py-2 bg-white text-gray-800 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
              >
                Start Course →
              </button>
            </div>
          );
        })}
      </div>

      <button
        onClick={() => navigate("/home")}
        className="mt-12 px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-lg font-bold rounded-full shadow-lg hover:scale-105 transition"
      >
        ⬅ Back to Home
      </button>
    </div>
  );
}

export default Result;
