import { Carousel } from 'antd'
import React from 'react'
import { Navbar, Buy, Card, CardProductHome } from '@components'

const Home = () => {
  return (
    <div className='w-96 md:w-full h-full sm:w-full'>
      <div className='mx-12'>

        <Buy />
        <Navbar />

        <Carousel autoplay>
          <div>
            <img src={require('./img/gb_editorial_nov_homepagehero_d_640345b2-3274-4626-a19b-eccd0c770f09_1344x512.webp')} />
          </div>
          <div>
            <img src={require('./img/GB_Web_Carousel_Hero_2880x1280_V3_1_1344x512.webp')} />
          </div>
          <div>
            <img src={require('./img/HomepageHero_2x_97bcf689-062b-4c0e-8bdd-f3553209119d_1344x512.webp')} />
          </div>
        </Carousel>
        <div className='mt-12 ml-6'>
          <button className='mx-7 text-xl'>
            How To
          </button>
          <button className='mx-7 text-xl'>
            Trends
          </button>
          <button className='mx-7 text-xl'>
            Wellness
          </button>
          <button className='mx-7 text-xl'>
            Sucess Stories
          </button>
        </div>
        <div className='wrapper'>
          <div className='zoom-effect'>
            <div className='kotak'>
              <img src={require('./img/GB_Editorial_Date_StoryName_Feature-3_960x576.webp')} alt='#' />
            </div>
          </div>
        </div>
        <div className='ml-3 mt-2 mb-24'>
          <p className='text-lg'>TRENDS</p>
          <a className='text-2xl'>What Happened at Work in 2022: A Year in Review</a>
          <p className='text-lg'>From quiet quitting to Kim Kardashian’s infamous advice for women in business.</p>
        </div>
        <div className='grid grid-cols-2 grid-rows-auto'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
        <div>
        </div>
      </div>
          <img className='w-full mt-12' src={require('./img/Web capture_31-12-2022_3235_girlboss.com.jpeg')}></img>
          <div className='grid grid-cols-4 grid-row-auto'>
          <CardProductHome/>
          <CardProductHome/>
          <CardProductHome/>
          <CardProductHome/>
          <CardProductHome/>
          <CardProductHome/>
          </div>
          <div className='grid place-content-center justify-center'>
          <button className='bg-black text-white w-32 h-11'>SHOP ALL</button>
          </div>
    </div>
  )
}

export default Home