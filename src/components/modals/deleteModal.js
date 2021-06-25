import React, { Component } from 'react';
import {Redirect} from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library, icon } from '@fortawesome/fontawesome-svg-core';
import { faExclamation, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faExclamation, faCheckCircle)

class DeleteModal extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            redirect: false,
            confirm: false
        }
        this.closeModal = this.closeModal.bind(this);
        this.deleteQuote = this.deleteQuote.bind(this);
        this.deletedQuote = this.deletedQuote.bind(this);
    }

    
    deleteQuote() {
        this.props.deleteQuote(this.props.quotes_id);
        this.setState({
            confirm: true
        })
    }
    deletedQuote() {
        this.props.deletedQuote();
    }
    closeModal() {
        this.props.closeDeleteModal();
    }

    render() {
        const {message, direction} = this.props;
        if (this.state.confirm) {
            return (
                <div className='deleteConfirmedModal'>
                    <div >
                        <FontAwesomeIcon className='deleteConfirmedModal__icon'  icon={ {prefix: 'fa', iconName: 'check-circle'} } />
                    </div>
                    <div className='deleteConfirmedModal__title'>Deleted</div>
                    <button className='deleteConfirmedModal__return' onClick={this.deletedQuote}>Return</button> 
                </div>
            );
        }
        return (
            <div className='deleteModal'>
                <div >
                    <FontAwesomeIcon className='deleteModal__icon'  icon={ {prefix: 'fa', iconName: 'exclamation'} } />
                </div>
                <div className='deleteModal__title'>{message}</div>
                <button className='deleteModal__delete' onClick={this.deleteQuote}>Delete</button> 
                <button className='deleteModal__notyet' onClick={this.closeModal}>Not yet</button> 
            </div>
        );
    }
}

export default DeleteModal;