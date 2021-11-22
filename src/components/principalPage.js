import dayjs from 'dayjs';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../contexts/userContext.js';
import { getSignature } from '../services/api.services.js';
import { Title, Subtitle  } from '../styles/planPageStyle.js';
import { BottomCardPrincipal, ButtonPrincipal, CardPrincipal, ConteinerPrincipal, Products } from '../styles/principalStyle.js';

export default function PrincipalPage(){
    
    const [signature, setSignature] = useState([]);
    const { user } = useContext(UserContext);
    
    useEffect(() => {
        const config = {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        };
        getSignature(config)
            .then((res) => {
                setSignature(res.data);
            })
            .catch((err) => console.log(err));
    }, [user.token]);
    
    const signatureDate = dayjs(signature.signature_date).format('DD/MM/YYYY');
    let dates = [];
    let products = [];
    if(signature.length !== 0){
        setNextDeliveries();
    }
    function setNextDeliveries(){

        for(let i = 0; i < signature.delivery_history.length; i += 1){
            if(signature.delivery_history[i].delivered === false){
                const formatedDate = dayjs(signature.delivery_history[i].date).format('MM/DD/YYYY');
                dates.push(formatedDate);
            }
        }
        const parcialProducts = signature.products;
        for(let i = 0; i < parcialProducts.length; i += 1){
            if(parcialProducts[i] === 'cha'){
                products[i] = 'Chás';
            }
            if(parcialProducts[i] === 'organico'){
                products[i] = 'Produtos orgânicos';
            }
            if(parcialProducts[i] === 'incenso'){
                products[i] = 'Incensos';
            }
        }
    }
    
    dates = dates.slice(0, 3);

    
    return (
        <ConteinerPrincipal>
            <Title>
                Bom te ver por aqui, {user.name}.
            </Title>
            <Subtitle>
                "Agradecer é arte de atrair coisas boas"
            </Subtitle>
            <CardPrincipal>
                <BottomCardPrincipal>
                    {
                        signature.length === 0 ?
                        (
                            <p>Carregando...</p>
                        )
                        :
                        (
                            <>
                            <div>
                                <h1>Plano:</h1>
                                <h2>{signature.plan_name}</h2>
                            </div>
                            <div>
                                <h1>Data de assinatura:</h1>
                                <h2>{signatureDate}</h2>
                            </div>
                            
                                <h1>Próximas entregas:</h1>
                                <ul>
                                    {dates.map((date) => <li>{date}</li>)}
                                </ul>
                            
                            </>
                        )
                    }
                </BottomCardPrincipal>
                <Products>
                    {
                        products.map((product) => <h1>{product}</h1>)
                    }
                </Products>
            </CardPrincipal>
            <ButtonPrincipal>Avaliar entregas</ButtonPrincipal>
        </ConteinerPrincipal>
    );
}