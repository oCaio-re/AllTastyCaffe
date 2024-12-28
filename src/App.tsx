import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home.tsx";
import Beverages from "./Pages/Beverages.tsx";
import BerryAcai from "./Pages/BerryAcai.tsx";
import Pastries from "./Pages/Pastries.tsx";
import Sandwiches from "./Pages/Sandwiches.tsx";
import AboutUs from "./Pages/AboutUs.tsx";
import TreatRewards from "./Pages/TreatRewards.tsx";
import Blank from "./Pages/Blank.tsx";
import Savouries from "./Pages/Savouries.tsx";
import Food from "./Pages/Food.tsx";
import Contact from "./Pages/Contact.tsx";
import HotBeverages from "./Pages/HotBeverages.tsx";
import Smoothies from "./Pages/Smoothies.tsx";
import ColdBeverages from "./Pages/ColdBeverages.tsx";


function App() {
    return (
        <BrowserRouter>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/beverages" element={<Beverages/>} />
                    <Route path="/hot-beverages" element={<HotBeverages/>} />
                    <Route path="/cold-beverages" element={<ColdBeverages/>} />
                    <Route path="/berry-acai" element={<BerryAcai/>} />
                    <Route path="/smoothies" element={<Smoothies/>} />
                    <Route path="/pastries" element={<Pastries/>} />
                    <Route path="/savouries" element={<Savouries/>} />
                    <Route path="/sandwiches" element={<Sandwiches/>} />
                    <Route path="/food" element={<Food/>} />
                    <Route path="/about-us" element={<AboutUs/>} />
                    <Route path="/treat-rewards" element={<TreatRewards/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/blank" element={<Blank/>} />
                </Routes>
            </main>
        </BrowserRouter>
    )
}
export default App;
