import React, { Component } from "react";
import axios from 'axios';
import ImagesVehicles from "../vehicles/imagesVehicles";

// import ImagesVehicles from "../vehicles/imagesVehicles";

// import history from '../../history';


class Vehicles extends Component{
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
            })
            
        });
    }
    render(){
        let alter = true;
        return (
            <div className='vehicles'>
                
                    <div key={this.state.vehicle.vehicles_id} className='vehicles-wrapper'>
                        <div className='vehicles__banner'
                            style={{
                                backgroundImage: (this.state.vehicle.vehicles_banner)?`url(data:image/jpg;base64,${this.state.vehicle.vehicles_banner})`:'',
                                backgroundSize: "cover",
                                backgroundPosition: "center"
                            }}>

                            <div className='vehicles__banner__title'>
                                {this.state.vehicle.vehicles_name}
                            </div>

                            <div className='vehicles__banner__slogan'>
                                {this.state.vehicle.vehicles_slogan}
                            </div>
                        </div>

                        <div className='vehicles__description'>
                            <div className='vehicles__description__text'>{this.state.vehicle.vehicles_description}</div>
                            <div className='vehicles__description__warranty'>Warranty {this.state.vehicle.vehicles_warranty}</div>
                        </div>

                        <div className='vehicles__images'>
                                {
                                    (this.state.vehicle.vehicles_images)?
                                        this.state.vehicle.vehicles_images.map((image, index) => {
                                            if ((index+1)%3==0){
                                                    if (alter == true) {
                                                        alter = false;
                                                    } else {
                                                        alter = true;
                                                    }
                                                }
                                                if (alter == true) {
                                                    return <ImagesVehicles key={image.vehicleimage_id} className={(index%2==1) ? 'vehicles__images__item-8': 'vehicles__images__item-4'} {...image} />
                                                } else {
                                                    return <ImagesVehicles key={image.vehicleimage_id} id={index} className={(index%2==0) ? 'vehicles__images__item-8': 'vehicles__images__item-4'} {...image} />
                                                }
                                        })
                                    :''
                                }
                        </div>

                        <div className='vehicles__configuration'>
                            <a onClick={() => <Redirect to={`/vehicles/${vehicles_id}`}/>} className={'vehicles__configuration__btn'}>Configuration</a>
                        </div>    
                        {/* history.push('/configuration/'+vehicle._id) */}
                    </div>

    
                
            </div>
        );
    }
}
export default Vehicles;
