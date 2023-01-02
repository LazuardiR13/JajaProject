import React from 'react'

const CardProductHome = () => {
    return (
        <>
            <div className=' w-72 h-96 ml-3.5 mt-7 mb-5 border'>
                <img src={require('./img/26_288x288.webp')} className=' hover:opacity-20 absolute w-64 ml-4'></img>
                    <button className='ml-[84px] mt-36 bg-black text-white w-28 h-11 border shadow-lg font-bold text-base'>
                        Quick Shop
                    </button>
                
                <div className='ml-4 absolute mt-24 '>
                <p className='text-sm w-[312px]'>Listen B*tch</p>
                <h2 className='text-lg  w-[312px]'>Listen B*tch Affirmation Cards</h2>
                <p className='text-base w-[312px]'>$25.00 USD</p>
                </div>
            </div>
        </>
    )
}

export default CardProductHome