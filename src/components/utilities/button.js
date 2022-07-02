import React from "react";
import styled, { css } from "styled-components";

export const Button = ({text,onClick,addBtn,delBtn,loadBtn,resetBtn}) => {
    return (
        <ButtonEl 
        onClick={onClick}
        addBtn={addBtn}
        delBtn={delBtn}
        loadBtn={loadBtn}
        resetBtn={resetBtn}
        >{text}</ButtonEl>
    )
}

const ButtonEl = styled.button`
    padding: 0.5rem;
    border-radius: 5px;
    font-weight: 900;
    border: 1px solid transparent;
    color: white;
   
    ${(props) => 
        props.delBtn && 
        css`
            background-color: ${({theme}) => theme.colors.delBtn};
            
            &:hover {
                background-color: ${({theme}) => theme.colors.delBtnHover};
            }
            
            &:active {
                background-color: ${({theme}) => theme.colors.delBtnActive};
            }
        `
    }
    ${(props) => 
        props.addBtn && 
        css`
            background-color: ${({theme}) => theme.colors.addBtn};
            
            &:hover {
                background-color: ${({theme}) => theme.colors.addBtnHover};
            }
            
            &:active {
                background-color: ${({theme}) => theme.colors.addBtnActive};
            }
        `
    }
    ${(props) => 
        props.loadBtn && 
        css`
            background-color: ${({theme}) => theme.colors.loadBtn};
            
            &:hover {
                background-color: ${({theme}) => theme.colors.loadBtnHover};
            }
            
            &:active {
                background-color: ${({theme}) => theme.colors.loadBtnActive};
            }
        `
    }

    ${(props) => 
        props.resetBtn && 
        css`
            background-color: ${({theme}) => theme.colors.resetBtn};
            
            &:hover {
                background-color: ${({theme}) => theme.colors.resetBtnHover};
            }
            
            &:active {
                background-color: ${({theme}) => theme.colors.resetBtnActive};
            }
        `
    }
`

