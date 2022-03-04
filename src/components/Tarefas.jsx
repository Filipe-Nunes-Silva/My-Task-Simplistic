export const Tarefas = ({array,actionDeletar,actionConcluir})=>{

    const deleteItem = (item)=>{
        actionDeletar(item);
    };

    const concluirItem = (item)=>{
        actionConcluir(item);
    };




    return(
        <>
            {
                array.map((item,index)=>{
                    return (
                        <li key={index} className="li-tarefa">

                            <div className={item.feito ? 'feito' : 'not-feito'}>
                                <span>{item.text}</span>

                                <div className="buttons">
                                    <img 
                                        onClick={()=>{deleteItem(item)}} title="Excluir?"
                                        src="./assets/delete.png" 
                                        className="marcar" 
                                        alt="Deletar"
                                    />
                                    <img 
                                        onClick={()=>{concluirItem(item)}} 
                                        title={item.feito? 'Desmarcar Tarefa' : 'Marcar como Concluida'}
                                        src={item.feito?'./assets/check.png' : './assets/not-check.png'}
                                        className="excluir" alt="Concluir"
                                    />
                                </div>
                            </div>
                            
                        </li>

                    );
                })
            }
        </>
    );
};