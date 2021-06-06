import React, { Component } from 'react';
import {Redirect} from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library, icon } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faCheckCircle)

class CreateModal extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            redirect: false
        }
        this.closeModal = this.closeModal.bind(this);
    }
    
    closeModal() {
        this.setState({
            redirect: true
        });
    }

    render() {
        const {message, direction} = this.props;

        if (this.state.redirect) {
            return <Redirect to={direction}/>;
        }
        return (
            <div className='createModal'>
                <div >
                    <FontAwesomeIcon className='createModal__icon'  icon={ {prefix: 'fa', iconName: 'check-circle'} } />
                </div>
                <div className='createModal__title'>{message}</div>
                <button className='createModal__login' onClick={this.closeModal}>Login</button> 
            </div>
        );
    }
}

export default CreateModal;