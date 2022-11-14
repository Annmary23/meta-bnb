import React from 'react'
import NftCard from '../components/Card'
import PlainCard from '../components/plainCard'
import {cards} from '../components/PlacetoStayData'
import filter from '../assets/settings.svg'
import styled from 'styled-components'
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import ShowMore from 'react-show-more-button';
import { SettingsIcon } from '../assets/icons'

function PlaceToStay() {
  return (
    <>

    <div className='max-w-7xl mx-auto px-[50px] justify-between '>
        <div className='flex w-[80%] justify-between items-center  md:flex'>
            <span className='hidden md:block'>Restaurant</span>
            <span className='hidden md:block'>Cottage</span>
            <span className='hidden md:block'>Castle</span>
            <span className='hidden md:hidden lg:block'>Fantasy City</span>
            <span className='hidden md:hidden lg:block'>beach</span>
            <span className='hidden md:hidden lg:block'>Carbins</span>
            <span className='hidden md:hidden lg:block'>Off-grid</span>
            <span className='hidden md:hidden lg:block'>Farm</span>
            <button className='flex hidden md:flex lg:flex justify-between p-4 w-[160px] rounded-lg border-[1px]'>
                <span>Location</span>
                <SettingsIcon />
            </button>
        </div>
        
        <div className='block lg:hidden md:hidden'>
                  <StyledAccordion>
                    <StyledAccordionSummary
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <button className='flex justify-between p-4 w-[160px] rounded-lg border-[1px]'>
                <span>Location</span>
                <SettingsIcon />
            </button>
                    </StyledAccordionSummary>
                    <AccordionDetails>
                      <div className='text-white flex flex-col justify-between pb-[30px] '>
                      <span className='hidden md:block '>Restaurant</span>
                            <span className='hiden md:block text-gray-900 p-2'>Cottage</span>
                            <span className='hiddn md:block text-gray-900 p-2'>Castle</span>
                            <span className='hiden md:hidden lg:block p-2 text-gray-900'>Fantasy City</span>
                            <span className='hdden md:hidden lg:block p-2 text-gray-900'>beach</span>
                            <span className='hiddn md:hidden lg:block p-2 text-gray-900'>Carbins</span>
                            <span className='hiden md:hidden lg:block p-2 text-gray-900'>Off-grid</span>
                            <span className='hiden md:hidden lg:block p-2 text-gray-900'>Farm</span>
                        </div>
                    </AccordionDetails>
                  </StyledAccordion>
                  </div>
    </div>
    <div className='flex flex-wrap max-w-7xl mx-auto p-[50px]'>
    
        {
        cards.map((item) =>{
            return (
<>
                <PlainCard 
                    title={item.title}
                    distance={item.distance}
                    fee={item.fee}
                    avai={item.avai}
                    image={item.image}
                />
    </>
            )
        })}
        </div>
    </>
  )
}

export default PlaceToStay

const StyledAccordion = styled(Accordion)`
  color: black !important;
  background-color: white !important;
  width: max-content !important;
  box-shadow: none !important;
`
const StyledAccordionSummary = styled(AccordionSummary)`
  padding: 0 !important;
`

const StyleShowMore = styled(ShowMore)`
  background:none;
`