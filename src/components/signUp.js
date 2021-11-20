import { useState } from 'react';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { registerUser } from '../services/api.services.js';
import { Title } from '../styles/initialPageStyle.js';
import { Button, Conteiner, Input, SecondButton } from '../styles/loginAndSignUpStyle.js';

export default function SignUp(){
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });
    
    function register(e){
        e.preventDefault();
        const body = { name, email, password };
        if (name.length < 5) {
            Swal.fire('Digite um nome com no mínimo 5 caracteres');
        } else if (email.substring(email.length - 4) !== '.com') {
            Swal.fire('Email inválido, tente novamente!');
        }else if (password !== confirmPassword) {
            Swal.fire('Senhas não coincidem, tente novamente!');
        } else if (password.length <5) {
            Swal.fire('Digite uma senha com no mínimo 5 caracteres');
        } else {
        registerUser(body)
            .then(() => {
                Toast.fire({
                    icon: 'success',
                    title: 'Cadastro realizado com sucesso'
                  });
                navigate('/login');
            })
            .catch((err) => {
                if (err.response.status === 409) {
                    Swal.fire('Email já cadastrado!');
                } else if (err.response.status === 400) {
                    Swal.fire('Dados inválidos, tente novamente!');
                }
            });
        }
    }
    return (
        <Conteiner>
            <Title>Bem vindo ao GratiBox</Title>
            <form onSubmit={register}>
                <Input type = 'text'
                       value = {name}
                       placeholder = 'Nome'
                       onChange={(e) => setName(e.target.value)}>
                </Input>
                <Input type = 'email'
                       value = {email}
                       placeholder = 'Email'
                       onChange={(e) => setEmail(e.target.value)}>
                </Input>
                <Input type = 'password'
                       value = {password}
                       placeholder = 'Senha'
                       onChange={(e) => setPassword(e.target.value)}>
                </Input>
                <Input type = 'password'
                       value = {confirmPassword}
                       placeholder = 'Confirme a senha'
                       onChange={(e) => setConfirmPassword(e.target.value)}>
                </Input>
                <Button type = 'submit'>Cadastrar</Button>
            </form>
            <SecondButton onClick = {() => navigate('/login')}>Já sou grato</SecondButton>
        </Conteiner>
    );
}