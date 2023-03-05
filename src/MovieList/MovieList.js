import React from 'react'
import Cards from '../Cards/Cards'
import './MovieList.css'

const MovieList = ({movies,inputSearch,inputStars}) => {
  return (
    <div className='crd1'>
{
movies.filter((movie)=>
inputStars!==0 ?
    (movie.title.toUpperCase().includes(inputSearch.toUpperCase().trim()) ||
    movie.description.toUpperCase().includes(inputSearch.toUpperCase().trim())) &&
    movie.rate===inputStars :
    movie.title.toUpperCase().includes(inputSearch.toUpperCase().trim()) ||
    movie.description.toUpperCase().includes(inputSearch.toUpperCase().trim())

)
.map((movie)=>
<Cards movie={movie} key={movie.id}/>

)
}
    </div>
  )
}

export default MovieList