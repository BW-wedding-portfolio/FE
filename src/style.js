import styled from "styled-components";

export const Header2 = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    color: #6a0000;
`

export const Paragraph = styled.p`
    font-family: 'Lato', sans-serif;
`
  
export const AppStyle = styled.div`
    text-align: center;    
`
  
export const WelcomeForm = styled.div`
    padding-top:10%
    height: 100%;
`
export const Portfolio = styled.div`
    height: 100%;
`

export const WelcomeButton = styled.button`
    border-radius: 10px;
    border: 4px solid #d4d7dd;
    padding: 10px 20px;
    background-color: #EAE9E9;
    font-size: 1.4rem;
    margin: 15px;
    &:hover {
        background-color: #d4d7dd;
        transition: .7s;
    }
`

export const Button = styled.button`
    border-radius: 10px;
    border: 4px solid #d4d7dd;
    padding: 10px 20px;
    background-color: #EAE9E9;
    font-size: 1.2rem;
    margin: 5%;
    &:hover {
        color: #EAE9E9;
        background-color: #6a0000;
        transition: .7s;
    }
`

export const Card = styled.div`
    background: rgb(212,215,221);
    background: radial-gradient(circle, rgba(212,215,221,1) 0%, rgba(234,233,233,1) 25%, rgba(246,246,246,1) 64%);
    color: #420000;
    box-shadow: 10px 10px 8px #888888;
    border-radius: 5%;
    width: 20%;
    margin: 1%;
    padding: 1%;
`
  
export const LogoWelcome = styled.img`
    margin-top: 6%;
`

export const CardContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

export const Input = styled.input`
    padding: 12px 20px;
    margin: 20px;
    font-size: 1.4rem;
    box-sizing: border-box;
    background-color: #EAE9E9;

`
export const TextArea = styled.textarea`
    padding: 12px 20px;
    margin: 20px;
    font-size: 1.4rem;
    box-sizing: border-box;
    background-color: #EAE9E9;
`
 
export const Nav = styled.div`
    font-size: 2rem;
    display: flex;
    justify-content: center;
    background-color: #F6F6F6;
    margin-top: 20px;
    a {
        padding: 15px;
    }
`

export const PortfolioHeader = styled.div`
    margin-top: 5%;
    font-size: 2.4rem;
`

export const UserInfoContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const UserInfo = styled.div`
    background-color: #F6F6F6;
    width: auto;
    font-size: 1.6rem;
    padding: 25px;
    border-radius: 5%;
    opacity: .6;
`

