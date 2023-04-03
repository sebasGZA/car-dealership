import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {
  private cars: string[] = ['Toyota', 'Mazda', 'Kia'];

  @Get()
  getAllCars(): string[] {
    return this.cars;
  }

  @Get(':id')
  getCarById(@Param('id') id: number): string | null {
    return this.cars[id] ? this.cars[id] : null;
  }
}
