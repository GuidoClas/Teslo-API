import { initialData } from './data/seed-data';
import { ProductsService } from './../products/products.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SeedService {

  constructor( private productsService: ProductsService ) {}

  async runSeed(){
    await this.insertNewProducts();
    return 'Seed Executed';
  }

  private async insertNewProducts(){
    await this.productsService.deleteAllProducts();

    const products = initialData.products;

    const insertPromises = [];

    products.forEach( product => {
      insertPromises.push( this.productsService.create( product ) );
    });

    await Promise.all( insertPromises );
    
    return true;
  }
}
