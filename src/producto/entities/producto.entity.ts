import {
  Column,
  Entity,
  ObjectIdColumn,
  // PrimaryGeneratedColumn,
} from 'typeorm';

// Especificamos el nombre de la tabla si es diferente
// al nombre de la clase
@Entity('producto')
export class ProductEntity {
  // @PrimaryGeneratedColumn()
  @ObjectIdColumn()
  id: number;

  @Column({ type: 'varchar', length: 160 })
  nombre: string;

  @Column({ type: 'decimal', default: 0 })
  precio: number;

  @Column({ type: 'int', default: 0 })
  cantidad: number;

  @Column({ type: 'varchar', length: 255 })
  image: string;
}
