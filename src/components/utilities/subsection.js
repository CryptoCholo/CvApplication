import React from "react";
import styled from "styled-components";

export const Subsection = ({children,title,titlePadding,margin}) => {
    return (
        <SubSecContainer padding={titlePadding}>
            <Title margin={margin}>
                {title}
            </Title>
                {children}
        </SubSecContainer>
    )
}

const SubSecContainer = styled.section`
display:flex;
flex-direction: column;
padding: ${(props) => props.padding}
`
const Title = styled.h4`
padding: ${(props) => props.padding};
margin: ${(props) => props.margin};
line-height: 1.6;
`
