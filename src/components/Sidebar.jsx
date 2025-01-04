import { useState, useContext } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoAddOutline } from "react-icons/io5";
import { TbMessages, TbHistory } from "react-icons/tb";
import { TfiHelpAlt } from "react-icons/tfi";
import { IoSettingsOutline } from "react-icons/io5";
import { PrimeContext } from "../contexts/Context";
import { FcDeleteDatabase } from "react-icons/fc";

const Sidebar = () => {
  const { prevPrompts, startNewChat, resetScreen } = useContext(PrimeContext);
  const [active, setActive] = useState(false);
  const [newChatStarted, setNewChatStarted] = useState(false);

  const toggleActive = () => setActive((prev) => !prev);

  const handleNewChat = () => {
    startNewChat();
    resetScreen();
    setNewChatStarted(true);
    setTimeout(() => setNewChatStarted(false), 1500);
  };

  return (
    <div className="hidden md:inline-flex flex-col justify-between p-4 bg-black text-white">
      <div>
        {/* Toggle Button */}
        <div className="cursor-pointer mb-3">
          <RxHamburgerMenu
            onClick={toggleActive}
            size={24}
            aria-label="Toggle Sidebar"
          />
        </div>

        {/* New Chat Button */}
        <div
          className={`inline-flex items-center gap-2 py-2 px-4 bg-gray-800 rounded-lg cursor-pointer transition-all duration-500 ease-in-out ${
            active ? "w-full" : "w-12"
          }`}
          onClick={handleNewChat}
        >
          {/* Conditionally render the icon */}
          {newChatStarted ? (
            <FcDeleteDatabase size={20} className="text-white" />
          ) : (
            <IoAddOutline size={20} className="text-white" />
          )}
          {active && (
            <p className="transition-all duration-500 transform opacity-100 scale-100 text-xs">
              {newChatStarted ? "Clear" : "New Chat"}
            </p>
          )}
        </div>

        {/* Recent Prompts */}
        {active && (
          <div className="flex flex-col mt-5 transition-all duration-500 ease-in-out transform">
            <p className="mb-4 text-gray-400">Recent</p>
            {prevPrompts.length > 0 ? (
              prevPrompts.map((item, index) => (
                <div
                  key={index}
                  className="mb-2 flex items-center gap-3 cursor-pointer text-sm bg-gray-800 p-3 rounded-lg transition hover:scale-105 hover:bg-gray-700"
                >
                  <TbMessages size={20} />
                  <p>{item.slice(0, 11)}...</p>
                </div>
              ))
            ) : (
              <p className="text-gray-400">No recent prompts</p>
            )}
          </div>
        )}
      </div>

      {/* Sidebar Footer */}
      <div>
        {/* Help */}
        <div
          className={`flex items-center gap-3 cursor-pointer bg-gray-800 p-3 rounded-lg transition-all duration-500 ease-in-out ${
            active ? "w-full" : "w-12"
          } hover:bg-gray-700 hover:scale-105`}
        >
          <TfiHelpAlt size={20} className="text-white" />
          {active && (
            <p className="transition-all duration-500 transform opacity-100 scale-100 text-xs">
              Help
            </p>
          )}
        </div>

        {/* Activity */}
        <div
          className={`flex items-center gap-3 cursor-pointer bg-gray-800 p-3 rounded-lg mt-3 transition-all duration-500 ease-in-out ${
            active ? "w-full" : "w-12"
          } hover:bg-gray-700 hover:scale-105`}
        >
          <TbHistory size={20} className="text-white" />
          {active && (
            <p className="transition-all duration-500 transform opacity-100 scale-100 text-xs">
              Activity
            </p>
          )}
        </div>

        {/* Settings */}
        <div
          className={`flex items-center gap-3 cursor-pointer bg-gray-800 p-3 rounded-lg mt-3 transition-all duration-500 ease-in-out ${
            active ? "w-full" : "w-12"
          } hover:bg-gray-700 hover:scale-105`}
        >
          <IoSettingsOutline size={20} className="text-white" />
          {active && (
            <p className="transition-all duration-500 transform opacity-100 scale-100 text-xs">
              Settings
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
