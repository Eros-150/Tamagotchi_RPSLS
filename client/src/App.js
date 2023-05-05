import "./App.css";
import Header from "./components/others/header";
import Footer from "./components/others/footer";
import Home from "./components/home";
import Grpsls from "./components/games/rpsls/game/Grpsls";
import Gtamagotchi from "./components/games/tamagotchi/game/Gtamagotchi";
import Rrpsls from "./components/games/rpsls/record/Rrpsls";
import Rtamagotchi from "./components/games/tamagotchi/record/Rtamagotchi";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const App = () => {
  return (
    <>
      <Header />
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tamagotchi" element={<Gtamagotchi />} />
          <Route path="/tamagotchi/records" element={<Rtamagotchi />} />
          <Route path="/rpsls" element={<Grpsls />} />
          <Route path="/rpsls/records" element={<Rrpsls />} />
        </Routes>
      </>
      <Footer />
    </>
  );
};

export default App;
