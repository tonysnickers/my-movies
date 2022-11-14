import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardMovie from '../components/CardMovie'
import Nav from '../components/Nav'
import Search from '../components/Search'

const Home = ({like, setLike}) => {
  const [data, setData] = useState([])
  const [movie, setMovie] = useState('')

  useEffect(() => {
      axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=7a6a1bf84273ea2287a836a3821ac0a7&query=${movie}&language=fr-FR`,
      ).then((res) => setData(res.data.results))

  }, [movie])



  return (
    <div className="home">
      <div className="header">
        <Nav />
        <Search setMovie={setMovie} movie={movie} />
      </div>

      <Container sx={{ marginTop: '60px' }}>
        <Grid container spacing={3}>
          {data.map((movie) => (
            <Grid item xs={3}>
              <CardMovie key={movie.id} movie={movie} like={like} setLike={setLike}/>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}

export default Home
