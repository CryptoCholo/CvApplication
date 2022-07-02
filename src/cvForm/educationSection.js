import React from "react";
import { Section } from "../components/utilities/section";
import { Button } from "../components/utilities/button";
import { EducationItem } from "./educationItem";

export const Education = ({education, onChange, onAdd, onDelete}) => {
    const items = education.map(item => (   
        <EducationItem
        key={item.id}
        id={item.id}
        educationItem={item}
        onChange={onChange}
        onDelete={onDelete}></EducationItem>
    ));
    return (
        <Section title="Education" titlePadding="1rem 0rem" direction="column">
            {items}
            <Button text="Add" onClick={onAdd} addBtn></Button>
        </Section>
    )
}