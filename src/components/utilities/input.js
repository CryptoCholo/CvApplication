import React from "react";
import styled from "styled-components";

export const Input  = ({onChange, type, name, placeholder,value}) => {
         return (
            <InputEl
            onChange={onChange}
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            />
         ) 
}

const InputEl = styled.input`
    border: 1px solid transparent;
    padding: 0.5rem;
    border-radius: 5px;

    &:hover {
    border: 1px solid black;
    }
`;