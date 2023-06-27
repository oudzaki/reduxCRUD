import { BrowserRouter , Route , Routes } from "react-router-dom";
import List from "./ListeUser";
import Add from "./add";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List/>} />
          <Route path="/add" element={<Add/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
