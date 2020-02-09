import React from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {Container, Link, VerticalBar} from './Menu.styles'

library.add(faChevronDown)

const Menu = () => (
        <Container>
            <Link>John Doe</Link>
            <VerticalBar/>
            <Link>More <FontAwesomeIcon style={{color: '#888888' }} icon={ ['fas', "chevron-down"] }/> </Link>
        </Container>
    )


export default Menu