import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Students from "./pages/Students";
import Classes from "./pages/Classes";
import { useState, useEffect } from "react";
import fakeClasses from "./services/fakeClasses";

function App() {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    setClasses(fakeClasses);
  }, []);
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Students classes={classes} />} />
          <Route
            path="/classes"
            element={<Classes classes={classes} setClasses={setClasses} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
