import React from 'react';
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';
import Create from './components/Create';
import Main from './views/Main';
import GamePage from './components/GamePage';
import GamePage2 from './components/GamePage2';
import GamePage3 from './components/GamePage3';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Link to={"/"}>Manage Players</Link>|
      <Link to={"/status/game/1"}>Manage Player Status</Link>
      <hr />
        <Routes>
            <Route element={<Main/>} path="/" />
            <Route element={<Create/>} path="/players/addplayer" />
            <Route element={<GamePage/>} path="/status/game/1"/>
            <Route element={<GamePage2/>} path="/status/game/2"/>
            <Route element={<GamePage3/>} path="/status/game/3"/>
        </Routes>
      </BrowserRouter>                           
    </div>
  );
}
export default App;


