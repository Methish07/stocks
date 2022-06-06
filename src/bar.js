import React, { useEffect, useState } from 'react'
import PlotData from './plot'
const Bar = () => {
  const [data, setdata] = useState([])
  let openprice = []
  let highprice = []
  let lowprice = []
  let closeprice = []
  let date = []
  const gridstyle={margin:0,padding:0}
  const stocks = async () => {
    try {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com',
          'X-RapidAPI-Key': 'fb0a39d437msh61f745319c3541bp16790bjsndb2b27a3b95a'
        }
      };

      fetch('https://yh-finance.p.rapidapi.com/stock/v3/get-historical-data?symbol=AAPL&region=US', options)
        .then(response => response.json())
        .then((res) => {
          console.log(res)
          setdata(res.prices)
        })
    }
    catch (err) {
      console.log(err.message)
    };
  }
  useEffect(() => {
    stocks()
  }, [])
  console.log(data)
  for (let i = 0; i < data.length; i++) {
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
      <PlotData price={openprice} date={date} title={"Open-price"} />
      <PlotData price={closeprice} date={date} title={"Close-price"} />
      <PlotData price={lowprice} date={date} title={"Low-price"} />
    <PlotData price={highprice} date={date} title={"High-price"} />
     </div>
  )
}

export default Bar