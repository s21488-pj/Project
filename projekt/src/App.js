import './App.css';
import Main from "./pages/Main";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import {StanLodowki} from "./pages/StanLodowki";
import {HistoriaZakupow} from "./pages/HistoriaZakupow";
import {Sklepy} from "./pages/Sklepy";
import {Konto} from "./pages/Konto";
import {Powiadomienia} from "./pages/Powiadomienia";
import {Menu} from "./components/Menu";

function App() {
  return (
      <Router>
          <nav className="TopNav">
              <div className="navDiv">
                  <Link to="/StanLodowki">Stan lodówki</Link>
              </div >
              <div className="navDiv">
                  <Link to="/HistoriaZakupow">Historia zakupów</Link>
              </div>
              <div className="navDiv">
                  <Link to="/Sklepy">Sklepy</Link>
              </div>
              <div className="navDiv">
                  <Link to="/Konto"> Konto</Link>
              </div>
              <div className="navDiv">
                  <Link to="/Powiadomienia"> Powiadomienia</Link>
              </div>
              <div className="navDiv">
                  <Link to="/Menu"> Menu</Link>
              </div>

          </nav>
          <Routes>
              <Route path="/" element={<Main/>}/>

              <Route path="/StanLodowki" element={<StanLodowki />} />
              <Route path="/HistoriaZakupow" element={<HistoriaZakupow />} />
              <Route path="/Sklepy" element={<Sklepy/>} />
              <Route path="/Konto" element={<Konto/>} />
              <Route path="/Powiadomienia" element={<Powiadomienia/>} />
              <Route path="/Menu" element={<Menu/>} />

          </Routes>
      </Router>
  );
}

export default App;
