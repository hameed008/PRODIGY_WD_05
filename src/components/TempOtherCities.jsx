import React from 'react'
import OtherCityTempCard from './OtherCityTempCard'

const TempOtherCities = () => {
  return (
    <>
      <div className=' bg-emerald-900 p-4 pt-2 rounded-2xl shadow-lg'>
        <h1 className=' text-[17px] text-emerald-200 pl-2 pb-1'>Other Cities</h1>
        <div className='grid grid-cols-2 gap-2'>
          <OtherCityTempCard></OtherCityTempCard>
        </div>
      </div>
    </>
  )
}

export default TempOtherCities
