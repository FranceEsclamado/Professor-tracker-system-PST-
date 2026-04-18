import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    // mock validation pani
    if (!username || !password) {
      setError("Please fill in all fields");
      return;
    }

    //epeks pani bayps
    if (username === "prof" && password === "prof") {
      setError("");
      navigate("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-blue-400 to-blue-200">
      
      <div className="bg-white p-8 rounded-lg shadow-lg w-80 text-center">
        <h2 className="text-xl font-bold mb-4">Login</h2>

        {}
        {error && (
          <div className="bg-red-100 text-red-600 p-2 mb-3 rounded">
            {error}
          </div>
        )}

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-black text-white p-2 rounded hover:bg-blue-400"
        >
          Login
        </button>

        <h5 className="mt-3 text-sm">
          don't have an account yet? click me
        </h5>
      </div>
    </div>
  );
}

export default Login;