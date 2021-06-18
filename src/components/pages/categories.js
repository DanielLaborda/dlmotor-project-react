import React, { Component } from "react";
import axios from 'axios';

import CarsCategories from "../categories/carsCategories";

class Categories extends Component{
    constructor() {
        super();

        this.state = {
            categories: [],
            vehicles: []
        }
    }
    componentDidMount() {
        axios.get("http://127.0.0.1:5000/categories"
        ).then(response => {
           this.setState({
                categories: response.data
            });
        });

        axios.get("http://127.0.0.1:5000/vehicles"
        ).then(response=> {
            this.setState({
                vehicles:response.data
            })
            
            console.log(`vehicles: ${response.data}`);
        })
    }
    showHide(id) {
        let categoryCar = document.getElementById(id);
        if (!categoryCar){
            return
        }

        let showCategory = document.getElementsByClassName('car-show');
        if (showCategory){
            [].forEach.call(showCategory, function(el) {
                el.classList.remove("car-show");
                el.classList.add("car-hidden");
            });
        }

        if(categoryCar.classList.contains('car-hidden')) {
            categoryCar.classList.remove('car-hidden');
            categoryCar.classList.add('car-show');
        } else {
            categoryCar.classList.add('car-hidden');
            categoryCar.classList.remove('car-show');
        }
    }
    render(){
        return (
            <div className='categories'>
                {
                    this.state.categories.map(category => (
                        <div key={`category${category.categories_id}`} className="categories-category">
                            <div className="categories-category__content">
                                <div className='cat-category__content-img'>
                                    <div className='categories-category__content-image'>
                                        <div className='background__back'/>
                                            <img src={`data:image/jpg;base64,${category.categories_image}`} />
                                        </div>
                                    </div>
                                    <div className={`categories-category__content-text `}>
                                        <div className={`categories-category__content-text__title`}>{category.categories_name}</div>
                                        <div className={`categories-category__content-text__description`} >{category.categories_description}</div>
                                        <a onClick={() => this.showHide(category.categories_id)} className={`categories-category__content-text__link`}>VIEW CARS</a> 
                                    </div>
                                </div>
                                <div id={category.categories_id} className="categories-category__cars car-hidden ">  
                                    {
                                        this.state.vehicles.map(vehicle =>(
                                            (vehicle.vehicles_category == category.categories_id)?
                                                <CarsCategories key={`vehicle${vehicle.vehicles_id}`}  className={'categories-category__cars'} id={category.categories_id} {...vehicle}/>
                                            : ""
                                        ))
                                    }
                                
                                </div>
                            </div>
                    ))
                
                }
            </div>
        )
    }
}

export default Categories;