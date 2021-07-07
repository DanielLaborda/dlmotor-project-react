import React, { Component } from "react";
import axios from 'axios';

import QuotesForm from "../quote/quoteForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library, icon } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

library.add(faArrowRight, faArrowLeft)

class Quotes extends Component{
    constructor(props) {
        super(props);

        this.state = {
           status: "",
           errorMessage: "",
           quotes: '',
           quote: ''
        }

        this.selectQuote = this.selectQuote.bind(this);
        this.deleteQuote = this.deleteQuote.bind(this);
    }
    componentDidMount() {
        if (this.props.userLogged.userType) {
            this.setState({
                status: this.props.userLogged.userType[0].usertype_name
            });

            if(this.props.userLogged.userType[0].usertype_name == "Administrator"){
                axios({
                    method: 'get',
                    url: 'https://apidlmotor.herokuapp.com/quotes/',
                }).then(response =>{       
                    this.setState({
                        quotes: response.data,
                        errorMessage: response.data[0].response
                    });
                }).catch(error => {
                    this.setState({
                        errorMessage: "An error occured"
                    });
                });
            } else {                
                axios({
                    method: 'get',
                    url: 'https://apidlmotor.herokuapp.com/quotesByEmail/',
                    params: {
                      email: this.props.userLogged.user_email
                    }
                }).then(response =>{       
                    this.setState({
                        quotes: response.data,
                        errorMessage: response.data[0].response
                    });
                }).catch(error => {
                    this.setState({
                        errorMessage: "An error occured"
                    });
                });
            }
        }
    }

    
    selectQuote(e) {
        this.setState({quote: this.state.quotes[e.target.value]});
    }
    openQuoteList() {
        if (document.getElementById("quotes__sidebar").style.display == "none"){
            document.getElementById('quotes__sidebar').style.display = 'block';
            document.getElementById("quotes__content").style.display = "none";
        } else {
            document.getElementById("quotes__sidebar").style.display = "none";
            document.getElementById('quotes__content').style.display = 'block';
        }
        
    }
    deleteQuote(id) {
        axios({
            method: 'delete',
            url: 'https://apidlmotor.herokuapp.com/deleteQuote/',
            params: {
                id: id
            }
        }).then(response =>{       
            let arrQuotes = [];
            this.state.quotes.map(quote  => {                        
                (quote.quotes_id != id)?
                    arrQuotes.push(quote)
                :'';
            });

            this.setState({
                quotes: arrQuotes
            });      
        }).catch(error => {
            this.setState({
                errorMessage: "An error occured"
            });
        });          
    }

    render() {
        const { userLogged } = this.props
        return (
            <div className='quotes'>

                <div id='quotes__sidebar' className='quotes__sidebar'>
                    <a onClick={this.openQuoteList}>
                        <FontAwesomeIcon className='quotes__sidebar__arrow'  icon={ {prefix: 'fa', iconName: 'arrow-left'} } />
                    </a>
                    <ul className='quotes__sidebar__list'>
                        {(this.state.quotes)?
                            this.state.quotes.map((quote, index) => {
                                return <li onClick={this.selectQuote} value={index} className='quotes__sidebar__list__item' key={`quote${index}`}>{`${quote.quotes_date} - ${quote.quotes_modelvehicle}`}</li>
                            }) 
                        : ''}
                    </ul>
                    
                </div>
                <div id='quotes__content' className='quotes__content'>
                    <a onClick={this.openQuoteList}>
                        <FontAwesomeIcon className='quotes__content__arrow'  icon={ {prefix: 'fa', iconName: 'arrow-right'} } />
                    </a>
                    <div className='quotes__content__error'>
                        {this.state.errorMessage}
                    </div>
                    <div className='quotes__content__title'>
                        {(this.state.status == "Administrator")?
                            <h1>Quotes</h1>
                        :
                            <h1>My Quotes</h1>
                        }
                    </div>

                    {
                        (this.state.quote)?
                            <QuotesForm className='quotes__form'
                            userLogged={userLogged}
                            deleteQuote={this.deleteQuote}
                            quotes_id={this.state.quote.quotes_id} quotes_date={this.state.quote.quotes_date} 
                            quotes_customer={this.state.quote.quotes_customer} quotes_email={this.state.quote.quotes_email} 
                            quotes_vehicleid={this.state.quote.quotes_vehicleid} 
                            quotes_modelvehicle={this.state.quote.quotes_modelvehicle} quotes_version={this.state.quote.quotes_version} 
                            quotes_versionprice={this.state.quote.quotes_versionprice} quotes_color={this.state.quote.quotes_color}
                            quotes_colorprice={this.state.quote.quotes_colorprice} quotes_interior={this.state.quote.quotes_interior} 
                            quotes_interiorprice={this.state.quote.quotes_interiorprice} quotes_rims={this.state.quote.quotes_rims}
                            quotes_rimsprice={this.state.quote.quotes_rimsprice} quotes_discount={this.state.quote.quotes_discount}
                            quotes_discountprice={this.state.quote.quotes_discountprice} quotes_total={this.state.quote.quotes_total}
                            quotes_status={this.state.quote.quotes_status}     
                            />
                           
                           
                            
                            
        
                        :''
                    }
                    
                </div>
                

            </div>
        )
    }
}

export default Quotes;
