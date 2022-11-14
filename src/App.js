import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Likes from "./pages/Likes";

function App() {
  const [like, setLike ] =  useState([])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home like={like} setLike={setLike}/> }/>
        <Route path="/like" element={<Likes like={like}/>}/>
      </Routes>
    </div>
  );
}

export default App;
