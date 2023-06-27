import { Box, Grid, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { Slide, Zoom } from 'react-awesome-reveal';

const Services = () => {
  const matches = useMediaQuery('(min-width:600px)');
  return (
    <Box className='servicesCont'>
      <Grid container alignItems={'center'} justifyContent={matches ? 'space-between' : 'center'} spacing={4}>
        <Grid item xs={12} textAlign='center'>
          <Typography sx={{ color: '#8688A3' }}>Our Services</Typography>
          <Typography className='titleservices'>What do you need for <br /> your business?</Typography>
        </Grid>
        <Grid item xs={8} sm={6} md={3}>
          <Slide direction='right' triggerOnce>
            <Box className='cardServices'>
              <img src='/images/websites.svg' alt='websites' />
              Websites
            </Box>
          </Slide>
        </Grid>
        <Grid item xs={8} sm={6} md={3}>
          <Zoom direction='right' triggerOnce>
            <Box className='cardServices'>
              <img src='/images/apps.svg' alt='apps' />
              Mobile Apps
            </Box>
          </Zoom>
        </Grid>
        <Grid item xs={8} sm={6} md={3}>
          <Zoom direction='left' triggerOnce>
            <Box className='cardServices'>
              <img src='/images/Marketing.svg' alt='Marketing' />
              Marketing
            </Box>
          </Zoom>
        </Grid>


        <Grid item xs={8} sm={6} md={3}>
          <Slide direction='left' triggerOnce >
            <Box className='cardServices'>
              <img src='/images/Invoices.svg' alt='Invoices' />
              Invoices
            </Box>
          </Slide>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Services