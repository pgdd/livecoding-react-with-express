import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react"
import axios from 'axios'
const ListAlbums = (props) => {
  const [albums, setAlbums] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8000/albums')
          .then(function (response) {
            console.log(response);
            setAlbums(response.data)
          })
          .catch(function (error) {
            console.log(error);
          });
    
  }, [])
  return (
    <h2>
      {albums.map((album) => <h3>{album.name}</h3>)}
    </h2>
  )
}

const CreateAlbum = () => {
  const [name, setName] = useState('')
  const [year, setYear] = useState(2021)
  const [genre, setGenre] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("hello")
    axios.post('http://localhost:8000/albums', {
      name: name,
      year: year,
      genre: genre
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return(
    <form onSubmit={handleSubmit}>
      <h1>Title</h1>
      <input onChange={(e) => {setName(e.target.value)}} type="text" name="name" value={name} />
    
      <h1>Year</h1>
      <input onChange={(e) => {setYear(e.target.value)}} type="number" name="year" value={year} />
  
      <h1>Genre</h1>
      <select value={genre}onChange={(e) => {setGenre(e.target.value)}}>
        <option value="rap">rap</option>
        <option value="rock">rock</option>
        <option value="jazz">jazz</option>
        <option value="classic">classic</option>
        <option value="electro">electro</option>
      </select>
      <input type="submit" value="Create" />

    </form>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CreateAlbum />
        <ListAlbums />
      </header>
    </div>
  );
}

export default App;
