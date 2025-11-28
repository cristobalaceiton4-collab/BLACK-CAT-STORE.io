// BASE DE DATOS DE PRODUCTOS
const productos = [
    {
        id: 1,
        nombre: "Polerón Syna World Negro",
        marca: "Syna World",
        tipo: "Polerón",
        precio: 49990,
        imagen: "poleron syna world negro full.webp"
    },
    {
        id: 2,
        nombre: "Polerón Sp5der Negro y Amarillo",
        marca: "Sp5der",
        tipo: "Polerón",
        precio: 54990,
        imagen: "poleron sp5der negro amarillo.jpg"
    },
    {
        id: 3,
        nombre: "Polerón Syna World Verde",
        marca: "Syna World",
        tipo: "Polerón",
        precio: 49990,
        imagen: "poleron syna world negro verde.webp"
    },
    {
        id: 4,
        nombre: "Polerón Nike Tech Fleece Azul",
        marca: "Nike",
        tipo: "Polerón",
        precio: 79990,
        imagen: "nike tech azul.webp"
    },
    {
        id: 5,
        nombre: "Polerón Corteiz Negro Estrellas",
        marca: "Corteiz",
        tipo: "Polerón",
        precio: 65990,
        imagen: "corteiz negro estrellas.png"
    },
    {
        id: 6,
        nombre: "Polerón Corteiz Blanco",
        marca: "Corteiz",
        tipo: "Polerón",
        precio: 65990,
        imagen: "corteiz epico blanco.webp"
    },
    {
        id: 7,
        nombre: "Polerón Trapstar Amarillo",
        marca: "Trapstar",
        tipo: "Polerón",
        precio: 50000,
        imagen: "trapstar linea amarilla.webp"
    },
    {
        id: 8,
        nombre: "Polerón Trapstar azul rayos",
        marca: "Trapstar",
        tipo: "Polerón",
        precio: 65000,
        imagen: "trapstar azul rayos.jpeg"
    },
    {
        id: 9,
        nombre: "Polerón Trapstar shooters negro",
        marca: "Trapstar",
        tipo: "Polerón",
        precio: 59000,
        imagen: "poleron shoteers full negro.webp"
    },
    {
        id: 10,
        nombre: "Nike Tech Fleece Negro",
        marca: "Nike",
        tipo: "Polerón",
        precio: 85990,
        imagen: "poleron nike tech negro.webp"
    },
    {
        id: 11,
        nombre: "Denim Tears Negro Flores Blancas",
        marca: "Demin Tears",
        tipo: "Polerón",
        precio: 75990,
        imagen: "demin tears negro flores blancas.webp"
    },
    {
        id: 12,
        nombre: "Denim Tears Rosa Blanco",
        marca: "Demin Tears",
        tipo: "Polerón",
        precio: 75990,
        imagen: "Poleron demin tears rosa blanco.webp"
    },
    {
        id: 13,
        nombre: "Denim Tears Azul Flores Blancas",
        marca: "Demin Tears",
        tipo: "Polerón",
        precio: 75990,
        imagen: "demin tears azul blanco.avif"
    },
    {
        id: 14,
        nombre: "Denim Tears Blanco Flores Negras",
        marca: "Demin Tears",
        tipo: "Polerón",
        precio: 75990,
        imagen: "poleron demin tears gris blanco.webp"
    },
    {
        id: 15,
        nombre: "Denim Tears Verde Oliva",
        marca: "Demin Tears",
        tipo: "Polerón",
        precio: 78990,
        imagen: "poleron demin tears verde blanco.avif"
    },
    {
        id: 16,
        nombre: "Trapstar Shooters Rojo",
        marca: "Trapstar",
        tipo: "Polerón",
        precio: 69990,
        imagen: "poleron trapstar shooes rojo.jpeg"
    },
    {
        id: 17,
        nombre: "Trapstar Irongate Negro Blanco",
        marca: "Trapstar",
        tipo: "Polerón",
        precio: 72990,
        imagen: "casaca trapstar irongate blanca.avif"
    },
    {
        id: 18,
        nombre: "Trapstar Shooters Gris",
        marca: "Trapstar",
        tipo: "Polerón",
        precio: 68990,
        imagen: "poleron shooters gris azul.jpg"
    },
    {
        id: 19,
        nombre: "Nike Tech Fleece Gris",
        marca: "Nike",
        tipo: "Polerón",
        precio: 84990,
        imagen: "poleron nike tech gris.jpg"
    },
    {
        id: 20,
        nombre: "Nike Tech Fleece Verde",
        marca: "Nike",
        tipo: "Polerón",
        precio: 86990,
        imagen: "poleron nike tech verde.webp"
    },
    {
        id: 21,
        nombre: "Nike Tech Fleece Morado",
        marca: "Nike",
        tipo: "Polerón",
        precio: 87990,
        imagen: "poleron nike tech morado.avif"
    },
    {
        id: 22,
        nombre: "Trapstar Pantalón Negro",
        marca: "Trapstar",
        tipo: "Pantalón",
        precio: 62990,
        imagen: "pantalon trapstar shoters naranjo.webp"
    },
    {
        id: 23,
        nombre: "Trapstar Pantalón Rojo",
        marca: "Trapstar",
        tipo: "Pantalón",
        precio: 64990,
        imagen: "casaca trapstar blanca hd 4ka.webp"
    },
    {
        id: 24,
        nombre: "Nike Tech Fleece Jogger Negro",
        marca: "Nike",
        tipo: "Pantalón",
        precio: 69990,
        imagen: "pantalon nike tech negro.webp"
    },
    {
        id: 25,
        nombre: "Nike Tech Fleece Jogger Gris",
        marca: "Nike",
        tipo: "Pantalón",
        precio: 68990,
        imagen: "pantalon nike tech gris.avif"
    },
    {
        id: 26,
        nombre: "Denim Tears Jeans Negro",
        marca: "Demin Tears",
        tipo: "Pantalón",
        precio: 89990,
        imagen: "pantalon buzo demin tears negro.webp"
    },
    {
        id: 27,
        nombre: "Denim Tears Jeans Azul",
        marca: "Demin Tears",
        tipo: "Pantalón",
        precio: 89990,
        imagen: "pantalon buzo denim tears azul buzo.webp"
    },
    {
        id: 28,
        nombre: "Nike Air Force 1 '07 Blanco",
        marca: "Nike",
        tipo: "Zapatillas",
        precio: 94990,
        imagen: "air force one blanca.jpg"
    },
    {
        id: 29,
        nombre: "Adidas Yeezy Boost 350 V2",
        marca: "Adidas",
        tipo: "Zapatillas",
        precio: 149990,
        imagen: "yezy.webp"
    },
    {
        id: 30,
        nombre: "Nike Air Jordan 1 Mid",
        marca: "Nike",
        tipo: "Zapatillas",
        precio: 109990,
        imagen: "jordan 1 negras.png"
    },
    {
        id: 31,
        nombre: "Stussy Basic Logo Hoodie Gris",
        marca: "Stussy",
        tipo: "Polerón",
        precio: 55990,
        imagen: "poleron stussi.png"
    },
    {
        id: 32,
        nombre: "Carhartt WIP Chase Hoodie Marrón",
        marca: "Carhartt",
        tipo: "Polerón",
        precio: 69990,
        imagen: "poleron carhartt.png"
    },
    {
        id: 33,
        nombre: "Nike Sportswear Club Tee Negro",
        marca: "Nike",
        tipo: "Polera",
        precio: 29990,
        imagen: "polera nike fit negra.jpg"
    },
    {
        id: 34,
        nombre: "Adidas Essential 3-Stripes Tee",
        marca: "Adidas",
        tipo: "Polera",
        precio: 32990,
        imagen: "polera adidas lineas negra.png"
    },
    {
        id: 35,
        nombre: "Nike Windrunner Jacket Azul",
        marca: "Nike",
        tipo: "Chaqueta",
        precio: 84990,
        imagen: "chauqeta azul.png"
    },
    {
        id: 36,
        nombre: "Adidas SST Track Jacket Negro",
        marca: "Adidas",
        tipo: "Chaqueta",
        precio: 79990,
        imagen: "chandal negro adidas 2 lineas.png"
    },
    {
        id: 37,
        nombre: "Nike Dunk Low Retro Panda",
        marca: "Nike",
        tipo: "Zapatillas",
        precio: 99990,
        imagen: "nike dunk low retro negra.png"
    },
    {
        id: 38,
        nombre: "Vans Old Skool Classic Negro",
        marca: "Vans",
        tipo: "Zapatillas",
        precio: 64990,
        imagen: "vans old schol.png"
    },
    {
        id: 39,
        nombre: "Converse Chuck Taylor All Star",
        marca: "Converse",
        tipo: "Zapatillas",
        precio: 59990,
        imagen: "vans geis.png"
    }
];

