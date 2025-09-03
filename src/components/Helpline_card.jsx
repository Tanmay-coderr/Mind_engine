import React from "react";
import { Phone, Globe, MessageCircle } from "lucide-react";

function HelplineCard({ title, description, availability, contacts, website }) {
  return (
    <div className="max-w-md mb-5 mt-10 w-full bg-red-500 rounded-xl shadow-lg p-5 border-0 hover:shadow-2xl hover:scale-110 transition duration-300 ease-in-out">
      {/* Title */}
      <h2 className="text-2xl font-bold  text-left font-mono text-white">{title}</h2>

      {/* Availability */}
      <div className="flex items-center gap-2 p-2 mt-2 text-sm text-gray-600">
        <span className="text-green-600 p-1 text-lg font-bold ">OPEN</span>
        <span className="bg-white text-teal-500 px-2 py-1 rounded text-xs">
          {availability}
        </span>
      </div>

      {/* Description */}
      <p className="text-xl text-left text-white tracking-wider font-bold font-serif mt-2 p-3 leading-relaxed">{description}</p>

      {/* Contacts */}
      <div className="mt-4 space-y-1 text-sm">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 p-2 cursor-pointer"
          >
            {contact.type === "phone" && <Phone size={16} />}
            {contact.type === "whatsapp" && <MessageCircle size={16} />}
            <span>{contact.value}</span>
          </div>
        ))}
      </div>

      {/* Website */}
      {website && (
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className=" mt-3 text-sm text-blue-600 font-bold  hover:underline flex items-center gap-1"
        >
          <Globe size={16} /> {website}
        </a>
      )}
    </div>
  );
}

export default HelplineCard;
