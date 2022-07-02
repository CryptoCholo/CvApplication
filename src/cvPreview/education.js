import React from "react";
import styled from "styled-components";
import {Subsection } from "../components/utilities/subsection";

export const EducationItem = ({educationItem}) => {
;
    return (
        <EduContainer>
            <Period>{educationItem.from} - {educationItem.to}</Period>
            <Info>
                <Subsection title={`${educationItem.universityName}, ${educationItem.city}`} margin="0.5em">
                    <P>Degree: {educationItem.degree}</P>
                    <P>Course: {educationItem.subject}</P>
                </Subsection>
            </Info>
        </EduContainer>

    )
}

const P = styled.p`
margin: 0.5em;
`

const Info = styled.div`
width: 75%;
`
const Period = styled.div`
width: 20%;
margin-top: 0.5em;
margin-right: 1.5rem;
font-weight: bold;
`
const EduContainer = styled.div`
display: flex;
align-items: flex-start;
gap: 10px;
`