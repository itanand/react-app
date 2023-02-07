import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComponent from './RegComponent'

class ParentComp extends Component {

    constructor(props){
        super(props)

            this.state= {
                name:'Vishvas'
            }
    }

    componentDidMount(){
       setInterval(() => {
        this.setState({
            name: 'Anand'
        })
       }, 2000)
    }

  render() {
    console.log('**************Parent Comp render ******************');
    return (
        <>
         <RegComponent name={this.state.name} />
         <PureComp name={this.state.name} />
        </>
    )
  }
}

export default ParentComp