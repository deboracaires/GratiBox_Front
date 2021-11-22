import { useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import SignContext from '../contexts/signContext.js';
import UserContext from '../contexts/userContext.js';
import { Title, Subtitle  } from '../styles/planPageStyle.js';
import { CardConteiner, ConteinerSignPlan, BottomCard, Button } from '../styles/signPlanStyle.js';

export default function SignPlanPage(){
    
    const [plan, setPlan] = useState('');
    const [deliverySelected, setDeliverySelected] = useState('');
    const [products, setProducts] = useState([]);

    const { user } = useContext(UserContext);
    const { setSign } = useContext(SignContext);

    const navigate = useNavigate();
    
    const plans = ['mensal', 'semanal'];
    const mensalDelivery = ['Dia 01', 'Dia 10', 'Dia 20'];
    const weekelyDelivery = ['Segunda', 'Quarta', 'Sexta'];

    function verifyCheckbox(e){
        let allProducts = products;
        let checked = false;
        for(let i = 0; i < products.length; i += 1){
            if(e.target.value === products[i]){
                checked = true;
            }
        }
        if (!checked){
            allProducts.push(e.target.value);
            setProducts(allProducts);
        } else {
            const filtered = allProducts.filter((product) => product !== e.target.value);
            setProducts(filtered);
        }
    }

    function continueSign(){
        if(plan === ''){
            Swal.fire('Selecione um plano para prosseguir!');
        } else if (deliverySelected === ''){
            Swal.fire('Selecione alguma forma de entrega para prosseguir!');
        } else if (products.length === 0){
            Swal.fire('Selecione no mínimo um produto para prosseguir!');
        } else {
            setSign({plan, deliverySelected, products});
            navigate('/assinar-plano-endereco');
        }
    }
    
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
                    <select value={plan} onChange = {e => setPlan(e.target.value)}>
                        <option value = 'default'>Plano</option>
                        {plans.map((p, index) => <option key={index} value={p}>{p}</option>)}
                    </select>
                    <select value={deliverySelected} onChange = {e => setDeliverySelected(e.target.value)}>
                        <option value='default' >Entrega</option>
                        {
                            plan === 'default' ?
                            (
                                <option value='Selecione um plano'>Selecione um plano</option>
                            )
                            :
                            (
                                
                                plan === 'mensal' ?
                                (
                                        mensalDelivery.map((p, index) => <option key={index} value={p}>{p}</option>)
                                )
                                :
                                (
                                    weekelyDelivery.map((p, index) => <option key={index} value={p}>{p}</option>)
                                )
                                
                            )

                        }
                    </select>
                    <div>
                        <h1 className = 'title'>Quero receber</h1>
                        <input onChange = {e => verifyCheckbox(e)}type="checkbox" value='chas'/>
                        <label>Chás</label>
                        <input onChange = {e => verifyCheckbox(e)}type="checkbox" value='incensos'/>
                        <label>Incensos</label>
                        <input onChange = {e => verifyCheckbox(e)}type="checkbox" value='organicos'/>
                        <label>Produtos orgânicos</label>
                    </div>
                </BottomCard>
            </CardConteiner>
            <Button onClick = {() => continueSign()}>Próximo</Button>
        </ConteinerSignPlan>
    );
}