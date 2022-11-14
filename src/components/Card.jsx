import React, { useState } from 'react'
import { cards } from './CardData'
import PlainCard from './plainCard';

function NftCard() {
    
    
  return (
    <div id='comm' className=' flex items-center flex-col content-between justify-evenly text-center p-4 max-w-7xl mx-auto flex items-center flex-col lg:flex-col md:flex-col' >
    <div className='mt-[14px] mb-[23px]'>
    <span className='text-[36px] md:text-[36px] lg:text-[56px] mb-[20px]'>
    Inspiration for your next adventure
    </span>
    </div>
    <div className='flex flex-wrap justify-center'>
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
</div>
  )
}

export default NftCard

