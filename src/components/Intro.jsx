import logo from '../imgs/todosi.png'
import {FaArrowAltCircleRight} from 'react-icons/fa'
/* css */
import './css/intro.css'

function Intro() {
    return (
        <div id='intro'>
            <div className='intro_info'>
                <div className='intro_info_text'>
                    <p>¡ENVIOS <strong>GRATIS</strong> A TODO EL PAIS!</p>
                    <p>Queremos que asegurar la entrega</p>
                    <p>del producto, confía en nosotros y</p>
                    <p><strong>paga el producto en la entrega.</strong></p>
                    <a href='/' className='btn btn-primary'>Ir a la tienda <FaArrowAltCircleRight /></a>
                </div>
                <img src={logo} />
            </div>
        </div>
    )
}

export default Intro