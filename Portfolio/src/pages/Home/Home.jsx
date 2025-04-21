import { Container, Stack } from '@mui/material'
import React from 'react'

const Home = () => {
  return (
    <Stack sx={{border:'2px solid blue',py:10,mt:7,}}>
      <Container sx={{height:'100vh'}}></Container>
    </Stack>
  )
}

export default Home