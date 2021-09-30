import axios from "axios"
import { identity } from "lodash"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

// oneMovie = `https://omdbapi.com/?apikey=b570b2ca&i=${imdb_id}`

export default function MovieDetails(){

  const [ movie, setMovie ] = useState({})

  // const params = useParams()
  // const id = params.id

  const { id } = useParams()

  // steps of fetching data
  // 1. write an async function
  // 2. make a GET request with axios
  // 3. console.log the response to see what you get
  // 4. put the data in the state => setState(response.data), for example

  const fetchData = async () => {
    const response = await axios.get(`https://omdbapi.com/?apikey=b570b2ca&i=${id}`)
    console.log("response", response)
    setMovie(response.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return(
    <div>
      <h1>Movie Details Page</h1>
      {/* note that this is an object, so we don't have to map */}
      <h3>{movie.Title}</h3>
      <img src={movie.Poster} alt={movie.Title}/>
      <p>{movie.Plot}</p>
    </div>
  )
}