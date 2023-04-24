import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KozaksModule } from './kozaks/kozaks.module';

@Module({
  imports: [KozaksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
