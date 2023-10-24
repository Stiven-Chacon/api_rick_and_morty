import './App.css';
import React, {useEffect, useState} from 'react';
import Navdar from '../src/components/Navbar';
import Charanteres from './components/Charanteres';
import Pagination from './components/Pagination';


function App() {

  const [characteres, setcharacteres] = useState([]);
  const [info, setinfo] = useState({});

  const urlBase ='https://rickandmortyapi.com/api/character';

  //Funciones para hacer peticiones a una API
  const fetchCharacteres = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setcharacteres(data.results);
        setinfo(data.info);
      })
      .catch(error => console.log(error))
  }

  const onAnterior = () =>{
    fetchCharacteres(info.prev);
  }
  const onSiguiente = () =>{
    fetchCharacteres(info.next);
  }
  
  useEffect(() =>{
    fetchCharacteres(urlBase);
  }, [])

  return (
    <>
      <Navdar brand='Rick and Morty Api'/>

      <div className='container mt-5'>
        <Pagination prev={info.prev} next={info.next} onAnterior={onAnterior} onSiguiente={onSiguiente} />
        <Charanteres charanteres={characteres}/>
        <Pagination prev={info.prev} next={info.next} onAnterior={onAnterior} onSiguiente={onSiguiente} />
      </div>
    </>
  );
}

export default App;
