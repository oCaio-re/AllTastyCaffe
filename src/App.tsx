import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home.tsx";

function App() {
    return (
        <BrowserRouter>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>} />
                </Routes>
            </main>
        </BrowserRouter>
    )
}
export default App;
