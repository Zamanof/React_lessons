import React, {Component} from 'react';

class LifeCycleMethods extends Component {
    constructor() {
        super();
        this.state = {hakuna:42}
        console.log("Constructor")
    }
    componentDidUpdate() {
        console.log("componentDidUpdate")

    }
    componentDidMount() {
        console.log("componentDidMount")
        this.setState({hakuna: 15})
    }
    shouldComponentUpdate() {
        console.log("shouldComponentUpdate")
        return false
    }

    render() {
        console.log("render")
        return (
            <div>
                Hello
            </div>
        );
    }
}

export default LifeCycleMethods;


