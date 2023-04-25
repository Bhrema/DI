import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  providers: [PowerService],
  //aqui a gente deixa explicito que desejamos exportar essa classe para outro modulos.
  exports: [PowerService]
})
export class PowerModule {}
