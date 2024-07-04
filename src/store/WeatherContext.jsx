import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create a context
export const WeatherContext = createContext();

// Create a provider component
export const WeatherProvider = ({ children }) => {
  const [cityName, setCityName] = useState('mumbai')
  const [weatherData, setWeatherData] = useState(null);
  // console.log(cityName)
  const [weatherPakistan, setweatherPakistan] = useState(null);
  const [weatherUS, setweatherUS] = useState(null);
  const [weatherDubai, setweatherDubai] = useState(null);
  const [weatherEnglan, setweatherEngland] = useState(null);



  useEffect(() => {
    const fetchWeatherData = async () => {
      // console.log(cityName)
      const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=a44c0d51af5d493c97b100728241406&q=${cityName}`);
      setWeatherData(response.data);

      const response2 = await axios.get(`https://api.weatherapi.com/v1/current.json?key=a44c0d51af5d493c97b100728241406&q=pakistan`);
      setweatherPakistan(response2.data);

      const response3 = await axios.get(`https://api.weatherapi.com/v1/current.json?key=a44c0d51af5d493c97b100728241406&q=america`);
      setweatherUS(response3.data);
      const response4 = await axios.get(`https://api.weatherapi.com/v1/current.json?key=a44c0d51af5d493c97b100728241406&q=dubai`);
      setweatherDubai(response4.data)

      const response5 = await axios.get(`https://api.weatherapi.com/v1/current.json?key=a44c0d51af5d493c97b100728241406&q=england`);
      setweatherEngland(response5.data)
    };

    fetchWeatherData();
  }, [cityName]);

  // Create an object with the multiple pieces of data
  const contextValue = {
    weatherData,
    weatherPakistan,
    weatherUS,
    weatherDubai,
    weatherEnglan,
    cityName,
    setCityName,
  };
  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
};