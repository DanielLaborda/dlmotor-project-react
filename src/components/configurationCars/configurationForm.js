import React, { Component } from "react";
import Swal from 'sweetalert2';
import axios from 'axios';

import ConfigurationColors from "./configurationColors";
import { ConfigurationInterior } from "./configurationInterior";
import { ConfigurationTitleSection } from "./configurationTitleSection";
import ConfigurationVersions from "./configurationVersions";
import {ConfigRims} from './configRims';


class ConfigurationForm extends Component{
    constructor() {
        super();

        this.state = {
            userLogged: '',
            vehicle: '',
            version:'',
            imagenColor: '',
            colors: '',
            interior: '',
            rims: ''
        };

        this.handleOptionVersion = this.handleOptionVersion.bind(this);
        this.handleOptionColor = this.handleOptionColor.bind(this);
        this.handleOptionInterior = this.handleOptionInterior.bind(this);
        this.handleOptionRims = this.handleOptionRims.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
   
    componentDidMount() {
        (this.props.vehicles_colors)?
            this.setState({imagenColor: this.props.vehicles_colors[0].colors_image})
        :'';
        (this.props.vehicles_name)?
            this.setState({vehicle: this.props.vehicles_name})
        :'';

        (this.props.userLogged)?
            this.setState({userLogged: this.props.userLogged})
        :'';
    }
    
    handleOptionVersion(e) {
        this.setState({
            version: this.props.vehicles_version[e.target.value]
        });
    }
    handleOptionColor(e) {
        this.setState({
            colors: this.props.vehicles_colors[e.target.value],
            imagenColor: this.props.vehicles_colors[e.target.value].colors_image
        });
    }
    handleOptionInterior(e) {
        this.setState({
            interior: this.props.vehicles_interiors[e.target.value]
        });
    }
    handleOptionRims(e) {
        this.setState({
            rims: this.props.vehicles_rims[e.target.value]
        });
    }
    
    handleSubmit(e) {
        let total = 0;
        if(this.state.version !='' && this.state.colors !='' && this.state.interior !='' && this.state.rims !='' ){
            total = this.state.version.versionsvehicles_baseprice + this.state.colors.colors_price + this.state.interior.interior_basePrice + this.state.rims.rims_baseprice;
            if(Object.keys(this.state.userLogged).length == 0){
                Swal.fire({
                    title: 'Just a little more!',
                    icon: 'question',
                    html: `<h4>We need your information to communicate with you</h4>
                        <div className="modal-input">       
                                <input type="name" id="name" class="swal2-input" placeholder="Name">
                                <label>Contact Name</label>
                        </div>
                        <div className="modal-input">    
                                <input type="email" id="email" class="swal2-input" placeholder="Email">
                                <label>Email</label>
                        </div>
                        <h2 className="title-vehicle">${this.state.vehicle}</h2>
                        <table>
                            <tr>
                            <th>Version</th>
                            <th>${this.state.version.versionsvehicles_name}</th>
                            <th><h3>$ ${this.state.version.versionsvehicles_baseprice}</h3></th>
                            </tr>
                            <tr>
                            <th>Colors</th>
                            <th>${this.state.colors.colors_name}</th>
                            <th><h3>$ ${this.state.colors.colors_price}</h3></th>
                            </tr>
                            <tr>
                            <th>Interior</th>
                            <th>${this.state.interior.interior_name}</th>
                            <th><h3>$ ${this.state.interior.interior_basePrice}</h3></th>
                            </tr>
                            <tr>
                            <th>Rims</th>
                            <th>${this.state.rims.rims_model}</th>
                            <th><h3>$ ${this.state.rims.rims_baseprice}</h3></th>
                            </tr>
                            <hr/>
                            <tr>
                            <th><h3>Total</h3></th>
                            <th></th>
                            <th><h3>$ ${total}</h3></th>
                            </tr>
                        </table>
                        `,
                confirmButtonText: 'Cool',
                preConfirm: () => {
                    const nameCustomer = Swal.getPopup().querySelector('#name').value
                    const emailCustomer = Swal.getPopup().querySelector('#email').value
                    if (!nameCustomer || !emailCustomer) {
                      Swal.showValidationMessage(`We need to contact you :(`);
                    }
                    return { nameCustomer: nameCustomer, emailCustomer: emailCustomer };
                  }
                }).then((result) => {
                    const data = {
                        "quotes_customer": result.value.nameCustomer,
                        "quotes_email": result.value.emailCustomer,
                        "quotes_modelvehicle": this.state.vehicle,
                        "quotes_version": this.state.version.versionsVehicles_id,
                        "quotes_versionprice": this.state.version.versionsvehicles_baseprice,
                        "quotes_color": this.state.colors.colors_id,
                        "quotes_colorprice": this.state.colors.colors_id,
                        "quotes_interior": this.state.interior.interior_id,
                        "quotes_interiorprice": this.state.interior.interior_basePrice,
                        "quotes_rims": this.state.rims.rims_id,
                        "quotes_rimsprice": this.state.rims.rims_baseprice,
                        "quotes_discount": "",
                        "quotes_discountprice": 0,
                        "quotes_total": total,
                        "quotes_status": 1
                    };
                    if (result.isConfirmed) {
                        axios.post("http://127.0.0.1:5000/quotes",data,
                            {
                                headers: {
                                "Access-Control-Allow-Headers" : "Content-Type",
                                "Access-Control-Allow-Origin": "*",
                                "Access-Control-Allow-Methods": "PUT,POST,GET"
                                },
                            }
                            ).then(response => {
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Great! ',
                                    text: 'we will contact you as soon as possible!'
                                });
                            })
                            .catch(error => {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Oops! ',
                                    text: 'we will contact you as soon as possible!'
                                });
                            });
                    }
                });

            } else {
                Swal.fire({
                    title: 'Just a little more!',
                    icon: 'question',
                    html: `<h4>We will communicate with you as soon as possible</h4>
                           <h2 className="title-vehicle">${this.state.vehicle}</h2>
                           <table>
                            <tr>
                              <th>Version</th>
                              <th>${this.state.version.versionsvehicles_name}</th>
                              <th><h3>$ ${this.state.version.versionsvehicles_baseprice}</h3></th>
                            </tr>
                            <tr>
                              <th>Colors</th>
                              <th>${this.state.colors.colors_name}</th>
                              <th><h3>$ ${this.state.colors.colors_price}</h3></th>
                            </tr>
                            <tr>
                              <th>Interior</th>
                              <th>${this.state.interior.interior_name}</th>
                              <th><h3>$ ${this.state.interior.interior_basePrice}</h3></th>
                            </tr>
                            <tr>
                              <th>Rims</th>
                              <th>${this.state.rims.rims_model}</th>
                              <th><h3>$ ${this.state.rims.rims_baseprice}</h3></th>
                            </tr>
                            <hr/>
                            <tr>
                              <th><h3>Total</h3></th>
                              <th></th>
                              <th><h3>$ ${total}</h3></th>
                            </tr>
                           </table>
                           `,
                    confirmButtonText: 'Cool',
                    }).then((result) => {
                        const data = {
                            "quotes_customer": `${this.state.userLogged.user_name} ${this.state.userLogged.user_surname}`,
                            "quotes_email": this.state.userLogged.user_email,
                            "quotes_modelvehicle": this.state.vehicle,
                            "quotes_version": this.state.version.versionsVehicles_id,
                            "quotes_versionprice": this.state.version.versionsvehicles_baseprice,
                            "quotes_color": this.state.colors.colors_id,
                            "quotes_colorprice": this.state.colors.colors_id,
                            "quotes_interior": this.state.interior.interior_id,
                            "quotes_interiorprice": this.state.interior.interior_basePrice,
                            "quotes_rims": this.state.rims.rims_id,
                            "quotes_rimsprice": this.state.rims.rims_baseprice,
                            "quotes_discount": "",
                            "quotes_discountprice": 0,
                            "quotes_total": total,
                            "quotes_status": 1
                        };
                        if (result.isConfirmed) {
                            axios.post("http://127.0.0.1:5000/quotes",data,
                            {
                                headers: {
                                "Access-Control-Allow-Headers" : "Content-Type",
                                "Access-Control-Allow-Origin": "*",
                                "Access-Control-Allow-Methods": "PUT,POST,GET"
                                },
                            }
                            ).then(response => {
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Great! ',
                                    text: 'we will contact you as soon as possible!'
                                });
                            })
                            .catch(error => {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Oops! ',
                                    text: 'we will contact you as soon as possible!'
                                });
                            });
                        }
                    });
            }
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Some option not selected!',
                text: 'we will contact you as soon as possible!',
                confirmButtonText: 'Select it! :D'
            });
        }
        
        e.preventDefault();
    }
    render(){
        const { className, vehicles_name, vehicles_colors, vehicles_version, vehicles_interiors, vehicles_rims, userLogged } = this.props;
        return (
            <form onSubmit={this.handleSubmit} className={`${className}`}>

                <div className className={`${className}__name`}>
                    {vehicles_name}
                </div>

                <ConfigurationTitleSection className={`${className}__sectionTitle__version sectionTitle`} title='Versions'/>
                <div className={`${className}__versions`}>
                    {
                        (vehicles_version)?
                            vehicles_version.map((version, index) => {
                                return (
                                    <label key={`version${version.versionsVehicles_id}`} className={`${className}__versions__label`}>
                                        <input
                                            type="radio"
                                            name="vesion"
                                            value={index}
                                            onChange={this.handleOptionVersion}
                                            />
                                        <ConfigurationVersions key={version.versionsVehicles_id} className={`${className}__versions__card`} {...version}/>
                                    </label>
                                )
                            })
                        :''
                    }
                </div>

                <ConfigurationTitleSection className={`${className}__sectionTitle__colors sectionTitle`} title='Colors'/>

                <div className={`${className}__imagen`}>
                    {(this.state.imagenColor)? <img src={`data:image/png;base64,${this.state.imagenColor}`} className={`${className}__imagen__img`}/> : ''}
                </div>

                <div className={`${className}__colors`}>
                    {
                        (vehicles_colors)?
                            vehicles_colors.map((color, index) => {
                                return (
                                    <label key={`color${index}`}>
                                        <input
                                         type="radio"
                                         name="color"
                                         value={index}
                                         onChange={this.handleOptionColor}
                                         />
                                        <ConfigurationColors className={`${className}__colors__card`} {...color} />
                                    </label>
                                )
                            })
                        : ''
                    }
                </div>

                <ConfigurationTitleSection className={`${className}__sectionTitle__interior sectionTitle`} title='Interior'/>
                <div className={`${className}__interior`}>
                    {
                        (vehicles_interiors)?
                            vehicles_interiors.map((interior, index) => {
                                return (

                                    <label key={`interior${index}`}>
                                        <input
                                         type="radio"
                                         name="interior"
                                         value={index}
                                         onChange={this.handleOptionInterior}
                                         />
                                        <ConfigurationInterior className={`${className}__interior__card`} {...interior}/>
                                    </label>
                                    
                                )
                            })
                        : ''
                    }
                </div> 

                <ConfigurationTitleSection className={`${className}__sectionTitle__rims sectionTitle`} title='Rims'/>
                <div className={`${className}__rims`}>
                    {
                        (vehicles_rims)?
                            vehicles_rims.map((rim, index) => {
                                return (
                                    <label key={`rims${index}`}>
                                        <input
                                         type="radio"
                                         name="rims"
                                         value={index}
                                         onChange={this.handleOptionRims}
                                         />
                                        <ConfigRims className={`${className}__rims__card`} {...rim} />
                                    </label>        
                                )
                            })
                        :''
                    }
                </div> 

                <div className={`${className}__submit-wrapper`}>
                    <button className={`${className}__submit`} type="submit">Get a quote</button>
                </div>

            </form>
        );
    }
}

export default ConfigurationForm;