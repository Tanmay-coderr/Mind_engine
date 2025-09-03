import React from 'react'
import background from "../assets/bg.png";
import HelplineCard from "../components/helpline_card";
import TextType from './Texttype';


function Helpline() {
  const helplines = [
    {
      title: "Vandrevala Foundation Crisis Intervention Helpline",
      description:
        "Vandrevala Foundation crisis intervention helpline provides 24/7 free and confidential support by phone, text, and online chat.",
      availability: "24/7",
      contacts: [
        { type: "phone", value: "+91 9999 666 555" },
        { type: "whatsapp", value: "+91 9999 666 555" },
      ],
      website: "https://vandrevalafoundation.com",
    },
    {
      title: "Aasra / आसरा",
      description: "Aasra is a crisis intervention centre for the lonely, distressed and suicidal. We aim to help prevent and manage mental illness...",
      availability: "24/7",
      contacts: [{ type: "phone", value: "+91 9820 466 726 " }],
      website: "https://www.aasra.info/",
    },
    {
      title: "Tele MANAS",
      description: "Tele-MANAS is a Government of India initiative, providing a 24/7 free mental health support service. Available in English & 20 other regional languages, it connects you with trained counselors for guidance and support on any mental health concern",
      availability: "24/7",
      contacts: [{ type: "phone", value: "14416 " }],
      website: "https://telemanas.mohfw.gov.in/home",
    },
  ];
  return (

    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6 text-center"
      style={{
        backgroundImage: `url(${background})`, // replace `robo` with any image you want
        backgroundSize: 'cover',         // make the image cover the entire area
        backgroundPosition: 'center',    // center the image
        backgroundRepeat: 'no-repeat',   // don't repeat
      }}>
        <h1>
           <TextType 
  text={["HELP IS HERE!", "YOU ARE VALUABE!", "NEVER GIVE UP!"]}
  typingSpeed={150}
  pauseDuration={3000}
  showCursor={true}
  cursorCharacter="|"
  className="text-6xl md:text-8xl font-sans text-orange-500 mt-10 font-bold mb-10 tracking-wider "
/>
          </h1>
         
      <div className="min-h-screen  flex flex-col items-center gap-6 p-6">
     
        {helplines.map((helpline, index) => (
          <HelplineCard key={index} {...helpline} />
        ))}
      </div>

    </div>
  )
}

export default Helpline
