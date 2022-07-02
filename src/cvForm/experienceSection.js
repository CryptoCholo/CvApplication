import React from "react";
import { Section } from "../components/utilities/section";
import { Button } from "../components/utilities/button";
import { ExperienceItem } from "./experienceItem";

export const Experience = ({experience, onAdd, onChange, onDelete}) => {
    const items = experience.map(item => 
        <ExperienceItem
        key={item.id}
        id={item.id}
        experienceItem={item}
        onChange={onChange}
        onDelete={onDelete}/>
    );
    return (
        <Section title="Experience" titlePadding="1rem 0rem" direction="column">
            {items}
        <Button text="Add" onClick={onAdd} addBtn></Button>
        </Section>
    )
}