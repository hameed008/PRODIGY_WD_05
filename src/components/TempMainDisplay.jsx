import React, { useContext, useState } from 'react';
import { WeatherContext } from '../store/WeatherContext';

const date = new Date();

// Get the day name
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayName = days[date.getDay()];

// Get the month name
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const monthName = months[date.getMonth()];

// Get the date
const day = date.getDate();

// Get the year
const year = date.getFullYear();

const TempMainDisplay = () => {
  const { weatherData } = useContext(WeatherContext);

  if (weatherData) {
    ///////////////////////////////////////

    // High and Low Temperature
    let currTemp = weatherData.current.temp_c;
    let hightTemp = currTemp + 2;
    let lowTemp = currTemp - 3;


    let [tempUnit, setTempUnit] = useState('celcius')

    // console.log(tempUnit)
    const convertTemperature = (tempC) => {
      return tempUnit === 'celcius' ? tempC : ((tempC * 9 / 5) + 32).toFixed(2);
    };

    const handleClick = () => {
      return setTempUnit(tempUnit === 'celcius' ? 'fahrenheit' : 'celcius');
    }

    // Calculating Cloud Percentage:
    // console.log(weatherData.current.cloud);
    const cloud = weatherData.current.cloud > 50 ? 'Cloudy' : 'Clear';

    return (
      <>

        <div className='flex justify-between text-white bg-emerald-950 shadow-lg rounded-2xl'>

          <div className='p-4  '>
            <div className='flex items-center justify-center gap-2 px-2 lg:px-5 min-w-16 h-8 lg:min-w-[200px] lg:h-10 bg-emerald-500 rounded-2xl text-black'>
              <i className="fa-solid fa-location-dot lg:mr-0 text-[16px] lg:text-xl"></i>
              <p className=' text-center text-[16px] lg:text-xl'>{(weatherData.location.name).toUpperCase()}</p>
            </div>

            <div className='my-4 lg:my-8'>
              <h1 className='text-3xl lg:text-2xl'>{dayName}</h1>
              <p className='font-normal text-sm'>{day} {monthName} {year}</p>
            </div>
            <div>
              <h1 className='text-4xl lg:text-6xl font-medium'>{convertTemperature(weatherData.current.temp_c)}°{tempUnit === 'celcius' ? 'C' : 'F'} </h1>
              <p className='text-[12px] lg:text-lg font-medium text-gray-400 group'>H: <span>{hightTemp.toFixed(2)}<sup>°</sup></span> and L: <span>{lowTemp.toFixed(2)}<sup>°</sup></span></p>
            </div>
          </div>

          <div className='flex flex-col items-end p-4'>
            <div className='flex items-center'>
              <button className={`unit-btn flex w-12 h-6 lg:w-20 lg:h-10 rounded-3xl text-white outline-none ${tempUnit === 'fahrenheit' ? 'bg-emerald-500 duration-300' : 'bg-gray-500 duration-150'} text-xl mx-2`} onClick={handleClick}>
                <span className={`w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full z-10 ${tempUnit === 'fahrenheit' ? 'ml-6 lg:ml-10 duration-150' : 'ml-0 duration-150'}`} ></span>
              </button>
              <p className='text-2xl'>F</p>
            </div>
            <img src={weatherData.current.condition.icon} alt="" className='w-[60px] lg:w-[130px] mt-3 lg:mt-7' />
            <div className='mt-6'>
              <h1 className='font-medium text-lg lg:text-2xl'>{cloud}</h1>
              <p className='font-normal text-[11px] lg:text-sm'>Feels Like</p>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default TempMainDisplay
