import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
// import About from './pages/About';
// import Details from './pages/Details';
// import MovieDetails from './components/MovieDetails';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} />
      <Route path="/details" element={<Details />}>
        <Route path=":movieId" element={<MovieDetails />} />
      </Route> */}
    </Routes>
  );
}

export default App;
