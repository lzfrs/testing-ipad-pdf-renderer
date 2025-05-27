import React, { useState } from "react";
import "./App.css";

function App() {
  const [pdfUrl, setPdfUrl] = useState(
    "https://drive.google.com/file/d/1eyGM5kEpsOjQOzgFnf8KtwX7B0sYZePG/preview"
  );

  const [inputPdfUrl, setInputPdfUrl] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPdfUrl(inputPdfUrl);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        <div style={{ display: "contents" }}>
          <div
            style={{
              display: "flex",
              height: "970px",
              justifyContent: "center",
            }}
          >
            <object
              data={pdfUrl}
              type="application/pdf"
              width="100%"
              role="document"
            >
              <span>
                Unable to render PDF, click
                <a href={pdfUrl}>here</a> to download it.
              </span>
              <iframe src={pdfUrl} width={"100%"} height="970px"></iframe>
            </object>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
