import React from "react";
import styled from "styled-components";

export const CVHeader = ({personalInfo}) => {
   
    const {firstName, lastName, title} = personalInfo;
    return (
        <HeaderContainer>
            <h1>{firstName} {lastName}</h1>
            <h2>{title}</h2>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
grid-column: span 2;
padding: 1.5rem;
background-color: ${({theme}) => theme.colors.blue};
color: white;
`