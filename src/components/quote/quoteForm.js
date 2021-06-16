import React, { Component } from "react";
import axios from 'axios';


class QuotesForm extends Component{
    constructor(props) {
        super(props);

        this.state = {
           status: "",
           errorColor: "",
           errorMessage: "",
           vehicles: '',
           versions: '',
           versionsVehicle: '',
           colors: '',
           colorsVehicle: '',
           interiors: '',
           interiorsVehicle: '',
           rims: '',
           rimsVehicle: '',
           formQuoteId: '',
           formStatus: '',
           formCustomer: '',
           formEmail: '',
           formVehicleid: '',
           formModelVehicle: '',
           formVersionsId: '',
           formVersionPrice: '',
           formColorId: '',
           formColorPrice: '',
           formInteriorId: '',
           formInteriorPrice: '',
           formRimsId: '',
           formRimsPrice: '',
           formDiscount: '',
           formDiscountPrice: '',
           formTotal: ''

        };
        this.onSubmit = this.onSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleOptionStatus = this.handleOptionStatus.bind(this);
        this.handleChangeCustomer = this.handleChangeCustomer.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleOptionModel = this.handleOptionModel.bind(this);
        this.handleOptionVersion = this.handleOptionVersion.bind(this);
        this.handleOptionColor = this.handleOptionColor.bind(this);
        this.handleOptionInterior = this.handleOptionInterior.bind(this);
        this.handleOptionRims = this.handleOptionRims.bind(this);
        this.handleChangeConceptDiscount = this.handleChangeConceptDiscount.bind(this);
        this.handleChangeDiscountPrice = this.handleChangeDiscountPrice.bind(this);
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:5000/vehicles"
        ).then(response =>{
            this.setState({
                vehicles: response.data
            });
        });   
        axios.get("http://127.0.0.1:5000/versions"
        ).then(response =>{
            let versionsX = []
            response.data.map(version => {
                (version.versionsvehicles_vehicleid == this.props.quotes_vehicleid)?
                    versionsX.push(version)
                :''
            });
            this.setState({
                versions: response.data,
                versionsVehicle: versionsX
            });
        });   
        axios.get("http://127.0.0.1:5000/colors"
        ).then(response =>{
            let colorsX = []
            response.data.map(color => {
                (color.colorsvehicles_vehicleid == this.props.quotes_vehicleid)?
                    colorsX.push(color)
                :''
            });
            this.setState({
                colors: response.data,
                colorsVehicle: colorsX
            });
        });   
        axios.get("http://127.0.0.1:5000/interiors"
        ).then(response =>{
            let interiorsX = []
            response.data.map(interior => {
                (interior.interiorsvehicles_vehicleid == this.props.quotes_vehicleid)?
                    interiorsX.push(interior)
                :''
            });
            this.setState({
                interiors: response.data,
                interiorsVehicle: interiorsX
            });
        });   
        axios.get("http://127.0.0.1:5000/rims"
        ).then(response =>{
            
            let rimsX = []
            response.data.map(rim => {
                (rim.rimsvehicles_vehicleid == this.props.quotes_vehicleid)?
                    rimsX.push(rim)
                :''
            });
            this.setState({
                rims: response.data,
                rimsVehicle: rimsX
            });
        });
        axios.get("http://127.0.0.1:5000/quotesStatus"
        ).then(response =>{
            this.setState({
                status: response.data
            });
        });
        
        
        this.setState({
            errorMessage: "",
            errorColor: "FF0000",
            formQuoteId: this.props.quotes_id, 
            formStatus: this.props.quotes_status,
            formCustomer: this.props.quotes_customer,
            formEmail: this.props.quotes_email,
            formVehicleid: this.props.quotes_vehicleid,
            formModelVehicle: this.props.quotes_modelvehicle,
            formVersionsId:  this.props.quotes_version,
            formVersionPrice: this.props.quotes_versionprice,
            formColorId: this.props.quotes_color,
            formColorPrice: this.props.quotes_colorprice,
            formInteriorId: this.props.quotes_interior,
            formInteriorPrice: this.props.quotes_interiorprice,
            formRimsId: this.props.quotes_rims,
            formRimsPrice: this.props.quotes_rimsprice,
            formDiscount: this.props.quotes_discount,
            formDiscountPrice: this.props.quotes_discountprice,
            formTotal: this.props.quotes_total
        });
    }
    componentDidUpdate() {
        if(this.state.formQuoteId){
            if(this.state.formQuoteId !== this.props.quotes_id) {
                this.componentDidMount()
            }
        }        
    }

    handleEdit() {
        if (this.props.userLogged.userType[0].usertype_name == 'Administrator') {
            var fields = document.forms["form_quote"].getElementsByTagName("input");
            for(var i = 0; i < fields.length; i++) {
                fields[i].disabled = false;
            }
            var selects = document.forms["form_quote"].getElementsByTagName("select");
            for(var i = 0; i < selects.length; i++) {
                selects[i].disabled = false;
            }
        } else {
            console.log(this.state.formStatus);
            if(this.state.formStatus== 1){
                document.getElementById("name").disabled=false; 
                document.getElementById("email").disabled=false; 
                document.getElementById("vehicle").disabled=false; 
                document.getElementById("versions").disabled=false; 
                document.getElementById("colors").disabled=false; 
                document.getElementById("interiors").disabled=false; 
                document.getElementById("rims").disabled=false; 

            } else {
                this.setState({
                    errorMessage:"You cannot modify a quote that is reviewed or completed."
                });
            }
        }
        document.getElementById('submitButton').disabled = false;
    }
    handleOptionStatus(e) {
        this.setState({
            formStatus: e.target.value
        });
    }
    handleChangeCustomer(e) {
        this.setState({
            formCustomer: e.target.value
        });
    }
    handleChangeEmail(e) {
        this.setState({
            formEmail: e.target.value
        });
    }
    handleOptionModel(e) {
        
        let vehiclesStates = this.state.vehicles;

        vehiclesStates.map(vehicle => {
            (vehicle.vehicles_id == e.target.value)?
                this.setState({formModelVehicle: vehicle.vehicles_name})
            : ''
        });

        let versionsVehicles = this.state.versions;
        let versions = [];

        versionsVehicles.map(versionlists => {
            if(versionlists.versionsvehicles_vehicleid == e.target.value){
                versions.push(versionlists);
            }
        });

        let ColorsVehicles = this.state.colors;
        let colors = [];

        ColorsVehicles.map(colorslists => {
            (colorslists.colorsvehicles_vehicleid == e.target.value)?
                colors.push(colorslists)
            : ''
        });

        let interiorsVehicles = this.state.interiors;
        let interiors = [];

        interiorsVehicles.map(interiorslists => {
            (interiorslists.interiorsvehicles_vehicleid == e.target.value)?
                interiors.push(interiorslists)
            : ''
        });

        let rimsVehicles = this.state.rims;
        let rimsX = [];

        rimsVehicles.map(rimslists => {
            (rimslists.rimsvehicles_vehicleid == e.target.value)?
                rimsX.push(rimslists)
            : ''
        });

        this.setState({
            formVehicleId: e.target.value,
            versionsVehicle: versions,
            colorsVehicle: colors,
            interiorsVehicles: interiors,
            rimsVehicle: rimsX,
            formVersionsId: '',
            formVersionPrice: 0,
            formColorId: '',
            formColorPrice: 0,
            formInteriorId: '',
            formInteriorPrice: 0,
            formRimsId: '',
            formRimsPrice: 0,
            formTotal: 0
        });
        document.getElementById('versions').getElementsByTagName('option')[0].selected = 'selected';
        document.getElementById('colors').getElementsByTagName('option')[0].selected = 'selected';
        document.getElementById('interiors').getElementsByTagName('option')[0].selected = 'selected';
        document.getElementById('rims').getElementsByTagName('option')[0].selected = 'selected';
    }
    handleOptionVersion(e) {
        let versionsVehicles = this.state.versions;
        let versionPrice = [];
        versionsVehicles.map(version=>{
            (version.versionsvehicles_id == e.target.value)?
                versionPrice = version
            :''
        })

        this.setState({
            formVersionsId: e.target.value,
            formVersionPrice: versionPrice.versionsvehicles_baseprice
        });
        let total = 0;
        total = this.state.formColorPrice + this.state.formInteriorPrice + this.state.formRimsPrice + versionPrice.versionsvehicles_baseprice - this.state.formDiscountPrice;
        this.setState({formTotal: total});
    }
    handleOptionColor(e) {
        let colorsVehicles = this.state.colorsVehicle;
        let colorPrice = [];
        colorsVehicles.map(color=>{
            (color.colorsvehicles_id == e.target.value)?
            colorPrice = color
            :''
        })

        this.setState({
            formColorId: e.target.value,
            formColorPrice: colorPrice.colorsvehicles_price
        });
        let total = 0;
        total = this.state.formVersionPrice + this.state.formInteriorPrice + this.state.formRimsPrice + colorPrice.colorsvehicles_price - this.state.formDiscountPrice;
        this.setState({formTotal: total});
    }
    handleOptionInterior(e) {
        let interiorsVehicles = this.state.interiorsVehicle;
        let InteriorPrice = [];
        interiorsVehicles.map(interior=>{
            (interior.interiorsvehicles_id == e.target.value)?
            InteriorPrice = interior
            :''
        })

        this.setState({
            formInteriorId: e.target.value,
            formInteriorPrice: InteriorPrice.interiorsvehicles_baseprice
        });
        
        let total = 0;
        total = this.state.formVersionPrice + this.state.formColorPrice + this.state.formRimsPrice + InteriorPrice.interiorsvehicles_baseprice - this.state.formDiscountPrice;
        this.setState({formTotal: total});
    }
    handleOptionRims(e) {
        let rimsVehicles = this.state.rimsVehicle;
        let RimsPrice = [];
        rimsVehicles.map(rim=>{
            (rim.rimsvehicles_id == e.target.value)?
            RimsPrice = rim
            :''
        })
        
        this.setState({
            formRimsId: e.target.value,
            formRimsPrice: RimsPrice.rimsvehicles_baseprice
        });
        
        let total = 0;
        total = this.state.formVersionPrice + this.state.formColorPrice + this.state.formInteriorPrice + RimsPrice.rimsvehicles_baseprice - this.state.formDiscountPrice;
        this.setState({formTotal: total});
    }
    handleChangeConceptDiscount(e) {
        this.setState({
            formDiscount: e.target.value
        });
    }
    handleChangeDiscountPrice(e) {
        this.setState({
            formDiscountPrice: e.target.value
        });
        let total = 0;
        total = this.state.formVersionPrice + this.state.formColorPrice + this.state.formRimsPrice + this.state.formInteriorPrice ;
        total = total - e.target.value;
        this.setState({formTotal: total});
    }
    onSubmit(e) {
        this.state.errorMessage="";
        if(this.state.formCustomer=='' || this.state.formEmail==''){
            this.setState({
                errorMessage:"We need your contact information to contact you, make sure it is correct."
            });
        } else if (this.state.errorMessage != ""|| this.state.formVersionsId=='') {
            this.setState({
                errorMessage:"You need to select a version."
            });
        } else if (this.state.errorMessage != ""|| this.state.formColorId=='') {
            this.setState({
                errorMessage:"You need to select a color."
            });
        } else if (this.state.errorMessage != ""|| this.state.formInteriorId=='') {
            this.setState({
                errorMessage:"You need to select a interior."
            });
        } else if (this.state.errorMessage != ""|| this.state.formRimsId=='') {
            this.setState({
                errorMessage:"You need to select a rims."
            });
        } else {
            const data = {
                "quotes_customer": this.state.formCustomer,
                "quotes_email": this.state.formEmail,
                "quotes_vehicleid": this.state.formVehicleid,
                "quotes_modelvehicle": this.state.formModelVehicle,
                "quotes_version": this.state.formVersionsId,
                "quotes_versionprice": this.state.formVersionPrice,
                "quotes_color": this.state.formColorId,
                "quotes_colorprice": this.state.formColorPrice,
                "quotes_interior": this.state.formInteriorId,
                "quotes_interiorprice": this.state.formInteriorPrice,
                "quotes_rims": this.state.formRimsId,
                "quotes_rimsprice": this.state.formRimsPrice,
                "quotes_discount": this.state.formDiscount,
                "quotes_discountprice": this.state.formDiscountPrice,
                "quotes_total": this.state.formTotal,
                "quotes_status": this.state.formStatus
            };
            
            axios.put("http://127.0.0.1:5000/quotes/"+this.state.formQuoteId,data,
                {
                    headers: {
                        "Access-Control-Allow-Headers" : "Content-Type",
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Methods": "PUT,POST,GET"
                    },
                }
            ).then(response => {
                this.setState({
                    errorMessage:"Saved successfully",
                    errorColor: "459800"
                });
            }).catch(error => {
                this.setState({
                    errorMessage:"Opps an error occurred :("
                });
            });   
        }
        
        e.preventDefault();
    }
    render() {
        const { className, userLogged, quotes_date } = this.props;
        return (
            <form onSubmit={this.onSubmit} name="form_quote" className={`${className}`}>
                <div className={`${className}__principal`}>
                    <div className={`${className}__principal__date`}>
                        {quotes_date}
                    </div>
                    <div className={`${className}__principal__status`}>
                        {
                            (this.state.status)?
                                <select name="status" className="input-select" onChange={this.handleOptionStatus} disabled>
                                    <option value={0} disabled > -- select an option -- </option>
                                    {
                                        this.state.status.map(status => {
                                            return <option key={status.quotesstatus_name} value={(status.quotesstatus_id)?status.quotesstatus_id:''} selected={status.quotesstatus_id == this.state.formStatus}>{status.quotesstatus_name}</option>
                                        })
                                    }
                                </select>
                            : ''  
                        }                        
                    </div>
                </div>
                
                {(this.state.errorMessage)?
                    <div id="message" className={`${className}__error`} style={{color:`#${this.state.errorColor}`, border: `2px solid #${this.state.errorColor}`}}>
                        <h1>{this.state.errorMessage}</h1>
                    </div>
                :''}
                
                <div className={`${className}__personal`}>
                    <div className={`${className}__personal__title`}>
                        Personal
                    </div>

                    <div className={`${className}__personal__content`}>
                        <div className={`${className}__personal__content__customer`}>
                            <div className='label'>
                                <label>Contact Name</label>
                            </div>
                            <input type="text" id="name" className="input-text" placeholder="Name" value={(this.state.formCustomer)?this.state.formCustomer:''} onChange={this.handleChangeCustomer} disabled/>
                        </div>
                        <div className={`${className}__personal__content__email`}>
                            <div className='label'>
                                <label>Email</label>
                            </div>
                            <input type="email" id="email" className="input-text" placeholder="Email" value={(this.state.formEmail)?this.state.formEmail:''} onChange={this.handleChangeEmail}  disabled/>
                        </div>
                    </div>
                   
                </div>
                <div className={`${className}__vehicle`}>
                    <div className={`${className}__vehicle__vehicleid`}>
                        <div className='label'>
                            <label>Model</label>
                        </div>
                        {
                            (this.state.vehicles)?
                                <select id="vehicle" name="vehicle" className="input-select" onChange={this.handleOptionModel} disabled>
                                    <option value={0} disabled> -- select an option -- </option>
                                    {
                                        this.state.vehicles.map(vehicle => {
                                            return <option key={vehicle.vehicles_name} value={vehicle.vehicles_id} selected={vehicle.vehicles_id == this.state.formVehicleid}>{vehicle.vehicles_name}</option>
                                        })                    
                                    }
                                </select>
                            :''
                        }
                    </div>

                    <div className={`${className}__vehicle__vehicleModel details`}>
                        {this.state.formModelVehicle}
                       
                    </div>

                    <div className={`${className}__vehicle__version`}>
                        <div className='label'>
                            <label>Version</label>
                        </div>
                        {
                            (this.state.versionsVehicle)?
                                <select id="versions" name="versions" className="input-select" onChange={this.handleOptionVersion} disabled> 
                                    <option value={0} disabled> -- select an option -- </option>
                                    {
                                        this.state.versionsVehicle.map(version => {
                                            return <option key={version.versionsvehicles_name} value={version.versionsvehicles_id} selected={version.versionsVehicles_id == this.state.formVersionsId}>{version.versionsvehicles_name}</option>
                                        })        
                                    }
                                </select>
                        : ''}
                    </div>

                    <div className={`${className}__vehicle__versionprice details`}>
                        $ {this.state.formVersionPrice}
                    </div>

                    <div className={`${className}__vehicle__color`}>
                        <div className='label'>
                            <label>Color</label>
                        </div>
                        {
                            (this.state.colorsVehicle)?
                                <select id="colors" name="colors" className="input-select" onChange={this.handleOptionColor} disabled> 
                                    <option value={0} disabled> -- select an option -- </option>
                                    {
                                        this.state.colorsVehicle.map(color => {
                                            return <option key={color.colorsvehicles_name} value={color.colorsvehicles_id} selected={color.colorsvehicles_id == this.state.formColorId}>{color.colorsvehicles_name}</option>
                                        })
                                    }
                                </select>
                            : ''
                        }
                    </div>

                    <div className={`${className}__vehicle__colorprice details`}>
                        $ {this.state.formColorPrice}
                    </div>
                    
                    <div className={`${className}__vehicle__interior`}>
                        <div className='label'>
                            <label>Interior</label>
                        </div>
                        {
                            (this.state.interiorsVehicle)?
                                <select id="interiors" name="interiors" className="input-select" onChange={this.handleOptionInterior} disabled> 
                                    <option value={0} disabled> -- select an option -- </option>
                                    {
                                        this.state.interiorsVehicle.map(interior => {
                                            return <option key={interior.interiorsvehicles_name} value={interior.interiorsvehicles_id} selected={interior.interiorsvehicles_id == this.state.formInteriorId}>{interior.interiorsvehicles_name}</option>
                                        })
                                    }
                                </select>
                            : ''
                        }
                    </div>

                    <div className={`${className}__vehicle__interiorprice details`}>
                        $ {this.state.formInteriorPrice}
                    </div>

                    <div className={`${className}__vehicle__rims`}>
                        <div className='label'>
                            <label>Rims</label>
                        </div>
                        {
                            (this.state.rimsVehicle)?
                                <select id="rims" name="rims" className="input-select" onChange={this.handleOptionRims} disabled>
                                    <option value={0} disabled> -- select an option -- </option> 
                                    {
                                        this.state.rimsVehicle.map(rim => {
                                            return <option key={rim.rimsvehicles_model} value={rim.rimsvehicles_id} selected={rim.rimsvehicles_id == this.state.formInteriorId}>{rim.rimsvehicles_model} - {rim.rimsvehicles_size}</option>
                                        })
                                    }
                                </select>
                            : ''
                        }
                    </div>

                    
                    <div className={`${className}__vehicle__rimsprice details`}>
                        $ {this.state.formRimsPrice}
                    </div>

                </div>

                <div className={`${className}__total`}>  
                    <div className={`${className}__discount__text`}>
                        <input type="text" id="discount" className="input-text" placeholder="Discount concept" value={(this.state.formDiscount)?this.state.formDiscount:''} onChange={this.handleChangeConceptDiscount} disabled/>        
                    </div>
                    
                    <div className={`${className}__discount__price details`}>
                        <div className='label'>
                            <label>$</label>
                        </div>
                        <input type="number" id="discount-price" className="input-text" placeholder="0" value={(this.state.formDiscountPrice)?this.state.formDiscountPrice:''} onChange={this.handleChangeDiscountPrice} disabled/>
                    </div>
                           
                    <div className={`${className}__total__text`}>
                        Total
                    </div>      
                    <div className={`${className}__total__price`}>
                        $ {this.state.formTotal}
                    </div>
                </div>

                <div className={`${className}__buttons`}>
                            
                    <div className={`${className}__buttons__edit-wrapper`}>
                        <a className={`${className}__buttons__edit`} onClick={this.handleEdit}>Edit</a>
                    </div>

                    <div className={`${className}__buttons__save-wrapper`}>
                        <button id={`submitButton`} className={`${className}__buttons__save`} type="submit" disabled>Save</button>
                    </div>
                </div> 
                

            </form>
        )
    }
}

export default QuotesForm;
