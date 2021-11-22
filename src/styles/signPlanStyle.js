import styled from 'styled-components';

const ConteinerSignPlan = styled.div `
    margin: 10% 0 0 0;    
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CardConteiner = styled.div`
    width: 358px;
    height: 400px;
    background-color: #fff;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(https://github.com/driven-exercises/Projeto-GratiBox/blob/main/image03.jpg?raw=true);
    background-position: 20px -60px;
    background-repeat: no-repeat; 
    background-size: 340px;
    position: relative;
`;

const BottomCard = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 220px;
    background-color: #fff;
    border-radius: 0 0 25px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;

    select{
        width: 300px;
        background-color: rgba(224, 209, 237, 0.62);
        height: 44px;
        border-radius: 5px;
        border: none;
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        color: #4D65A8;
        padding-left: 8px;
        margin-bottom: 9px;
    }

    div{
        height: 100px;
        width: 300px;
        background-color: rgba(224, 209, 237, 0.62);
        border-radius: 5px;
        position: relative;
        padding-top: 24px;
        display: flex;
        flex-wrap: wrap;
        padding-left: 10px;
        align-items: center;

        .title{
            position: absolute;
            top: 0;
            left: 0;
            font-weight: 700;
            font-size: 18px;
            line-height: 21px;
            color: #4D65A8;
            padding-left: 10px;
            
        }
        input{
            width: 20px;
            height: 20px;
            text-align: center;
        }
        label{
            margin-right: 50px;
            font-weight: 300;
            font-size: 18px;
            line-height: 21px;
            color: #4D65A8;
        }
    }
`;

const BottomAddress = styled.div `
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 220px;
    background-color: #fff;
    border-radius: 0 0 25px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;

    input{
        width: 300px;
        background-color: rgba(224, 209, 237, 0.62);
        height: 44px;
        border-radius: 5px;
        border: none;
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        color: #4D65A8;
        padding-left: 8px;
        margin-bottom: 9px;

        ::placeholder{
            font-weight: 700;
            font-size: 18px;
            line-height: 21px;
            color: #4D65A8;
        }
    }

    div{
        width: 300px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        input{
            width: 178px;
        }

        select{
            width: 108px;
            background-color: rgba(224, 209, 237, 0.62);
            height: 44px;
            border-radius: 5px;
            border: none;
            font-weight: 700;
            font-size: 18px;
            line-height: 21px;
            color: #4D65A8;
            padding-left: 8px;
            margin-bottom: 9px;
        }
    }
`;

const Button = styled.button `
    position: absolute;
    bottom: 10px;
    background-color: #8C97EA;
    border-radius: 10px;
    border: none;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    height: 39px;
    color: #FFFFFF;
    width: 60%;
`;

export{
    ConteinerSignPlan,
    CardConteiner,
    BottomCard,
    BottomAddress,
    Button,
}