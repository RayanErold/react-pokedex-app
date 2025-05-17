import { useEffect, useState } from "react";

function Pokemon(){
    const[ user, setUser]=useState([])
    const [name, setName] = useState(2)
    //get input to change usestate for name 
useEffect(()=>{
    if(!name) return;
    const url=`https://pokeapi.co/api/v2/pokemon/${name}/`
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
setUser(data);
console.log(data)
.catch(err => console.error("Fetch error:", err));
    })
},[name]);
    return(
       <div>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value.toLowerCase())}
        placeholder="Enter Pokémon name or number"
      />
      {user.name && (
        <div>
          <h1>{user.name}</h1>
          <img src={user.sprites?.back_default} alt={user.name} />
        </div>
      )}
    </div>)
    
}
export default Pokemon;