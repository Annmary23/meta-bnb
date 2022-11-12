import React from 'react'
import logo from '../assets/metabnb-light.svg'
import facebook from '../assets/facebook-icon.svg'
import instagram from '../assets/instagram-icon.svg'
import twitter from '../assets/twitter-icon.svg'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from 'styled-components'

function Footer() {
  return (
    <>
        <div className='bg-black'>
            <div className='max-w-7xl mx-auto py-[37px] flex justify-between items-center flex-col md:flex-row lg:flex-row p-10'>
                <div className='w-[190px]'>
                <img src={logo}  className='mb-[30px] lg:mb-[96px] md:mb-[96px]'/>
                <div className=' justify-around space-x-10 w-full flex lg:space-x-10 md:space-x-10 mb-[30px] lg:mb-[55px] md:mb-[55px]'>
                    <img src={facebook} />
                    <img src={instagram} />
                    <img src={twitter} />
                </div>
                <div className='mb-[30px]'>
                <div className='block lg:hidden md:hidden'>
                  <StyledAccordion>
                    <StyledAccordionSummary
                      expandIcon={<StyledExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <span className='font-bold text-white text-[18px]'>Community</span>
                    </StyledAccordionSummary>
                    <AccordionDetails>
                      <Typography>
                      <div className='text-white flex flex-col justify-between pb-[30px]'>
                          <span className='font-bol text-white text-[14px]'>NFT</span>
                          <span className='font-bol text-white text-[14px]'>Tokens</span>
                          <span className='font-bol text-white text-[14px]'>Landlords</span>
                          <span className='font-bol text-white text-[14px]'>Discord</span>
                        </div>
                      </Typography>
                    </AccordionDetails>
                  </StyledAccordion>
                  </div>
                  <div className='block lg:hidden md:hidden'>
                  <StyledAccordion>
                    <StyledAccordionSummary
                      expandIcon={<StyledExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <span className='font-bold text-white text-[18px]'>Places</span>
                    </StyledAccordionSummary>
                    <AccordionDetails>
                      <Typography>
                      <div className='text-white flex flex-col justify-between pb-[30px]'>
                          <span className='font-bol text-white text-[14px]'>Castle</span>
                          <span className='font-bol text-white text-[14px]'>Farms</span>
                          <span className='font-bol text-white text-[14px]'>Beach</span>
                          <span className='font-bol text-white text-[14px]'>Learn more</span>
                        </div>
                      </Typography>
                    </AccordionDetails>
                  </StyledAccordion>
                  </div>
                  <div className='block lg:hidden md:hidden'>
                  <StyledAccordion>
                    <StyledAccordionSummary
                      expandIcon={<StyledExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <span className='font-bold text-white text-[18px]'>About us</span>
                    </StyledAccordionSummary>
                    <AccordionDetails>
                      <Typography>
                      <div className='text-white flex flex-col justify-between pb-[30px]'>
                              <span className='font-bol text-white text-[14px]'>Road map</span>
                              <span className='font-bol text-white text-[14px]'>Creators</span>
                              <span className='font-bol text-white text-[14px]'>Career</span>
                              <span className='font-bol text-white text-[14px]'>Contact us</span>
                        </div>
                      </Typography>
                    </AccordionDetails>
                  </StyledAccordion>
                  </div>
                  </div>
                <span className='text-white'>&copy; 2022 Metabnb</span>
                </div>
                <div className='text-white flex flex-col justify-between pb-[30px] hidden lg:flex md:flex'>
                  <span className='font-bold text-white text-[18px]'>Community</span>
                  <span className='font-bol text-white text-[14px]'>NFT</span>
                  <span className='font-bol text-white text-[14px]'>Tokens</span>
                  <span className='font-bol text-white text-[14px]'>Landlords</span>
                  <span className='font-bol text-white text-[14px]'>Discord</span>
                </div>
                <div className='text-white flex flex-col justify-between pb-[30px] hidden lg:flex md:flex'>
                  <span className='font-bold text-white text-[18px]'>Places</span>
                  <span className='font-bol text-white text-[14px]'>Castle</span>
                  <span className='font-bol text-white text-[14px]'>Farms</span>
                  <span className='font-bol text-white text-[14px]'>Beach</span>
                  <span className='font-bol text-white text-[14px]'>Learn more</span>
                </div>
                <div className='text-white flex flex-col justify-between pb-[30px] hidden lg:flex md:flex'>
                  <span className='font-bold text-white text-[18px]'>About us</span>
                  <span className='font-bol text-white text-[14px]'>Road map</span>
                  <span className='font-bol text-white text-[14px]'>Creators</span>
                  <span className='font-bol text-white text-[14px]'>Career</span>
                  <span className='font-bol text-white text-[14px]'>Contact us</span>
                </div>
                </div>
            </div>
    </>
  )
}

export default Footer

const StyledAccordion = styled(Accordion)`
  color: white !important;
  background-color: black !important;
  width: auto !important;
`

const StyledExpandMoreIcon = styled(ExpandMoreIcon)`
  color: white !important;
`
const StyledAccordionSummary = styled(AccordionSummary)`
  padding: 0 !important;
`