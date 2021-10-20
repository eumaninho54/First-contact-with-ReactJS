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
    
    
    section#section_0{
        text-align: center;
        display: flex;
        justify-content: center;
        
        margin-top: 80px;

        img{
            max-width: 200px;
            width: 20%;
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
            font-size: 20px;
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

    section#section_1{
        background-color: #0294ad;
        margin: auto;
        color:#D8D8D8;
        display: flex;
        justify-content: center;
        text-align: center;
        
        padding: 20px 10px 30px 10px;

        article{
            width: 40%;
        }

        h1{
            font-size: 30px ;
            color: rgb(216, 216, 216);
            margin-left: 50px;
        }

        p{
            margin-left: 50px;
            font-size: 20px;
            text-align: left;
        }
        ul{
            margin-left: 5%;
            font-size: 20px;
            
            li{
            text-align: left;

        }
        }
        #img_redes{
            width: auto;
            height: auto;
            max-width: 250px;
            align-self: flex-start;
            margin-right: 5%;
            margin-top: 30px;
            
        }
    } 
    
    section#section_2{
        background-color: #37393E;
        color:#D8D8D8 ;
        padding: 30px 10px;
        margin-bottom: 50px;
        display: flex;
        justify-content: center;

        article{
            width: 400px;
            margin-top: 30px;
            margin-right: 1%;

            h1{
            margin-top: 0;
            font-size: 30px;
        }
            p{
                font-size: 20px;
            }
        }

        img{
            width: 40%;
            max-width: 600px;
            align-self: center;
            margin-left: 1%;
            margin-top: -80px;
        }
    }


`


