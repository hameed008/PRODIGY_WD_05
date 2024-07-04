import './App.css'
import WeatherContainer from './components/WeatherContainer'
import { WeatherProvider } from './store/WeatherContext'

function App() {


  return (
    <>
      <WeatherProvider>
        <div className='w-[100vw]  xl:h-screen flex items-center justify-center app'>
          <WeatherContainer></WeatherContainer>
        </div>
      </WeatherProvider>
    </>
  )
}

export default App
