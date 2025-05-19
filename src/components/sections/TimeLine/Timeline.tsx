import React from "react";
import { timeline } from "./timelineData";

const Timeline: React.FC = () => (
  <div className="relative w-full max-w-5xl">
    {/* Linha vertical central */}
    <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-blue-900" />

    <div className="flex flex-col space-y-12">
      {timeline.map((event, index) => {
        const isLeft = index % 2 === 0;
        return (
          <div
            key={index}
            className={`w-full flex flex-col md:flex-row items-center ${
              isLeft ? "md:justify-start" : "md:justify-end"
            }`}
          >
            <div className="md:w-1/2 px-4 flex justify-center">
              <div className="bg-white rounded-2xl shadow-md p-6 text-center">
                <h3 className="text-xl font-bold text-blue-900">
                  {event.year} — {event.title}
                </h3>
                <p className="text-gray-700 mt-2">{event.description}</p>
              </div>
            </div>

            {/* Bolinha da linha do tempo */}
            <div className="hidden md:flex items-center justify-center w-6 h-6 bg-blue-900 rounded-full border-4 border-white absolute left-1/2 transform -translate-x-1/2" />
          </div>
        );
      })}
    </div>
  </div>
);

export default Timeline;
