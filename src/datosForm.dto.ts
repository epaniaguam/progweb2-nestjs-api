import { Type } from 'class-transformer';
import {
  IsAlpha,
  IsInt,
  IsOptional,
  Max,
  MaxDate,
  Min,
  MinDate,
} from 'class-validator';

export class DatosFormDTO {
  @IsAlpha()
  nombre: string;

  @IsInt({
    message: 'Edad debe ser un numero entero, error: $value es un string',
  })
  @Max(100, { message: 'Edad maxima 100, ingresaste: $value' })
  @Min(0, { message: 'Edad minima 0, ingresaste: $value ' })
  edad: number;

  @Type(() => Date)
  @MinDate(new Date('1900-01-01'))
  @MaxDate(new Date(), {
    message: 'La fecha no puede ser posterior a la fecha actual, you: $value',
  })
  @IsOptional()
  fechaNacimiento: Date;
}
