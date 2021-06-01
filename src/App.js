import './App.css';
import { useState } from 'react'


function App() {

  const [tarefas, setTarefas] = useState([

    // {
    //   id:0,
    //   tarefa:'Minha tarefa do dia',
    //   finalizada: false
    // },
    // {
    //   id:0,
    //   tarefa:'Minha tarefa do dia 2',
    //   finalizada: true
    // }

  ]);

  const [modal, setModal] = useState(false);

  const salvarTarefa = ()=>{
    //TODO: Salvar tarefa.

    var tarefa = document.getElementById('content-tarefa');
    
    setTarefas([
      ... tarefas,
      {
        id: new Date().getTime(),
        tarefa: tarefa.value,
        finalizada:false
      }
    ]);

     
    setModal(false)
  }

  const marcarConcluida = (id) =>{
    let novasTarefas = tarefas.filter(function(val){
      if(val.id == id){
        val.finalizada = true;
      }
      return val;
    })

    setTarefas(novasTarefas)

  }

  const abrirModal = ()=>{
      setModal(!modal)
  }

  return (
    <div className="App">
        {
          modal?
          <div className="modal">
            <div className="modalContent">
              <h3>Adicionar sua tarefa</h3>
              <input id="content-tarefa" type="text"/>
              <button onClick={()=>salvarTarefa()}>Salvar!</button>
            </div>
          </div>
          :
          <div></div>
        }

        <div onClick={()=>abrirModal()} className="addTarefa">+</div>
        <div className="boxTarefas">
            <h2>Minha Tarefa do Dia!</h2>
            {
              tarefas.map((val) =>{
                if (!val.finalizada) {
                  return(
                    <p onClick={()=>marcarConcluida(val.id)}>{val.tarefa}</p>
                  );
                } else {
                  return(
                    <p onClick={()=>marcarConcluida(val.id)} style={{textDecoration:'line-through'}}>{val.tarefa}</p>
                  );
                }
              })
            }

        </div>
           
    </div>
  );
}

export default App;
