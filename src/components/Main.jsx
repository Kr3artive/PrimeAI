import { LiaUserSecretSolid } from "react-icons/lia";
import { ImCompass2 } from "react-icons/im";
import { FcIdea } from "react-icons/fc";
import { MdOutlineSummarize } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import { IoImagesOutline } from "react-icons/io5";
import { IoMicOutline } from "react-icons/io5";
import { LuSendHorizontal } from "react-icons/lu";
import { useContext } from "react";
import { PrimeContext } from "../contexts/Context";
import { GiArtificialIntelligence } from "react-icons/gi";

const Main = () => {
  const { send, recentPrompt, results, loading, resultData, setInput, input } =
    useContext(PrimeContext);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <div className="h-screen w-full flex flex-col bg-gray-900 text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-3 bg-black flex-shrink-0">
        <p className="font-bold text-xl sm:text-2xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          PrimeAI
        </p>
        <div className="p-2 border-2 border-white rounded-full">
          <GiArtificialIntelligence size={30} />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-grow overflow-auto">
        {!results ? (
          <div className="max-w-[900px] mx-auto px-4 flex-grow">
            <div className="font-bold text-3xl sm:text-5xl text-center p-5 mt-10">
              <p>
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  Hello, Cutie
                </span>
              </p>
              <p className="mt-2 sm:mt-0">
                I Want To Be Your Companion, Lets Talk.
              </p>
            </div>
          </div>
        ) : (
          <div className="flex-grow flex flex-col justify-center items-center">
            {loading ? (
              <div className="flex flex-col justify-center items-center">
                <div className="loader ease-linear rounded-full border-4 border-t-4 border-white border-t-transparent h-16 w-16 mb-4 animate-spin"></div>
                <p className="text-lg text-white">Generating response...</p>
              </div>
            ) : (
              <div className="flex flex-col w-full mx-auto p-5">
                <div className="flex items-center justify-start mb-4">
                  <div className="bg-gray-800 text-white p-3 rounded-lg max-w-[80%]">
                    <p>{recentPrompt}</p>
                  </div>
                </div>
                <div className="flex items-center justify-end mb-4">
                  <div className="bg-gray-700 text-white p-3 rounded-lg max-w-[80%]">
                    <p>{resultData || "No result data available yet"}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Input Bar */}
      <div className="flex-shrink-0 px-4 py-3 bg-gray-800 flex items-center gap-3">
        <textarea
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          value={input}
          placeholder="Enter A Prompt Here"
          className="flex-1 p-2 rounded-lg bg-gray-900 text-white focus:outline-none"
        ></textarea>
        <div className="flex gap-2">
          <LuSendHorizontal onClick={send} size={30} />
        </div>
      </div>
    </div>
  );
};

export default Main;
