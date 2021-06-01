import React, { Component } from "react";
import axios from 'axios';

import GarageMap from "../garage/garageMap";
import GarageInfo from "../garage/garageInfo";

class Garage extends Component{
    constructor() {
        super();

        this.state = {
            position: '',
            garage: ''
        }
    }
    componentDidMount() {
        axios.get("http://127.0.0.1:5000/garage/1"
        ).then(response =>{
           this.setState({
                position: response.data.garage_position,
                garage: response.data
            });
        })
    }
    render(){
        return (
            <div className='garage'>
                <div className='garage__content'>
                    <GarageMap className='garage__content__map'  position={this.state.position}/>
                    <GarageInfo className='garage__content__info' {...this.state.garage}/>
                </div>
            </div>
        );
    }
}

export default Garage;