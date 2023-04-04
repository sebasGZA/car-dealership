import { Module } from '@nestjs/common';
import { BrandsModule } from './brands/brands.module';
import { CarsModule } from './cars/cars.module';
import { SeedsModule } from './seeds/seeds.module';

@Module({
  imports: [BrandsModule, CarsModule, SeedsModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
