import { Box, Button, Container, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'

const Likes = ({like, setLike}) => {

console.log(like)

const handleDelete = (fav) => {
  const deleteLike = like.filter((l) => l.id !== fav)
  setLike(deleteLike)
}

  return (
    <div>
      <Nav/>
      <Link to={"/"}>back home</Link>
      <Container>
      {like.lenght <= 0 ? (
        <Stack direction="column" spacing={2}> "Vous n'avez de favorie"</Stack>
      ) : (
        <Stack direction="column" spacing={2}>
          {like?.map((fav) => (
            <Box
              sx={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${fav.poster_path}`}
                alt=""
                height="300px"
              />
              <Stack direction="column" spacing={1}>
                <Typography variant="h2">{fav.title}</Typography>
                <Typography variant="body">{fav.overview}</Typography>
              </Stack>
              <Button onClick={(e) => handleDelete(fav.id)}>Delete</Button>
            </Box>
          ))}
        </Stack>
      )}
    </Container>
    </div>
  )
}

export default Likes
