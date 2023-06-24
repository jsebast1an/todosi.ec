import imgBelleza from '../../imgs/imagen-belleza.jpg'
import imgJuguetes from '../../imgs/imagen-juguetes.jpg'
import imgCocina from '../../imgs/imagen-cocina.jpg'
import imgSeguridad from '../../imgs/imagen-seguridad.jpg'

/* css */
import './extras.css'

// Array de objetos con categorías y sus imágenes
const categorias = [
  { nombre: 'Belleza', imagen: imgBelleza },
  { nombre: 'Seguridad', imagen: imgSeguridad },
  { nombre: 'Cocina', imagen: imgCocina },
  { nombre: 'Juguetes', imagen: imgJuguetes }
]

const CategoriasComponente = () => {
    return (
        <div className="categoria_container">
            {
                categorias.map((categoria, index) => (
                    <div key={index} className='categoria'>
                        <h2>{categoria.nombre}</h2>
                        <img src={categoria.imagen} alt={categoria.nombre} />
                    </div>
                ))
            }
        </div>
    )
}

export default CategoriasComponente;
