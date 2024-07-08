import React, { useContext } from 'react'
import { WeatherContext } from '../store/WeatherContext'

const OtherCityTempCard = () => {
  const { weatherPakistan, weatherUS, weatherDubai, weatherEnglan } = useContext(WeatherContext);

  if (weatherPakistan && weatherUS && weatherDubai && weatherEnglan) {
    const weatherOtherCity = [weatherPakistan, weatherUS, weatherDubai, weatherEnglan]
    console.log(weatherOtherCity.length)

    return (
      <>
        {weatherOtherCity.map((weather, i) => (
          <div className=' bg-emerald-950 p-2 pl-3 rounded-2xl shadow-lg text-white'>

            <div className='flex items-center' key={i}>
              <h1 className='text-3xl'>{weather.current.temp_c}<sup>°</sup></h1>
              <p className='text-gray-400 mt-5 text-sm'><span>H:{(weather.current.temp_c + 1).toFixed(2)}<sup>°</sup> and </span> <span>L:{(weather.current.temp_c - 1).toFixed(2)}<sup>°</sup></span></p>
            </div>

            <div className='flex items-center justify-between mt-4' key={weather.location.name}>
              <p className='text-md'>{weather.location.name}</p>
              <img src={weather.current.condition.icon} alt="" className='w-[50px]' />
            </div>


          </div>
        ))}
      </>
    )
  }
}

export default OtherCityTempCard
