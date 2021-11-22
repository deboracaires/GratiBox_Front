import styled from 'styled-components';

const Conteiner = styled.div`
    margin: 20% 0 0 0;    
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 33px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 5%;
    width: 90%;
`;

const Subtitle = styled.h1`
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 33px;
    color: #FFFFFF;
    margin-bottom: 12%;
    width: 90%;
`;

const CardBackground = styled.div`
    width: 358px;
    height: 400px;
    background-color: #e5cdb3;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(https://github.com/driven-exercises/Projeto-GratiBox/blob/main/image04.jpg?raw=true);
    background-position: 0px -75px;
    background-repeat: no-repeat; 
    background-size: 380px;
    position: relative;
`;

const BottomCard = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 170px;
    background-color: #e5cdb3;
    border-radius: 0 0 25px 25px;
    padding-top: 15px;

    h1{
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        color: #4D65AB;
        padding-left: 22px;
    }
    button {
        margin-left: calc((100% - 45%)/2);
        width: 45%;
        height: 39px;
        border: none;
        background-color: #8c97ea;
        border-radius: 10px;
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
        color: #fff;
        margin-top: 25px;
    }
`;
const CardBackgroundMonth = styled.div`
    width: 358px;
    height: 400px;
    background-color: #e5cdb3;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(https://github.com/driven-exercises/Projeto-GratiBox/blob/main/image02.jpg?raw=true);
    background-position: 0px -20px;
    background-repeat: no-repeat; 
    background-size: 380px;
    position: relative;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export {
    Conteiner,
    Title,
    Subtitle,
    CardBackground,
    BottomCard,
    CardBackgroundMonth,
}