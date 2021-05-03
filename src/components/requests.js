const API_KEY = 'ea68542374be17f1f5f1cd778c3f21f8'

const requests = [
  {
    id: 0,
    req: `/trending/all/week?api_key=${API_KEY}&langauge=en-US`,
    name: 'Trending',
  },
  {
    id: 1,
    req: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    name: 'Top Rated',
  },
  {
    id: 2,
    req: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    name: 'Action',
  },
  {
    id: 3,
    req: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    name: 'Comedy',
  },
  {
    id: 4,
    req: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    name: 'Horror',
  },
  {
    id: 5,
    req: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    name: 'Romance',
  },
  {
    id: 6,
    req: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    name: 'Mystery',
  },
  {
    id: 7,
    req: null,
    name: 'Sci-Fi',
  },
]

export default requests
