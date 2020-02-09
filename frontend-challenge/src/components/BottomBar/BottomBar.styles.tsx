import styled, {css} from 'styled-components'

interface ButtonProps  {
    isEnd?: boolean
    isActive?: boolean
}

const endButton = css`
    color: white;
    background-color: #ffaa00;
`

const centerButton = css`

`

const activeButton = css`
    font-size: 14px;
    border: 1px solid #ffaa00;
`

export const Container = styled.div`
    display: flex;
    height: 1.5rem;
    align-items: center;
    padding: 1rem;
    border-top: 2px solid #ffaa00;

`

export const ButtonContainer = styled.div`
    margin-left: auto;
`

export const Button = styled.button`
    font-size: 12px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    ${({isActive}:ButtonProps)=> isActive ? activeButton : null}
    ${({isEnd}:ButtonProps)=> isEnd ? endButton : centerButton}

    &:hover{
        border-bottom: 2px solid #ffaa00;
    }

    &,
    &:active,
    &:focus {
        outline: none;
    }

`

export const Spacer = styled.p`
    display: inline-block;
    margin: 0 .2rem;
`