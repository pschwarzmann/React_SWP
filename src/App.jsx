import React from "react";
import ReactDOM from "react-dom/client";
import "../Button.module.css"; // Deine externe CSS-Datei importieren

const App = () => {
  const handleButtonClick = () => {
    alert("Button wurde geklickt!");
  };

  return (
    <div>
      <h1>Willkommen auf meiner Website</h1>
      <button className="my-button" onClick={handleButtonClick}>
        Klick mich!
      </button>
    </div>
  );
};

// Root der Anwendung rendern
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);