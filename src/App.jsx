import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="flex h-fit">
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
