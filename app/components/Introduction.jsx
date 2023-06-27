import { Box, Button, Grid, Stack, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { Fade, JackInTheBox, Zoom } from 'react-awesome-reveal'

const Introduction = () => {
  const matches = useMediaQuery('(min-width:900px)')
  return (
    <div>
      <Grid direction={matches ? 'row' : 'column-reverse'} container alignItems={matches ? 'flex-end' : 'center'} justifyContent={'space-between'} >
        <Grid item xs={12} md={6}>
          <Typography className='titleIntro' sx={{
            backgroundImage: 'url(/images/Path.svg)'
          }}>
            Hello! <br />
            <Fade triggerOnce cascade damping={1e-1}>
              I am Over Zaki
            </Fade>
          </Typography>

          <Typography className='text' mb={5}>
            It is a long established fact that a reader will be distracted by the readable content.
          </Typography>
          <Button fullWidth={matches ? false : true} className='introbtn'>Start Now</Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack alignItems={'center'} justifyContent={'flex-end'} spacing={2} direction={'row'} mt={7}>
            <Box>
              <Fade triggerOnce cascade damping={1} >
                <Box>
                  <Box className='msg'>Hello</Box>
                </Box>
                <Box>
                  <Box className='msg'>Create everything you need</Box>
                </Box>
              </Fade>
            </Box>
            <JackInTheBox triggerOnce>

              <img src="/images/FaceGreen.svg" alt="fFaceGreen" srcset="" />
            </JackInTheBox>
          </Stack>

          <Stack alignItems={'center'} justifyContent={'flex-end'} spacing={3} direction={'row'} mt={7}>
            <img src="/images/Voice.svg" alt="f" srcset="" style={{ maxWidth: '200px', width: '100%' }} />

            <Stack alignItems={'center'} justifyContent={'flex-end'} spacing={2} direction={'row'}>
              <Zoom cascade triggerOnce>
                <Box className='imgCont'>
                  <img src="/images/volume-high-solid.svg" alt="f" srcset="" />
                </Box>
                <Box className='imgCont'>
                  <img src="/images/rotate-right-solid.svg" alt="f" srcset="" />
                </Box>
              </Zoom>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </div>
  )
}

export default Introduction