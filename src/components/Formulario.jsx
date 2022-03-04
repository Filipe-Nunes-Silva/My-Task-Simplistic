import {useState} from "react";

export const Formulario = ({AddInArray})=>{

    const [text,setText] = useState('');

    const valorInput = (event)=>{
        let dados = event.target.value;
        setText(dados);
    };
    const addItem = (event)=>{
        event.preventDefault();

        if(text.trim()){
            AddInArray(text);
            setText('');   
        };
    };

    return(
        <>
            <form className="formulario">
                <input type="text" onChange={valorInput} value={text}/>
                <button onClick={addItem}>Adicionar</button>
            </form>
        </>
    );
};