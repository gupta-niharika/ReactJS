import React, { Component } from 'react'

class Welcome extends Component {
    render () {
    return <h3> Welcome { this.props.name} aka {this.props.heroname}</h3>
    }
}

export default Welcome