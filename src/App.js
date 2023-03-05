import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navb from './Navb/Navb';
import moviesData from './Data'
import { useState } from 'react';
import MovieList from './MovieList/MovieList';
import AddMovie from './AddMovie/AddMovie';
function App() {

  const [movies, setMovies] = useState(moviesData)
  const [inputSearch, setInputSearch] = useState('')
  const [inputStars, setInputStars] = useState(0)
  const Add =(newMovie)=>{
    setMovies([...movies,newMovie])
  }
  
  
  return (
    <div className="App">
     <Navb inputSearch={inputSearch} setInputSearch={setInputSearch} inputStars={inputStars} setInputStars={setInputStars}  />
     <AddMovie Add={Add}/>
     {movies && <MovieList movies ={movies} inputSearch={inputSearch} inputStars={inputStars} />}
    </div>
  );
}

export default App;
