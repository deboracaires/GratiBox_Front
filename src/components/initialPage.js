import { useNavigate } from 'react-router';
import { Bottom, ConteinerInitial, ImageStyle, SecondButton, Subtitle, Title } from '../styles/initialPageStyle.js';

export default function InitialPage(){
    
    const navigate = useNavigate();
    
    return(
        <ConteinerInitial>
            <Title>
                Bem Vindo ao GratiBox
            </Title>
            <Subtitle>
                Receba em casa um box com chás, produtos orgânicos, incensos e muito mais...
            </Subtitle>
            <ImageStyle>
                <img src='https://raw.githubusercontent.com/driven-exercises/Projeto-GratiBox/main/image05.webp' alt=''/>
            </ImageStyle>
            <Bottom>
                <button onClick={() => navigate('/cadastro')}>Quero começar</button>
                <SecondButton onClick={() => navigate('/login')}>Já sou grato</SecondButton>
            </Bottom>
        </ConteinerInitial>
    );
}