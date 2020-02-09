import React from 'react'

import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'
import Menu from '../Menu/Menu'
import SearchBar from '../SearchBar/SearchBar'
import {Container, HamburgerContainer, Title} from './Header.styles'

const Header = () => (
        <Container>
            <HamburgerContainer>
                <HamburgerMenu />
                <Title>Affordable Online Degrees</Title>
            </HamburgerContainer>
            <SearchBar/>
            <Menu />
        </Container>
    )


export default Header