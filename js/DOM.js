import { ventas, registrarVenta, obtenerVentasPorCategoria, obtenerVentasPorHora } from './ventas.js';

export function mostrarVentas() {
  const ventasList = document.getElementById('ventas-list');
  ventasList.innerHTML = '';
  ventas.forEach(venta => {
    const ventaItem = document.createElement('li');
    ventaItem.textContent = `${venta.producto} - Cantidad: ${venta.cantidad} - Precio Unitario: ${venta.precioUnitario} - Precio Total: ${venta.precioTotal}`;
    ventasList.appendChild(ventaItem);
  });
}

export function mostrarIngresosPorCategoria() {
  const categorias = obtenerVentasPorCategoria();
  const categoriasList = document.getElementById('categorias-list');
  categoriasList.innerHTML = '';
  Object.keys(categorias).sort((a, b) => categorias[b] - categorias[a]).forEach(categoria => {
    const categoriaItem = document.createElement('li');
    categoriaItem.textContent = `${categoria}: ${categorias[categoria]}`;
    categoriasList.appendChild(categoriaItem);
  });
}

export function mostrarVentasPorHora() {
  const horas = obtenerVentasPorHora();
  const horasList = document.getElementById('horas-list');
  horasList.innerHTML = '';
  Object.keys(horas).sort((a, b) => horas[b] - horas[a]).forEach(hora => {
    const horaItem = document.createElement('li');
    horaItem.textContent = `${hora}: ${horas[hora]}`;
    horasList.appendChild(horaItem);
  });
}

export function mostrarTique() {
  const tique = document.getElementById('tique');
  tique.innerHTML = '';
  ventas.forEach(venta => {
    const ventaItem = document.createElement('p');
    ventaItem.textContent = `Producto: ${venta.producto}, Cantidad: ${venta.cantidad}, Precio Unitario: ${venta.precioUnitario}, Precio Total: ${venta.precioTotal}`;
    tique.appendChild(ventaItem);
  });
}

export function actualizarDOM() {
  mostrarVentas();
  mostrarIngresosPorCategoria();
  mostrarVentasPorHora();
  mostrarTique();
}
