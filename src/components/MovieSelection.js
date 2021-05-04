import React, { useState, useEffect } from 'react'
import '../sass/main.scss'
import requests from './requests'
import axios from 'axios'
import Genre from './Genre'
import Movies from './Movies'
import Search from './Search'

const URL = `https://api.themoviedb.org/3/search/movie?api_key=ea68542374be17f1f5f1cd778c3f21f8&language=en-US&query=`

const MoviesSelction = () => {
  const [movies, setMovies] = useState([])
  const [genreId, setGenreId] = useState(0)
  const [query, setQuery] = useState('')

  useEffect(() => {
    async function fetchData() {
      if (!query) {
        const res = await axios.get(
          `https://api.themoviedb.org/3${requests[genreId].req}`
        )
        const results = res.data.results
        setMovies(results)
        return results
      } else {
        const res = await axios.get(`${URL}${query}`)
        const results = res.data.results
        setMovies(results)
        return results
      }
    }
    fetchData()
  }, [genreId, query])

  return (
    <main className='movies'>
      <Search setQuery={setQuery} />
      <Genre requests={requests} setGenreId={setGenreId} setQuery={setQuery} />
      <Movies movies={movies} />
    </main>
  )
}

export default MoviesSelction
