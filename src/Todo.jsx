import React, {useState,useEffect} from "react";
import './Todo.css';
import {Tarefas} from './components/Tarefas';
import { Formulario } from './components/Formulario';
import {Item} from './components/ClasseItem';

const Todo = ()=>{
    const [itens,setItens] = useState([]);
    const [showModal,setShowModal] = useState(false);
    const nameLocalStorage = 'savedItem';

    const addArray = (text)=>{
        let numeroID = itens.length;
        let novoItem = new Item(text,numeroID);
        let novoItemArray = [...itens,novoItem];
        setItens(novoItemArray);
        salvarTarefas(novoItemArray);
        setShowModal(false);
    };

    const deletarItemArray = (itemDel)=>{
       let newItens = itens.filter((item)=>{
            if(item.id === itemDel.id){
                return false;
            }; 
            return true;
       });
        setItens(newItens);
        salvarTarefas(newItens);
    };

    const concluirTarefa = (itemConcluido)=>{
        let newItens = itens.filter((item)=>{
            if(item.id === itemConcluido.id){
                item.feito = !item.feito;
            };
            return true;
        });
        setItens(newItens);
        salvarTarefas(newItens);
    };

    const salvarTarefas = (array)=>{
        const dados = JSON.stringify(array);
        localStorage.setItem(nameLocalStorage,dados);
    };

    useEffect(()=>{
        const itensSalvos = JSON.parse(localStorage.getItem(nameLocalStorage));
        if(itensSalvos){
            setItens(itensSalvos);
        }
        return;
    },[]);

    const hidenModal = (e)=>{
        let target = e.target;
        if(target.id === 'modal'){
            setShowModal(false);
        };
    };

    const btnShowModal = ()=>{
        setShowModal(true);
    };
    

    return(
        <div className="container" onClick={hidenModal}>

            <div className="add-btn-modal">
                <h1>My tasks</h1>
                <button onClick={btnShowModal}>+</button>
            </div>
            
            <div className={showModal ? 'modal' : 'modal hiddenModal'} id="modal">
                <h1 className="titulo-h1">Nova Tarefa</h1>
                <Formulario AddInArray={addArray}/>
            </div>
            
            <ul>
                <Tarefas actionDeletar={deletarItemArray} actionConcluir={concluirTarefa} array={itens}/>
            </ul>
        </div>
    );
};

export default Todo;