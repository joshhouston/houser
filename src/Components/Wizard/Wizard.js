import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

class Wizard extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.postHouses = this.postHouses.bind(this)
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value})
       
    }

    postHouses() {
        return (
            axios
                .post('/api/product', {
                    name: this.state.name,
                    address: this.state.address,
                    city: this.state.city,
                    state: this.state.state,
                    zipcode: this.state.zipcode

                })
                .then(() => {
                    <Link to='/'></Link>
                })
        )
    }

    render(){
        return (
            <form
                onSubmit={e => {e.preventDefault();
                    
                }}
            >
                <input name='name' onChange={this.handleChange}/>
                <input name='address' onChange={this.handleChange}/>
                <input name='city' onChange={this.handleChange}/>
                <input name='state' onChange={this.handleChange}/>
                <input name='zipcode' onChange={this.handleChange}/>
                <button>Submit</button>
                <Link to='/'>
                    <button>Cancel</button>
                </Link>
            </form>
            
        )
    }
}

export default Wizard