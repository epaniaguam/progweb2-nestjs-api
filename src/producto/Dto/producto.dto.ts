import { IsNumber, IsString, IsUrl } from 'class-validator';

export class ProductoDto {
  @IsString()
  nombre: string;
  @IsNumber()
  precio: number;
  @IsNumber()
  cantidad: number;
  @IsUrl()
  image: string;
}
