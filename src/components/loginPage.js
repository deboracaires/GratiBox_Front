import { Title } from "../styles/initialPageStyle";
import { ButtonLogin, Conteiner, Input, SecondButton} from "../styles/loginAndSignUpStyle";

export default function LoginPage() {
    
    function doLogin(){

    }
    
    return (
        <Conteiner>
            <Title>Bem vindo ao GratiBox</Title>
            <form onSubmit={doLogin}>
                <Input placeholder = 'Email'></Input>
                <Input placeholder = 'Senha'></Input>
                <ButtonLogin type = 'submit'>Entrar</ButtonLogin>
            </form>
            <SecondButton>Ainda não sou grato</SecondButton>
        </Conteiner>
    );
}