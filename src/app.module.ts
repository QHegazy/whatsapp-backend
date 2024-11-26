import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AutqModule } from './autq/autq.module';

@Module({
  imports: [AuthModule, AutqModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
