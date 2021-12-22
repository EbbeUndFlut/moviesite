import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from "./pages/MovieList";
import MovieDetail from "./pages/MovieDetail";
import './App.scss';


const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<MovieList />} />
                    <Route path="/:id" element={<MovieDetail />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;