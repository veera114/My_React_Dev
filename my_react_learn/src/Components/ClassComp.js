import React, { Component } from 'react'

class ClassComp extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      userName: 'Veera'
   }
 }
  render() {
    return (
      <div>
        <h1>{this.state.userName}</h1>
        <button onClick={()=>{this.setState({userName:'babu'})}}>Click tO Change</button>
      </div>
    )
  }
}

export default ClassComp