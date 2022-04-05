import "./App.css";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Footer from "./Components/Footer";
import { DarkMode, LightMode } from "./Global/Variable";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState(DarkMode);

  const handleTheme = () => {
    if (theme.name === "light") setTheme(DarkMode);
    else setTheme(LightMode);
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor: `${theme.background}`,
        color: `${theme.text}`,
      }}
    >
      <Header theme={theme} changeTheme={handleTheme} />
      <div className="app-container">
        <Home theme={theme} />
        <About theme={theme} />
        <Skills theme={theme} />
        <Projects theme={theme} />
      </div>
      <Footer theme={theme} />
    </div>
  );
}

export default App;
