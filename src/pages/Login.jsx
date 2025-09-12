import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("http://localhost:5000/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) setError(data.message || "Login failed");
      else {
        localStorage.setItem("authToken", data.token);
        navigate("/home");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong, try again");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4"
         style={{ 
           background: 'linear-gradient(120deg, #FFDEE9, #B5FFFC, #D4FFFE)' 
         }}>
      <div className="w-full max-w-md p-10 rounded-3xl shadow-2xl border border-white/20"
           style={{
             backdropFilter: "blur(15px)",
             backgroundColor: "rgba(255, 255, 255, 0.2)",
             boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
           }}>
        <h2 className="text-4xl font-bold text-orange-600 mb-6 text-center">Welcome Back</h2>
        {error && <div className="text-red-500 mb-4 text-center">{error}</div>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {["email", "password"].map((field) => (
            <div key={field} className="relative">
              <input
                type={field === "password" ? "password" : "text"}
                name={field}
                id={field}
                value={formData[field]}
                onChange={handleChange}
                required
                placeholder=" "
                className="peer w-full p-4 rounded-xl border border-gray-200 bg-white/30 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                style={{ backdropFilter: "blur(5px)" }}
              />
              <label
                htmlFor={field}
                className="absolute left-4 top-4 text-gray-400 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-orange-600 peer-focus:text-sm transition-all"
              >
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
            </div>
          ))}
          <button
            type="submit"
            className="relative px-8 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-orange-400 to-pink-500 hover:scale-105 transition-transform shadow-lg overflow-hidden"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-center text-gray-700">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-orange-600 font-semibold hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
