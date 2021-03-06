import React from 'react'
import {Link} from 'react-router-dom'

const StockList = (props) =>
{
  console.log('props',props);

  return(
    <div>
    <h1 className="App">Stock Market App</h1>

    <div className="ui center grid container">
    <div className="column">
    <div className="ui cards">
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
        console.log('sym', symbol);
        console.log('current date',currentDate);
        //-----------------------------------
        return (

            <div className="card">
            <div className="content">
                  <div className="header"><h1>{symbol}</h1></div>
                  <div className="description">
                    <h3>Current Day: {currentDate}</h3>
                    <h3>Open: {openPrice}</h3>
                    <h3>Close: {closePrice}</h3>
                    <h3>Volume: {volume}</h3>
                  </div>
            </div>
            <div className="ui bottom attached button">
                  <Link class="ui secondary button" to={`/stock/${st["Meta Data"]["2. Symbol"]}`}>More Info</Link>
            </div>


          </div>
        )
      }):null
    }
      </div>
    </div>
    </div>
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
