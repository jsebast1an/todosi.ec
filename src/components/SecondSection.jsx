import './css/secondSection.css'; // Asegúrate de tener un archivo CSS para estilizar la galería


function SecondSection() {
    // Arreglo con los nombres de tus imágenes
    let imageNames = [
        'CEPILLO-ALISADOR.jpg',
        // 'DESCUENTO-STEP-ONE.jpg',
        'CEPILLO-MAGIC-BRUSH.jpg',
        'GUANTE-MASCOTA.jpg',
        'PROMO-COCINA.jpg',
        'promo-celular-portada.jpg',
        'LIMPIA-PELUSAS.jpg',
        'AFILADOR-POST.jpg',
        'DEPILADORA-DE-CRISTAL.jpg',
        'foco-parlante.jpg',
        'MAQUINA-CORTAPELO.jpg',
        'LIMPIADOR-DE-VIDRIO-MAGNETICO-POST.jpg',
        'microfono.jpg',
        'MINI-CAMARA-ESPIA-POST.jpg',
        'MINI-CONSOLA-RETRO.jpg',
        'mini-laser.jpg',
        'MOLINILLO-DE-CAFE-POST.jpg',
        'ORGANIZADOR-PARA-REFFRI.jpg',
        'pantalla-lcd.jpg',
        'PISTOLA-HIDROGEL.jpg',
        'POST-11-DE-ABRIL.jpg',
        'POST-15-DE-ABRIL.jpg',
        'post-18-de-abril.jpg',
        'POST-PICAPORTE.jpg',

        //imgs estilo viejo
        'CUBRE-PEZON.jpg',
        'audifonos-bluetooh.jpg',
        // Agrega el resto de los nombres de tus imágenes aquí
    ];

    return (
        <div id='secondSection' className="gallery">
            {imageNames.map((imageName, index) => (
                <div key={index} className="gallery-item">
                    <img src={`${process.env.PUBLIC_URL}/imgs/products/${imageName}`} 
                        alt={`Imagen ${index + 1}`}
                        width={350} />
                </div>
            ))}
        </div>
    );
}

export default SecondSection
