import { useState, createContext } from "react";
import run from "../config/Gemini";

export const PrimeContext = createContext();

const PrimeContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [results, setResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const startNewChat = () => {
    setPrevPrompts([]);  // Clear the history
    setResultData("");   // Clear the current result
    setInput("");        // Clear the input
  };

  const resetScreen = () => {
    setPrevPrompts([]);  // Clear the prompt history
    setResultData("");   // Clear the result data
    setResults(false);   // Reset the result state
    setInput("");        // Clear the input field
    setLoading(false);   // Reset the loading state
  };

  const send = async () => {
    try {
      if (!input.trim()) {
        throw new Error("Input cannot be empty");
      }

      setLoading(true);
      setResultData("");
      setResults(true);
      setRecentPrompt(input);
      setPrevPrompts((prev) => [...prev, input]);

      const response = await run(input);
      console.log("Response from AI:", response);

      if (!response) {
        throw new Error("No response from Gemini");
      }

      setResultData(response);
    } catch (error) {
      console.error("Error in send function:", error.message);
      setResultData("An error occurred while processing your request.");
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  return (
    <PrimeContext.Provider
      value={{
        input,
        setInput,
        recentPrompt,
        setRecentPrompt,
        prevPrompts,
        setPrevPrompts,
        results,
        setResults,
        loading,
        setLoading,
        resultData,
        setResultData,
        send,
        startNewChat,
        resetScreen 
      }}
    >
      {children}
    </PrimeContext.Provider>
  );
};

export default PrimeContextProvider;
