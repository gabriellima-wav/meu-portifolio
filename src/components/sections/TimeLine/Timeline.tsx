import React from "react";
import { timeline } from "./timelineData";

const Timeline: React.FC = () => (
  <div className="relative w-full max-w-5xl mx-auto py-12">
    {/* Linha vertical central */}
    <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 border-l-4 border-blue-900 z-0" />

    <div className="flex flex-col space-y-20 relative z-10">
      {timeline.map((event, index) => {
        const isLeft = index % 2 === 0;
        return (
          <div
            key={index}
            className={`relative w-full flex flex-col md:flex-row items-center ${
              isLeft ? "md:justify-start" : "md:justify-end"
            }`}
          >
            {/* Card */}
            <div className="md:w-1/2 px-4 flex justify-center">
              <div className="bg-white rounded-2xl shadow-md p-6 text-center border border-blue-100">
                <h3 className="text-xl font-bold text-blue-900">
                  {event.year} — {event.title}
                </h3>
                <p className="text-gray-700 mt-2">{event.description}</p>
              </div>
            </div>

            {/* Bolinha central da linha do tempo */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-blue-900 rounded-full border-4 border-white z-20" />
          </div>
        );
      })}
    </div>
  </div>
);

export default Timeline;
