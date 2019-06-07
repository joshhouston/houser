import React, {Component} from 'react';

class House extends Component {
    render(){
        return (
            <div>
                <h3>Name: {this.props.name}</h3>
                <h3>Address: {this.props.address}</h3>
                <h3>City: {this.props.city}</h3>
                <h3>State: {this.props.state}</h3>
                <h3>Zipcode: {this.props.zipcode}</h3>
            </div>
        )
    }
}

export default House