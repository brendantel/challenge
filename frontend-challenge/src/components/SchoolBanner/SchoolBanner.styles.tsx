import styled from 'styled-components'

interface BannerType {
    backgroundColor: string
}

interface LogoType {
    src: string
}

export const Logo = styled.div`
    border-radius: 50%;
    height: 8rem;
    width: 8rem;
    background-image: url(${(props:LogoType)=>props.src});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-color: white;
    box-shadow: 2px 2px 0px  1px rgba(100,100,100,.5);
`

export const Banner = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
    background-color: ${(props:BannerType)=>props.backgroundColor};
    padding: 3rem 0;
    color: white;
`

export const ProgramName = styled.h3`
    font-weight: bold;
    font-size: 2rem;
    padding: 1rem 0;
`

export const CollegeName = styled.h4`
    font-size: 1.5rem;
`