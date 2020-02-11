import React, {useState} from 'react'

//import necissary items for updating redux store
import {useDispatch} from 'react-redux'
//Import necissary items to use fontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {Container, Input, SubmitButton} from './SearchBar.styles'
import { updateTerm } from '../../redux/Term/term.actions'

/*
    For this component use hooks to manage state, and update the redux store.

    Container:
        * Should house the Input and SubmitButton

    The Input:
        * Should be a controlled component
        * Placeholder should read "Search for Online Course"
        * Submit the term to the redux store if the user presses enter
        * If the user is on the program details page they should be routed to /
    
    The SubmitButton:
        * Should contain the font awesome icon faSearch
        * The color of the icon should be #FFF
        * Submit the term to the redux store if clicked by the user
*/



const SearchBar = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const handleInputChange = event => {
        setInput(event.currentTarget.value)
    }

    const handleKeyPress = event => {
        if(event.key === 'Enter') {
            dispatch(updateTerm(input))
        }
    }
    
    return(
        <Container>
            <Input name="term" type="text" onChange={handleInputChange} placeholder="Search for Online Course" onKeyPress={handleKeyPress} value={input}/>
            <SubmitButton onClick={() => dispatch(updateTerm(input))}>
                <FontAwesomeIcon icon={faSearch} color="#fff"></FontAwesomeIcon>
            </SubmitButton>
        </Container>
    )
}

export default SearchBar