import React, { Component } from 'react'
import ChildComponet from './ChildComponet'


class ParentComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       parentName: "Parent"
    }
  }
  

  greetParent = () => {
    alert(`Hello ${this.state.parentName}`)
  }
  render() {
    return (
      <div>
        <ChildComponet/>
      </div>
    )
  }
}

export default ParentComponent
