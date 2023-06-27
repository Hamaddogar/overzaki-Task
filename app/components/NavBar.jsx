import '../globals.css'
import React from 'react'
import Stack from '@mui/material/Stack';
import { Badge, Box, Button, Container, Drawer, Fab, Hidden, Typography } from '@mui/material';



const MobileNav = ({ state, setState }) => {

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(open);
  };
  return (<div>
    <Drawer
      anchor={'left'}
      open={state}
      onClose={toggleDrawer(false)}
    >
      <Box
        sx={{ width: 300 }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
        className='scroller'
      >
        <Container sx={{ py: 4 }} className='scroller'>
          <img src="/images/OZ Logo.svg" alt="f" srcset="" style={{ maxWidth: '178px', width: '90%' }} className='responsive' />
          <Typography className='sidebarTitle' mt={5} mb={1}> Welcome <br /> To Over Zaki</Typography>
          <Typography className='sideBarText'> It is a long established fact that a reader will be distracted by the readable content.</Typography>
          <Box my={7}>
            <Button fullWidth className='btn2'>Sign UP</Button> <br /><br />
            <Button fullWidth className='btn3'>Login</Button>
          </Box>
          <Box mt={5}>
            <Stack rowGap={3} >
              <Typography className='sideNave2Title'> Follow Us <br /> on Social Media</Typography>
              <Stack direction='row' alignItems={'center'} justifyContent={'space-around'} >
                <img src="/images/facebook.svg" alt="ffacebook" srcset="" className='sideNavlinks' />
                <img src="/images/twitter.svg" alt="ftwitter" srcset="" className='sideNavlinks' />
                <img src="/images/youtube.svg" alt="fyoutube" srcset="" className='sideNavlinks' />
                <img src="/images/instagram.svg" alt="finstagram" srcset="" className='sideNavlinks' />
              </Stack>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Drawer>
  </div>)
}



const NavBar = () => {
  const [state, setState] = React.useState(false);

  return (
    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} pt={1.7}>
      <img src="/images/OZ Logo.svg" alt="f" srcset="" style={{ maxWidth: '178px', width: '90%' }} className='responsive' />
      <Stack spacing={2} direction={'row'} alignItems={'center'} justifyContent={'center'}>
        <Button startIcon={<img src="/images/language.svg" alt="f" srcset="" />} className='btn1'>العربية</Button>

        <Hidden smDown>
          <Button className='btn2'>Sign UP</Button>
          <Button className='btn3'>Login</Button>
        </Hidden>
        <Hidden smUp>
        <img src="/images/bars-solid.svg" alt="menu" srcset="" style={{ cursor: 'pointer' }} onClick={e => setState(true)} />
        <MobileNav state={state} setState={setState} />
        </Hidden>
      </Stack>
      <Box className='chatIcon'>
        <Badge badgeContent={4} color="error" >
          <Fab disableRipple size="medium" sx={{ background: '#FFFFFF', boxShadow: '0px 0px 20px #00000033', border: '2px solid #1BFCB640' }} aria-label="add">
            <img src="/images/Face.svg" alt="Face" srcset="" style={{ width: '17px' }} />
          </Fab>
        </Badge>
      </Box>
    </Stack>
  )
}

export default NavBar