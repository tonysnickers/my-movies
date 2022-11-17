import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material'
import { Box, Container, Stack } from '@mui/system'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CardMovie from './CardMovie'
import Nav from '../components/Nav'

const DetailsMovie = ({ data, setData }) => {
  const apiKey = '7a6a1bf84273ea2287a836a3821ac0a7'
  const { id } = useParams()
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(url).then((res) => setData(res.data))
    }
    fetchData()
  })

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
          image={"d"}
          alt={data.title}
        />
        <Box>
          <Typography variant="h2">{data.title}</Typography>
          <Stack spacing={3} direction="row" sx={{ margin: '10px 0' }}>
            {data?.genres?.map((genre) => (
              <Typography
                sx={{
                  border: '1px solid',
                  padding: '5px 10px',
                  borderRadius: '10px',
                }}
              >
                {genre.name}
              </Typography>
            ))}
          </Stack>
          <Typography variant="body">{data.overview}</Typography>
        </Box>
      </Stack>
    </Container>

    </div>
  )
}

export default DetailsMovie
