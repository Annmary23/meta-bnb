import React from 'react'
import styled from 'styled-components'
import { MBToken, MetaMask, OpenSea } from '../assets/icons/icons'
import nft1 from '../assets/images/nft1.png'
import group from '../assets/images/group.png'
import NftCard from '../components/Card'
function Home() {
    

    
  return (

    <>
    <div className='md:mt-[56px] mb-[20px] lg:mt-[15px] md:mb-[67px] lg:mb-[67px] p-10 max-w-7xl mx-auto flex items-center flex-col lg:flex-row md:flex-col lg:flex md:flex'>
    
        <div className='md:p-10 lg:p-10 pl-0 text-justify md:text-left lg:text-left mt-[40px] lg:mt-px md:mt-px'>
            <span className='text-[36px] md:text-[36px] lg:text-[50px]  mb-[24px] md:mb-[48px] lg:mb-[48px] block md:max-w-[649px] lg:max-w-[649px]'style={{color:'#434343'}}>Rent a <StyledText>Place</StyledText> away from <StyledText>Home</StyledText> in the <StyledText>Metaverse</StyledText></span>
            <span className='text-[24px] mb-[28px] block max-w-[636px]' style={{color:'#434343'}}>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</span>
            <div className='lg:flex lg:flex-row md:flex-row py-4 md:flex'>
                <StyledInput placeholder='Search for Location'className='w-full lg:w-[390px] md:w-full'/>
                <StyledButton className='w-full rounded-r-lg my-4 lg:w-[172px] lg:m-0 md:m-0 md:w-[172px]'>Search</StyledButton>
            </div>
        </div>
        
        <div className='lg:ml-[99px] md:ml-[9px]'>
        <div className="">
          <img src={group} />
        </div>
        </div>
        <div>
        </div>
        </div>
        <Section className='flex justify-evenly p-[13px] flex-wrap'>
            <OpenSea className='p-2'/>
            <MetaMask className='p-2'/>
            <MBToken className='p-2'/>
        </Section>
       <NftCard />
        <Section className='' id='nft' >
        <div className='h-max-content md:flex lg:flex p-10 max-w-7xl mx-auto'>
        <div className='text-justify m-auto max-w-[400px] md:text-left lg:text-left   text-white'>
            <span className='text-[36px] md:text-[36px] lg:text-[48px] md:mt-[70px] lg:mt-[70px] mb-[24px] md:mb-[48px] lg:mb-[48px] block md:max-w-[649px] lg:max-w-[649px] '>Metabnb NFTs</span>
            <span className='text-[18px] mb-[28px] block max-w-[636px]'>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</span>
            <button className='bg-white rounded-lg px-[33px] py-[14px] ' style={{color:'#A02279'}}>
                Learn more
            </button>
        </div>
        <div className='relative w-[100%] lg:h-[574.85px] lg:ml-[99px] md:ml-[29px]'>
            <img src={nft1} className=''/>
            
            
        </div>
        </div>
        </Section>
    </>
  )
}

export default Home

const StyledPage = styled.div`
/* display: flex; */
    margin-top: 130px;
    margin-bottom: 67px;
    /* display: grid;
    grid-template-columns: 1fr 1fr;
  grid-gap: 10px; */
  display: flex;
  
`

const StyledInt1 = styled.div`
    max-width: auto;
    /* float: left; */
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: space-between;
    
`
const StyledText = styled.span`
    color: #A02279;
`
const SubText = styled.div`
    font-size: 24px;
    margin-bottom: 48px;
`
const Input = styled.input`
    padding: 18px 15px;
    width: 390px;
    outline: none;
    border: 1px solid #A3A3A3;
border-radius: 8px 0px 0px 8px;
`
const Button = styled.button`
    padding: 17px 87px;
    background: linear-gradient(90deg, #A02279 11.45%, #A02279 11.46%);
border-radius: 0px 8px 8px 0px;
color: #fff;
`
const StyledImages = styled.div`
    /* position: relative; */
    /* height: 700px; */
    margin-left: 109px;
`


const Section = styled.div`
    background: linear-gradient(90deg, #A02279 11.45%, #A02279 11.46%);
`

const StyledInput = styled.input`
    padding: 15px;
    border: 1px solid #A3A3A3;
border-radius: 8px 0px 0px 8px;
outline: none;
`
const StyledButton = styled.button`
    background: linear-gradient(90deg, #A02279 11.45%, #A02279 11.46%);
    /* border-radius: 0px 8px 8px 0px; */
    padding: 16px;
    color: #fff;

`