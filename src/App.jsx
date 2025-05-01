import React, { useState, useEffect } from "react";
import { StudentProvider } from "./context/StudentContext.jsx";
import StudentList from "./components/StudentList";
import AdminPanel from "./components/AdminPanel";
import SearchBar from "./components/SearchBar";
import LoadingScreen from "./pages/LoadingScreen"; // Chemin corrigé
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Temps de chargement simulé (3 secondes)

    return () => clearTimeout(timer);
  }, []);

  return (
    <StudentProvider>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="app-container">
          <h1>Trombinoscope Étudiants ICT4D</h1>
          <SearchBar />
          <AdminPanel />
          <StudentList />
        </div>
      )}
    </StudentProvider>
  );
}

export default App;