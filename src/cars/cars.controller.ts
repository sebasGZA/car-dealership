import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars(): string[] {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id: number) {
    const car = this.carsService.findOneById(id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found`);

    return car;
  }

  @Post()
  postCar(@Body() body: any) {
    return this.carsService.createCar(body);
  }

  @Patch(':id')
  patchCar(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return this.carsService.updateCar(id, body);
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return this.carsService.deleteCar(id);
  }
}
