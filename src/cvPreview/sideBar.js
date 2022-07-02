import React from "react";
import styled from "styled-components";
import { Section } from "../components/utilities/section";
import { Subsection} from "../components/utilities/subsection";

export const Sidebar = ({personalInfo}) => {
  
    return (
        <SidebarContainer>
            <Pic src={personalInfo.photo}/>
            <Section title="Personal Details" direction="column" titlePadding="0.5em">
                <Subsection title="Address" titlePadding="0.5em">{personalInfo.address}</Subsection>
                <Subsection title="Phone Number" titlePadding="0.5em">{personalInfo.phoneNum}</Subsection>
                <Subsection title="Email" titlePadding="0.5em">{personalInfo.email}</Subsection>
            </Section>
        </SidebarContainer>
    )
}

const SidebarContainer = styled.div`
display: flex;
flex-direction: column;
padding: 0.8em;
background-color: ${({theme}) => theme.colors.sidebar}`

const Pic = styled.img`
margin: 0.3rem 0.3rem;
width: 95%
`