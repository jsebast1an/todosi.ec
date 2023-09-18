import logo from '../imgs/todosi.png'
import * as Fa from 'react-icons/fa'
/* css */
import './css/intro.css'

function Intro() {
    return (
        <div id='intro'>
            <div className='intro_info'>
                <div className='intro_info_text'>
                    <p>¡ENVÍOS <strong>GRATIS</strong> A TODO EL PAÍS!</p>
                    <p>Queremos asegurar la entrega</p>
                    <p>del producto, confía en nosotros y</p>
                    <p><strong>paga el producto en la entrega.</strong></p>
                    <a href='/' className='btn btn-dark'>Tienda Online <Fa.FaInstagram /></a>
                </div>
                <img src={logo} alt='logo'/>
            </div>
        </div>
    )
}

export default Intro