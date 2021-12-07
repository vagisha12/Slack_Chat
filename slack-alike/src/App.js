import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">
      <Router>

        <Header />
          <AppBody>
            <Sidebar />
              <Routes>
          
                <Route path="/" exact> 
            {/* Chat */}
          </Route>
        </Routes>
        </AppBody>
      </Router>
      
    </div>
  );
}

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

export default App;
