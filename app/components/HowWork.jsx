import { Avatar, Box, Button, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { Fade, Slide } from 'react-awesome-reveal'

const HowWork = () => {
  const matches = useMediaQuery('(min-width:900px)')
  return (
    <Box my={'150px'}>
      <Grid container direction={matches ? 'row' : 'column-reverse'} alignItems={'center'} justifyContent={'space-between'} rowGap={5}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ color: '#8688A3' }}>How it works</Typography>
          <Typography className='titleWork' sx={{
            backgroundImage: 'url(/images/Path-1.svg)',
            paddingTop: 4
          }}>
            Create your own website without any experience
          </Typography>

          <Box mb={5} >
            <List dense={true} >
              <Fade cascade damping={.6} triggerOnce>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ width: 30, height: 30, background: 'rgb(27, 252, 182)', color: '#0F1349', fontSize: '14px' }}>1 </Avatar>
                  </ListItemAvatar>
                  <ListItemText sx={{ color: '#8688A3' }}> Lorem Ipsum is typesetting Lorem Ipsum is typesetting.</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ width: 30, height: 30, background: 'rgb(27, 252, 182)', color: '#0F1349', fontSize: '14px' }}> 2 </Avatar>
                  </ListItemAvatar>
                  <ListItemText sx={{ color: '#8688A3' }}> Lorem Ipsum is typesetting. Simply dummy.</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ width: 30, height: 30, background: 'rgb(27, 252, 182)', color: '#0F1349', fontSize: '14px' }}> 3 </Avatar>
                  </ListItemAvatar>
                  <ListItemText sx={{ color: '#8688A3' }}>Add Simply dummy text.</ListItemText>
                </ListItem>
              </Fade>
            </List>
          </Box>
          <Box textAlign={matches ? 'left' : 'center'}>
            <Button startIcon={<img src="/images/video.svg" alt="fvideo" srcset="" className='videoBtn' />} className='servicesbtn'>Watch Video</Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} textAlign={'center'}>
          <Slide direction='right' triggerOnce>
            <img src="/images/image1.png" alt="fimage1" srcset="" className='responsive' style={{ maxWidth: '505px' }} />
          </Slide>
        </Grid>
      </Grid>
      {/* integration */}

      <Grid container alignItems={'center'} justifyContent={'space-between'} rowGap={5} mt={'70px'}>
        <Grid item xs={12} md={6} textAlign={'center'}>
          <Slide direction='left' triggerOnce>
            <img src="/images/image2.png" alt="fimage2" srcset="" className='responsive' style={{ maxWidth: '456px' }} />
          </Slide>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography sx={{ color: '#8688A3' }}>Best Integrations</Typography>
          <Typography className='titleWork2' sx={{
            paddingTop: 4
          }}>
            Improve Preformation With Powerful integrations
          </Typography>

          <Box mb={5} >
            <List dense={true} >
              <Fade cascade damping={.6} triggerOnce>
                <ListItem>
                  <ListItemAvatar>
                    <img src="/images/CheckGreen.svg" alt="fCheckGreen" />
                  </ListItemAvatar>
                  <ListItemText sx={{ color: '#8688A3' }}> Lorem Ipsum is typesetting Lorem Ipsum is typesetting.</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemAvatar><img src="/images/CheckGreen.svg" alt="fCheckGreen" /></ListItemAvatar>
                  <ListItemText sx={{ color: '#8688A3' }}> Lorem Ipsum is typesetting. Simply dummy.</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemAvatar><img src="/images/CheckGreen.svg" alt="fCheckGreen" /></ListItemAvatar>
                  <ListItemText sx={{ color: '#8688A3' }}>Add Simply dummy text.</ListItemText>
                </ListItem>
              </Fade>
            </List>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default HowWork