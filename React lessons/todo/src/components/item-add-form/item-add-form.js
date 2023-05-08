import React, {Component} from "react";

import "./item-add-form.css"

export default class ItemAddForm extends Component {
    state = {
        label:''
    };
    onLabelChange = (e)=>{
        // console.log(e.target.value)
        this.setState({
            label: e.target.value
        })
    };

    onSubmit =(e)=>{
        e.preventDefault();
        this.props.onAdded(this.state.label);
        this.setState({
            label: ''
        });
    }
    render() {
        return (
            <form className="item-add-form d-flex"
            onSubmit={this.onSubmit}>
                <input type="text"
                className="form-control"
                onChange={this.onLabelChange}
                value={this.state.label}/>
                <button className="btn btn-outline-secondary"
                        // onClick={()=>onAdded("Hello")}
                >
                    Add item
                </button>
            </form>
        )

    }
}