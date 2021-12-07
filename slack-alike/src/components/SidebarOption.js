import React from 'react';
// import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { db } from '../firebase.js';
//import {useCollection} from "react-firebase-hooks/firestore";

function SidebarOption({ Icon, title, addChannelOption }) {


    // const dispatch = useDispatch();
    // const [channels] = useCollection(db.collection("rooms"));
    // console.log(channels);

    const addChannel = () => {
        const channelName = prompt("Please enter channel name");
        if (channelName) {
          db.collection("rooms").add({
            name: channelName
          })
        }
      }


      const selectChannel = () => {
        // if (id) {
        //   dispatch(enterRoom({
        //     roomId: id
        //   }))
        // }
      }

    return( 
    <SidebarOptionContainer
        onClick={addChannelOption ? addChannel : selectChannel}>

        {Icon && <Icon font-size="small" style ={{padding: 10}} />}
        {Icon ? (
            <h3> {title} </h3>
        ): (
            <SidebarOptionChannel>
                <span>#</span> {title}
            </SidebarOptionChannel>
        )}
    </SidebarOptionContainer>
);
}

export default SidebarOption;

const SidebarOptionContainer = styled.div`
display: flex;
align-items: center;
font-size: 12px;
padding-left: 2px;
cursor: pointer;
:hover {
    opacity: 0.9;
    background-color: #340e36;
}
>h3 {
    font-weight: 500;
}

>h3 >span {
    padding: 15px;
}

`;

const SidebarOptionChannel = styled.div`
    padding: 10px;
    font-weight: 300;
`;