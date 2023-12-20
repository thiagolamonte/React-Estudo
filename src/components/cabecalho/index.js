import { Link } from 'react-router-dom';
import './index.scss';

export default function Cabecalho(){


    return(
        <div className='comp-cabecalho'>
            <div className='container-cabecalho'>
                <img src='/assets/images/borboleta.png' alt='logo'  />

                <div className='menu'>
                    <ul>
                        <li>
                            <Link to="/"> Home </Link>
                        </li>
                        <li>
                            <Link to="/contato"> Contato </Link>
                        </li>
                        <li>
                            <Link to="/eventos"> Eventos </Link>
                        </li>
                    </ul>

                </div>
            </div>
            
        </div>    
    )
}