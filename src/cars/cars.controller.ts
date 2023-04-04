import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { Car } from './cars.interface';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars(): Car[] {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    const car = this.carsService.findOneById(id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found`);

    return car;
  }

  @Post()
  postCar(@Body() body: any) {
    return this.carsService.createCar(body);
  }

  @Patch(':id')
  patchCar(@Param('id', ParseUUIDPipe) id: string, @Body() body: any) {
    return this.carsService.updateCar(id, body);
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.deleteCar(id);
  }
}
