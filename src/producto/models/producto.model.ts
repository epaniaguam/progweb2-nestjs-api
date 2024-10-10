export class ProductoModel {
  nombre: string;
  precio: number;
  cantidad: number;
  image: string;

  public constructor(
    nombre: string,
    precio: number,
    cantidad: number,
    image: string,
  ) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
    this.image = image;
  }
}
