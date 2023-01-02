import React from 'react'

const Card = () => {
  return (
    <>
    <div>
    <div className='card'>
          <div className='zoom-effect'>
            <div className='kotak'>
              <img src={require('./img/GB_Editorial_Jan5_LowStakes_Feature_512x320.webp')} alt='#' />
            </div>
          </div>
        </div>
        <p className='text-lg'>WELLNESS</p>
        <h2 className='text-2xl'>11 Low-Stakes Ways to Feel Better Now</h2>
        <p className='text-lg w-[512px]'>Want to know how to feel better now? Set the right tone for 2023 (read: no bad vibes allowed) with these easy habits.</p>
    </div>
    </>
  )
}

export default Card