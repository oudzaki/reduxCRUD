import { BrowserRouter , Route , Routes } from "react-router-dom";
import List from "./ListeUser";
import Add from "./add";
import Update from "./update";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List/>} />
          <Route path="/add" element={<Add/>} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
