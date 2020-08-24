import React, {Component} from 'react'

class Message extends Component {
    constructor () {
        super() // reqd coz we extend react's component class
        this.state = {  //this keyword is used cuz we are inside of a class
            message : "Welcome visitor"
        }
    }
    changeMessage() {
        this.setState({
            message: "Thanks!"
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick ={() => this.changeMessage() }>Subscribe</button>
            </div>
        );
    }
}

export default Message