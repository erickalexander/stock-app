import React from 'react'
import {Link} from 'react-router-dom'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts'

const StockShow = (props) =>
{
    function data(p){
      console.log('ppp',p);
      const finObj = p["Time Series (Daily)"]
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
    return rows

    }

    console.log('props111',props.stock);


    return(
      props.stock ?
      <div className="ui center grid container">

      <div className="column">
      <h1 className="showName">{props.stock["Meta Data"]["2. Symbol"]}</h1>
      <div className="App">
      <h2>Open: {props.stock["Time Series (Daily)"][props.stock["Meta Data"]["3. Last Refreshed"].split(" ")[0]]["1. open"]} </h2>
      <h2>
        Close: {props.stock["Time Series (Daily)"][props.stock["Meta Data"]["3. Last Refreshed"].split(" ")[0]]["4. close"]}
      </h2>
      <h2>
          Volume: {props.stock["Time Series (Daily)"][props.stock["Meta Data"]["3. Last Refreshed"].split(" ")[0]]["5. volume"]}
      </h2>
      </div>
      <div className="center-chart">
      <ResponsiveContainer width='100%' aspect={4.0/3.0}>
      <LineChart width={600} height={300} data={data(props.stock).reverse()}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
           <XAxis dataKey="date"/>
           <YAxis/>
           <CartesianGrid strokeDasharray="3 3"/>
           <Tooltip/>
           <Legend />
           <Line type="monotone" dataKey="close" stroke="#ff0000" dot={false} />

      </LineChart>
      </ResponsiveContainer>

      </div>
      <div className="center-button">
      <Link class="huge ui secondary button" to='/'>Back</Link>
      </div>
      </div>
      </div>
    : <div>Loading...</div>

    )




}

export default StockShow


// componentWillReceiveProps(nextProps){
//       if(props == null){
//         console.log('props111',nextProps.stock);
//         const finObj = nextProps.stock["Time Series (Daily)"]
//         const rows = []
//         for (var key in finObj){
//         if (finObj.hasOwnProperty(key)){
//           let finData = finObj[key]
//           let open = parseFloat(finData['1. open'])
//           let close = parseFloat(finData['4. close'])
//           let volume = parseFloat(finData['5. volume'])
//           console.log('v',volume);
//           rows.push({
//             date: key,
//             open,
//             close,
//             volume
//           })
//         }
//       }
//       return(
//         <h1>Hii</h1>
//       )
//       }
//       else{
//         null
//       }
//
// }
