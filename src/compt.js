import React from "react";


class Compteur extends React.Component {
    constructor() {
        super();

        this.state = {
            count: 0
        }
        console.log("constructor");
    }
    Increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    Decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }
   
    
    componentDidMount() {
        const interval = setInterval(() => {
            this.setState({ count: this.state.count + 1 })
        }, 100)
        
        console.log("componentDidMount",interval);
    }
    componentDidUpdate() {
        console.log("componentDidUpdate")
    }
    componentWillUnmount() {
        if (this.state.count < 1000) {
            clearInterval(this.interval);
        }
    }
    render() {
        return (
            <div>
                
                COUNT:  {this.state.count}
                
            </div>
        )
    }
}

export default Compteur;