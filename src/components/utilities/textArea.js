import React from "react";
import styled from "styled-components";

export const TextArea = ({onChange, placeholder, name, value}) => {
    return (
        <TextEl
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        name={name}
        />
    )
}

const TextEl = styled.textarea`
    height: 100px;
    resize: none;
    border: 1px solid transparent;
    padding: 0.5rem;
    border-radius: 5px;

    &:hover {
        border: 1px solid black;
    }
`