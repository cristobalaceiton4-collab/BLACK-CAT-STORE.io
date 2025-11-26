let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Mostrar resumen
function mostrarResumen() {
    const contenedor = document.getElementById('resumen-items');
    const totalElement = document.getElementById('resumen-total');
    let total = 0;
    
    contenedor.innerHTML = '';
    
    carrito.forEach(item => {
        total += item.precio * item.cantidad;
        const itemDiv = document.createElement('div');
        itemDiv.className = 'resumen-item';
        itemDiv.innerHTML = `
            <span>${item.nombre} x${item.cantidad}</span>
            <span>$${(item.precio * item.cantidad).toLocaleString('es-CL')}</span>
        `;
        contenedor.appendChild(itemDiv);
    });
    
    totalElement.textContent = `$${total.toLocaleString('es-CL')}`;
}

// Enviar pedido
function enviarPedido(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    // Crear mensaje del pedido
    let mensaje = '=== NUEVO PEDIDO - BLACK CAT STORE ===\n\n';
    mensaje += '--- DATOS DEL CLIENTE ---\n';
    mensaje += `Nombre: ${formData.get('nombre')}\n`;
    mensaje += `Email: ${formData.get('email')}\n`;
    mensaje += `Teléfono: ${formData.get('telefono')}\n`;
    mensaje += `Dirección: ${formData.get('direccion')}\n`;
    mensaje += `Ciudad: ${formData.get('ciudad')}\n`;
    mensaje += `Región: ${formData.get('region')}\n`;
    if (formData.get('comentarios')) {
        mensaje += `Comentarios: ${formData.get('comentarios')}\n`;
    }
    
    mensaje += '\n--- PRODUCTOS ---\n';
    let total = 0;
    carrito.forEach(item => {
        mensaje += `• ${item.nombre}\n`;
        mensaje += `  Cantidad: ${item.cantidad}\n`;
        mensaje += `  Precio unitario: $${item.precio.toLocaleString('es-CL')}\n`;
        mensaje += `  Subtotal: $${(item.precio * item.cantidad).toLocaleString('es-CL')}\n\n`;
        total += item.precio * item.cantidad;
    });
    
    mensaje += `TOTAL: $${total.toLocaleString('es-CL')}`;
    
    // Enviar por email usando mailto (abre cliente de email)
    const emailDestino = 'tupedidos@blackcatstore.com'; // CAMBIA ESTO
    const asunto = 'Nuevo Pedido - Black Cat Store';
    const mailtoLink = `mailto:${emailDestino}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(mensaje)}`;
    
    window.location.href = mailtoLink;
    
    // Limpiar carrito
    setTimeout(() => {
        localStorage.removeItem('carrito');
        alert('Gracias por tu pedido! Se abrirá tu cliente de email para enviarnos los detalles.');
        window.location.href = 'index.html';
    }, 1000);
}

document.addEventListener('DOMContentLoaded', mostrarResumen);