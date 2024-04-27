import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Home, Dashboard, AuthGuard } from "./routes";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        {/* Protected route with auth guard */}
        <Route
          path="/dashboard"
          element={
            <AuthGuard>
              <Dashboard />
            </AuthGuard>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
