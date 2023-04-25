import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
    //Aqui chamamos o powerService dentro do CPU
    constructor(private powerService: PowerService){
    }

    compute(a: number, b: number){
        console.log("drawing 10 watts of power from Power Service");
        this.powerService.supplyPower(10);
        return a+b;
    }
    
}
