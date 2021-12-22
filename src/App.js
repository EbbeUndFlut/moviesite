import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MovieList from "./pages/MovieList"
import MovieDetail from "./pages/MovieDetail"
import Nav from "./Components/Nav"
import Footer from "./Components/Footer"
import "./App.scss"

const App = () => {
    return (
        <div>
            <Router>
                <div className="Head">
                    <Nav />
                </div>
                <Routes>
                    <Route path="/" element={<MovieList />} />
                    <Route path="/:id" element={<MovieDetail />} />
                </Routes>
            </Router>
            <Footer />
        </div>
    )
}

export default App
