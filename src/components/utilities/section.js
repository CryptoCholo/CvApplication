import React from "react";
import styled from "styled-components";


export const Section = ({padding, titlePadding, contrastTitle, title, children, direction}) => {
    return (
    <SectionEl padding={padding}>
        <TitleEl padding={titlePadding} contrast={contrastTitle}>{title}</TitleEl>
        <Children direction={direction}>{children}</Children>
    </SectionEl>
    )
}

const SectionEl = styled.section`


`
const TitleEl = styled.h3`
padding: ${(prop) => prop.padding};
`
const Children = styled.div`
display: flex;
flex-direction: column;
gap: 15px;
`