import styled from 'styled-components';

const ConteinerPrincipal = styled.div `
    margin: 10% 0 0 0;    
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CardPrincipal = styled.div`
    width: 358px;
    height: 400px;
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(https://github.com/driven-exercises/Projeto-GratiBox/blob/main/image03.jpg?raw=true);
    background-position: 20px -60px;
    background-repeat: no-repeat; 
    background-size: 340px;
    position: relative;
`;

const BottomCardPrincipal = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 200px;
    background-color: #fff;
    border-radius: 0 0 25px 25px;
    display: flex;
    flex-direction: column;
    padding: 0 20px;

    h1{
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
        color: #4D65A8;
        margin-right: 8px;
    }
    
    h2 {
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        color: #E63C80;
    }
    
    li{
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        color: #E63C80;
        margin-left: 50px;
    }

    div{
        display: flex;
    }
    
`;

const Products = styled.div`
    position: absolute;
    bottom: 15px;
    width: 100%;
    display: flex;
    justify-content: space-around;

    h1{
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        color: #E63C80;
    }
`;

const ButtonPrincipal = styled.button`
    position: absolute;
    bottom: 20px;
    background-color: #8C97EA;
    border-radius: 10px;
    border: none;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    height: 50px;
    color: #FFFFFF;
    width: 60%;
`;

export{
    ConteinerPrincipal,
    CardPrincipal,
    BottomCardPrincipal,
    Products,
    ButtonPrincipal,
}