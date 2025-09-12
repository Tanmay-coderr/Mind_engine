// CoursePage.jsx
import React, { useState, useEffect } from "react";

const CoursePage = ({ userId, course }) => {
  const totalWeeks = course.weeks.length;
  const tasksPerWeek = course.weeks[0].tasks.length;

  const [progress, setProgress] = useState(
    Array.from({ length: totalWeeks }, () => Array(tasksPerWeek).fill(false))
  );
  const [expandedWeek, setExpandedWeek] = useState(null);

  useEffect(() => {
    // fetchProgressFromDB(userId, course.id)
    //   .then(data => setProgress(data))
    //   .catch(() => console.log("No previous data"));
  }, [userId, course.id]);

  const handleTaskToggle = (weekIndex, taskIndex) => {
    const newProgress = [...progress];
    newProgress[weekIndex][taskIndex] = !newProgress[weekIndex][taskIndex];
    setProgress(newProgress);

    const userProgressData = {
      userId,
      courseId: course.id,
      progress: newProgress,
    };
    saveProgressToDB(userProgressData);
  };

  const saveProgressToDB = (data) => {
    console.log("Ready to save to DB:", data);
  };

  const completedTasks = progress.flat().filter(Boolean).length;
  const totalTasks = totalWeeks * tasksPerWeek;
  const progressPercentage = Math.round((completedTasks / totalTasks) * 100);

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-yellow-50 via-pink-50 to-blue-50">
      {/* Course Title */}
      <div className="text-center mb-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-purple-700 drop-shadow-md mb-3">
          🚀 {course.name.replace("_", " ").toUpperCase()}
        </h1>
        <p className="text-gray-600 text-lg md:text-xl">
          Complete tasks week by week and track your progress!
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Weeks List */}
        <div className="md:w-3/4 space-y-6">
          {course.weeks.map((week, weekIndex) => {
            const weekCompleted = progress[weekIndex].filter(Boolean).length;
            const weekProgress = Math.round(
              (weekCompleted / week.tasks.length) * 100
            );

            return (
              <div
                key={weekIndex}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
              >
                {/* Week Header */}
                <div
                  className="p-5 cursor-pointer flex justify-between items-center bg-gradient-to-r from-purple-200 via-pink-100 to-yellow-100 rounded-t-2xl"
                  onClick={() =>
                    setExpandedWeek(expandedWeek === weekIndex ? null : weekIndex)
                  }
                >
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Week {week.weekNumber}
                  </h2>
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-700 font-semibold">
                      {weekProgress}%
                    </span>
                    <span className="text-gray-700">
                      {expandedWeek === weekIndex ? "▲" : "▼"}
                    </span>
                  </div>
                </div>

                {/* Tasks List */}
                {expandedWeek === weekIndex && (
                  <div className="p-5 bg-white rounded-b-2xl space-y-3">
                    {week.tasks.map((task, taskIndex) => (
                      <div
                        key={taskIndex}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-purple-50 transition"
                      >
                        <input
                          type="checkbox"
                          checked={progress[weekIndex][taskIndex]}
                          onChange={() => handleTaskToggle(weekIndex, taskIndex)}
                          className="w-5 h-5 accent-purple-500"
                        />
                        <span
                          className={
                            progress[weekIndex][taskIndex]
                              ? "line-through text-gray-400"
                              : "text-gray-800"
                          }
                        >
                          {task}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Progress Bar */}
        <div className="md:w-1/4 flex flex-col justify-start items-center mt-6 md:mt-0">
          <h3 className="text-xl font-semibold text-gray-700 mb-3">
            Overall Progress
          </h3>
          <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden shadow">
            <div
              className="bg-purple-500 h-6 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <span className="mt-2 font-bold text-gray-700">{progressPercentage}% Completed</span>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
