import React, { useState } from 'react'
import styled from 'styled-components'
import image1 from '../assets/Frame.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import company1 from '../assets/company1.svg'
import company2 from '../assets/company2.svg'
import company3 from '../assets/company3.svg'
import nft1 from '../assets/nft1.png'
import nft2 from '../assets/nft2.png'
import nft3 from '../assets/nft3.png'
import group from '../assets/group.png'
import { FaStar } from "react-icons/fa";
import Footer from '../components/Footer'

function Home() {
    const [rate, setRate] = useState(5);

    const cards = [
        {
            image: image1,
            title: 'desert king',
            distance: '2345km away',
            fee: '1MBT per night',
            avai: 'available for 2weeks stay'
        },
        {
            image: image1,
            title: 'desert king',
            distance: '2345km away',
            fee: '1MBT per night',
            avai: 'available for 2weeks stay'
        },
        {
            image: image1,
            title: 'desert king',
            distance: '2345km away',
            fee: '1MBT per night',
            avai: 'available for 2weeks stay'
        },
        {
            image: image1,
            title: 'desert king',
            distance: '2345km away',
            fee: '1MBT per night',
            avai: 'available for 2weeks stay'
        },
        {
            image: image1,
            title: 'desert king',
            distance: '2345km away',
            fee: '1MBT per night',
            avai: 'available for 2weeks stay'
        },
        {
            image: image1,
            title: 'desert king',
            distance: '2345km away',
            fee: '1MBT per night',
            avai: 'available for 2weeks stay'
        },
        {
            image: image1,
            title: 'desert king',
            distance: '2345km away',
            fee: '1MBT per night',
            avai: 'available for 2weeks stay'
        },
        {
            image: image1,
            title: 'desert king',
            distance: '2345km away',
            fee: '1MBT per night',
            avai: 'available for 2weeks stay'
        },
    ]
  return (

    <>
    <div className='md:mt-[56px] mb-[20px] lg:mt-[125px] md:mb-[67px] lg:mb-[67px] p-10 max-w-7xl mx-auto flex items-center flex-col lg:flex-row md:flex-col lg:flex md:flex'>
    
        <div className='md:p-10 lg:p-10 pl-0 text-justify md:text-left lg:text-left mt-[40px] lg:mt-px md:mt-px'>
            <span className='text-[36px] md:text-[36px] lg:text-[56px]  mb-[24px] md:mb-[48px] lg:mb-[48px] block md:max-w-[649px] lg:max-w-[649px]'>Rent a Place away from Home in the Metaverse</span>
            <span className='text-[24px] mb-[28px] block max-w-[636px]'>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</span>
        </div>
        
        <div className='  lg:ml-[99px] md:ml-[9px] '>
        <div className="">
          <img src={group} />
        </div>
        </div>
        <div>
        </div>
        </div>
        <Section className='flex justify-evenly p-[13px] flex-wrap'>
            <img src={company1} className='p-2'/>
            <img src={company2} className='p-2'/>
            <img src={company3} className='p-2'/>
        </Section>
        <div className=' flex items-center flex-col content-between justify-evenly text-center p-4 max-w-7xl mx-auto flex items-center flex-col lg:flex-col md:flex-col '>
            <div className='mt-[14px] mb-[23px]'>
            <span className='text-[36px] md:text-[36px] lg:text-[56px] mb-[20px]'>
            Inspiration for your next adventure
            </span>
            </div>
            <div className='flex flex-wrap justify-center'>
            {
                cards.map((item) =>{
                    return (
                        <div className='p-2 max-w-[100%] lg:max-w-[25%] md:max-w-[50%]'>
                        <Card className='max-w-full lg:max-w-full'>
            <StyledImg src={item.image} className='w-full '/>
            <CardContainer className='flex space-x-10 mt-4'>
                <CardItem1 className='flex flex-column space-y-3'>
                    <p>{item.title}</p>
                    <p>{item.distance}</p>
                    <Container>
                    {[...Array(5)].map((item, index) => {
                        const givenRating = index + 1;
                        return (
                        <label>
                            <Radio
                            type="radio"
                            value={givenRating}
                            onClick={() => {
                                setRate(givenRating);
                            }}
                            />
                            <Rating>
                            <StyledFaStar
                                color={
                                givenRating < rate || givenRating === rate
                                    ? "A02279"
                                    : "rgb(192,192,192)"
                                }
                            />
                            </Rating>
                        </label>
                        );
                    })}
                    
                </Container>
                </CardItem1>
                <CardItem2 className='flex flex-column space-y-3'>
                    <p><b>{item.fee}</b></p>
                    <p>{item.avai}</p>
                    
                </CardItem2>
                
            </CardContainer>
            </Card>
            </div>
                    )
                })}
                </div>
        </div>
        <Section className=''>
        <div className='h-max-content md:flex lg:flex p-10 max-w-7xl mx-auto'>
        <div className='text-justify m-auto max-w-[400px] md:text-left lg:text-left   text-white'>
            <span className='text-[36px] md:text-[36px] lg:text-[48px] md:mt-[70px] lg:mt-[70px] mb-[24px] md:mb-[48px] lg:mb-[48px] block md:max-w-[649px] lg:max-w-[649px]'>Metabnb NFTs</span>
            <span className='text-[18px] mb-[28px] block max-w-[636px]'>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</span>
        </div>
        <div className='relative w-[100%] lg:h-[574.85px] lg:ml-[99px] md:ml-[29px]'>
            <img src={nft1} className=''/>
            
            
        </div>
        </div>
        </Section>

        <Footer />
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
    color: #FFC08999;
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
const StyledImg = styled.img`
    /* position: absolute; */
`

const Section = styled.div`
    background: linear-gradient(90deg, #A02279 11.45%, #A02279 11.46%);
`
const Card = styled.div`
    border: 1px solid #D7D7D7;
    border-radius: 15px;
    padding: 16px;
`
const CardItem1 = styled.div`
    flex-direction: column;
    align-items: flex-start;
    font-size: 12px;
`
const CardItem2 = styled.div`
    flex-direction: column;
    align-items: flex-end;
    font-size: 12px;
`
const CardContainer = styled.div`
    justify-content: space-between;
`
const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   max-height: 12px;
   font-size: 60px;
`
const Radio = styled.input`
   display: none;
`
const Rating = styled.div`
   cursor: pointer;
`
const StyledFaStar = styled(FaStar)`
    height: 12px;
    width: 12px;
`