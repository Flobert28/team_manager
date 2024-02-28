import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
const List = (props) => {
    const {removeFromDom,update,player,setPlayer} = props;

    const deleteManager = (playerId) => {
        axios.delete('http://localhost:8000/api/players/' + playerId)
            .then(res => {
                removeFromDom(playerId)
            })
            .catch(err => console.log(err))
    }
    useEffect(()=>{
    	axios.get("http://localhost:8000/api/players")
    	.then((res)=>{
	    console.log(res.data);
            setPlayer(res.data);
	})
    	.catch((err)=>{
            console.log(err);
    	});
    }, [update]);
    
    return (
         <div>
            {
                player.map((manager, index)=>{
                return (
                    <div key={index}> {manager.name }| {manager.position }    <button onClick={(e)=>{deleteManager(manager._id)}}>
                            Delete
                        </button>
                    </div> 
                )})
                }
        </div>
    );
}
export default List;

