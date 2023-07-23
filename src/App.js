import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import useFetch from './common/useFetch';
import PokemonList from './PokemonList';
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [currentUrl, setCurrentUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=3&offset=0');
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    axios.get(currentUrl, {
     signal: controller.signal
    })
    .then(res => res.data)
    .then(data => {
      setLoading(false);
      setNextUrl(data.next)
      setPrevUrl(data.previous)
      setPokemons(data.results)
    })

    return ()=> {controller.abort()}
  }, [currentUrl]);

  const handlePrev = () => {
    if (prevUrl == null) return;
    setCurrentUrl(prevUrl)
  }
  const handleNext = () => {
    if (nextUrl == null) return;
    setCurrentUrl(nextUrl)
  }

  return (
    <div className="container">
      <h1>Hello Pokemon World</h1>
      <div>
        {loading ?  <p>Loading ...</p> : <PokemonList pokemons={pokemons}/> }
      </div> 
        <br/>
      <div className="pagination">
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
       
      
    </div>
  );
}

export default App;
