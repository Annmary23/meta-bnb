import React, { useState } from 'react'
import styled from 'styled-components'
import { FaStar } from "react-icons/fa";

function PlainCard(props) {
    const [rate, setRate] = useState(5);
  return (
    <div className='p-2 max-w-[100%] lg:max-w-[25%] md:max-w-[50%]'>
                <Card className='max-w-full lg:max-w-full'>
    <StyledImg src={props.image} className='w-full '/>
    <CardContainer className='flex space-x-10 mt-4'>
        <CardItem1 className='flex flex-column space-y-3'>
            <p>{props.title}</p>
            <p>{props.distance}</p>
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
            <p><b>{props.fee}</b></p>
            <p>{props.avai}</p>
            
        </CardItem2>
        
    </CardContainer>
    </Card>
    </div>
  )
}

export default PlainCard

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
const StyledImg = styled.img`
    /* position: absolute; */
`

const like = styled.div`
    position: 'absolute';
    top: 8;
    right: 8;
`