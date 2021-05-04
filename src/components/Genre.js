import React from 'react'

const Genre = ({ requests, setGenreId, setQuery }) => {
  function handleClick(e) {
    setGenreId(+e.target.id)
    setQuery('')
  }

  return (
    <section className='movies__btns'>
      <div className='movies__scroll'>
        {requests.map((request) => {
          const { name, id, req } = request
          return (
            <button
              key={id}
              id={id}
              disabled={req ? false : true}
              onClick={handleClick}
            >
              {name}
            </button>
          )
        })}
      </div>
    </section>
  )
}

export default Genre
