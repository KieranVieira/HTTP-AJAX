import React from 'react';
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledNav = styled.div`
    display: flex;
    justify-content: center;
    width: 50%;
    margin: 15px auto;
    a{
        text-align: center;
        font-size: 20px;
        color: black;
        text-decoration: none;
        border: 1px solid black;
        padding: 5px 15px;
        margin: 0 10px;
        border-radius: 3px;
    }
    .active{
            background-color: #ADD8E6
    }
`;

const NavBar = props => {
    return(
        <StyledNav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/friends-form">Add Friend</NavLink>
        </StyledNav>
    )
}

export default NavBar;