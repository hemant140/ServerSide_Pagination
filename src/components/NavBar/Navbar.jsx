import React from 'react'
import { NavLink } from 'react-router-dom'
import "./style.css"

const Navbar = () => {
    const navLinkStyle = ({ isActive }) => {
        return {
            textDecoration: 'none',
            color: isActive ? "red" : "White"
        }
    }
    return (
        <div className="header">
            <ul>
                {/* <li> <NavLink to={'/'} style={navLinkStyle}><h3>Home</h3></NavLink> </li> */}
                <li><NavLink to={'/pageTable'} style={navLinkStyle}><h3>PageTable</h3></NavLink></li>
                <li><NavLink to={'/columGrouping'} style={navLinkStyle}><h3>ColumnGrouping</h3></NavLink></li>
                <li><NavLink to={'/displaycolum'} style={navLinkStyle}><h3>DisplayColumn</h3></NavLink></li>
                <li><NavLink to={'/pagination'} style={navLinkStyle}><h3>Pagination</h3></NavLink></li>
                <li><NavLink to={'/serverpagination'} style={navLinkStyle}><h3>ServerPagination</h3></NavLink></li>
            </ul>

        </div>
    )
}

export default Navbar
