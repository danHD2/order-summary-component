import './App.css'
import illustration from '../public/illustration-hero.svg'
import icon from '../public/icon-music.svg'


function App() {
 

  return (
    <>
    <div className='h-screen w-screen bg-mobileBg md:bg-desktopBg bg-no-repeat bg-contain bg-paleBlue grid place-items-center font-RedHatDisplay'>
      <div className='bg-white rounded-3xl flex flex-col w-96 items-center shadow-2xl'>
        <img src={illustration} alt="Hero" className='rounded-t-3xl'/>
        <div className='p-10 flex flex-col items-center'>
        <h1 className='text-2xl font-bold text-darkBlue'>Order Summary</h1>
        <p className='text-center text-desaturatedBlue font-semibold py-5'>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
        <div className='bg-veryPaleBlue flex p-5 items-center justify-between rounded-lg w-full'>
          <div className='flex'>
          <img src={icon} alt="Icon" />
          <div className='ml-5'>
            <h2 className='font-bold text-darkBlue'>Annual Plan</h2>
            <p className='text-desaturatedBlue'>$59.99/year</p>
          </div>
          </div>
          <a className='text-brightBlue font-bold text-sm underline hover:no-underline hover:opacity-80' href="">Change</a>
        </div>
        <button className='bg-brightBlue my-8 hover:opacity-80 text-white font-bold w-full py-3 rounded-xl text-sm shadow-2xl shadow-brightBlue'>Proceed to Payment</button>
        <button className='text-desaturatedBlue hover:text-darkBlue font-bold'>Cancel Order</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
