import {
  CardMedia,
  Typography,
} from '@mui/material'
import { Box, Container, Stack } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Nav from '../components/Nav'

const DetailsMovie = ({ data, setData }) => {

  const apiKey = '7a6a1bf84273ea2287a836a3821ac0a7'
  const { id } = useParams()
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
  const [movie, setMovie] = useState("")
  const image = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`


  useEffect(() => {
    const fetchData = async () => {
      await axios.get(url).then((res) => setMovie(res.data))
    }
    fetchData()
  }, [])

  return (
    <div>
      <div className="header">
        <Nav />
      </div>
      <Container sx={{ marginTop: '60px' }}>
        <Stack spacing={3} direction="row">
          <CardMedia
            component="img"
            height="580"
            image={image}
            alt={movie.title}
          />
          <Box>
            <Typography variant="h2">{movie.title}</Typography>
            <Stack spacing={3} direction="row" sx={{ margin: '10px 0' }}>
              {movie?.genres?.map((genre) => (
                <Typography
                  sx={{
                    border: '1px solid',
                    padding: '5px 10px',
                    borderRadius: '10px',
                  }}
                  key={genre.id}
                  >
                  {genre.name}
                </Typography>
              ))}
            </Stack>
            <Typography variant="body">{movie.overview}</Typography>
          </Box>
        </Stack>
      </Container>
    </div>
  )
}

export default DetailsMovie
