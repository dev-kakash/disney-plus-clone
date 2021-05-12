import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            <Content>
                <Logo1 src="/images/cta-logo-one.svg"/>
                <SignUp>GET ALL THERE</SignUp>
                <Description>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
                 laying out print, graphic or web designs. In the 15th century who is thought to have 
                  scrambled parts of
                 Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                </Description>
                <Logo2 src="/images/cta-logo-two.png"/>

            </Content>
        </Container>
    )
}

export default Login
const Container = styled.div`
    position:relative;
    min-height: calc(100vh - 70px);
    padding:0 calc(3.5vw + 5px);
    display:flex;
    align-item:top;
    justify-content:center;
    

    &:before {
        background-position:top;
        background-size:cover;
        background-repeat:no-repeat;
        background-image: url("/images/login-background.jpg");
        content: "";
        position: absolute;
        inset: 0px;
        opacity: 0.7;
        z-index: -1;
      }


`
const Content = styled.div`
    max-width:650px;
    padding:80px 40px;
    width:80%;
    display:flex;
    flex-direction:column;
    margin-top:100px;
    align-items:center;
    `
const Logo1 = styled.img`
width:90%;
`
const SignUp = styled.a`
      width:100%;
      background-color:#0063e5;
      font-weight:bold;
      padding:17px 0;
      color:#f9f9f9;
      border-radius:4px;
      text-align:center;
      font-size:18px;
      cursor:pointer;
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      letter-spacing:1.5px;
      margin-top:8px;
      margine-botton:12px;

      &:hover{
        background:#0483ee;
    }
`
const Description = styled.p`
    color:;
    font-size:11px;
    letter-spacing:1.5px;
    text-align:center;
    line-height:1.5;
`
const Logo2 = styled.img`
    width:90%;
`