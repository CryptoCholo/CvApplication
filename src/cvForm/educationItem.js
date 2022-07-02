import React from "react";
import { Button } from "../components/utilities/button";
import { Input } from "../components/utilities/input";

export const EducationItem = ({id, educationItem, onChange, onDelete}) => {
    return (
        <>
        <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="universityName"
        placeholder="University"
        value={educationItem.universityName}/>
        <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="city"
        placeholder="City"
        value={educationItem.city}/>
        <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="degree"
        placeholder="Degree"
        value={educationItem.degree}/>
        <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="subject"
        placeholder="Course"
        value={educationItem.subject}/>
        <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="from"
        placeholder="From"
        value={educationItem.from}/>
        <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="to"
        placeholder="To"
        value={educationItem.to}/>
        <Button text="Delete" onClick={() => onDelete(id)} delBtn></Button>
        </>
    )
}