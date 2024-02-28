import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = (props) =>{
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const[error,setError]=useState('')
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(name.length < 2){
      setError('Name must be at least 2 characters long')
    } 


    axios.post('http://localhost:8000/api/players',
     { name,
    position })
      .then(res => {
        navigate("/");
      })
      .catch(error => {
        console.error('Error adding author:', error);
      });
  };
  return(
    <div>
            <Link to={"/"}>List</Link>|
      <Link to={"/players/addplayer"}>Add Player</Link>
      <h3>Add A Player</h3>
      <form onSubmit={handleSubmit}>
        <label>Player Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
                {error && <p style={{color: 'red'}}>{error}</p>}
                <br />
        <label>Preferred Position</label>
        <input
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>  
    )
}

export default Create;