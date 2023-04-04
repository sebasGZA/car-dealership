import { Module } from '@nestjs/common';
import { BrandsModule } from './brands/brands.module';
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [BrandsModule, CarsModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
