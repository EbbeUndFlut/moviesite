import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from "./pages/MovieList";
import MovieDetail from "./pages/MovieDetail";
import Footer from "./Components/Footer";
import React, { Component } from 'react';
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
            <Footer />
        </div>
    );
}

export default App;


