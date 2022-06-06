import React from 'react'
import Plot from 'react-plotly.js'
const PlotData = (props) => {

  console.log(props.price)
  return (
    <div>
      <Plot
        data={[
          {
            x: props.date,
            y: props.price,
            type: 'scatter',
            mode: 'lines+markers',
            marker: { color: 'red' },
          },
          
        ]}
        layout={{ width: 1330, height: 500, title: props.title }}
      />
    </div>
  )
}

export default PlotData