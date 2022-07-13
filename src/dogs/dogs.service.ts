import { Injectable } from '@nestjs/common';
import { CreateDogDto } from '../dogs/dto/create-dog.dto';

@Injectable()
export class DogService {
    private readonly dogs: CreateDogDto[] = [];
    create(dog: CreateDogDto){
        this.dogs.push(dog)
    }
    findAll(){
        return this.dogs
    }
}
