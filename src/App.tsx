import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainPage />} path="/" />
      </Routes>
    </Router>
  );
}

export default App;
