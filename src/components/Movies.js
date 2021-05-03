import React from 'react'
import '../sass/main.scss'
import { AiOutlineLike } from 'react-icons/ai'

const BASE_URL = 'https://image.tmdb.org/t/p/original/'

const Movies = ({ movies }) => {
  return (
    <section className='movies__layout'>
      {movies.map((movie) => {
        const {
          backdrop_path,
          poster_path,
          overview,
          title,
          vote_count,
          release_date,
          id,
          media_type,
        } = movie

        return (
          <div className='movie' key={id}>
            <div className='movie__img'>
              <img
                src={`${BASE_URL}${backdrop_path || poster_path}`}
                alt='poster'
              />
            </div>
            <div className='movie__details'>
              <div className='details__title'>
                <p>
                  {overview.length > 40
                    ? overview.slice(0, 37) + '...'
                    : overview}
                </p>
                <h3>{title}</h3>
              </div>
              <div className='details__desc'>
                <p>{media_type} -</p>
                <p>{release_date} -</p>
                <p>
                  <span>
                    <AiOutlineLike />
                  </span>{' '}
                  {vote_count}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default Movies
