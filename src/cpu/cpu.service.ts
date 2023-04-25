import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
    //Aqui chamamos o powerService dentro do CPU
    constructor(private powerService: PowerService){
    }
    
}
