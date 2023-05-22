import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cake from "./Pages/cake";
import Test from "./Pages/test";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Cake />} />
        <Route path="test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
