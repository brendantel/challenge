import styled from 'styled-components'

//Style the Program Info Component
/*
    Wrapper:
        * use css grid
        * put a 1 rem gap between the columns
        * the right column should be half as big as the left
        * there should be 2rem of padding top and bottom
        * there should be 10rem of padding left and right
    
    Card:
        * should have a .5rem radius on the corners
        * should have a shadow on the outside of 1px 1px 2px 2px with a color of #ddd
        * should have a font color of #333
        * vertical padding of 2rem and horizontal of .5rem
    
    DescHeader:
        * the text should be bold
        * the words should have a size of 2rem
        * there should be a bottom margin of .5rem
        * the text alignment should be based off a prop called center.
            if center is true, then the text should be centered, otherwise
            should be left aligned.
        
    Description:
        * should have a bottom margin of 1rem
        
    TuitionRow:
        * use flexbox
        * space the contents as far apart as possible
        * add .25rem of padding to the top and bottom
        * add 2 rem of padding left and right
*/


export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 0.5fr;
    grid-column-gap: 1rem;
    padding: 2rem 10rem;
`

export const Card = styled.div`
    border-radius: 0.5rem;
    box-shadow: 1px 1px 2px 2px #ddd;
    color: #333;
    padding: 2rem 0.5rem;
`

export const FieldWrapper = styled.div`
    
`


export const DescHeader = styled.h3`
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: 0.5rem;
`

export const Description = styled.p`
    margin-bottom: 1rem;
`

export const TuitionRow = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.25rem 2rem;
`

export const TuitionLabel = styled.p`

`

export const TuitionValue = styled.p`

`
