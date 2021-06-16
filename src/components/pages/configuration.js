import React, { Component } from 'react';
import axios from 'axios';

import ConfigurationForm from '../configurationCars/configurationForm';

class Configuration extends Component {
    constructor() {
        super();

        this.state = {
            vehicle: []
        }
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`http://127.0.0.1:5000/vehiclesbyid/${id}`
        ).then(response=> {
            this.setState({
                vehicle:response.data
            });        
        });        
    }

    render() {
        const { userLogged } = this.props;
        return (
            <div className={`configuration`}>
                <ConfigurationForm userLogged={userLogged} key={this.state.vehicle.vehicles_name} className='configuration__form' {...this.state.vehicle} /> 
            </div>
        );
    }
}

export default Configuration;