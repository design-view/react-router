import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return ( 
    <div>
        <h1>GreenMall</h1>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/product/item1">아이폰</Link></li>
            <li>메뉴3</li>
        </ul>
    </div>
    );
}

export default Header;