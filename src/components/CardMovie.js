import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea } from '@mui/material'

const CardMovie = ({ movie, setLike, like }) => {
  const image = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`


  // const url = '7a6a1bf84273ea2287a836a3821ac0a7'


  const handleLike = (id) => {

    const allLikes = like.filter((l) => l !== id)
      setLike(allLikes)
      console.log(like)
  }


  return (
    <div>
      <Card>
        <CardActionArea>
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
            <Button onClick={() => handleLike(movie)}>like</Button>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}

export default CardMovie
