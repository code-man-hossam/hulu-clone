import React, { useEffect, useState } from 'react'
import requests from './requests'
import axios from 'axios'
import Movies from './Movies'
import '../sass/main.scss'

const MoviesSelction = () => {
  const [movies, setMovies] = useState([])
  const [genreId, setGenreId] = useState(0)

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        `https://api.themoviedb.org/3${requests[genreId].req}`
      )
      const results = res.data.results
      setMovies(results)
      return results
    }
    fetchData()
  }, [genreId])

  return (
    <main className='movies'>
      <section className='movies__btns'>
        <div className='movies__scroll'>
          {requests.map((request) => {
            const { name, id, req } = request
            return (
              <button
                key={id}
                id={id}
                disabled={req ? false : true}
                onClick={(e) => setGenreId(+e.target.id)}
              >
                {name}
              </button>
            )
          })}
        </div>
      </section>
      <Movies movies={movies} />
    </main>
  )
}

export default MoviesSelction
