import React, { useContext } from "react"
import { WeatherContext } from '../store/WeatherContext';
import { hours, minutes } from "./Time";
const TempHighlight = () => {
  const { weatherData } = useContext(WeatherContext);
  if (weatherData) {


    // Calculating Chance of rain:
    let chanceOfRain;
    if (weatherData) {
      if (weatherData.current.precip_mm > 0) {
        chanceOfRain = 90;
      } else if (weatherData.current.cloud > 50 && weatherData.current.humidity > 60) {
        chanceOfRain = 50;
      } else {
        chanceOfRain = 20
      }
    }

    // Calculating UV index:
    let uvIndex;
    if (weatherData.current.uv < 3) {
      uvIndex = 'Low'
    } else if (weatherData.current.uv > 3 && weatherData.current.uv <= 6) {
      uvIndex = 'Moderate'
    } else if (weatherData.current.uv === 7) {
      uvIndex = 'High'
    } else if (weatherData.current.uv > 7 && weatherData.current.uv <= 10) {
      uvIndex = 'Very High'
    }

    return (
      <div className='bg-gradient-to-tl from-emerald-900 to-emerald-900 bg-center p-4 pt-2 text-white rounded-2xl shadow-lg'>
        <h1 className='pl-2 pb-1 text-emerald-200'>Today Highlight</h1>
        <div className='grid grid-cols-2 gap-2 ' >
          <div className='bg-emerald-950 rounded-2xl p-2 pl-3'>
            <h1 className='text-md font-medium '>Chance Of Rrain</h1>
            <div className='w-100% flex items-center justify-center mt-4'>
              <img src="src\assets\rain.png" alt="wind status image" className='w-[50px] text-center' />
            </div>
            <div className='flex items-center justify-between mt-4'>
              <h1 className='font-bold'>{chanceOfRain} <span className='text-gray-500'>%</span></h1>
              <div>
                <p className='font-bold'>{hours}:{minutes} <span className='text-gray-500'>PM</span></p>
              </div>

            </div>
          </div>

          <div className='bg-emerald-950 rounded-2xl p-2 pl-3'>
            <h1 className='text-md font-medium'>UV Index</h1>
            <div className='w-100% flex items-center justify-center mt-4'>
              <img src="src\assets\uv-index.png" alt="" className='w-[50px] text-center' />
            </div>
            <div className='flex justify-between mt-4'>
              <h1 className='font-bold'>{weatherData.current.uv}/10</h1>
              <h1 className='font-bold'>{uvIndex}</h1>
            </div>
          </div>
          <div className='bg-emerald-950 rounded-2xl p-2 pl-3'>
            <h1 className='text-md font-medium'><i className="fa-solid fa-wind mr-2"></i>Wind Status</h1>
            <div className='w-100% flex items-center justify-center mt-4'>
              <img src="src\assets\audio-waves.png" alt="wind status image" className='w-[50px] text-center' />
            </div>

            <div className='flex justify-between mt-4'>
              <h1 className='font-bold'>{weatherData.current.wind_kph} <span className='text-gray-500'>km</span></h1>
              <p className='font-bold'>{hours}:{minutes} <span className='text-gray-500'>PM</span></p>
            </div>
          </div>

          <div className='bg-emerald-950 rounded-2xl p-2 pl-3'>
            <h1 className='text-md font-medium '><i className="fa-solid fa-fire-flame-curved mr-2"></i>Humidity</h1>
            <div className='w-100% flex items-center justify-center mt-4'>
              <img src="src\assets\rainy-day.png" alt="wind status image" className='w-[50px] text-center' />
            </div>
            <div className='flex items-center justify-between mt-4'>
              <h1 className='font-bold'>{weatherData.current.humidity} <span className='text-gray-500'>%</span></h1>
              <div>
                <p className='text-cyan-400 text-[10px]'>Status</p>
                <p className='text-[12px]'>Godd Quality</p>
              </div>

            </div>
          </div>

        </div>
      </div>

    )
  }
}

export default TempHighlight
