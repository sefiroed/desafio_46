import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateDogDto } from '../dogs/dto/create-dog.dto';
import { DogService } from '../dogs/dogs.service';

@Controller('dogs')
export class DogsController {
    constructor(private readonly dogServices: DogService){}

    @Post()
    async create(@Body() createDogDto: CreateDogDto){
        this.dogServices.create(createDogDto)
        return{
            Operation: "Save",
            Item: createDogDto
        }
    }

    @Get()
    async findAll(){
        return this.dogServices.findAll();
    }
}

