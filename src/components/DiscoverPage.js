import { useState } from "react"
import { Link } from "react-router-dom";
import axios from "axios"

// const myAPI = `https://omdbapi.com/?apikey=b570b2ca&s=${searchText}`

export default function DiscoverPage(){

  const [ searchText, setSearchText] = useState("")
  //initial state is an [] so the map doesn't break
  //else you need conditional rendering
  //always nice to add conditional rendering
  const [ movies, setMovies ] = useState([])

  const fetchData = async () => {
    const response = await axios.get(`https://omdbapi.com/?apikey=b570b2ca&s=${searchText}`)
    console.log("response", response.data.Search)
    setMovies(response.data.Search)
  }

  return (
    <div>
      <h2>Search Movies</h2>
      <Link to="/">
        <button>Homepage</button>
      </Link><br/><br/>
      <input 
        value={searchText} 
        onChange={(event) => setSearchText(event.target.value)}
      />
      <button onClick={fetchData}>Search</button>
      {!movies  
        ? "Loading" 
        : movies.map(movie => {
          return (
            <div key={movie.imdbID}>
              {/* click on the title takes to movie details page */}
              {/* we use the id because the API needs it */}
              <Link to={`/movie/${movie.imdbID}`}>
                <h3>{movie.Title}</h3>
              </Link>
              <img src={movie.Poster} alt={movie.Title}/>
            </div>
          )
        }) }
    </div>
  )
}