// CARRITO
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// ACTUALIZAR CONTADOR
function actualizarContador() {
    const count = carrito.reduce((total, item) => total + item.cantidad, 0);
    const contador = document.getElementById('carrito-count');
    if (contador) {
        contador.textContent = count;
    }
}

// AGREGAR AL CARRITO
function agregarAlCarrito(idProducto) {
    const producto = productos.find(p => p.id === idProducto);
    
    if (!producto) {
        alert('Producto no encontrado');
        return;
    }
    
    const productoEnCarrito = carrito.find(item => item.id === idProducto);
    
    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else {
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            imagen: producto.imagen,
            cantidad: 1
        });
    }
    
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarContador();
    
    alert('✓ Producto agregado al carrito');
}

// FILTRAR PRODUCTOS
function filtrarProductos() {
    const buscador = document.getElementById('buscador').value.toLowerCase();
    const filtroMarca = document.getElementById('filtro-marca').value;
    const filtroTipo = document.getElementById('filtro-tipo').value;
    const filtroPrecio = document.getElementById('filtro-precio').value;
    
    const cards = document.querySelectorAll('.card-producto');
    
    cards.forEach(card => {
        const nombre = card.dataset.nombre.toLowerCase();
        const marca = card.dataset.marca;
        const tipo = card.dataset.tipo;
        const precio = parseInt(card.dataset.precio);
        
        let mostrar = true;
        
        if (buscador && !nombre.includes(buscador)) {
            mostrar = false;
        }
        
        if (filtroMarca && marca !== filtroMarca) {
            mostrar = false;
        }
        
        if (filtroTipo && tipo !== filtroTipo) {
            mostrar = false;
        }
        
        if (filtroPrecio) {
            const [min, max] = filtroPrecio.split('-').map(Number);
            if (precio < min || precio > max) {
                mostrar = false;
            }
        }
        
        if (mostrar) {
            card.classList.remove('oculto');
        } else {
            card.classList.add('oculto');
        }
    });
}

