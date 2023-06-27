import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  backgroundColor: '#F5F5F8', // Background color
  borderRadius: '20px', // Add border radius
  padding: theme.spacing(1.5), // Add padding
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={props.icon}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)',
    PaddingRight: '10px'
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));




const FAQ = () => {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div>
      <Box>
        <Typography sx={{ color: '#8688A3' }}>Our FAQs</Typography>
        <Typography className='titleFaq' sx={{
          backgroundImage: 'url(/images/Path-1.svg)', 
          paddingTop: '12px'
        }}>
          The Most Frequently Asked Questions
        </Typography>
      </Box>

      {
        [
          {
            title: 'What is Over Zaki?',
            des: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.'
          }, {
            title: 'What are the subscription plans?',
            des: 'It.'
          }, {
            title: 'What are the services?',
            des: 'It.'
          }, {
            title: 'What are the requirement to publish my business?',
            des: 'It.'
          }, {
            title: 'What',
            des: 'It.'
          },
        ].map((item, indx) => (
          <Box key={indx} mt={1}>
            <Accordion expanded={expanded === `panel${indx+1}`} onChange={handleChange(`panel${indx+1}`)}>
              <AccordionSummary aria-controls={`panel${indx+1}-content`} id={`panel${indx+1}-header`} icon={<img src='/images/chevron-down.svg' alt='icon' style={{ width: '20px', }} />}>
                <Typography className='faqHeading'>{item.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className='faqDetail'> {item.des} </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        ))
      }


<Box my={3}>
  <Button disableRipple className='loadMore' endIcon={<img src="/images/chevron-Gray.svg" alt='icon' style={{width:'15px'}} />}>Load More Questions</Button>
</Box>
    </div>
  )
}

export default FAQ