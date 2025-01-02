/* eslint-disable react/prop-types */
import { useState } from "react";
import generate from "@/assets/generate.png";
import MessageBubble from "@/components/molecule/messages/messageBubble";

export default function GeneratedRecommend({ data, setVisible }) {
  const [selectedNavigation, setSelectedNavigation] = useState(1);
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 text-white">
      <div className="overflow-hidden bg-background shadow-lg max-w-7xl w-3/4 h-3/4 z-60 rounded-2xl">
        <div className="flex justify-between bg-stone-800 px-6 py-3 rounded-t-2xl">
          <div className="flex gap-3">
            <img src={generate} alt="generate" />
            <h2 className="text-md font-semibold">Generate Insight</h2>
          </div>
          <button
            className="text-white rounded font-bold"
            onClick={() => setVisible(false)}
          >
            X
          </button>
        </div>
        <div className="flex h-full bg-background">
          {/* Left Side */}
          <div className="w-[214px] h-full flex gap-4 flex-col bg-neutral-800 p-4 ">
            {data.navigation.map((section) => (
              <button
                key={`button-section-${section.id}`}
                onClick={() => setSelectedNavigation(section.id)}
                className={`rounded-md border-2 duration-500  text-ellipsis border-neutral-600 px-2 py-1 text-center ${
                  section.id === selectedNavigation
                    ? "shadow-3xl shadow-white/10 bg-neutral-500 "
                    : "shadow-2xl"
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex mb-16 flex-col gap-4 p-5 w-full overflow-y-scroll">
            <div className="flex flex-col gap-7">
              {data.navigation
                .find((section) => section.id === selectedNavigation)
                .messages.map((message) => (
                  <MessageBubble
                    key={`message-${message.id}`}
                    message={message}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
