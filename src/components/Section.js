import React from 'react'

import styled from 'styled-components'

function Section({ title,description,leftButtonText,rightButtonText,backgroundImage }) {
    return (
        <Wrap bgImg={backgroundImage}>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
            <Buttons>
                <ButtonGroup>
                    <LeftButton>{leftButtonText}</LeftButton>
                    {rightButtonText &&
                        <RightButton>{rightButtonText}</RightButton>
                    }
                </ButtonGroup>
                <DownArrow src='./images/down-arrow.svg'/>
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: ${props => `url(./images/${props.bgImg})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between; // vertical
    align-items: center; //horizontal
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media(max-width: 768px) {
        flex-direction: column; 
    }
`

const LeftButton = styled.div`
    color: white;
    background-color: #2F3036;
    height: 40px;
    width: 256px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`

const RightButton = styled(LeftButton)`
    background-color: #D3D0D2;
    color: #2F3036;
`

const DownArrow = styled.img`
    margin-bottom: 20px;
    height: 40px;
    animation: animateDown infinite 1.5s
`

const Buttons = styled.div`

`