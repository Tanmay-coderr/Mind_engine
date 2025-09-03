import React from "react";
import SplitText from "./SplitText";
import { NavLink } from "react-router-dom";
import robo from "../assets/robo.jpg";
import help from "../assets/help.jpg";
import course from "../assets/course.jpg";
import background from "../assets/bg.png";


import therapist from "../assets/therapist.webp";



function Home() {
    const handleAnimationComplete = () => {
        console.log("All letters have animated!");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6 text-center"
         style={{
    backgroundImage: `url(${background})`, // replace `robo` with any image you want
    backgroundSize: 'cover',         // make the image cover the entire area
    backgroundPosition: 'center',    // center the image
    backgroundRepeat: 'no-repeat',   // don't repeat
  }}>
            
            {/* Big Heading with SplitText */}
            <SplitText
                text="HEALING STARTS HERE!"
                className="text-6xl md:text-8xl font-sans text-orange-500 mt-10 font-bold mb-10"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                onLetterAnimationComplete={handleAnimationComplete}
            />

            {/* Test Section */}
            <div className="w-full md:w-3/4 lg:w-2/3 bg-blue-500 text-white p-10 mt-16 rounded-2xl shadow-xl text-left relative overflow-hidden">
                {/* Patterned Background */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,_#ffffff_1px,_transparent_1px)] bg-[length:20px_20px]"></div>

                <h2 className="text-3xl cursor-pointer md:text-4xl font-bold underline relative z-10 mb-4 hover:text-gray-300 transition duration-300 ease-in-out">
                    <NavLink to="/test">TAKE A TEST</NavLink>
                </h2>

                <p className="text-lg md:text-xl leading-relaxed relative z-10">
                    This short test is designed to help you understand the kind of stress
                    or depression you might be experiencing. Whether it stems from
                    academic pressures, financial challenges, or a mix of both, the test
                    provides clarity by analyzing your responses. Based on the results,
                    you’ll gain personalized insights that can guide you towards the right
                    support and coping strategies. It’s not a diagnosis, but a first step
                    in understanding your mental well-being. Take the test and begin your
                    journey to healing today.
                </p>
            </div>
            {/* Info Section: AI Therapist */}

            {/* Info Section: AI Therapist */}
            <div className="w-full mb-6 max-w-6xl bg-pink-500 rounded-2xl shadow-md flex flex-col md:flex-row hover:shadow-2xl hover:scale-110 transition duration-500 ease-in-out items-center md:items-start mt-12 p-4">
                {/* Left Side - Image */}
                <div className="md:w-1/3 w-full flex justify-center md:justify-start mb-4 md:mb-0">
                    <img
                        src={robo}
                        alt="AI Therapist"
                        className="rounded-xl object-cover w-full h-60 md:h-72"
                    />
                </div>

                {/* Right Side - Description */}
                <div className="md:w-2/3 w-full md:pl-6 text-center font-mono">
                    <h2 className="text-2xl font-bold text-center underline text-white mb-4">
                        MEET YOUR AI THERAPIST
                    </h2>
                    <p className="text-gray-200 leading-relaxed mb-4">
                        Our platform features an advanced AI-powered therapist, available
                        24/7 to guide you through stress, anxiety, and emotional challenges.
                        With natural, empathetic responses and evidence-based techniques,
                        the AI ensures that you always have someone to talk to—anytime,
                        anywhere.
                    </p>
                    <p className="text-gray-200 leading-relaxed">
                        🌟 Benefits include: personalized coping strategies, complete
                        anonymity, instant support without wait times, and continuous
                        learning to improve the quality of interactions over time.
                    </p>
                </div>
            </div>
            <div className="max-w-6xl mx-auto mt-10 font-mono bg-green-500 hover:shadow-2xl hover:scale-110 transition duration-500 ease-in-out shadow-md rounded-xl p-6 flex flex-col md:flex-row items-center md:items-start">
                {/* Left side: Description */}
                <div className="md:w-2/3 w-full md:pr-8 mb-6 md:mb-0">
                    <h2 className="text-2xl text-white underline font-bold mb-4">CONNECT WITH A THERAPIST</h2>
                    <p className="text-gray-200 leading-relaxed">
                        Sometimes, talking to a real human can make all the difference. Our platform
                        offers a seamless way to connect with professional therapists when you need
                        personalized guidance and support. Whether you are facing academic stress,
                        emotional challenges, or financial worries, help is just a click away.
                    </p>
                    <p className="text-gray-200 mt-4 leading-relaxed">
                        This feature ensures privacy, quick access, and the comfort of speaking with
                        trained professionals who can provide actionable advice and coping strategies
                        tailored to your situation.
                    </p>
                </div>

                {/* Right side: Image */}
                <div className="md:w-1/3 w-full flex justify-center md:justify-end">
                    <img
                        src={therapist}
                        alt="AI Therapist"
                        className="rounded-xl object-cover w-full h-60 md:h-72"
                    />
                </div>
            </div>
            <div className="w-full mb-6 max-w-6xl bg-violet-500 rounded-2xl shadow-md flex flex-col md:flex-row hover:shadow-2xl hover:scale-110 transition duration-500 ease-in-out items-center md:items-start mt-12 p-4">
                {/* Left Side - Image */}
                <div className="md:w-1/3 w-full flex justify-center md:justify-start mb-4 md:mb-0">
                    <img
                        src={course}
                        alt="AI Therapist"
                        className="rounded-xl object-cover w-full h-60 md:h-72"
                    />
                </div>

                {/* Right Side - Description */}
                <div className="md:w-2/3 w-full md:pl-6 text-center font-mono">
                    <h2 className="text-2xl font-bold text-center underline text-white mb-4">
                        COURSES FOR MENTAL WELLNESS
                    </h2>
                    <p className="text-gray-200 leading-relaxed mb-4">
                        Our platform offers a variety of structured courses designed to support mental wellness
                        and aid recovery from depression. Each course provides practical exercises,
                        coping strategies, and guidance from mental health experts to help you manage
                        stress and emotional challenges effectively.
                    </p>
                    <p className="text-gray-200 leading-relaxed">
                        By following these courses, users can build resilience, improve their mood, and
                        gradually regain a sense of control over their mental health. The courses are
                        flexible, easy to follow, and tailored to meet individual needs.
                    </p>
                </div>
            </div>
            <div className="max-w-6xl mx-auto mt-10 font-mono bg-red-500 hover:shadow-2xl hover:scale-110 transition duration-500 ease-in-out shadow-md rounded-xl p-6 flex flex-col md:flex-row items-center mb-10 md:items-start">
                {/* Left side: Description */}
                <div className="md:w-2/3 w-full md:pr-8 mb-6 md:mb-0">
                    <h2 className="text-2xl text-white underline font-bold mb-4">HELP IS ALWAYS THERE</h2>
                    <p className="text-gray-200 leading-relaxed">
                              In moments of distress, knowing where to turn is crucial. Our platform provides 
      a curated list of important helplines for mental health support. These helplines 
      are available 24/7 and connect you with trained professionals ready to listen, 
      advise, and guide you through difficult times.

                    </p>
                    <p className="text-gray-200 mt-4 leading-relaxed">
                         Whether you are experiencing anxiety, depression, or just need someone to talk to, 
      these helplines ensure that help is always within reach. The goal is to provide 
      immediate assistance and peace of mind when you need it the most.
                    </p>
                </div>

                {/* Right side: Image */}
                <div className="md:w-1/3 w-full flex justify-center md:justify-end">
                    <img
                        src={help}
                        alt="AI Therapist"
                        className="rounded-xl object-cover w-full h-60 md:h-72"
                    />
                </div>
            </div>





        </div>
    );
}

export default Home;
