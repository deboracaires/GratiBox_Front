import { Title } from '../styles/initialPageStyle.js';
import { Button, Conteiner, Input, SecondButton } from '../styles/loginAndSignUpStyle.js';

export default function SignUp(){
    return (
        <Conteiner>
            <Title>Bem vindo ao GratiBox</Title>
            <Input placeholder='Nome'></Input>
            <Input placeholder='Email'></Input>
            <Input placeholder='Senha'></Input>
            <Input placeholder='Confirme a senha'></Input>
            <Button>Cadastrar</Button>
            <SecondButton>Já sou grato</SecondButton>
        </Conteiner>
    );
}