import React, { Component } from 'react';
import Adapter from '../api/Adapter'
import StockList from './StockList'
import StockShow from './StockShow'
import { Route } from 'react-router-dom'
export default class StockContainer extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      stocks:[],
    }
  }

 // This is the place where we load the data we get from an API, to be used throughout components by setting state
  componentDidMount(){
    Adapter.getStocks().then(res =>{
      console.log('API Response',res);
      this.setState({
        stocks: res
      })
    })

  }



    render(){
      console.log("REDERING.........",this.state.stocks);



      return(
        <div>
        <Route exact path="/stock/:id" render = { ({match})=> {
          console.log('stock symbol',match.params.id);
          const stock = this.state.stocks.find(
                st => st["Meta Data"]["2. Symbol"] === match.params.id
              );
          console.log('stock',stock);
          return <StockShow stock={stock} />}} />

        <Route exact path="/" render={routerProps => {return <StockList history={routerProps.history} stocks={this.state.stocks} />}} />

        </div>
      )
    }
}

// code to make request every 3 seconds, will se live updates:
// ------------------------------------------------------------
// async componentDidMount() {
//          try {
//            setInterval(async () => {
//              Adapter.getStocks().then(res =>{
//                console.log('cool',res);
//                this.setState({
//                  stocks: res
//                })
//              })
//            }, 3000);
//          } catch(e) {
//            console.log('eeeee',e);
//          }
//    }
// ------------------------------------------------------------
