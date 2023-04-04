import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { Car } from './interfaces/cars.interface';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

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
    const carDb = this.cars.find((car) => car.id === id);
    if (!carDb) throw new NotFoundException(`Car with id ${id} not found`);
    return carDb;
  }

  createCar(createCarDto: CreateCarDto): Car {
    const newCar: Car = { ...createCarDto, id: uuid() };
    this.cars.push(newCar);
    return newCar;
  }

  updateCar(id: string, updateCarDto: UpdateCarDto): Car {
    let carDb: Car = this.findOneById(id);

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDb = {
          ...carDb,
          ...updateCarDto,
          id,
        };
        return carDb;
      }
      return car;
    });

    return carDb;
  }

  deleteCar(id: string): Car {
    const carDb = this.findOneById(id);
    this.cars = this.cars.filter((car) => car.id !== id);
    return carDb;
  }
}
