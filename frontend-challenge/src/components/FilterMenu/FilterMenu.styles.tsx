import styled from 'styled-components'

/*
    Container:
    Use flexbox to center the contents of the menu vertically and horizontally
    the background for the container should be #ffefde
    it should have .5rem padding top and bottom and 5rem of padding left and right
    
    MenuItem:
    there should be .5rem of spacing between each vertical pipe and the text
    when the pointer hovers over the item:
        the font weight should change to bold
        there should be a 2px border on the bottom of the item with the color: #ffaa00
        the cursor should change to a pointer
*/


export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffefde;
    padding: 0.5rem 5rem;
`

export const MenuContainer = styled.div`

`

export const MenuItem = styled.span`
    margin: 0 .5rem;
    &:hover {
        font-weight: bold;
        border-bottom: 2px solid #ffaa00;
        cursor: pointer;
    }
`