import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { Bounce, JackInTheBox } from 'react-awesome-reveal'

const Footer = () => {
  return (
    <Box mt={'150px'} pb={4} >
      <Stack alignItems={'center'} justifyContent={'center'} rowGap={3} textAlign={'center'}>
        <JackInTheBox triggerOnce>
          <img src="/images/happy.svg" alt="fhappy" srcset="" />
        </JackInTheBox>
        <Typography className='footerTitle'> Follow Us <br /> on Social Media</Typography>
        <Stack direction='row' alignItems={'center'} justifyContent={'center'} spacing={3}>
          <Bounce cascade triggerOnce>
            <img src="/images/facebook.svg" alt="ffacebook" srcset="" className='flinks' />
            <img src="/images/twitter.svg" alt="ftwitter" srcset="" className='flinks' />
            <img src="/images/youtube.svg" alt="fyoutube" srcset="" className='flinks' />
            <img src="/images/instagram.svg" alt="finstagram" srcset="" className='flinks' />
          </Bounce>
        </Stack>
        <Typography className='footerText'> All Rights Reserved. © 2023 Over Zaki.</Typography>
      </Stack>
    </Box>
  )
}

export default Footer