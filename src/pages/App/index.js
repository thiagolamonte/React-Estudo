import { Link } from 'react-router-dom';
import Cabecalho from '../../components/cabecalho';
import './index.scss';


function App() {
  return (
    <div className="pagina-app">
      <Cabecalho/>

      <main>

        <h1> 
          
          REACTJS &nbsp;
          <i className='fa fa-heart'></i> {/* icone do font wasome no site tem os nomes quem vai depois de fa fa- */}

        </h1>
        
        <hr />
        <Link to="/contato"> Ir para Contato </Link>
        <Link to="/eventos"> Ir para Eventos </Link>
        {/* <Link to="/discord"> Ir para Discord </Link> */}
      </main>
    </div>
  );
}

export default App;
