// Variables para gestionar el precio y la imagen principal
let basePrice = 22705; // Precio inicial
const priceElement = document.getElementById('price');

// Función para cambiar la imagen principal
function changeImage(imageUrl) {
    const mainImage = document.getElementById('main-image');
    mainImage.src = imageUrl;
}

// Función para actualizar el precio según el color seleccionado
function updatePrice() {
    const colorSelect = document.getElementById('color');
    const selectedColor = colorSelect.value;
    basePrice = parseInt(selectedColor); // Cambia el precio dependiendo del color
    priceElement.innerText = `$${basePrice}`;
}

// Función para añadir al carrito
function addToCart() {
    const sizeSelect = document.getElementById('size');
    const selectedSize = sizeSelect.value;
    
    alert(`¡Añadido al carrito!\nColor: ${document.getElementById('color').selectedOptions[0].text}\nTamaño: ${selectedSize}\nPrecio: $${basePrice}`);
}
