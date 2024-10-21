import React from 'react'
import Image from 'next/image'
import { RegisterCard } from '../registerCard/RegisterCard'

export const HeroSuccess = () => {
  return (
    <div>
        <RegisterCard />
        <div>
        <Image src='/images/pc-car2.jpg' className='sm:hidden' alt='imagen movil' width={800} height={500} />
        <Image src='/images/pc-car2.jpg' className='hidden sm:block md:hidden' alt='imagen tablet' width={1000} height={500} />
        <Image src='/images/pc-car2.jpg' className='hidden sm:hidden md:block lg:relative' alt='imagen pc' width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }} />
      </div>
    </div>
  )
}
