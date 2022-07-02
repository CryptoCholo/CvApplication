import React from "react";
import styled from "styled-components";

export const FileInput = ({label,name,onChange}) => {
    return(
        <Label>
        <FileEl
        onChange={onChange}
        name={name}
        type="file"
        />
        {label}
        </Label>
    )
}

const Label = styled.label`
    padding: 0.5rem;
    border-radius: 5px;
    color: #7b7e7b;
    font-size: 0.9rem;
    border: 1px solid transparent;
    background-color: #fff;
`

const FileEl = styled.input`
    display: none;
`