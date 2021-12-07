import React from 'react'
import styled from 'styled-components';
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline"
// import IconButton from "@material-ui/core/IconButton";
// import '../index.css'

function Header() {
    return (

        <HeaderContainer>
            {/* Header left */}
                <HeaderLeft>
                    <HeaderAvatar 
                        //add onclick
                        //add a pic as well!


                    />
                    <AccessTimeIcon/>
                </HeaderLeft>
            {/* Header Search */}

            <HeaderSearch>

                        <SearchIcon />
                        <input placeholder="Search..."/>

            </HeaderSearch>

            {/* Header Right */}

            <HeaderRight>
                <HelpOutlineIcon />

            </HeaderRight>

        </HeaderContainer>
    );
}

export default Header;


const HeaderContainer = styled.div`

    display: flex;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-space-between;
    padding: 10px 0;
    background-color: var(--slack-color);
    color: white;
    

`;

const HeaderLeft = styled.div `
    flex: 0.3;
    display: flex;
    align-items: center;
    margin-left: 20px;

    //to align the icon 30%
    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 30px;
    }
`;
const HeaderAvatar = styled(Avatar)`
    cursor: pointer;
    ::hover {
        opacity: 0.8;
    }
`;

const HeaderSearch = styled.div`
    flex: 0.4;
    opacity: 1;
    border-radius: 6px;
    display: flex;
    text-align: right;
    padding: 0 50px;
    background-color: 421f54;
    color: grey;
    border: 1px grey solid;

    > input {
        background-color: transparent;
        border: none;
        text-align: center;
        min-width: 30vw;
        outline: 0;
        color: white;
    }
`;


const HeaderRight = styled.div`
flex: 0.3;
display: flex;
align-items: flex-end;

> .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
}
  
`;