import React from 'react'
import {Link} from 'react-router-dom'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts'

const StockShow = (props) =>
{
    function data(p){
      const finObj = p["Time Series (Daily)"]
      //StackOverflow - getting first N items from an object
      function fiveDays(obj, n) { //helper function to get the past 5 days
        return Object.keys(obj) //get the keys out
          .sort() //this will ensure consistent ordering of what you will get back.
          .slice(-n) //get the last N items, for us it will be last 5 days
          .reduce(function(memo, current) { //generate a new object out of them
            memo[current] = obj[current]
            return memo;
          }, {})
      }

      console.log( "IMPORTANT",fiveDays(finObj, 5) );

      const rows = []
      for (var key in fiveDays(finObj, 5)){ //creates an array of objects which Recharts asks for
      if (fiveDays(finObj, 5).hasOwnProperty(key)){
        let finData = fiveDays(finObj, 5)[key]
        let open = parseFloat(finData['1. open'])
        let close = parseFloat(finData['4. close'])
        let volume = parseFloat(finData['5. volume'])
        console.log('v',volume);
        rows.push({
          date: key,
          price: open,
          close,
          volume
        })
      }
    }
    return rows

    }

    console.log('props',props.stock);


    return(
      props.stock ?
      <div className="ui grid container">

      <div className="column">
      <h1 className="showName">{props.stock["Meta Data"]["2. Symbol"]}</h1>
      <div className="datastyle">
      <h2>Open: {props.stock["Time Series (Daily)"][props.stock["Meta Data"]["3. Last Refreshed"].split(" ")[0]]["1. open"]} </h2>
      <h2>
        Close: {props.stock["Time Series (Daily)"][props.stock["Meta Data"]["3. Last Refreshed"].split(" ")[0]]["4. close"]}
      </h2>
      <h2>
          Volume: {props.stock["Time Series (Daily)"][props.stock["Meta Data"]["3. Last Refreshed"].split(" ")[0]]["5. volume"]}
      </h2>
      <h2>Last 5 Days</h2>
      </div>
      <div className="center-chart">
      <ResponsiveContainer width='100%' aspect={4.0/3.0}>
      <LineChart width={600} height={300} data={data(props.stock)}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
           <XAxis dataKey="date"/>
           <YAxis/>
           <CartesianGrid strokeDasharray="3 3"/>
           <Tooltip/>
           <Legend />
           <Line type="monotone" dataKey="price" stroke="#ff0000" dot={false} />

      </LineChart>
      </ResponsiveContainer>

      </div>
      <div className="center-chart">
      <ResponsiveContainer width='100%' aspect={4.0/3.0}>
      <LineChart width={600} height={300} data={data(props.stock)}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
           <XAxis dataKey="date"/>
           <YAxis/>
           <CartesianGrid strokeDasharray="3 3"/>
           <Tooltip/>
           <Legend />
           <Line type="monotone" dataKey="volume" stroke="#ff0000" dot={false} />

      </LineChart>
      </ResponsiveContainer>

      </div>
      <div className="center-button">
      <Link class="huge ui secondary button" to='/'>Back</Link>
      </div>
      </div>
      </div>
    : <div className="container4"><p>Loading...</p></div>

    )




}

export default StockShow