// LIMPIAR FILTROS
function limpiarFiltros() {
    document.getElementById('buscador').value = '';
    document.getElementById('filtro-marca').value = '';
    document.getElementById('filtro-tipo').value = '';
    document.getElementById('filtro-precio').value = '';
    
    const cards = document.querySelectorAll('.card-producto');
    cards.forEach(card => card.classList.remove('oculto'));
}

// CAMBIAR CANTIDAD
function cambiarCantidad(id, cambio) {
    const producto = carrito.find(item => item.id === id);
    if (producto) {
        producto.cantidad += cambio;
        if (producto.cantidad <= 0) {
            eliminarDelCarrito(id);
        } else {
            localStorage.setItem('carrito', JSON.stringify(carrito));
            mostrarCarrito();
            actualizarContador();
        }
    }
}

// ELIMINAR DEL CARRITO
function eliminarDelCarrito(id) {
    carrito = carrito.filter(item => item.id !== id);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
    actualizarContador();
}

// MOSTRAR CARRITO
function mostrarCarrito() {
    const contenedor = document.getElementById('carrito-items');
    const totalElement = document.getElementById('total');
    const carritoVacio = document.getElementById('carrito-vacio');
    const carritoLleno = document.getElementById('carrito-lleno');
    
    if (!contenedor) return;
    
    if (carrito.length === 0) {
        carritoVacio.style.display = 'block';
        carritoLleno.style.display = 'none';
        return;
    }
    
    carritoVacio.style.display = 'none';
    carritoLleno.style.display = 'block';
    
    contenedor.innerHTML = '';
    let total = 0;
    
    carrito.forEach(item => {
        total += item.precio * item.cantidad;
        
        const itemDiv = document.createElement('div');
        itemDiv.className = 'carrito-item';
        itemDiv.innerHTML = `
            <img src="${item.imagen}" alt="${item.nombre}" class="item-imagen">
            <div class="item-info">
                <h3>${item.nombre}</h3>
                <p>$${item.precio.toLocaleString('es-CL')}</p>
            </div>
            <div class="item-cantidad">
                <button class="btn-cantidad" onclick="cambiarCantidad(${item.id}, -1)">-</button>
                <span>${item.cantidad}</span>
                <button class="btn-cantidad" onclick="cambiarCantidad(${item.id}, 1)">+</button>
            </div>
            <button class="btn-eliminar" onclick="eliminarDelCarrito(${item.id})">Eliminar</button>
        `;
        contenedor.appendChild(itemDiv);
    });
    
    totalElement.textContent = `$${total.toLocaleString('es-CL')}`;
}

// FUNCIÓN PARA IR A PAGAR
function finalizarCompra() {
    if (carrito.length === 0) {
        alert('El carrito está vacío');
        return;
    }
    
    localStorage.setItem('carrito', JSON.stringify(carrito));
    window.location.href = 'mercadopago.html';
}

// INICIALIZAR
document.addEventListener('DOMContentLoaded', function() {
    actualizarContador();
    if (document.getElementById('carrito-items')) {
        mostrarCarrito();
    }
});