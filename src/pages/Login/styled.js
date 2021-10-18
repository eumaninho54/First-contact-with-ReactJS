import styled from "styled-components";

export const AreaLogin = styled.div `
    background-color: white;
    padding: 30px;
    max-width: 300px;
    margin: auto;
    margin-top: 20px;
    text-align: center;
    border-radius: 5px;
    box-shadow: 0px 0px 10px #ccc;
    color: black;
    transition: 0.7s;

    p{
        color: rgba(100, 100, 100, 0.675);
        font-size: 15px;
    }

    h1{
        color: black;
        font-size: 24px;
    }

    .form_input{
        text-align: left;

        label{
            display: block;
        }

        input{
            margin-bottom: 20px;
            padding: 10px;
            font-size: 16px;
            outline: none;
            border: 1px solid #ccc;
            border-radius: 5px;
            width: 280px;
            transition: 0.3s;

            &:hover{
            border: 2px solid #005FBE;
        }
        }


    }
    .footerLogin{
        font-size: 15px;

        a{
            padding-left: 8px;
            font-weight: bold;
        }
    }

    [data-anime]{
        opacity: 1;
        transition: 0.7s;
        transform: translate3d(0, 0px,0);
    }

    .animate{
            opacity: 1;
            transform: translate3d(0, 0 ,0);
            color: green;
        }

    .organize{
        display: flex;

        a{
            color: black;
            margin-right: 10px;
        }
    }

`