import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import logo from "./logo.svg"; // Keep the logo for the main app content
import "./App.css"; // Import your CSS file

function App() {
  return (
    <Router>
      <Routes>
        {/* Health check route - renders ONLY OK message */}
        <Route path="/health" element={<HealthCheck />} />

        {/* Default route - main app content */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

// HealthCheck component - only for the health check
function HealthCheck() {
  return <div>OK</div>; // Simple OK message for health check
}

// Home component - main content with logo
function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello from AWS EKS -2 </p>
      </header>
    </div>
  );
}

export default App;
