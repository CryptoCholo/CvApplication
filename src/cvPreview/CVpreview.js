import React from "react";
import styled from "styled-components";
import { CVHeader } from "./header";
import { Content } from "./body";
import { Sidebar } from "./sideBar";

export const CvPreview = ({personalInfo, experience, education})  => {
 
        return (
            <PreviewContainer>
                <CVHeader personalInfo={personalInfo}/>
                <Sidebar personalInfo={personalInfo}/>
                <Content
                personalInfo={personalInfo}
                experience={experience}
                education={education}/>
            </PreviewContainer>
        );
    };

const PreviewContainer = styled.div`
    width: 45vw;
    height: 100%;
    position: sticky;
    top: 8px;
    display: grid;
    grid-template-columns: 1.3fr 2.5fr;
    grid-template-rows: 0.8fr 4.2fr;
`