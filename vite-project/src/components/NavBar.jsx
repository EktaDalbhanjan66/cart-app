import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import {  useSelector } from 'react-redux';


function NavBar() {
    const noofProducts=useSelector((state)=>state.cart)
  return (
    <div
    style={{
        backgroundColor:'blueviolet',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color:'white',
        height:'3.5rem'
    }}
>
    <span className="logo">Vedanz STORE</span>
    <div>
        <Link className="navLink" to="/">
            Home
        </Link>
        <Link className="navLink" to="/cart">
        <FontAwesomeIcon icon={faCartShopping} />
        <span style={{paddingRight:'10px'}}> {noofProducts.length}</span>
        </Link>
       
    </div>
</div>
  )
}

export default NavBar