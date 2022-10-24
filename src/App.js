import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios";

function App() {
  const [apiResp, setApiResp] = useState([]);
  // const [pokemonId, setPokemonId] = useState(1);
  const apiUrl = "https://fakestoreapi.com/products";
  // const pokemonApiWithId = `https://pokeapi.co/api/v2/berry/${pokemonId}`

  // get request using fetch function :
  // async function handleFetch (url,setResp) {
  //   fetch(url).then((resp)=>resp.json()).then((data)=>setResp(data))
  // }

  // get request using axios function :
  async function handleFetch (url,setResp) {
    axios.get(url).then((data)=>setResp(data.data));
  }
  
  
  useEffect(()=>{
    handleFetch(apiUrl,setApiResp)
  },[])
  
  // async function handleFetch (url,setResp) {
  //   axios.get(url).then((data)=>setResp(data.data));
  // }

  // useEffect(()=>{
  //   handleFetch(pokemonApiWithId,setApiResp)
  // },[pokemonId])
  
  console.log(apiResp)
  return (
    <div className="App">
      {apiResp.map((element,index)=><ul key={index}>
        <li> {element.title} </li>
        <img src={element.image} />
      </ul>)}
    </div>
  );
}

export default App;
