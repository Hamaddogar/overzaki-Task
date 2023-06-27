import { Box, Button, Grid, Stack, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { Slide, Zoom } from 'react-awesome-reveal';

const GetApp = () => {

  const matches = useMediaQuery('(min-width:900px)');
  const matches2 = useMediaQuery('(min-width:500px)');
  return (
    <div className='getAppCont'>
      <Box textAlign={matches ? 'left' : 'center'}>
        <Grid container alignItems='flex-start' justifyContent='center' rowGap={5} p={'4%'}>
          <Grid item xs={12} md={6}>
            <Typography sx={{ color: '#0F1349' }}>Get The App</Typography>
            <Typography className='titleIntro' sx={{
              backgroundSize: '400px',
              maxWidth: '500px',
              paddingTop: '10px',
              fontSize: '24px',
              margin: matches ? '0px' : 'auto',
              textAlign: matches ? 'left' : 'center !important',
            }}>
              Download Over Zaki Mobile App Now
            </Typography>
            <Stack direction={matches2 ? 'row' : 'column'} textAlign={matches ? 'left' : 'center'} alignItems='center' justifyContent={'center'} spacing={3} >
              <Zoom cascade triggerOnce>
                <Button startIcon={<img src="/images/ios.svg" alt="fios" srcset="" />} className='appbtn'>Watch Video</Button>
                <Button startIcon={<img src="/images/android.svg" alt="fandroid" srcset="" />} className='appbtn'>Watch Video</Button>
              </Zoom>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative' }}>
              <Slide direction='right' triggerOnce>
                <img src="/images/image3.png" alt='image3' className={matches ? 'getAppImg' : 'getAppImgSM'} />
              </Slide>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div >
  )
}

export default GetApp