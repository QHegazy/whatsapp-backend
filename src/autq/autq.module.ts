import { Module } from '@nestjs/common';
import { AutqService } from './autq.service';
import { AutqResolver } from './autq.resolver';

@Module({
  providers: [AutqResolver, AutqService],
})
export class AutqModule {}
