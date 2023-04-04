import { Controller, Get, Param } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars(): string[] {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id') id: number): string | null {
    return this.carsService.findOneById(id);
  }
}
