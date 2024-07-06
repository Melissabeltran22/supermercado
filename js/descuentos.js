export function aplicarDescuento(producto, cantidad) {
    let descuento = 0;
  
    if (producto.categoria === 'cuidado personal') {
      if (cantidad > 4 && cantidad <= 10) {
        descuento = 0.05;
      } else if (cantidad > 10 && cantidad <= 15) {
        descuento = 0.10;
      } else if (cantidad > 15) {
        descuento = 0.15;
      }
    }
    
    const precioSinDescuento = producto.precio * cantidad;
    const precioConDescuento = precioSinDescuento - (precioSinDescuento * descuento);
    
    return precioConDescuento;
  }
  