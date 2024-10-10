import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { ProductoDto } from './Dto/producto.dto';

@Controller('producto')
export class ProductoController {
  constructor(private productoService: ProductoService) {}

  @Get()
  getProducto() {
    return this.productoService.getProducts();
  }

  @Post()
  createProducto(@Body() body: any) {
    // para el body falta crear su DTO que valide los datos
    // console.log('body', body);
    return this.productoService.create(body);
  }

  @Put()
  editarProducto(): string {
    return 'Editar producto';
  }

  @Delete()
  eliminarProducto(): string {
    return 'Eliminar Producto';
  }
}
