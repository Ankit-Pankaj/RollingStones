import React, {Component, Fragment} from 'react'
import './App.css';
import Data from "./data.json"

class Spotify_list extends Component{
    constructor()
    {
      super()
      this.state={
        count:0
      }
      this.handleClick=this.handleClick.bind(this)
    }
    
    handleClick() {
      this.setState(prevState=>{
        return{
          count:prevState.count+1
        }
        
      })
    }
    
    render() {
        var i=this.state.count;
        return (
            <div class="test_css">
                 <h1 style={{color:"#222831"}}>The Rolling Stones</h1>
                <img src={Data.items[i].images[1].url}></img>
                <br/>
                <h2 style={{color:"#393e46"}}>{Data.items[i].name}</h2>
                <br/>
                <h5 class="date">Released On {Data.items[i].release_date}</h5>
                <button onClick={this.handleClick}>Next</button>
            </div>
          );
}
}


export default Spotify_list;
