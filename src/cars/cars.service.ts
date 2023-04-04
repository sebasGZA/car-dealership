import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars: any[] = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: 2,
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: 3,
      brand: 'Jeep',
      model: 'Cherokee',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: number) {
    return this.cars.find((car) => car.id === id);
  }

  createCar(car: any) {
    car.id = this.cars.length + 1;
    this.cars.push(car);
    return car;
  }

  updateCar(id: number, car: any) {
    const carDb = this.findOneById(id);
    if (!carDb) throw new NotFoundException(`Car with id: ${id} not found`);
    car.id = id;
    this.cars[id - 1] = car;
    return car;
  }

  deleteCar(id: number) {
    const car = this.findOneById(id);
    if (!car) throw new NotFoundException(`Car with id: ${id} not found`);
    this.cars = this.cars.filter((car) => car.id !== id);
    return car;
  }
}
