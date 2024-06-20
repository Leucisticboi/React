import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';

const pages = ['Get Started', 'Navbars', 'Menus', 'Footers', 'Buttons', 'Forms', 'Cards'];

export default function Navbar() {
    return (
        <div position ="fixed" sx={{
            maxheight: '80px',
            alignSelf: 'center',
            borderRadius: '15px',
            width: '100%',
            top: '10px'
        }}>
            <div sx={{
                justifyContent: 'space-evenly'
            }}>
                <button>
                    <Link to="/">{pages[0]}</Link>
                </button>
            </div>
        </div>
    )
}