import React, { Component } from 'react';
import Navbar from './header/navbar';

import * as actions from '../actions';
import { connect } from 'react-redux';

class Layout extends Component {
    componentDidMount(){
        // this.props.setCarCategories();
    }
    render() {
        return (
        <div className='layout'>
            <Navbar/>
            {this.props.children} 
        </div>
        );
    }
}

// function mapStateToProps(state){
//     // const{ categories } = state.cars;
//     // return { 
//     //     categories
//     // }
// }
  
// Layout = connect(mapStateToProps, actions)(Layout); 
export default Layout;
