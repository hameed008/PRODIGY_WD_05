import React, { useContext } from 'react';
import { WeatherContext } from '../store/WeatherContext';


const TodayTempStats = () => {
  const { weatherData } = useContext(WeatherContext);
  if (weatherData) {

    // Assuming you want to render 10 elements
    const elements = Array.from({ length: 10 }, (_, i) => i);
    return (
      <>
        <div className='grid grid-cols-[75%_25%] bg-emerald-950 text-white shadow-lg rounded-2xl lg:-mt-18px]'>
          <div className='  flex flex-col '>
            <h1 className='py-4 px-6 text-emerald-200'>Today</h1>

            <div className=" prev-temp-details mx-4 flex gap-1 overflow-x-scroll">

              {elements.map((_, index) => (
                <div key={index} className=" min-w-[60px] min-h-[130px] text-center mb-8 rounded-2xl bg-gradient-to-r from-[#021F19] to-[#021F19] pt-2">
                  <p>{index + 1} <span className='text-gray-500'>PM</span></p>
                  <div className='flex flex-col items-center mt-5'>
                    <img src="sun.png" alt="" className='w-[20px] mb-1' />
                    <p className='text-xl'>{(weatherData.current.temp_c + index - 1).toFixed(0)} <sup>°</sup></p>
                  </div>
                </div>
              ))}
            </div>


            <div className='bg-[#021F19] py-4 px-4 flex justify-between rounded-3xl mx-4 '>
              <div className='flex justify-between'>
                <div>
                  <p className='font-mediun'>Tomarrow</p>
                  <p className='text-[12px]'>Thunder Storm</p>
                </div>
                <h1 className='text-4xl ml-[10px] mt-[15px]'>{(weatherData.current.temp_c) + 2}<sup>°</sup></h1>
              </div>

              <img src="cloudy.png" alt="" className='w-[50px] h-[50px] -mt-[40px]' />
            </div>
          </div>

          <div className=' flex flex-col justify-between py-4 px-4 bg-[#021F19] my-4 mr-4 rounded-2xl z-10'>
            <div>
              <p className='text-gray-400'>Sunrise</p>
              <h1>6:45</h1>
            </div>

            <div>
              <p className='text-gray-400'>Sunset</p>
              <h1>6:45</h1>
            </div>
            <div>
              <p className='text-gray-400'>Length of day</p>
              <h1>10h 23m</h1>
            </div>
          </div>

        </div>
      </>
    )
  }
}

export default TodayTempStats
