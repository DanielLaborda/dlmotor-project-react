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

    submit(values) {
        // print the form values to the console
        console.log(values);
    }

    render() {
        const { userLogged } = this.props;
        console.log(userLogged);
        return (
            <div className={`configuration`}>
                <ConfigurationForm userLogged={userLogged} key={this.state.vehicle.vehicles_name} className='configuration__form' {...this.state.vehicle} onSubmit={this.submit}/> 
            </div>
        );
    }
}

export default Configuration;