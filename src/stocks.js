import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const Stocks = () => {

  const [stock_name,setstock_name]=useState('')
  const [stock_list,setstock_list]=useState([])

const SubmitHandler=(e)=>{
console.log(stock_name)
setstock_list([...stock_list,stock_name])
setstock_name('')

}

console.log(stock_list)


  return (
    <div className='sidebar'>
<form>
<input type="button" value="enter symbol" onClick={()=>{setstock_name(prompt("enter name"))}}></input>
  <input type="button" value="add stock" onClick={SubmitHandler}></input>

</form>
{
  stock_list.map((i)=>{
    return(
      <div key={i}>
        <Button >{i}</Button>
        </div>
    )
  })
}
    </div>
  )
}


export default Stocks