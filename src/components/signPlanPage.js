import { useContext } from 'react';
import UserContext from '../contexts/userContext.js';
import { Title, Subtitle  } from '../styles/planPageStyle.js';
import { CardConteiner, ConteinerSignPlan, BottomCard, Button } from '../styles/signPlanStyle.js';

export default function SignPlanPage(){
    
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
                <BottomCard>
                    <select className="select">
                        <option value='default'>Plano</option>
                        <option value="valor1">Valor 1</option>
                        <option value="valor2">Valor 2</option>
                        <option value="valor3">Valor 3</option>
                    </select>
                    <select className="select">
                        <option value='default'>Entrega</option>
                        <option value="valor1">Valor 1</option>
                        <option value="valor2">Valor 2</option>
                        <option value="valor3">Valor 3</option>
                    </select>
                    <div>
                        <h1 className = 'title'>Quero receber</h1>
                        <input type="checkbox"/>
                        <label>Chás</label>
                        <input type="checkbox"/>
                        <label>Incensos</label>
                        <input type="checkbox"/>
                        <label>Produtos orgânicos</label>
                    </div>
                </BottomCard>
            </CardConteiner>
            <Button>Próximo</Button>
        </ConteinerSignPlan>
    );
}