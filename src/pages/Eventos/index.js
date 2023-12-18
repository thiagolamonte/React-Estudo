import { Link } from 'react-router-dom';
import Cabecalho from '../../components/cabecalho';
import './index.scss';
import { useState } from 'react';

export default function Eventos(){
    const [contador, setContador] = useState(0); // criação de variável de estado serve para usar a variável no JSX
    
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [soma, setSoma] = useState(0);

    const [tarefas, setTarefas] = useState(['Estudar HTML', 'Estudar CSS']);

    const [novoItem, setNovoItem] = useState('');
    
    

    // let contador = 0;

    function clicou(){
        alert('Clicou no botão')
    }

    function alterou(e){
        let valor = e.target.value;
        alert('Usuário alterou o texto: ' + valor);
    }

    let numero = 10;
    let nome = 'Bruno';

    function aumentar(){
        //contador ++;
        setContador(contador + 1) // usando a variável de estado na função
    }

    function diminuir(){
        setContador(contador - 1) // usando a variável de estado na função
    }

    function calcularSoma(){
        let x = num1 + num2;
        setSoma(x);

    }

    function adicionarNovoItem(){
        setTarefas([...tarefas, novoItem]);
    }

    // function alterarN1(e){
    //     let valor = e.target.value;
    //     setNum1(Number(valor));
    // }

    //(e) => setNum1(Number(e.target.value)) //arrow function pode ser usada direto np JSX, ver uso abaixo

    // function alterarN2(e){
    //     let valor = e.target.value;
    //     setNum2(Number(valor));
    // }

    // (e) => setNum2(Number(e.target.value))

    return(

        <div className='pagina-eventos'>

            <Cabecalho/>

            <main>

                <h1> Eventos / Variáveis de estado </h1>

                <Link to="/"> Ir para a Home </Link>

            
                <button onClick={clicou}> Clique aqui </button>
                <input type='text' onChange={alterou}></input>

                <p>
                    {numero}
                </p>

                <p>
                    {nome}
                </p>

                <hr />

                <h1> Exemplo contatdor </h1>

                <div className='contatdor'>
                    <p>{contador}</p>
                    <button onClick={aumentar}> Aumentar </button>
                    <button onClick={diminuir}> diminuir </button>
                </div>

                <hr />

                <h1> Exemplo Somar </h1>

                <p>
                    Número 1:
                    <input type='text' value={num1} onChange={(e) => setNum1(Number(e.target.value))} />
                </p>
                <p>
                    Número 2:
                    <input type='text' value={num2} onChange={(e) => setNum2(Number(e.target.value))} />
                </p>
                <p>
                    <button onClick={calcularSoma}> Somar  </button>
                </p>
                <p>
                    Resultado: {soma}
                </p>

                <hr />

                <h1> Lista de tarefas </h1>

                <p>
                    Adicionar tarefa:
                    <input type='text' value={novoItem} onChange={(e) => setNovoItem(e.target.value)}  />
                    <button onClick={adicionarNovoItem}> Adicionar tarefa </button>
                </p>

                <ul>
                    {tarefas.map(item =>
                        <li> {item} </li>    
                    )}
                </ul>


            </main>

        </div>
    )
}