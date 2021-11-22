import { useContext } from 'react';
import UserContext from '../contexts/userContext.js';
import { Title, Subtitle  } from '../styles/planPageStyle.js';
import { CardConteiner, ConteinerSignPlan, BottomAddress, Button } from '../styles/signPlanStyle.js';

export default function SignAdressPage(){
    
    const { user } = useContext(UserContext);
    
    return (
        <ConteinerSignPlan>
        <Title>
            Bom te ver por aqui, {user.name}.
        </Title>
        <Subtitle>
            "Agradecer é arte de atrair coisas boas"
        </Subtitle>
        <CardConteiner>
            <BottomAddress>
                <input 
                    placeholder='Nome completo'>
                </input>
                <input 
                    placeholder='Endereço de entrega'>
                </input>
                <input 
                    placeholder='CEP'>
                </input>
                <div>
                    <input 
                        placeholder='Cidade'>
                    </input>
                    <select>
                        <option value = 'default'>Estado</option>
                    </select>
                </div>
                
            </BottomAddress>
        </CardConteiner>
        <Button>Finalizar</Button>
    </ConteinerSignPlan>
    );
}