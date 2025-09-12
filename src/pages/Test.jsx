import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Test() {
  const navigate = useNavigate();

  const questions = [
    { id: 1, text: "I often feel overwhelmed by my study workload, assignments, or exam pressure.", domain: "academic" },
    { id: 2, text: "I worry about not having enough money for tuition, rent, or daily expenses.", domain: "finance" },
    { id: 3, text: "Conflicts or misunderstandings with friends, roommates, or family have been emotionally draining.", domain: "relationship" },
    { id: 4, text: "I'm anxious about what I’ll do after graduation or whether I’ll find a good job.", domain: "career" },
    { id: 5, text: "My academic stress makes it hard to concentrate, sleep, or enjoy breaks.", domain: "academic" },
    { id: 6, text: "Financial concerns distract me from studying or participating in campus activities.", domain: "finance" },
    { id: 7, text: "I feel panicked or very stressed when I think about my personal or romantic relationships.", domain: "relationship" },
    { id: 8, text: "I feel lost or pressured when thinking about my future career goals.", domain: "career" },
    { id: 9, text: "I often feel like I’m juggling too many things and losing control.", domain: "general" },
    { id: 10, text: "I experience physical signs of stress (like a racing heart, sweating, or shortness of breath).", domain: "general" },
  ];

  const [answers, setAnswers] = useState({});

  const handleAnswer = (qId, value) => {
    setAnswers({ ...answers, [qId]: value });
  };

 const handleFinish = () => {
  let scores = { academic: 0, finance: 0, relationship: 0, career: 0, general: 0 };

  questions.forEach((q) => {
    const answerValue = answers[q.id] !== undefined ? answers[q.id] : 0;
    scores[q.domain] += parseInt(answerValue);
  });

  const maxScore = Math.max(...Object.values(scores));
  const topDomains = Object.keys(scores).filter((d) => scores[d] === maxScore);

  // ✅ Always go to /result
  navigate("/result", { state: { topDomains } });
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-pink-100 to-yellow-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-extrabold text-purple-700 drop-shadow mb-4">
        🌸 Mental Health Stress Test 🌸
      </h1>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl">
        Answer these questions honestly to discover which areas of life may be causing stress.  
        Your answers will help us guide you to the most helpful resources & courses. 💡
      </p>

      <div className="w-full max-w-4xl space-y-6">
        {questions.map((q) => (
          <div
            key={q.id}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
          >
            <p className="font-semibold text-gray-800 mb-4">
              {q.id}. {q.text}
            </p>
            <div className="grid grid-cols-2 gap-3">
              <label className="flex items-center gap-2 p-2 rounded-lg hover:bg-blue-50 cursor-pointer">
                <input
                  type="radio"
                  name={`q${q.id}`}
                  value="0"
                  className="accent-green-500"
                  onChange={(e) => handleAnswer(q.id, e.target.value)}
                />
                <span>😌 Not at all</span>
              </label>
              <label className="flex items-center gap-2 p-2 rounded-lg hover:bg-blue-50 cursor-pointer">
                <input
                  type="radio"
                  name={`q${q.id}`}
                  value="1"
                  className="accent-yellow-500"
                  onChange={(e) => handleAnswer(q.id, e.target.value)}
                />
                <span>🙂 A little</span>
              </label>
              <label className="flex items-center gap-2 p-2 rounded-lg hover:bg-blue-50 cursor-pointer">
                <input
                  type="radio"
                  name={`q${q.id}`}
                  value="2"
                  className="accent-orange-500"
                  onChange={(e) => handleAnswer(q.id, e.target.value)}
                />
                <span>😟 Quite a bit</span>
              </label>
              <label className="flex items-center gap-2 p-2 rounded-lg hover:bg-blue-50 cursor-pointer">
                <input
                  type="radio"
                  name={`q${q.id}`}
                  value="3"
                  className="accent-red-500"
                  onChange={(e) => handleAnswer(q.id, e.target.value)}
                />
                <span>😣 Very much</span>
              </label>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleFinish}
        className="mt-10 px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xl font-bold rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition transform"
      >
        🚀 Finish & See My Course
      </button>
    </div>
  );
}

export default Test;
