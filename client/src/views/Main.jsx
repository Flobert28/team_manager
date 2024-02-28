import React, { useState } from 'react';
import axios from 'axios';

import Form from '../components/Form';
import List from '../components/List';

const Main = (props) => {
    const [update, setUpdate] = useState(false);
    const [player, setPlayer] = useState([]);

    const removeFromDom = playerId => {
        setPlayer(player.filter(item => item._id !== playerId));
    };

    const addManagerToList = (newManager) => {
        setPlayer([...player, newManager]);
        setUpdate(!update);
    };

    return (
        <div>
            <Form addManagerToList={addManagerToList} />
            <hr />
            <List player={player} setPlayer={setPlayer} update={update} removeFromDom={removeFromDom} />
        </div>
    );
};

export default Main;
