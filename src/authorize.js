import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default function (AccessComponents, inheritedProps) {
  class Authentication extends Component {
    static contextTypes = {
      router: PropTypes.object
    }
    componentDidMount () {
      if(!localStorage.getItem('jwt')){
        this.context.router.history.push('/')
      }
    }
    componentWillUpstate() {
      if(!localStorage.getItem('jwt')){
        this.context.router.history.push('/')
      }
    }
    render(){
      return (
        <AccessComponents {...this.props} />
      )
    }
  }

  return Authentication
}


// <Beef message={something}


//
// function buildAComponent(component, props, tag) {
//   class Builder extend Component {
//     render() {
//       return <tag><component {...this.props} /></tag>
//     }
//   }
//
//   return Builder
// }
//
//
// // in App.js
//
// const App = () => { return <p></p> }
// export default connect({}, {})



// buildAComponent(<Beef/>, {message}, <h1>) // the return here is a new version of beef incased in h1 tags
// buildAComponent(<App/>, {}, <p>) // the return here is a new version of App incased in p tags
// authorize(<App/>, {}) // the return here is a new version of App that now has auth powers
//
//
//
//
// class Beef extends Component {
//   render() {
//     return (<p>Hello {this.props.message}</p>)
//   }
// }
