import React, { useContext, useState } from 'react';
import { WeatherContext } from '../store/WeatherContext';

import TempMainDisplay from './TempMainDisplay'
import TempHighlight from './TempHighlight'
import TodayTempStats from './TodayTempStats'
import TempOtherCities from './TempOtherCities'


const WeatherContainer = () => {
  const { setCityName } = useContext(WeatherContext);
  const [inputValue, setInputValue] = useState('');


  const handleSearch = () => {
    setCityName(inputValue);
    setInputValue('')
  };

  return (
    <>
      <div className='w-[50%] lg-[75%] xl:w-[65%] bg-emerald-700 mx-auto py-7 pl-7 pr-10 my-10 rounded-2xl shadow-2xl'>
        <div className=' w-[100%] flex justify-between'>
          <div className='w-full flex items-center relative'>
            <i className="fa-solid fa-magnifying-glass absolute left-3 text-gray-300 mb-2"></i>
            <input type="text" placeholder='Search City' value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} className='bg-emerald-900  w-[100%]  focus:text-gray-200 py-2 p-10 mb-2 rounded-2xl outline-none tracking-widest' />
          </div>
          <button onClick={handleSearch} className='bg-emerald-400 px-3 rounded-2xl block ml-2 mb-[10px] text-lg text-gray-950 hover:text-white hover:bg-emerald-500 duration-300 shadow-lg'>Search</button>
        </div>

        <div className=' grid grid-cols-1 xl:grid-cols-[52%_48%] gap-3  '>
          <TempMainDisplay />
          <TempHighlight />

          <TodayTempStats />
          <TempOtherCities />


        </div>
      </div>
    </>
  )
}

export default WeatherContainer
