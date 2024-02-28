import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams,Link } from 'react-router-dom';

const GamePage3 = () => {
  const [players, setPlayers] = useState([]);
  const { gameId } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/players`)
      .then(response => {
        setPlayers(response.data.map(player => ({ ...player, status: 'Undecided' }))); // Initialize status for each player
      })
      .catch(error => {
        console.error('Error fetching players:', error);
      });
  }, []);


  const handleStatusChange = (playerId, newStatus) => {
    setPlayers(prevPlayers => {
      // Update the status for the player with the matching playerId
      const updatedPlayers = prevPlayers.map(player => {
        if (player._id === playerId) {
          // Ensure the status is set properly
          return { ...player, status: newStatus };
        }
        return player;
      });
  
      // Send PATCH request to update player status in the database
      axios.patch(`http://localhost:8000/api/players/${playerId}`, { status: newStatus })
        .then(response => {
          console.log('Player status updated:', response.data);
        })
        .catch(error => {
          console.error('Error updating player status:', error);
        });
  
      // Return the updated player list
      return updatedPlayers;
    });
  };

  return (
    <div>
      <Link to={"/status/game/1"}><h3>Game 1</h3></Link>
      <Link to={"/status/game/2"}><h3>Game 2</h3></Link>
      <Link to={"/status/game/3"}><h3>Game 3</h3></Link>
      <ul>
        {players.map(player => (
          <li key={player._id}>
            {player.name} -
            <button style={{ backgroundColor: player.status === 'Playing' ? 'green' : 'transparent' }} onClick={() => handleStatusChange(player._id, 'Playing')}>Playing</button>
            <button style={{ backgroundColor: player.status === 'Not Playing' ? 'red' : 'transparent' }} onClick={() => handleStatusChange(player._id, 'Not Playing')}>Not Playing</button>
            <button style={{ backgroundColor: player.status === 'Undecided' ? 'yellow' : 'transparent' }} onClick={() => handleStatusChange(player._id, 'Undecided')}>Undecided</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GamePage3;
