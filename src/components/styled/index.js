import styled from "styled-components";

export const BtnDefaultIcons = styled.div `
    display: flex;
    align-items: center;
    padding: 10px;
    width: 100%;
    border-radius: 5px;
    border: 0px;
    outline: none;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 15px;
    transition: 0.4s;
    color: black;

    &:hover{
        background-color: #ccc;
        cursor: pointer;
    }
    .center{
        text-align: center;
        width: 100%;
    }
`

export const BtnDefault = styled.button`
    background-color: #0059B1;
    color: #fff;
    display: inline;
    width: 300px;
    border-radius: 5px;
    border: 0;
    padding: 10px;
    margin-bottom: 10px;

    &:hover{
        background-color: #0057AD;
        cursor: pointer;
    }

    &:active{
        transform: scale(0.99);
    }
`