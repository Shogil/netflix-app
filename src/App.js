import React from 'react';
import Navbar from "./Components/NavBar/NavBar"
import './App.css';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Banner/>
       <RowPost title='Netflix Orginals'/>
       <RowPost title='Action' isSmall/>

       
    </div>
  );
}

export default App;
