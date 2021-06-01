import React, { Component } from "react";
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';


class GarageMap extends Component{
    
    render(){
        const { className, position } = this.props;
        return (
            <Map style={{width:'100%', height: '500px'}} center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        DLMotor garage. <br /> We are Here.
                    </Popup>
                </Marker>
            </Map>
        );
    }
}
  export default GarageMap;