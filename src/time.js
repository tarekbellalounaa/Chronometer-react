  
import React, { Component } from "react";
import Timer from "./timer";

class Time extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeinitial: 0,
      start : false,
    
    };
    setInterval(() => this.state.start ?
        this.setState({
          timeinitial: this.state.timeinitial + 1000
        }): clearInterval(this.state.timeinitial), 1000); 
  }
  
  start = () => {
      this.setState({start : !this.state.start })
      
  }
  reset = () => {
      this.setState({
          timeinitial : 0,
          start : false
      })
  }

 

  render() {
    return ( <div>
    
    <p className="title">CHRONOMETER</p>
        <div className="chrono">
        <Timer ms={this.state.timeinitial} />
        <div className="button">
          <button type="button" className="btn btn-outline-dark"  onClick={this.start}>
           {!this.state.start?'Start':'Pause'} 
          </button>
          <button type="button" className="btn btn-outline-dark" onClick={this.reset}>
            Reset
          </button>
        </div>
    </div>
    </div>
    );
  }
}

export default Time;
