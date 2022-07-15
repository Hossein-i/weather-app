import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { AddressContextProvider } from "./contexts/AddressContext";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { WeatherUnitContextProvider } from "./contexts/WeatherUnitContext";

const app = (
  <React.StrictMode>
    <Router>
      <ThemeContextProvider>
        <WeatherUnitContextProvider>
          <AddressContextProvider>
            <App />
          </AddressContextProvider>
        </WeatherUnitContextProvider>
      </ThemeContextProvider>
    </Router>
  </React.StrictMode>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(app);
