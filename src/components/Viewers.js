import React from 'react'
import styled from 'styled-components'
function Viewers() {
    return (
        <Container>
            <Wrap>
                <img src="/images/viewers-disney.png"/>
                <video autoPlay={true} loop={true} playsInline={true}>
                      <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-pixar.png"/>
                <video autoPlay={true} loop={true} playsInline={true}>
                  <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-marvel.png"/>
                <video autoPlay={true} loop={true} playsInline={true}>
                     <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-starwars.png"/>
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-national.png"/>
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source
                        src="/videos/1564676296-national-geographic.mp4"
                        type="video/mp4" />
                 </video>
            </Wrap>
        </Container>
    )
}

export default Viewers
const Container = styled.div`
    margin-top:30px;
    display:grid;
    grid-template-columns:repeat(5,minmax(0,1fr));
    grid-gap:20px;
    padding:30px 0px 26px;
`
const Wrap = styled.div`
    cursor:pointer;
    border:3px solid rgba(250,250,250,0.1);
    overflow:hidden;
    position: relative;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border: 3px solid rgba(249, 249, 249, 0.1);
    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
    video {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        left:0px;
        opacity: 0;
        z-index: -2;
        object-fit:cover;
        border=radius:4px;
    }
    &:hover{
        transform:scale(1.05);
        border-color:rgba(250,250,250,0.7);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
             rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        video {
            opacity: 1;
        }
    }
`