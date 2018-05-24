import React from 'react'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'

const StockShow = (props) =>
{

    console.log('props111',props.stock);
    const finObj = props.stock["Time Series (Daily)"]
    const rows = []
    for (var key in finObj){
    if (finObj.hasOwnProperty(key)){
      let finData = finObj[key]
      let open = parseFloat(finData['1. open'])
      let close = parseFloat(finData['4. close'])
      let volume = parseFloat(finData['5. volume'])
      console.log('v',volume);
      rows.push({
        date: key,
        open,
        close,
        volume
      })
    }
  }
  console.log('rowwwwww',rows);

    return(
      props.stock ?
      <div>
      <h1>Indivdual Stock Show</h1>
      <h1>{props.stock["Meta Data"]["2. Symbol"]} - Price</h1>
        <LineChart width={600} height={300} data={rows.reverse()}
                  margin={{top: 5, right: 30, left: 20, bottom: 5}}>
             <XAxis dataKey="date"/>
             <YAxis/>
             <CartesianGrid strokeDasharray="3 3"/>
             <Tooltip/>
             <Legend />
             <Line type="monotone" dataKey="close" stroke="#ff0000" dot={false} />

        </LineChart>

      </div> : <div>Loading...</div>

    )




}

export default StockShow
