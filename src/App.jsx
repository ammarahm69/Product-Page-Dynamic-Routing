import Card from "./components/Card";
import Detail from "./components/Detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/user/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
