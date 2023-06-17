import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Salah from "./pages/Salah";
import Moshaf from "./pages/Moshaf";
import Main from "./pages/Main";
import Hadeeth from "./pages/Hadeeth";
import Tafseer from "./pages/Tafseer";
import Bookmarks from "./pages/Bookmarks";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">{/* <h1>Hafidz</h1> */}</header>
      <Nav />
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/salah" element={<Salah />} />
        <Route path="/moshaf" element={<Moshaf />} />
        <Route path="/hadeeth" element={<Hadeeth />} />
        <Route path="/tafseer" element={<Tafseer />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
      </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
