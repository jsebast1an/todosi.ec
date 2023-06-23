

/* css */
import './extras.css'

// Array de objetos con categorías y sus imágenes
const categorias = [
  { nombre: 'Incluyeme', imagen: '../imagen-incluyeme.jpg' },
  { nombre: 'Belleza', imagen: 'ruta/imagen-belleza.jpg' },
  { nombre: 'Seguridad', imagen: 'ruta/imagen-seguridad.jpg' },
  { nombre: 'Mascotas', imagen: 'ruta/imagen-mascotas.jpg' },
  { nombre: 'Juguetes', imagen: 'ruta/imagen-juguetes.jpg' }
]

const CategoriasComponente = () => {
    return (
        <div className="categoria_container">
            {categorias.map((categoria, index) => (
                <div key={index} className='categoria'>
                    <h2>{categoria.nombre}</h2>
                    <img src={categoria.imagen} alt={categoria.nombre} />
                </div>
            ))}
        </div>
    )
}

export default CategoriasComponente;
