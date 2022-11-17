import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import DetailsMovie from "./components/DetailsMovie";
import Home from "./pages/Home";
import Likes from "./pages/Likes";

function App() {
  const [like, setLike ] =  useState([])
  const [data, setData] = useState([])


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home like={like} setLike={setLike} data={data} setData={setData}/> }/>
        <Route path="/movie/:id" element={<DetailsMovie data={data} setData={setData}/>}/>
        <Route path="/like" element={<Likes like={like}/>}/>
      </Routes>
    </div>
  );
}

export default App;
