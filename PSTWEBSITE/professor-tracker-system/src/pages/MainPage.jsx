import { useNavigate } from "react-router-dom";

function MainMenu() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-200 p-6">
      
      {}
      <div className="flex justify-between items-center mb-10">
        
        {}
        <div className="w-full flex justify-center">
          <input
            type="text"
            placeholder="Search"
            className="w-1/2 p-3 rounded-full border shadow"
          />
            <button
             className="mt-1 px-1 py-2 border rounded-lg bg-white hover:bg-gray-200">
                Search
            </button>
        </div>

        {}
        <div className="absolute right-10 top-6 text-right">
          <p className="text-sm">A professor?</p>
          <button
            onClick={() => navigate("/login")}
            className="mt-1 px-4 py-1 border rounded-lg bg-white hover:bg-gray-200"
          >
            Log in x
          </button>
        </div>
      </div>

      {}
      <h1 className="text-2xl font-bold mb-4">
        THIS WEEK’S SCHEDULES
      </h1>

      {}
      <div className="bg-white h-96 rounded-xl shadow flex items-center justify-center">
        <p className="text-gray-500">
          Schedule diri pero la pay data(no database yet)
        </p>
      </div>

    </div>
  );
}

export default MainMenu;