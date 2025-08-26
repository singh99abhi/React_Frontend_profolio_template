import Profile from "./Components/Profile";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="flex bg-[#121212] min-h-screen text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 p-8 ml-16">
        <Profile />
      </div>
    </div>
  );
}

export default App;
