import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash === "" || hash === "/home") {
        setCurrentPage("home");
      } else if (hash === "/about") {
        setCurrentPage("about");
      } else if (hash === "/pricing") {
        setCurrentPage("pricing");
      } else {
        setCurrentPage("home");
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "pricing":
        return <Pricing />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      {renderPage()}
    </div>
  );
}

export default App;