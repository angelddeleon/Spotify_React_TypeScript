import React from 'react';
import './App.css';
import { FaHome, FaFolderOpen , FaSearch, FaChevronRight, FaChevronLeft, FaPlus } from "react-icons/fa"
import album from '../src/imagenes/album-cover.jpg'


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

      <div className="libraries-section">
        <div className='library-header'>
          <div className='libraries-text'>
            <FaFolderOpen className='icons' />
            <p>Libraries</p>
          </div>

          <FaPlus />
        </div>
      
      <div className="libraries-playlist">
        <div className='playlist-sidebar'>
          <h3>Create your first playlist</h3>
          <p>It's easy, we'll help you</p>
          <a>Create playlist</a>
        </div>

        <div className='playlist-sidebar'>
          <h3>Create your first playlist</h3>
          <p>It's easy, we'll help you</p>
          <a>Create playlist</a>
        </div>

      </div>

      </div>



      <div>
        <p>Hola</p>
      </div>
    </div>

    <div className='main'>
      <div className='header'>
        <div className='header-chevrons'>
          <button className='chevrons'> <FaChevronLeft /> </button>
          <button className='chevrons'> <FaChevronRight /> </button>
        </div>

        <div className='header-form'>
          <a>Sign up</a>
          <a className='header-form-Log'>Log in</a>
        </div>

      </div>

      <div className='album-section'>
        <div className='playlist'>
          <h2>Focus</h2>

          <div className='album'>
            <img src={album} />

            <div className='album-text'>
              <h3>Peaceful Piano</h3>
              <p>Peaceful piano to help you slow down, breathe, and relax</p>
            </div>
          </div>
        </div>
      </div>
    </div>


    </div>



  );
}


export default App;
