import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  handle: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ unique: true })
  sku: string;

  @Column('decimal')
  grams: number;

  @Column()
  stock: number;

  @Column('decimal')
  price: number;

  @Column('decimal')
  comparePrice: number;

  @Column({ unique: true })
  barcode: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

}
