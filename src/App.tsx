import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [pdfUrl, setPdfUrl] = useState("");

  const [inputPdfUrl, setInputPdfUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setPdfUrl(inputPdfUrl);
  };

  const handleInput = (e) => {
    setInputPdfUrl(e.target.value);
  };

  return (
    <div className="container">
      <h1>Enter PDF URL to render</h1>

      <div className="my-4">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <span className="input-group-text">PDF URL</span>
            <input
              className="form-control"
              type="text"
              id="pdf-url"
              onChange={handleInput}
              value={inputPdfUrl}
            />
            <button className="btn btn-primary" type="submit">
              set
            </button>
          </div>
        </form>
      </div>

      {pdfUrl && (
        <object data={pdfUrl} type="application/pdf" height="800" width="800">
          <span>
            Unable to render PDF, click
            <a href={pdfUrl}>here</a> to download it.
          </span>
        </object>
      )}
    </div>
  );
}

export default App;
