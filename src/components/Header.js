import styled from "styled-components";
// import { signInWithGoogle } from "../firebase"
// import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
import { auth, provider } from "../firebase";
// import { selectUserName, selectUserPhoto, setUserLoginDetails } from "../features/user/userSlice";

const Header = (props) => {

    const handleAuth = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                console.log(result)
            }).catch((error) => {
                alert(error.message)
            })

    }
    // const dispatch = useDispatch();
    // // const history = useHistory();
    // const userName = useSelector(selectUserName);
    // const userPhoto = useSelector(selectUserPhoto);

    // const handleAuth = () => {
    //     if (!userName) {
    //         auth.signInwithPopup(provider)
    //             .then((result) => {
    //                 setUser(result.user);

    //             }).catch(error => {
    //                 alert(error.message);
    //             });
    //     }
    // const setUser = (user) => {
    //     dispatch(
    //         setUserLoginDetails({
    //             name: user.displayName,
    //             email: user.email,
    //             photo: user.photoURL,
    //         })
    //     );
    //}
    return (
        <Nav>
            <Logo>
                <img
                    src="https://raw.githubusercontent.com/CleverProgrammers/cp-disney-plus-clone/64f94469c32e9d788a4af86200a333031c6bb835/public/images/logo.svg"
                    alt="Disney+"
                />
            </Logo>

            {!userName ? <Login onClick={handleAuth}>Login</Login>
                :
                <>

                    <NavMenu>
                        <a href="/home">
                            <img
                                src="https://raw.githubusercontent.com/CleverProgrammers/cp-disney-plus-clone/64f94469c32e9d788a4af86200a333031c6bb835/public/images/home-icon.svg"
                                alt="HOME"
                            />
                            <span>HOME</span>
                        </a>
                        <a href="/search">
                            <img
                                src="https://raw.githubusercontent.com/CleverProgrammers/cp-disney-plus-clone/64f94469c32e9d788a4af86200a333031c6bb835/public/images/search-icon.svg"
                                alt="SEARCH"
                            />
                            <span>SEARCH</span>
                        </a>
                        <a href="/watchlist">
                            <img
                                src="https://raw.githubusercontent.com/CleverProgrammers/cp-disney-plus-clone/64f94469c32e9d788a4af86200a333031c6bb835/public/images/watchlist-icon.svg"
                                alt="WATCHLIST"
                            />
                            <span>WATCHLIST</span>
                        </a>
                        <a href="/originals">
                            <img
                                src="https://raw.githubusercontent.com/CleverProgrammers/cp-disney-plus-clone/64f94469c32e9d788a4af86200a333031c6bb835/public/images/original-icon.svg"
                                alt="ORIGINALS"
                            />
                            <span>ORIGINALS</span>
                        </a>
                        <a href="/movies">
                            <img
                                src="https://raw.githubusercontent.com/CleverProgrammers/cp-disney-plus-clone/64f94469c32e9d788a4af86200a333031c6bb835/public/images/movie-icon.svg"
                                alt="MOVIES"
                            />
                            <span>MOVIES</span>
                        </a>
                        <a href="/series">
                            <img
                                src="https://raw.githubusercontent.com/CleverProgrammers/cp-disney-plus-clone/64f94469c32e9d788a4af86200a333031c6bb835/public/images/series-icon.svg"
                                alt="SERIES"
                            />
                            <span>SERIES</span>
                        </a>
                    </NavMenu>
                    <UserImg src={userPhoto} alt={userName} />
                </>}
            <Login onClick={handleAuth}>Login</Login>
        </Nav>
    );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
    align-items:center;
    display:flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0px;
    padding: 0px;
    position: relative;
    margin-right: auto;
    margin-left: 25px;

    a{
    display:flex;
    align-items:center;
    padding:0 12px;

    img{
        height: 20px;
        min-width:20px;
        width:20px;
        z-index: auto;
    }

    span{
        color: rgb(249, 249, 249);
        font-size: 13px;
        letter-spacing: 1.42px;
        line-height: 1.08;
        padding: 2px 0px;
        white-space: nowrap;
        position: relative;
    
        &:before{
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px; //vertical positioning
        content: "";
        height:2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scalex(0); 
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibilty: hidden;
        width: auto;
        // css function which defines transformation that resizes an element along the x-axis(horizontally)
        //cubic bezier is a function which used with animation and transition timing property
            }
        }
        &:hover{
         span: before{
            transform: scaleX(1);
            visiblity: visible;
            opacity: 1 !important;
          }
        }
    }

/*
    &media(max-width: 768px){
        display:none;
    }
*/
`;

const Login = styled.a`
background-color: rgba(0,0,0,0.6);
padding: 8px 16px;
text-transform: uppercase;
letter-spacing: 1.5px;
border-radius: 4px;
transition : all 0.2s ease 0s;

&:hover{
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
}
`;

const UserImg = styled.img`
height: 100%
`;

export default Header;
