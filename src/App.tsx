import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home.tsx";
import Beverages from "./Pages/Beverages.tsx";
import BerryAcai from "./Pages/BerryAcai.tsx";
import Pastries from "./Pages/Pastries.tsx";
import Food from "./Pages/Food.tsx";
import AboutUs from "./Pages/AboutUs.tsx";
import TreatRewards from "./Pages/TreatRewards.tsx";

function App() {
    return (
        <BrowserRouter>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/beverages" element={<Beverages/>} />
                    <Route path="/berry-acai" element={<BerryAcai/>} />
                    <Route path="/pastries" element={<Pastries/>} />
                    <Route path="/food" element={<Food/>} />
                    <Route path="/about-us" element={<AboutUs/>} />
                    <Route path="/treat-rewards" element={<TreatRewards/>} />
                </Routes>
            </main>
        </BrowserRouter>
    )
}
export default App;
