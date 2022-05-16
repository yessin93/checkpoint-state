import React, { Component } from 'react'

export default class App extends Component {

  state ={
   counter : 0,
   isVisible :true,
   fullName : "yessin ",
   bio : "web developer",
   profession :"digital marketer",
   imgUrl: 'https://w10.naukri.com/mailers/2021/naukri-learning/oct/27oct-v2/What-is-Web-Developer.jpg'
  }
  componentDidMount(){
  setInterval(() => {this.increment();},1000);
 
  
  }
  increment =()=>this.setState({counter:this.state.counter +1 });
  decrement =()=>this.setState({counter:this.state.counter -1 });
  handleshow=()=>this.setState({isVisible: !this.state.isVisible});
  render() {
    return (
      <div>
        <button onClick={this.handleshow}> {this.state.isVisible ? 'hide':'show'} </button>
        {   
          this.state.isVisible &&
        <div>
        <h1> counter :{this.state.counter} </h1>
        <button onClick={this.increment} >+</button>
        <button onClick={this.decrement} >-</button>
        <h1>my name is :{this.state.fullName} </h1>
        <h2>i'm going to become a  {this.state.bio} </h2>
        <h3>i'm a {this.state.profession} </h3>
        <img src={this.state.imgUrl} alt='my photo'></img>
        </div>
        }
      </div>
    )
  }
}
