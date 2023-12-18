import { Link } from 'react-router-dom';
import Cabecalho from '../../components/cabecalho';
import './index.scss';


export default function Contato(){

    return(
        <div className='pagina-contato'>
            <Cabecalho/>
            <h1>Contato</h1>

            <img src='/assets/images/borboleta.png' alt='borboleta'  />

            <hr />
            <Link to="/"> Ir para a Home </Link>
        </div>
    )
}