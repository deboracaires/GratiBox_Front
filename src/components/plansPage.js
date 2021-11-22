import { useContext } from 'react';
import { useNavigate } from 'react-router';
import UserContext from '../contexts/userContext.js';
import { Conteiner, Title, Subtitle, CardBackground, BottomCard, CardBackgroundMonth} from '../styles/planPageStyle.js';

export default function PlansPage () {
    
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    return (
        <Conteiner>
            <Title>
                Bom te ver por aqui, {user.name}.
            </Title>
            <Subtitle>
                Você ainda não assinou um plano, que tal começar agora?
            </Subtitle>
            <CardBackground>
                <BottomCard>
                    <h1>
                        Você recebe um box por semana.
                    </h1>
                    <h1>
                        Ideal para quem quer exercer a gratidão todos os dias.
                    </h1>
                    <button onClick = {() => navigate('/assinar-plano')}>Assinar</button>
                </BottomCard>                
            </CardBackground> 
            <CardBackgroundMonth>
                <BottomCard>
                    <h1>
                        Você recebe um box por mês.
                    </h1>
                    <h1>
                        Ideal para quem está começando agora.
                    </h1>
                    <button onClick = {() => navigate('/assinar-plano')}>Assinar</button>
                </BottomCard>                
            </CardBackgroundMonth>        
        </Conteiner>
    );
}