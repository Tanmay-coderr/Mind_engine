// CounselorPage.jsx
import React from "react";
import { FaStar } from "react-icons/fa";

const counselors = [
  {
    id: 1,
    name: "Dr. Priya Sharma",
    specialization: "Clinical Psychologist",
    bio: "10+ years of experience in therapy, stress management, and mental wellness.",
    price: "₹1200 / session",
    rating: 4.8,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Rahul Verma",
    specialization: "Career Counselor",
    bio: "Helps students and professionals make better career choices with proven strategies.",
    price: "₹900 / session",
    rating: 4.5,
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    id: 3,
    name: "Dr. Ananya Gupta",
    specialization: "Relationship Counselor",
    bio: "Specializes in conflict resolution, family therapy, and communication skills.",
    price: "₹1500 / session",
    rating: 4.9,
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 4,
    name: "Amit Mehra",
    specialization: "Life Coach",
    bio: "Guides individuals towards achieving goals, building confidence, and personal growth.",
    price: "₹1000 / session",
    rating: 4.6,
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
];

const Counselor = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-12 px-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-700 drop-shadow-md">
          🌟 Book a Counselor
        </h1>
        <p className="text-gray-600 text-lg mt-3">
          Choose from our expert counselors for personalized online sessions.
        </p>
      </div>

      {/* Counselors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {counselors.map((counselor) => (
          <div
            key={counselor.id}
            className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 p-6"
          >
            {/* Profile Image */}
            <div className="flex justify-center mb-5">
              <img
                src={counselor.image}
                alt={counselor.name}
                className="w-28 h-28 rounded-full object-cover shadow-md border-4 border-purple-200"
              />
            </div>

            {/* Info */}
            <h2 className="text-2xl font-semibold text-gray-800 text-center">
              {counselor.name}
            </h2>
            <p className="text-purple-600 text-center font-medium">
              {counselor.specialization}
            </p>

            {/* Rating */}
            <div className="flex justify-center items-center mt-2 mb-3">
              {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                  <FaStar
                    key={index}
                    className={`h-5 w-5 ${
                      ratingValue <= Math.round(counselor.rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                );
              })}
              <span className="ml-2 text-sm text-gray-600">
                {counselor.rating.toFixed(1)}
              </span>
            </div>

            {/* Bio */}
            <p className="text-gray-600 text-sm text-center mb-4">
              {counselor.bio}
            </p>

            {/* Price */}
            <p className="text-lg font-bold text-center text-green-600 mb-4">
              {counselor.price}
            </p>

            {/* Book Button */}
            <div className="flex justify-center">
              <button className="px-6 py-2 bg-purple-600 text-white rounded-full shadow-md hover:bg-purple-700 transition">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counselor;
