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
                .post('/api/house', {
                    name: this.state.name,
                    address: this.state.address,
                    city: this.state.city,
                    state: this.state.state,
                    zipcode: this.state.zipcode

                })
                
        )
    }

    render(){
        return (
            <form
                onSubmit={e => {e.preventDefault()}}
            >
                <input name='name' onChange={(e) => this.handleChange(e)}/>
                <input name='address' onChange={(e) => this.handleChange(e)}/>
                <input name='city' onChange={(e) => this.handleChange(e)}/>
                <input name='state' onChange={(e) => this.handleChange(e)}/>
                <input name='zipcode' onChange={(e) => this.handleChange(e)}/>
                <Link to='/'>
                    <button onClick={this.postHouses}>Submit</button>
                </Link>
                <Link to='/'>
                    <button>Cancel</button>
                </Link>
            </form>
            
        )
    }
}

export default Wizard