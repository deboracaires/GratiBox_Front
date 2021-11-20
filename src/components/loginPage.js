import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import UserContext from '../contexts/userContext';
import { loginUser } from '../services/api.services';
import { Title } from '../styles/initialPageStyle';
import { ButtonLogin, Conteiner, Input, SecondButton} from '../styles/loginAndSignUpStyle';

export default function LoginPage() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext);

    function doLogin(e){
        e.preventDefault();
        const body = { email, password };
        if (email.substring(email.length - 4) !== '.com') {
            Swal.fire('Digite um nome com no mínimo 5 caracteres.');
        } else if (password.length < 5) {
            Swal.fire('Senha inválida! Digite uma senha com no mínimo 5 caracteres.');
        } else {
            loginUser(body)
                .then((res) => {
                    setUser(res.data);
                })
                .catch((err) => {
                    if (err.response.status === 401) {
                        Swal.fire('Senha incorreta! Tente novamente!');
                    } else if (err.response.status === 404) {
                        Swal.fire('Email não cadastrado!');
                    } else if (err.response.status === 400) {
                        Swal.fire('Dados inválidos! Tente novamente');
                    }
                });
        }
    }
    
    return (
        <Conteiner>
            <Title>Bem vindo ao GratiBox</Title>
            <form onSubmit={doLogin}>
                <Input type = 'email'
                    value = {email}
                    placeholder = 'Nome'
                    onChange={(e) => setEmail(e.target.value)}>
                </Input>
                <Input type = 'password'
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