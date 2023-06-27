'use client'
import React from 'react';
import NavBar from '../app/components/NavBar'
import Introduction from '../app/components/Introduction'
import Services from '../app/components/Services'
import HowWork from '../app/components/HowWork'
import FAQ from '../app/components/FAQ'
import GetApp from '../app/components/GetApp'
import Footer from '../app/components/Footer'
import { Container } from '@mui/material';


function Home() {
  return (
    <Container>
      <NavBar />
      <Introduction />
      <Services />
      <HowWork />
      <FAQ />
      <GetApp />
      <Footer />
    </Container>
  );
}

export default Home;
