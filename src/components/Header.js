/* eslint-disable jsx-a11y/anchor-is-valid */
import React , { useState } from 'react'

import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function Header() {

    const [burgerButtonStatus, setburgerButtonStatus] = useState(false);

    return (
        <Container>
            <a>
                <img src="./images/logo.svg" alt=""/>
            </a>
            <Menu>
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
                <a href="#">Solar Roof</a>
                <a href="#">Solar Panels</a>
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Acccount</a>
                <a href="#">Menu</a>
                <CustomMenu onClick={() => setburgerButtonStatus(true)}/>
            </RightMenu>
            <BurgerNav show={burgerButtonStatus}>
                <CloseWrapper>
                    <CustomClose onClick={() => setburgerButtonStatus(false)}/>
                </CloseWrapper>
                <li><a href="#">Model S</a></li>
                <li><a href="#">Model S</a></li>
                <li><a href="#">Model S</a></li>
                <li><a href="#">Model S</a></li>
                <li><a href="#">Model S</a></li>
                <li><a href="#">Model S</a></li>
                <li><a href="#">Model S</a></li>
                <li><a href="#">Model S</a></li>
                <li><a href="#">Model S</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1;
`;

const Menu = styled.div`
    display: flex;
    justify-content: center;
    flex: 1;
    align-items: center;
    a {
        font-weight: 600;
        padding: 0 10px;
        flex-wrap: nowrap;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a {
        font-weight: 600;
        margin-right: 10px;
    }
`;

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`;

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: white;
    width: 300px;
    z-index: 10;
    list-style: none;
    padding: 20px;
    text-align: start;
    transform: ${ props => props.show ? 'translateX(0)' : 'translateX(100%)' };
    transition: transform 0.2s ease-in;
    li {
        padding: 15px 0;
        a {
            font-weight: 600;
        }
    }
`;

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`;

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`; 
