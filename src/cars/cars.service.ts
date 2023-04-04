import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { Car } from './cars.interface';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: uuid(),
      brand: 'Jeep',
      model: 'Cherokee',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    return this.cars.find((car) => car.id === id);
  }

  createCar(car: any) {
    car.id = this.cars.length + 1;
    this.cars.push(car);
    return car;
  }

  updateCar(id: string, car: any) {
    const carDb = this.findOneById(id);
    if (!carDb) throw new NotFoundException(`Car with id: ${id} not found`);
    car.id = uuid();
    return car;
  }

  deleteCar(id: string) {
    const car = this.findOneById(id);
    if (!car) throw new NotFoundException(`Car with id: ${id} not found`);
    this.cars = this.cars.filter((car) => car.id !== id);
    return car;
  }
}
