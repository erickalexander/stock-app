import React from 'react'
import {Link} from 'react-router-dom'

const StockList = (props) =>
{
  console.log('props',props);

  return(
    <div>
    {
      props.stocks ? props.stocks.map(st =>{
        console.log('st',st);
        let symbol = st["Meta Data"]["2. Symbol"]
        // fixed currentDate bug, the API changes after market closes "3. Last Refreshed" only shows the date, but when market is open it shows both date and time, did the follwoing to fix it...
        let currentDate = st["Meta Data"]["3. Last Refreshed"].split(" ")[0]
        let lastPrice = st["Time Series (Daily)"]
        let openPrice = lastPrice[currentDate]["1. open"]
        let closePrice = lastPrice[currentDate]["4. close"]
        let volume = lastPrice[currentDate]["5. volume"]
        // ----- debugging ------------------
        console.log('ccc',);
        console.log('jjj', symbol);
        console.log('currentd',currentDate);
        //-----------------------------------
        return (
          <div>
          <h1>Stock Market App</h1>
          <h1>{symbol}</h1>
          <h2>Current Day: {currentDate}</h2>
          <h2>Open: {openPrice}</h2>
          <h2>Close: {closePrice}</h2>
          <h2>Volume: {volume}</h2>
          <Link to={`/stock/${st["Meta Data"]["2. Symbol"]}`}>More Info</Link>
          </div>
        )
      }):null
    }

    </div>
  )
}

export default StockList


// allStocks ? allStocks.map(st =>{
//   console.log('st',st);
//   let obj = st["Meta Data"]
//   for(var key in obj){
//     if (key == "2. Symbol"){
//       console.log("NAME",obj[key]);
//       return (<h1>{obj[key]}</h1>)
//     }
//   }
// }):null
