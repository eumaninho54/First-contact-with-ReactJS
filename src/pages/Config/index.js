import React, {useState} from "react";
import { AreaPage } from "../../components/main"

const Page = () => {

    const [ valor , setValor ] = useState(0)
    let dic = {
        id: 1,
        name: 2,
        aa: 'a'
    }

    function aumentar(){
        setValor(valor + 1)
    }
    return(
        <AreaPage>
            <div>
                <p>Quantidade de produtos no carrinho: <strong>{valor}</strong> </p>
                <button onClick={aumentar}>Adicionar + 1 no carrinho</button>
            </div>
        </AreaPage>
    )

}

export default Page