import { Route, Routes } from "react-router-dom";
import { AppPage } from "./components/AppPage";
import { NavBar } from "./components/NavBar";
import { Home } from "./pages/Home";
import { SearchPage } from "./pages/SearchPage";
import { MyBooks } from "./pages/MyBooks";
import "./index.css";
import { useState } from "react";
import { FluentProvider, webLightTheme, webDarkTheme } from "@fluentui/react-components";
import { mergeStyles } from "@fluentui/react";
import { useEffect } from "react";

const updateBackgroundColors = (isDarkMode) => {
  document.body.style.backgroundColor = isDarkMode ? "#292929" : "white";
  document.documentElement.style.backgroundColor = isDarkMode ? "#292929" : "white";
  document.getElementById("root").style.backgroundColor = isDarkMode ? "#292929" : "white";
};
mergeStyles({
    ":global(body,html,#root)": {
    margin: "80px 0 0", // top=80px, right=0, bottom=0, left=0
      padding: 0,
      height: "100vh",
    },
  });

export const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleTheme = () => {
    const newIsDarkMode = !isDarkMode;
    setIsDarkMode(newIsDarkMode);
    localStorage.setItem("isDarkMode", newIsDarkMode);
  };

  useEffect(() => {
    const storedIsDarkMode = localStorage.getItem("isDarkMode");
    if (storedIsDarkMode !== null) {
      setIsDarkMode(storedIsDarkMode === "true");
    }
  }, []);

  useEffect(() => {
    updateBackgroundColors(isDarkMode);
  }, [isDarkMode]);
  

  return (
    <>
      <div className="App_page">
        <FluentProvider theme={isDarkMode ? webDarkTheme : webLightTheme}>
         <NavBar handleToggleTheme={handleToggleTheme} isDarkMode={isDarkMode} />
          <AppPage>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/mybooks" element={<MyBooks />} />
              <Route />
            </Routes>
          </AppPage>
        </FluentProvider>
      </div>
    </>
  );
};
