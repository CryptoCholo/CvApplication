import React from "react";
import styled from "styled-components";
import {Subsection } from "../components/utilities/subsection";

export const ExperienceItem = ({experienceItem}) => {

    return (
        <ExpContainer>
            <Period>
                {experienceItem.from} - {experienceItem.to}
            </Period>
            <Info>
                <Subsection title={experienceItem.position} margin="0.5em">
                    <Company>
                        {experienceItem.company}, {experienceItem.city}
                    </Company>
                </Subsection>
            </Info>
        </ExpContainer>
    )
}

const ExpContainer = styled.div`
display: flex;
align-items: flex-start;
gap: 10px;
`

const Company = styled.div`
margin: 0.5em
`

const Period = styled.div`
width: 20%;
margin-top: 0.5em;
margin-right: 1.5rem;
font-weight: bold;
`

const  Info = styled.div`
width: 75%;
`