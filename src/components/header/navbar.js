import React, { useState } from 'react';
import Logo from '../../../static/images/logo.png';
import history from '../../history';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
        return (
            <div className='navbar'>
                <div className='navbar__logo'>
                    <img src={Logo} onClick={() => history.push('/')}/>
                    <div className='navbar__title'>DLMotor</div>
                </div>

                <ul className={click ? "navbar__options active" : "navbar__options"}>
                    <li className='navbar__options__option' onClick={closeMobileMenu}>
                        <a onClick={() => history.push('/categories')}>
                            <div className='background-yellow' />
                            <div className='background-blue' />
                            <div className='text' >Modelos</div>
                        </a>
                    </li>
                    <li className='navbar__options__option' onClick={closeMobileMenu}>
                        
                        <a onClick={() => history.push('/garage')}>
                            <div className='background-yellow' />
                            <div className='background-blue' />
                            <div className='text' >Garage</div>
                        </a>
                    </li>
                    <li className='navbar__options__option' onClick={closeMobileMenu}>
                        <a onClick={() => history.push('/racing-team')}>
                            <div className='background-yellow' />
                            <div className='background-blue' />
                            <div className='text' >Racing team</div>
                        </a>
                    </li>                   
                </ul>
                <a onClick={() => history.push('/users')}>user{/*<i className="far fa-user"/>*/}</a>
                    
                <div className="mobile-menu" onClick={handleClick}>
                    {click ? (
                    <div className="menu-icon">
                        menu{/* menu<i className="fas fa-bars"/> */}
                    </div>
                    ) : (
                    <div className="menu-icon">
                        menu{/* <i className="fas fa-bars"/> */}
                    </div>
                    )}
                </div>
              
            </div>
        );
    
}

export default Navbar;