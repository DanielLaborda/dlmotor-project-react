import React, { Component } from "react";
import {Redirect} from 'react-router';

class CarsCategories extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
            redirect: false
        }
        this.redirectVehicle = this.redirectVehicle.bind(this);
    }
    
    redirectVehicle() {
        this.setState({
            redirect: true
        });
    }
    render(){
        const { className, vehicles_name, vehicles_id, vehicles_image_category} = this.props;
        if (this.state.redirect) {
            return <Redirect to={`/vehicles/${vehicles_id}`}/>;
        }
        
        return (
                <a className={`${className}__card`} onClick={this.redirectVehicle}>
                    <div className={`${className}__card__image`}>
                        <img  src={`data:image/jpg;base64,${vehicles_image_category}`} />
                    </div>
                    <div className={`${className}__card__title`}>
                        {vehicles_name}
                    </div>
                </a>
        );
    }
}

export default CarsCategories;