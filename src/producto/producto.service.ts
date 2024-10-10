import { Injectable } from '@nestjs/common';
import { ProductoModel } from './models/producto.model';
import { ProductEntity } from './entities/producto.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductoService {
  private products: ProductoModel[] = [
    new ProductoModel('Producto 1', 100, 10, 'https://via.placeholder.com/150'),
    new ProductoModel('Producto 2', 200, 20, 'https://via.placeholder.com/150'),
    new ProductoModel('Producto 3', 300, 30, 'https://via.placeholder.com/150'),
  ];

  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
  ) {}

  public getProducts(): Promise<ProductEntity[]> {
    // return this.products;
    return this.productRepository.find();
  }

  // se espera que devueva un objetivo de tipo ProductoModel
  public getProduct(nombre: string): Promise<ProductEntity> {
    // return this.products.find((p) => p.nombre === nombre);
    return this.productRepository.findOneBy({ nombre });
  }

  // void no devuelve
  public async create(producto: ProductEntity): Promise<void> {
    console.log('Producto creado', producto);
    // Paso intermedio para crear el objeto
    const prod = this.productRepository.create(producto);
    // this.products.push(producto);
    await this.productRepository.save(prod);
  }
}
