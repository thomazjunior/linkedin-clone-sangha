import React from 'react';
import Header from './Header';
import './App.css';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <Header/>

      {/** App Body */}
      <div className="app__body">
        <Sidebar />
      </div>
        {/** Sidebar */}
        {/** Feed */}
        {/** Widgets */}
    
    </div>
  )     
}

export default App;
