import React from "react";
import { Input } from "../components/utilities/input";
import { Section } from "../components/utilities/section";
import { TextArea } from "../components/utilities/textArea";
import { FileInput } from "../components/utilities/fileInput";

export const Personal = ({personalInfo, onChange}) => {
    return (
        <Section title="Personal Information" titlePadding="1rem 0rem" direction="column">
            <Input 
            onChange={(e) => onChange(e)}
            type="text"
            name="firstName" 
            placeholder="First Name" 
            value={personalInfo.firstName}/>
            <Input
            onChange={(e) => onChange(e)}
            type="text"
            name="lastName" 
            placeholder="Last Name" 
            value={personalInfo.lastName}/>
            <Input
            onChange={(e) => onChange(e)}
            type="text"
            name="title" 
            placeholder="Title" 
            value={personalInfo.title}/>
            <FileInput
            onChange={(e) => onChange(e)}
            name="photo" 
            label="-Upload Photo-" 
            value={personalInfo.photo}/>
            <Input
            onChange={(e) => onChange(e)}
            type="text"
            name="address" 
            placeholder="Address" 
            value={personalInfo.address}/>
            <Input
            onChange={(e) => onChange(e)}
            type="email"
            name="email" 
            placeholder="Email" 
            value={personalInfo.email}/>
            <Input
            onChange={(e) => onChange(e)}
            type="tel"
            name="phoneNum" 
            placeholder="Phone Number" 
            value={personalInfo.phoneNum}/>
            <TextArea 
            onChange={(e) => onChange(e)}
            name="description"
            placeholder="Description"
            value={personalInfo.description}/>
        </Section>
    );
};