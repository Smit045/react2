import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import {InputBox} from './components/index.js'

function App() {
  const [from, setFrom] = useState('usd')
  const [amount, setAmount] = useState(0)
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)
  const currencyInfo= useCurrencyInfo(from)
  const options=Object.keys(currencyInfo)

  const convert = () => {
    setConvertedAmount((amount * currencyInfo[to]).toFixed(2))
  }
  
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)

  }

  return (
    <>
      <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat" 
      style={{backgroundImage: `url("https://www.investopedia.com/thmb/oHgWE85__BDN43dJUTJgsfuwPB8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/money-money-money----978096394-5c3cf30646e0fb00014db0f2.jpg")`}}>

        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-yellow/30 ">
          <form onSubmit={(e)=>{
            e.preventDefault()
            convert()
          }}>

            <div className="w-full mb-1"> 
              <InputBox 
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency)=>{setFrom(currency)}}
              onAmountChange={(amount)=>{setAmount(amount)}}
              selectedCurrency={from}

              />

            </div>
            <div className="relative w-full h-0.5">
              <button 
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-black text-white px-2 py-0.5"
              onClick={swap}
              >Swap</button>
            </div>
            <div className="w-full mb-1">
              <InputBox 
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency)=>{setTo(currency)}}
              selectedCurrency={to}
              amountDisabled={true}
              
              />
            </div>
            <button
            type="submit"
            className="w-full bg-gray-600 text-white  my-2 px-4 py-3 rounded-lg"
            >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>


          </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
