import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { PowerModule } from 'src/power/power.module';

@Module({
  //Aqui importamos o PowerModule para termos acesso aos métodos existente lá.
  imports: [PowerModule],
  providers: [CpuService]
})
export class CpuModule {}
