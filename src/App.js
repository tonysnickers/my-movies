import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Likes from "./pages/Likes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/like" element={<Likes/>}/>
      </Routes>
    </div>
  );
}

export default App;
