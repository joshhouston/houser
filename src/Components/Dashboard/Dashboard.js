import React, {Component} from 'react';
import House from '../House/House'
import {HashRouter, Link} from 'react-router-dom';
import axios from 'axios';

class Dashboard extends Component {
    constructor() {
        super();
        this.state ={
            houses: []
        }
        this.showHouses = this.showHouses.bind(this);
    }

    componentDidMount() {
        this.showHouses();
    }

    showHouses() {
        return (
            axios
                .get('/api/inventory')
                .then(res => {
                    this.setState({houses: res.data})
                })
                .catch(err => {
                    console.log(err)
                    this.setState({error: 'No good'})
                })
        )
    }
    render(){
        return (
            <div>
                {this.state.houses.map((house, index) => {
                    return (
                        <div key={index}>
                            <House 
                                name={house.name}
                                address={house.address}
                                city={house.city}
                                state={house.state}
                                zipcode={house.zipcode}
                            />
                            <button>Delete</button>
                        </div>
                    )
                })}
                <Link to='/wizard'>
                    <button>Add New Property</button>
                </Link>
            </div>
        )
    }
}

export default Dashboard