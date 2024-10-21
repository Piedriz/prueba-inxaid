'use client'
import React from 'react'
import { RegisterCard } from '../registerCard/RegisterCard';
import Image from 'next/image';
const Hero = () => {


  return (

    <>
      <RegisterCard />

      <div>
        <Image src='/images/movil-car.jpeg' className='sm:hidden' alt='imagen movil' width={800} height={500} />
        <Image src='/images/tablet-car.jpeg' className='hidden sm:block md:hidden' alt='imagen tablet' width={1000} height={500} />
        <Image src='/images/pc-car.jpeg' className='hidden sm:hidden md:block lg:relative' alt='imagen pc' 
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}/>
      </div>
    </>

  )
}

export default Hero;