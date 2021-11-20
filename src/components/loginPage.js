import { useState } from 'react';
import Swal from 'sweetalert2';
import { Title } from '../styles/initialPageStyle';
import { ButtonLogin, Conteiner, Input, SecondButton} from '../styles/loginAndSignUpStyle';

export default function LoginPage() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function doLogin(e){
        e.preventDefault();
        if (email.substring(email.length - 4) !== '.com') {
            Swal.fire('Digite um nome com no mínimo 5 caracteres');
        } 
    }
    
    return (
        <Conteiner>
            <Title>Bem vindo ao GratiBox</Title>
            <form onSubmit={doLogin}>
                <Input type = 'text'
                    value = {email}
                    placeholder = 'Nome'
                    onChange={(e) => setEmail(e.target.value)}>
                </Input>
                <Input type = 'text'
                    value = {password}
                    placeholder = 'Nome'
                    onChange={(e) => setPassword(e.target.value)}>
                </Input>
                <ButtonLogin type = 'submit'>Entrar</ButtonLogin>
            </form>
            <SecondButton>Ainda não sou grato</SecondButton>
        </Conteiner>
    );
}