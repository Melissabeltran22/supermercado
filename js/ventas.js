import { productos } from './productos.js';
import { aplicarDescuento } from './descuentos.js';

export let ventas = [];

export function registrarVenta(venta) {
  venta.productos.forEach(item => {
    const producto = productos.find(p => p.id === item.idProducto);
    if (!producto) return;
    
    const precioTotal = aplicarDescuento(producto, item.cantidad);
    
    ventas.push({
      producto: producto.nombre,
      categoria: producto.categoria,
      cantidad: item.cantidad,
      precioUnitario: producto.precio,
      precioTotal: precioTotal,
      hora: venta.hora
    });
  });
}

export function obtenerVentasPorCategoria() {
  return ventas.reduce((acc, venta) => {
    if (!acc[venta.categoria]) {
      acc[venta.categoria] = 0;
    }
    acc[venta.categoria] += venta.precioTotal;
    return acc;
  }, {});
}

export function obtenerVentasPorHora() {
  return ventas.reduce((acc, venta) => {
    if (!acc[venta.hora]) {
      acc[venta.hora] = 0;
    }
    acc[venta.hora] += 1;
    return acc;
  }, {});
}

