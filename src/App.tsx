import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home.tsx";
import Beverages from "./Pages/Beverages.tsx";

function App() {
    return (
        <BrowserRouter>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/beverages" element={<Beverages/>} />
                </Routes>
            </main>
        </BrowserRouter>
    )
}
export default App;
