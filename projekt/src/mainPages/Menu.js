import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Main from "./Main";
import {StanLodowki} from "./StanLodowki";
import {HistoriaZakupow} from "./HistoriaZakupow";
import {Sklepy} from "./Sklepy";
import {Konto} from "./Konto";
import './Menu.css';

export function Menu(){

    return(
        <div>

                <nav className="TopNav">
                    <div className="navDiv">
                        <Link to="/TwojeSklepy">Twoje Sklepy</Link>
                    </div >
                    <div className="navDiv">
                        <Link to="/Ustawienia">Ustawienia</Link>
                    </div>
                    <div className="navDiv">
                        <Link to="/Pomoc">Pomoc</Link>
                    </div>
                    <div className="navDiv">
                        <Link to="/Wyloguj">Wyloguj</Link>
                    </div>


                </nav>
                <Routes>

                    <Route path="/TwojeSklepy" element={<StanLodowki />} />
                    <Route path="/Ustawienia" element={<HistoriaZakupow />} />
                    <Route path="/Pomoc" element={<Sklepy/>} />
                    <Route path="/Wyloguj" element={<Konto/>} />


                </Routes>

        </div>
    );
}