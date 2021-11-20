import styled from 'styled-components';

const Conteiner = styled.div`
    margin: 20% 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const Input = styled.input`
    width: 100%;
    height: 9.5vh;
    border-radius: 9px;
    border: none;
    margin-bottom: 10px;
    font-size: 24px;
    color: #39404d;
    padding-left: 10px;

    ::placeholder{
        font-size: 24px;
        color: rgba(96, 72, 72, 0.4);
    }
`;

const Button = styled.button`
    margin-top: 10%;
    background-color: #8c97ea;
    border: none;
    border-radius: 8px;
    height: 56px;
    width: 55%;
    color: #fff;
    font-size: 30px;
    font-weight: 700;
`;

const SecondButton = styled.div`
    margin-top: 5%;
    height: 45px;
    color: #fff;
    font-size: 18px;
    font-weight: 700;
`

export {
    Conteiner,
    Input,
    Button,
    SecondButton,
}