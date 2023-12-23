import { Link } from 'react-router-dom';
import Cabecalho from '../../components/cabecalho';
import Ingerida from '../../components/ingerida';
import Necessaria from '../../components/necessaria';

import './index.scss';


export default function App() {
  return (
    <div className="pagina-app">
      <Cabecalho/>

      <main>

        <h1> Wapp</h1>

        <Necessaria/>

        <Ingerida/> 

      
        
      </main>
    </div>
  );
}
