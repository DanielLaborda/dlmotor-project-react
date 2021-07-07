import React, { Component } from "react";
import axios from 'axios';

import RacingCategories from "../racing/racingCategories";



class RacingTeam extends Component {
    constructor() {
        super();

        this.state = {
            racingTeam_name: '',
            racingTeam_slogan: '',
            racingTeam_description: '',
            racingTeam_description2: '',
            racingTeam_video: '',
            racingTeam_imagesBanner: [],
            racingTeam_categories: []
        }
    }
    componentDidMount(){
        axios({
            method: 'get',
            url: 'https://apidlmotor.herokuapp.com/racingTeam/',
            params: {
              id: 1
            }
        }).then(response =>{
           this.setState({
                racingTeam_name: response.data.racingTeam_name,
                racingTeam_slogan: response.data.racingTeam_slogan,
                racingTeam_description: response.data.racingTeam_description,
                racingTeam_description2: response.data.racingTeam_description2,
                racingTeam_video: response.data.racingTeam_video,
                racingTeam_imagesBanner: response.data.racingTeam_imagesBanner                
            });
        });
        axios({
            method: 'get',
            url: 'https://apidlmotor.herokuapp.com/categoriesRacing/',
            params: {
              id: 1
            }
        }).then(response =>{   
            this.setState({ 
                racingTeam_categories: response.data
            });
        });
    }
    ChangeImage(image, e) {
        let activeBar = document.getElementsByClassName('activeBar');
        if (activeBar){
            [].forEach.call(activeBar, function(el) {
                el.classList.remove("activeBar");
            });
        }
        document.getElementById('imageBanner').setAttribute('src',`data:image/jpg;base64,${image}`);
        e.target.classList.add('activeBar');
    }
    ChangeVideo(video, id) {
        let activeCategory = document.getElementsByClassName('activeCategory');
        if (activeCategory){
            [].forEach.call(activeCategory, function(el) {
                el.classList.remove("activeCategory");
            });
        }
        let activeCategoryImg = document.getElementsByClassName('activeCategoryImg');
        if (activeCategoryImg){
            [].forEach.call(activeCategoryImg, function(el) {
                el.classList.remove("activeCategoryImg");
            });
        }
        document.getElementById('videoRacing').setAttribute('src',video);
        let element = document.getElementById('categoryName'+id);
        element.classList.add("activeCategory"); 
        let elementImage = document.getElementById('categoryImage'+id);
        elementImage.classList.add("activeCategoryImg"); 
    }
    render(){
        return (
            <div className='racing'>
                <div className='racing__banner'>
                    <img className='racing__banner__image' id='imageBanner' src={`data:image/jpg;base64,${this.state.racingTeam_imagesBanner[0]}`}/>
                    
                    <div className='racing__banner__sections'>
                        {this.state.racingTeam_imagesBanner.map((image, index) => {
                            return (
                                <a id={`bannerBtn${index}`} key={index} className={`racing__banner__sections__button ${(index==0)? 'activeBar' : ''}`} onClick={(e) => this.ChangeImage(image,e)}></a>
                            )
                        })}  
                    </div>
                    <div className='racing__banner__title'>
                        {this.state.racingTeam_name}
                    </div>
                </div>

                <div className='racing__description'>
                    <p>{this.state.racingTeam_description}</p>
                        
                    <p>{this.state.racingTeam_description2}</p>
                </div>

                <div className='racing__video'>
                    <iframe id='videoRacing'  
                        src={this.state.racingTeam_video}
                        title="YouTube video player" 
                        frameBorder='0' 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >
                    </iframe>
                </div>

                <div className='racing__slogan'>
                    {this.state.racingTeam_slogan}
                </div>
                <div className='racing__gategories'>
                    {
                        this.state.racingTeam_categories.map((category, index)=> {
                            
                            return (
                                <RacingCategories key={`category${index}`} onClick={() => this.ChangeVideo(category.categoriesracing_video, index)} 
                                    image={category.categoriesracing_image}
                                    name={category.categoriesracing_name}
                                    _id={index}
                                    className='racing__gategories__category' {...category} 
                                />
                            )
                        }) 
                    }  
                </div>
            </div>
        );
    }
}

export default RacingTeam;