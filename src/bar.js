import React, { useEffect, useState } from 'react'
import PlotData from './plot'

const Bar = () => {
const [data,setdata]=useState([])
const stocks=async()=>{
  try{
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com',
      'X-RapidAPI-Key': 'fb0a39d437msh61f745319c3541bp16790bjsndb2b27a3b95a'
    }
  };
  
  fetch('https://yh-finance.p.rapidapi.com/market/get-earnings?region=US&startDate=1585155600000&endDate=1589475600000&size=5', options)
    .then(response => response.json())
    .then((res)=>{
      console.log(res.finance.result)
     setdata(res.finance.result)
  })
  }
  catch(err){
console.log(err.message)
  };
}
useEffect(()=>{
  stocks()
    },[])


  return (
    <div>
      <PlotData  />
    </div>
  )
}

export default Bar