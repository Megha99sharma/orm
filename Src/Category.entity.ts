// shared-orm-lib/src/category.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    categoryName: string;

    @Column()
    description: string;

    @Column()
    isActive: boolean;

    @OneToMany(() => Product, (product) => product.category)
    products: Product[];

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;
}
