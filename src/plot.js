import React from 'react'
import Plot from 'react-plotly.js'
const PlotData = () => {
  return (
    <div>
    <Plot
        data={[
          {
            x: [1,2,3],
            y: [4,5,6],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
          {type: 'bar', x: [1,2,3], y: [4,5,6]},
        ]}
        layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
      />
    </div>
  )
}

export default PlotData