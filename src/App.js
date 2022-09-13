import React, { useState, useEffect } from "react";
import "./App.css";
import GridLoader from "react-spinners/GridLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4500);
  }, []);

  return (
    <div
      className={loading ? "loader-outer" : "loader-outer loader-outer-hidden"}
    >
      <GridLoader
        color={"rgba(255, 255, 255, 0.859)"}
        loading={loading}
        size={30}
      />
      <div className="loader-test">test</div>
    </div>
  );
}

export default App;

// f37a24
