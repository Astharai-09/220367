import { useEffect, useState } from "react";
import TopUsers from "./components/TopUsers";
import TrendingPosts from "./components/TrendingPosts";
import Feed from "./components/Feed";
import { registerCompany, getAuthToken } from "./utils/api";

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Step 1: Register the company
        const registrationData = await registerCompany();
        const { clientID, clientSecret } = registrationData;

        // Step 2: Get the authorization token
        const authData = await getAuthToken(clientID, clientSecret);
        setToken(authData.access_token);
      } catch (error) {
        console.error("Error initializing app:", error);
      }
    };

    initializeApp();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Social Media Analytics
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Top Users Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Top Users</h2>
          <TopUsers token={token} />
        </div>

        {/* Trending Posts Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Trending Posts</h2>
          <TrendingPosts token={token} />
        </div>

        {/* Feed Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Feed</h2>
          <Feed token={token} />
        </div>
      </div>
    </div>
  );
}

export default App;