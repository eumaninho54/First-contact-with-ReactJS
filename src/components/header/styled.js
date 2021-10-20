import styled from 'styled-components';

export const AreaHeader = styled.div`
    height: 60px;
    color: aliceblue;
    background-color: transparent;

    .container{
        padding: 5px 20px;
        display: flex;
        align-items: center;
    }
        .logo{
            width: 60px;
            flex: 1;
        }
        .icone{
            width: 20px;
            margin-right: 30px;

        }
    
    nav{
        ul{
            display: flex;
        }
        li{
            list-style: none;
            margin-left: 20px;
            
            a{
                text-decoration: none;
                color: white;

                &:hover{
                    color: #fcfcc7;
                }
            }
        }
    }
`
