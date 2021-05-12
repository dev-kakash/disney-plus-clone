import React,{useEffect} from 'react'
import { auth,provider } from '../firebase'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import {setUserLogin,setSignOut,selectUserName,selectUserPhoto} from '../features/user/userSlice'
import {useDispatch,useSelector} from 'react-redux'


function Header() {
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);
    const dispatch = useDispatch({});
    const history = useHistory();

    useEffect(()=>{
        auth.onAuthStateChanged(async(user)=>{
            if(user){
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))
                history.push("/")
            }
        })
    },[])

    const signIn = () =>{
        auth.signInWithPopup(provider)
        
        .then((result)=>{
            let user = result.user
            dispatch(setUserLogin({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }))
            history.push("/")
        })
    }
    const signOut = () =>{
        auth.signOut()
        .then(()=>{
            dispatch(setSignOut())
            history.push("/login")

        })
    }
    return (
        <Nav>
           <Link to ={`/`}>
                <Logo src="/images/logo.svg"/>
           </Link> 
            
            {!userName ? (
                <LogInContainer>
                    <LogIn onClick={signIn}>Login</LogIn>
                </LogInContainer> 
                 ):(
                <>
                    <NavMenu>
                    
                        <a>
                            <img src="/images/home-icon.svg"/>
                            <span>HOME</span>
                        </a>
                        <a>
                            <img src="/images/search-icon.svg"/>
                            <span>SEARCH</span>
                        </a>
        
                        <a>
                            <img src="/images/watchlist-icon.svg"/>
                            <span>WATCHLIST</span>
                        </a>
        
                        <a>
                            <img src="/images/original-icon.svg"/>
                            <span>ORIGINALS</span>
                        </a>
                        <a>
                            <img src="/images/movie-icon.svg"/>
                            <span>MOVIES</span>
                        </a>
                        <a>
                            <img src="/images/series-icon.svg"/>
                            <span>SERIES</span>
                        </a>
                    </NavMenu>
                    <UserImg onClick={signOut} src="/images/profile.jpg"/> 
                </>)
                }
            
        </Nav>
    )
}

export default Header
const Nav = styled.nav`
    min-height:70px;
    padding:0 calc(3.5vw + 5px);
    height:70px;
    background:#090b13;
    display:flex;
    align-items:center;
    padding:0 36px;
    overflow-x:hidden;
    
`
const Logo = styled.img`
    width:80px;

`
const NavMenu = styled.div`
    display:flex;
    flex:1;
    margin-left:25px;
    aling-items:center;
   

    a{
        display:flex;
        align-items:center;
        padding:0 12px;
        cursor:pointer;

        img{
            height:22px;
        }
        span{
            font-size:13px;
            letter-spacing:1.42px;
            position:relative;

            &:after{
                content:"";
                height:2px;
                width:100%;
                display:block;
                background:white;
                position:absolute;
                left:0;
                right:0;
                transform-origin:left center;
               opacity:0;
               transform:scaleX(0);
               transition:all 350ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;

            }
        }
        &:hover{
            span:after{
                transform:scaleX(1);
                opacity:1;
            }
        }
    }


`
const UserImg = styled.img`
    width:40px;
    height:40px;
    border-radius:50%;
    cursor:pointer;

`

const LogIn = styled.div`
    border:1px solid rgb(249,249,249);
    padding:8px 16px;
    border-radius:4px;
    letter-spacing:1.5px;
    text-transform:uppercase;
    background:rgba(0,0,0,0.6);
    transition:all 0.3s ease 0s;
    cursor:pointer;
    
    &:hover{
        background:rgb(249,249,249);
        color:black;
        border-color:transparent;
    }
`

const LogInContainer= styled.div`
    flex:1;
    display:flex;
    justify-content:flex-end;
`