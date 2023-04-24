import { Module } from '@nestjs/common';
import { KozaksService } from './services/kozaks.service';
import { KozaksController } from './controllers/kozaks.controller';

@Module({
  controllers: [KozaksController],
  providers: [KozaksService],
})
export class KozaksModule {}
