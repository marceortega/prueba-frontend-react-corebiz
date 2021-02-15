import React from 'react'
import logo from '../statics/logo.png'
import account from '../statics/account.png'
import cart from '../statics/shopping-cart.png'
import search from '../statics/search.svg'

const Navbar = () => {
    return (
        <div className="conatiner">
            
            <div className="row">
                <div className="col-4">
                 
                    <img className="logo" src={logo} alt="logo" />

                </div>
                <div className="col-5">
                   
                    <img className="search" src={search} alt="search" />
                </div>
                <div className="col-1">
                
                  <img className="account" src={account} alt="account" />
                </div>
                <div className="col-2">
                    
                    <img className="shopping-cart" src={cart} alt="cart" />
                </div>

            </div>
        </div>
    )
}

export default Navbar
