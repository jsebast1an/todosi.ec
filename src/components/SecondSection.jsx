import * as Bootstrap from 'react-bootstrap'
import {Carousel} from 'react-responsive-carousel';
import { useState } from 'react';


import './css/secondSection.css'; // Asegúrate de tener un archivo CSS para estilizar la galería
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importa los estilos del carrusel

    
let imageNames = [
    //promo
    { name: 'DESCUENTO-STEP-ONE.jpg', category: 'promo', category_2: ''},
    { name: 'promo-step-one-2.jpg', category: 'promo', category_2: ''},
    { name: 'PROMO-COCINA.jpg', category: 'promo', category_2: ''},

    //belleza
    { name: 'post-step-one.jpg', category: 'ropa', category_2: ''},
    { name: 'CEPILLO-ALISADOR.jpg', category: 'belleza', category_2: ''},
    { name: 'DEPILADORA-DE-CRISTAL.jpg', category: 'belleza', category_2: ''},
    { name: 'MAQUINA-CORTAPELO.jpg', category: 'belleza', category_2: 'tecnología'}, //cambiar precio 12.99
    { name: 'CUBRE-PEZON.jpg', category: 'belleza', category_2: ''},
    
    //hogar
    { name: 'CEPILLO-MAGIC-BRUSH.jpg', category: 'hogar', category_2: ''},
    { name: 'AFILADOR-POST.jpg', category: 'hogar', category_2: 'cocina'},
    { name: 'LIMPIADOR-DE-VIDRIO-MAGNETICO-POST.jpg', category: 'hogar', category_2: ''}, //cambiar precio 12.99
    { name: 'mini-laser.jpg', category: 'hogar', category_2: 'tecnología'},
    { name: 'MOLINILLO-DE-CAFE-POST.jpg', category: 'hogar', category_2: ''},
    { name: 'ORGANIZADOR-PARA-REFFRI.jpg', category: 'hogar', category_2: ''},
    { name: 'POST-15-DE-ABRIL.jpg', category: 'hogar', category_2: ''},
    { name: 'POST-PICAPORTE.jpg', category: 'hogar', category_2: ''}, //cambiar a 19.99
    { name: 'PURIFICADOR-DE-AGUA-SWS.jpg', category: 'hogar', category_2: ''}, //cambiar a 10.99
    
    //mascotas
    { name: 'GUANTE-MASCOTA.jpg', category: 'mascotas', category_2: ''},
    { name: 'LIMPIA-PELUSAS.jpg', category: 'mascotas', category_2: ''},
    { name: 'REMOVEDOR-DE-PELO.jpg', category: 'mascotas', category_2: 'hogar'},

    
    //celular
    { name: 'promo-celular-portada.jpg', category: 'celular', category_2: ''},
    { name: 'foco-parlante.jpg', category: 'celular', category_2: ''},
    { name: 'protector-de-celular-waterproof.jpg', category: 'celular', category_2: 'hogar'},
    { name: 'microfono.jpg', category: 'celular', category_2: ''}, //cambiar a 14.99
    { name: 'POST-11-DE-ABRIL.jpg', category: 'celular', category_2: ''},
    { name: 'audifonos-bluetooh.jpg', category: 'celular', category_2: ''}, //cambiar

    //seguridad
    { name: 'MINI-CAMARA-ESPIA-POST.jpg', category: 'seguridad', category_2: 'hogar'}, //cambiar a 14.99
    
    //niños
    { name: 'MINI-CONSOLA-RETRO.jpg', category: 'niños y niñas', category_2: 'juguetes'}, //cambiar a 19.99

    //tecnología
    { name: 'pantalla-lcd.jpg', category: 'tecnología', category_2: 'niños y niñas'},
    { name: 'post-gps', category: 'tecnología', category_2: 'hogar'},

    //juguetes
    { name: 'PISTOLA-HIDROGEL.jpg', category: 'juguetes', category_2: 'niños y niñas'},

];

function SecondSection() {

    let [selectedCategory, setSelectedCategory] = useState('all');
 
    let handleCategoryChange = (category) => {
        setSelectedCategory(category)
    }

    const filteredImages = selectedCategory === 'all' ? imageNames : imageNames.filter((image) => image.category === selectedCategory || image.category_2 === selectedCategory);

    return (
        <div id="secondSection" className="gallery">
            <div id='dividerSecondSection' className="custom-shape-divider-top-1687540991">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                </svg>
            </div>

            <h4>Nuestros productos</h4>
            
            <Bootstrap.Form.Select 
                    onChange={(e) => handleCategoryChange(e.target.value)} 
                    style={{ width: '320px', margin: '1rem auto'}}>
                <option value="all">Selecciona una opción</option>
                <option value="all">Todos los productos</option>
                <option value="promo">Promociones Septiembre</option>
                <option value="belleza">Belleza</option>
                <option value="hogar">Hogar</option>
                <option value="mascotas">Mascotas</option>
                <option value="celular">Accesorios para celular</option>
                <option value="seguridad">Seguridad</option>
                <option value="niños y niñas">Niños y niñas</option>
                <option value="tecnología">Tecnología</option>
                <option value="juguetes">Juguetes</option>
            </Bootstrap.Form.Select>

            <Carousel 
                id="productsCarousel"
                showThumbs={true} 
                showIndicators={false}
                showStatus={false} 
                infiniteLoop={false}
                centerMode={true}
                centerSlidePercentage={100}
                // width={'330px'}
                >
                    {filteredImages.map((imageName, index) => (
                    <div key={index} className="gallery-item">
                        <img
                        src={`${process.env.PUBLIC_URL}/imgs/products/${imageName.name}`}
                        alt={`Imagen ${index + 1}`}
                        width={350}
                        />
                    </div>
                    ))}
            </Carousel>
        </div>
    )      

}

export default SecondSection
