import React, {Component, Fragment} from 'react'
import './App.css';
import Spotify_list from "./spotify_list"

class App extends Component{
  constructor()
  {
    super()
    // this.state={
    //   count:0
    // }
    // this.handleClick=this.handleClick.bind(this)
  }
  
  // handleClick() {
  //   this.setState(prevState=>{
  //     return{
  //       count:prevState.count+1
  //     }
      
  //   })
  // }

  render() {
    return (
      <div className="App">
        <Spotify_list/>
        
        
      </div>
    );

  }
}

export default App;
