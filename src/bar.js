import React, { useEffect, useState } from 'react'
import PlotData from './plot'
import './index.css'
const Bar = () => {
  const [data, setdata] = useState([])
  let openprice = []
  let highprice = []
  let lowprice = []
  let closeprice = []
  let date = []
  const gridstyle={margin:0,padding:0}
  const stocks = async () => {
    const axios = require("axios");

    const options = {
      method: 'GET',
      url: 'https://yh-finance.p.rapidapi.com/stock/v3/get-chart',
      params: {
        interval: '1wk',
        symbol: 'AMRN',
        range: '10y',
        region: 'US',
        includePrePost: 'false',
        useYfid: 'true',
        includeAdjustedClose: 'true',
        events: 'capitalGain,div,split'
      },
      headers: {
        'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com',
        'X-RapidAPI-Key': 'bfd626e4b2msh7d60bf944177e7fp12d3e4jsn03a6f4098418'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }
  useEffect(() => {
    stocks()
  }, [])


  console.log(data)
  for (let i = 0; i < 100; i++) {
    highprice.push(data[i].high)
    lowprice.push(data[i].low)
    openprice.push(data[i].open)
    closeprice.push(data[i].close)
    date.push(new Date(data[i].date))
  }

  return (
    <div>
      <br></br>
      <br></br>
     <div className='main_sep'>
     <div className='plot_sep'>
      <PlotData price={openprice} date={date} title={"Open-price"} />
      <PlotData price={closeprice} date={date} title={"Close-price"} />
      </div>
      <div className='plot_sep'>
      <PlotData price={lowprice} date={date} title={"Low-price"} />
    <PlotData price={highprice} date={date} title={"High-price"} />
      </div>
     </div>
      
     </div>
  )
}

export default Bar