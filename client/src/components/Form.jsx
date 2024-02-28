// PlayerList.js
import React, { useEffect, useState } from 'react';
import {Link } from 'react-router-dom';
import List from './List';


const Form = () => {
  useEffect(() => {
    // Fetch players from backend API
    // Update 'players' state
  }, []);

  return (
    <div>
      <Link to={"/"}>List</Link>|
      <Link to={"/players/addplayer"}>Add Player</Link>
      <hr />
      <table>
          <thead>
            <tr>
              <th>Team Name</th>
              <th>|</th>
              <th>Preferred Position</th>
              <th>|</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
    </div>
  );
};

export default Form;
