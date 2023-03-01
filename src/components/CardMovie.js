import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea } from '@mui/material'
import { Link } from 'react-router-dom'
import { Suspense } from 'react'

const CardMovie = ({ movie, setLike, like }) => {
  const image = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

  const handleLike = (likeMovie) => {
    localStorage.setItem('movie', 'hello')
    if (like.includes(likeMovie)) {
      const deleteLike = like.filter((l) => l !== likeMovie)
      setLike(deleteLike)
    } else {
      setLike([...like, likeMovie])
    }
    console.log(like)
  }

  return (
    <div>
      <Card>
        <CardActionArea>
          <Suspense fallback={<Loading/>}>


          <Link to={`/movie/${movie.id}`}>
            <CardMedia
              component="img"
              height="240"
              image={image}
              alt="green iguana"

            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {movie.original_title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Date de sortie:
                {movie.release_date}
              </Typography>
              <Typography>{movie.vote_average}/ 10 ⭐️</Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="synopsis"
                sx={{ display: 'flex', justifyContent: 'center' }}
              >
                {movie.genre_ids.map((type) => (
                  <Typography sx={{ marginRight: 2 }}>{type}</Typography>
                ))}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="synopsis"
              >
                {movie.overview}
              </Typography>
            </CardContent>
          </Link>
          </Suspense>
          <Button onClick={() => handleLike(movie)}>like</Button>
        </CardActionArea>
      </Card>
    </div>
  )
  function Loading() {
    return (
      "waiting....."
    )
  }
}

export default CardMovie
