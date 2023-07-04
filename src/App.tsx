import React from 'react';
import './App.css';
import { FaHome, FaFolderOpen , FaSearch, FaChevronRight, FaChevronLeft } from "react-icons/fa"



function App() {
  return (
    <div className='app'>
    <div className="sidebar">

      <div className="essential">

        <div className='sidebar-organization'>
        <FaHome className='icons'/>
          <p>Home</p>
        </div>

        <div className='sidebar-organization'>
          <FaSearch className='icons'/>
          <p>Search</p>
        </div>

      </div>

      <div className="libraries">
        <FaFolderOpen className='icons' />
        <p>Libraries</p>
      </div>
    </div>

    <div className='album-sections'>
      <div className='header'>
        <div className='header-chevrons'>
          <button className='chevrons'> <FaChevronLeft /> </button>
          <button className='chevrons'> <FaChevronRight /> </button>
        </div>

        <div className='header-form'>
          <a>Sign up</a>
          <a>Log in</a>
        </div>


      </div>

      <div className=''>

      </div>
    </div>


    </div>



  );
}


export default App;
