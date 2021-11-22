import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import SignContext from '../contexts/signContext.js';
import UserContext from '../contexts/userContext.js';
import { getSignatureData, postAddress, postSignature } from '../services/api.services.js';
import { Title, Subtitle  } from '../styles/planPageStyle.js';
import { CardConteiner, ConteinerSignPlan, BottomAddress, Button } from '../styles/signPlanStyle.js';

export default function SignAdressPage(){

    const [name, setName] = useState('');
    const [complement, setComplement] = useState('');
    const [cep, setCep] = useState('');
    const [city, setCity] = useState('');
    const [state, SetState] = useState('');
    const [planData, setPlanData] = useState([]);
    
    const { user } = useContext(UserContext);
    const { sign } = useContext(SignContext);

    const navigate = useNavigate();

    const allStates = ['RO', 'AC', 'AM', 'RR', 'PA', 'AP',
    'TO', 'MA', 'PI', 'CE','RN', 'PB', 'PE', 'AL', 'SE',
    'BA', 'MG', 'ES', 'RJ', 'SP', 'PR', 'SC', 'RS', 'MS',
    'MT', 'GO', 'DF'];

    useEffect(() => {
        const config = {
            headers: {
                'Authorization' : `Bearer ${user.token}`
            }
        }
        getSignatureData(config)
            .then((res) => {
                setPlanData(res.data);
            })
            .catch((err) => console.log(err));
    }, [user.token])

    function signPlan(){
        if(name.length < 4){
            Swal.fire('Digite seu nome completo.');
        }else if(name.split(' ').length < 3){
            Swal.fire('Digite seu nome completo!')
        }else if(complement.length < 5){
            Swal.fire('Digite um endereço com no mínimo 5 caracteres!');
        }else if(cep.length !== 9){
            Swal.fire('Digite um CEP válido!');
        }else if(city.length < 3){
            Swal.fire('Digite um nome de Cidade com no mínimo 3 caracteres!');
        }else if(state === 'default' || state === ''){
            Swal.fire('Selecione um estado antes de prosseguir!');
        } else {
            let delivery_plan = '';
            if(sign.deliverySelected === 'Dia 01'){delivery_plan = 'um'}
            if(sign.deliverySelected === 'Dia 10'){delivery_plan = 'dez'}
            if(sign.deliverySelected === 'Dia 20'){delivery_plan = 'vinte'}
            if(sign.deliverySelected === 'Segunda'){delivery_plan = 'segunda'}
            if(sign.deliverySelected === 'Quarta'){delivery_plan = 'quarta'}
            if(sign.deliverySelected === 'Sexta'){delivery_plan = 'sexta'}
            let plan_id = 0;
            let delivery_plan_id = 0;
            let products = [];
            for(let i = 0; i < planData.plans.length; i += 1){
                if(sign.plan === planData.plans[i].name){
                    plan_id = planData.plans[i].id;
                }
            }
            for(let i = 0; i < planData.delivery_plans.length; i += 1){
                if(delivery_plan === planData.delivery_plans[i].name){
                    delivery_plan_id = planData.delivery_plans[i].id;
                }
            }
            for(let i = 0; i < sign.products.length; i += 1){
                for(let j = 0; j < planData.products.length; j += 1){
                    if(sign.products[i] === planData.products[j].name){
                        products.push(planData.products[i].id);
                    }
                }
            }
            const signature_date = dayjs().format('MM/DD/YYYY');
            const bodySignature = {
                plan_id,
                delivery_plan_id,
                signature_date,
                products
            };
            const bodyAdress = {
                complement,
                cep,
                city_name: city,
                state_name: state
            };
            const config = {
                headers: {
                    'Authorization' : `Bearer ${user.token}`
                }
            }

            postSignature(config, bodySignature)
                .then((res) => navigate('/pagina-principal'))
                .catch((err) => {
                    if(err.response.status === 409){
                        Swal.fire('Você já possui um plano assinado nessa conta!');
                        navigate('/pagina-principal');
                    }else if(err.response.status === 404 || err.response.status === 401){
                        Swal.fire('Houve alguma falha de login, entre novamente em sua conta!');
                        navigate('/login');
                    }else if(err.response.status === 400){
                        Swal.fire('Ops! Algum dado está incorreto! Tente novamente!');
                        navigate('/login');
                    }
                });

            postAddress(config, bodyAdress)
                .then((res) => navigate('/pagina-principal'))
                .catch((err) => {
                    if(err.response.status === 409){
                        Swal.fire('Você já possui um plano assinado nessa conta!');
                        navigate('/pagina-principal');
                    }else if(err.response.status === 404 || err.response.status === 401){
                        Swal.fire('Houve alguma falha de login, entre novamente em sua conta!');
                        navigate('/login');
                    }else if(err.response.status === 400){
                        Swal.fire('Ops! Algum dado está incorreto! Tente novamente!');
                        navigate('/login');
                    }
                });
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
            <BottomAddress>
                <input 
                    value = {name}
                    onChange = {(e) => setName(e.target.value)}
                    type='text'
                    placeholder = 'Nome completo'>
                </input>
                <input 
                    value = {complement}
                    onChange = {(e) => setComplement(e.target.value)}
                    type='text'
                    placeholder='Endereço de entrega'>
                </input>
                <input
                    value = {cep}
                    onChange = {(e) => setCep(e.target.value)}
                    type='text'
                    placeholder='CEP'>
                </input>
                <div>
                    <input
                        value = {city}
                        onChange = {(e) => setCity(e.target.value)} 
                        type='text'
                        placeholder='Cidade'>
                    </input>
                    <select value = {state} onChange = {(e) => SetState(e.target.value)}>
                        <option value = 'default'>Estado</option>
                        {allStates.map((s, index) => <option key={index} value={s}>{s}</option>)}
                    </select>
                </div>
                
            </BottomAddress>
        </CardConteiner>
        <Button onClick={signPlan}>Finalizar</Button>
    </ConteinerSignPlan>
    );
}