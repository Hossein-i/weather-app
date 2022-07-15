import { useContext } from "react";
import HomeContainer from "./containers/home";
import SettingsContainer from "./containers/settings";
import ManageCitiesContainer from "./containers/manage-cities";
import { ThemeContext } from "./contexts/ThemeContext";
import { Routes, Route } from "react-router-dom";
import "./App.scss";

function App() {
  const { theme } = useContext(ThemeContext);
  document.documentElement.setAttribute("data-theme", theme);

  return (
    <Routes>
      <Route path="/" element={<HomeContainer />} />
      <Route path="/settings" element={<SettingsContainer />} />
      <Route path="/manage-cities" element={<ManageCitiesContainer />} />
      <Route path="*" element={<>404</>} />
    </Routes>
  );
}

export default App;
