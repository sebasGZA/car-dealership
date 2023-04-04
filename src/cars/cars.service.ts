import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { Car } from './interfaces/cars.interface';
import { CreateCarDto } from './dto/create-car.dto';

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

  findAll(): Car[] {
    return this.cars;
  }

  findOneById(id: string): Car {
    return this.cars.find((car) => car.id === id);
  }

  createCar(createCarDto: CreateCarDto): Car {
    const newCar: Car = { ...createCarDto, id: uuid() };
    this.cars.push(newCar);
    return newCar;
  }

  updateCar(id: string, car: any): Car {
    const carDb = this.findOneById(id);
    if (!carDb) throw new NotFoundException(`Car with id: ${id} not found`);
    car.id = uuid();
    return car;
  }

  deleteCar(id: string): Car {
    const car = this.findOneById(id);
    if (!car) throw new NotFoundException(`Car with id: ${id} not found`);
    this.cars = this.cars.filter((car) => car.id !== id);
    return car;
  }
}
