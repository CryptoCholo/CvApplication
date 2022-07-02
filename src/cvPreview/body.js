import React from "react";
import styled from "styled-components";
import { Section } from "../components/utilities/section";
import { ExperienceItem } from "../cvPreview/experience";
import { EducationItem } from "../cvPreview/education";

export const Content = ({personalInfo, experience, education}) => {
   
    const experienceItems = experience.map(Item => {
        return <ExperienceItem key={Item.id} experienceItem={Item}/>
    });
    const educationItems = education.map(item => { 
       return <EducationItem key={item.id} educationItem={item}/>
    });
    return (
        <ContentContainer>
            <Section title="Description" titlePadding="0.5em 0em">
                <Description>{personalInfo.description}</Description>
            </Section>
            <Section title="Experience" direction="column" titlePadding="0.5em 0em">
                {experienceItems}
            </Section>
            <Section title="Education" direction="column" titlePadding="0.5em 0em">
                {educationItems}
            </Section>
        </ContentContainer>
    )
}

const ContentContainer = styled.div`
padding: 1rem;
background-color: ${({theme}) => theme.colors.bgcolor}
`

const Description = styled.div`
font-style: italic;
`