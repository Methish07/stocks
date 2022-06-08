import React, { useEffect, useState } from 'react'
import axios from "axios";
import PlotData from './plot';
import { Button } from '@mui/material';
import './index.css'
const Bar = (props) => {
  const [data, setdata] = useState([])
    let openprice = []
  let highprice = []
  let lowprice = []
  let closeprice = []
  let date = []
  const [stock_name, setstock_name] = useState('')
 // const [stock_region, setstock_region] = useState('')
  const [stock_list1, setstock_list1] = useState([])
  //const [stock_list2, setstock_list2] = useState([])

  const SubmitHandler = (e) => {
    setstock_list1([...stock_list1,stock_name])
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com',
        'X-RapidAPI-Key': 'e9012605afmsh94563c183a9c56fp1e2e70jsnc2279d634580'
      }
    };

    fetch(`https://yh-finance.p.rapidapi.com/stock/v3/get-historical-data?symbol=${stock_name}&region=US`, options)
      .then(response => response.json())
      .then((response) => {
        console.log(response)
        setdata(response.prices)
      })
      .catch(err => console.error(err));
    //setstock_list2([...stock_list2, stock_region])
    setstock_name('')
    //setstock_region('')

  }
  const getinput = () => {
    setstock_name(prompt("enter stock symbol"));
    //setstock_region(prompt("enter the region "))
  }
  console.log(stock_list1)
  useEffect(() => {


    
  }, [stock_list1])
  console.log(data)
  for (let i = 0; i < data.length; i++) {
    highprice.push(data[i].high)
    lowprice.push(data[i].low)
    openprice.push(data[i].open)
    closeprice.push(data[i].close)
    date.push(new Date(data[i].date))
  }
  return (
    <div className='seperator'>
      <br></br>
      <br></br>
      <div >
      <div className='sidebar'>
<form>
<input type="button" value="enter symbol" className='btn' onClick={getinput}></input>

  <input type="button" value="add stock" className='btn' onClick={SubmitHandler}></input>
</form>
<h1>Stock</h1>
{
  stock_list1.map((i)=>{
    return(
      <div key={i}>
        <Button >{i}</Button>
        </div>
    )
  })
}
</div>
</div>
<div>
  <h1 >Stock market</h1>
      <div className='main_sep'>
        <div className='plot_sep'>
        <h3 style={{textAlign:"center"}}>{stock_name}</h3>
          <PlotData price={openprice} date={date} title={"Open-price"} />
          <PlotData price={closeprice} date={date} title={"Close-price"} />
        </div>
        <div className='plot_sep'>
          <PlotData price={lowprice} date={date} title={"Low-price"} />
          <PlotData price={highprice} date={date} title={"High-price"} />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Bar