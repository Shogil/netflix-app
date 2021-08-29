import React from 'react';
import Navbar from "./Components/NavBar/NavBar"
import './App.css';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {orginals, action} from './url'

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Banner/>
       <RowPost url={orginals} title='Netflix Orginals'/>
       <RowPost url={action} title='Action' isSmall/>
       <RowPost url={action} title='Action' isSmall/>


       
    </div>
  );
}

export default App;
