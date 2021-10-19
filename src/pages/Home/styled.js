import styled from 'styled-components';



export const HeaderHome = styled.header`
    color:#D9E3EA ;
    margin: auto;
    font-size: 25px;
    
    max-width: 700px;
    text-align: center;

    div#lorem1{
        color:#9BA9B4;
    }

    img#ReactJs_img{
        width: 150px;
    }
    
    .font_high{
        font-size: 65px;
    }

    h1{
        margin-top: 0;
    }
`


export const MainHome = styled.main`
    margin: auto;
    max-width: 1500px;
    
    section{
        text-align: center;
        display: flex;
        justify-content: center;
        
        margin-top: 80px;

        img{
            max-width: 200px;
            align-self: flex-start;
            margin-left: 1%;
            margin-right: 1%;
        }
    }

    .article0{
        color: rgb(216, 216, 216);
        display: flex;
        flex-direction: column;
        max-width: 400px;
        

        h1{
            margin-bottom: 0;
            font-size: 30px ;
        }

        p{
            color: #9BA9B4 ;
            font-family: 'Nunito Sans', sans-serif;
        }
    }

    article#article0_left{
        margin-left: 5%;
        
    }

    article#article0_right{
        margin-right: 5%;
        h1{
            text-align: right;  
        }
    }

`


