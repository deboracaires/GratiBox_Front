import styled from 'styled-components';

const ConteinerInitial = styled.div `
    margin: 15% 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const ImageStyle = styled.div`
    position: fixed;
    bottom: 13.64%;
    left: 0;
    z-index: -1;
    img {  
        width: 100%;
    }
`;
const Title = styled.h1`
    font-family: Roboto;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 33px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 12%;
`;
const Subtitle = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    color: #FFFFFF;
    width: 90%;
`;

const Bottom = styled.div`
    background-color: #4D65A8;
    width: 100%;
    height: 24%;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    button{
        margin-top: 5%;
        background-color: #8c97ea;
        border: none;
        border-radius: 8px;
        height: 45px;
        width: 55%;
        color: #fff;
        font-size: 18px;
        font-weight: 700;
    }
`;
const SecondButton = styled.div`
    margin-top: 5%;
    height: 45px;
    color: #fff;
    font-size: 18px;
    font-weight: 700;
`

export {
    ConteinerInitial,
    ImageStyle,
    Title,
    Subtitle,
    Bottom,
    SecondButton,
}